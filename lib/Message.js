import { WriteBufferStream, ReadBufferStream } from './BufferStream';
import ValueRepresentation, { tagFromNumbers } from "./ValueRepresentation";
import Tag from "./Tag";
import DicomMetaDictionary from "./MetaDictionary";
var IMPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2";
var EXPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2.1";
var EXPLICIT_BIG_ENDIAN = "1.2.840.10008.1.2.2";
var singleVRs = ["SQ", "OF", "OW", "OB", "UN"];
var encapsulatedSyntaxes = [
    "1.2.840.10008.1.2.4.50", "1.2.840.10008.1.2.4.51", "1.2.840.10008.1.2.4.57", "1.2.840.10008.1.2.4.70",
    "1.2.840.10008.1.2.4.80", "1.2.840.10008.1.2.4.81", "1.2.840.10008.1.2.4.90", "1.2.840.10008.1.2.4.91",
    "1.2.840.10008.1.2.4.92", "1.2.840.10008.1.2.4.93", "1.2.840.10008.1.2.4.94", "1.2.840.10008.1.2.4.95",
    "1.2.840.10008.1.2.5", "1.2.840.10008.1.2.6.1", "1.2.840.10008.1.2.4.100", "1.2.840.10008.1.2.4.102",
    "1.2.840.10008.1.2.4.103"
];
var DicomDict = /** @class */ (function () {
    function DicomDict(meta) {
        this.meta = meta;
        this.dict = {};
    }
    DicomDict.prototype.upsertTag = function (tag, vr, values) {
        if (this.dict[tag]) {
            this.dict[tag].Value = values;
        }
        else {
            this.dict[tag] = { vr: vr, Value: values };
        }
    };
    DicomDict.prototype.write = function (dict) {
        if (dict === void 0) { dict = this.dict; }
        var metaSyntax = EXPLICIT_LITTLE_ENDIAN;
        var fileStream = new WriteBufferStream(4096, true);
        fileStream.writeHex("00".repeat(128));
        fileStream.writeString("DICM");
        var metaStream = new WriteBufferStream(1024);
        if (!this.meta['00020010']) {
            this.meta['00020010'] = { vr: 'UI', Value: [EXPLICIT_LITTLE_ENDIAN] };
        }
        DicomMessage.write(this.meta, metaStream, metaSyntax);
        DicomMessage.writeTagObject(fileStream, "00020000", "UL", metaStream.size, metaSyntax);
        fileStream.concat(metaStream);
        var useSyntax = this.meta['00020010'].Value[0];
        DicomMessage.write(dict, fileStream, useSyntax);
        return fileStream.getBuffer();
    };
    return DicomDict;
}());
export { DicomDict };
var DicomMessage = /** @class */ (function () {
    function DicomMessage() {
    }
    DicomMessage.read = function (bufferStream, syntax, length) {
        if (length === void 0) { length = 0; }
        var dict = {};
        while (!bufferStream.end()) {
            var readInfo = DicomMessage.readTag(bufferStream, syntax);
            dict[readInfo.tag.toCleanString()] = {
                foo: readInfo.vr,
                vr: readInfo.vr.type,
                Value: readInfo.values
            };
        }
        return dict;
    };
    DicomMessage._normalizeSyntax = function (syntax) {
        if (syntax == IMPLICIT_LITTLE_ENDIAN || syntax == EXPLICIT_LITTLE_ENDIAN || syntax == EXPLICIT_BIG_ENDIAN) {
            return syntax;
        }
        else {
            return EXPLICIT_LITTLE_ENDIAN;
        }
    };
    DicomMessage.isEncapsulated = function (syntax) {
        return encapsulatedSyntaxes.indexOf(syntax) != -1;
    };
    DicomMessage.readFile = function (buffer) {
        var stream = new ReadBufferStream(buffer), useSyntax = EXPLICIT_LITTLE_ENDIAN;
        stream.reset();
        stream.increment(128);
        if (stream.readString(4) != 'DICM') {
            throw new Error('Invalid: not a dicom file');
        }
        var el = DicomMessage.readTag(stream, useSyntax), metaLength = el.values[0];
        //read header buffer
        var metaStream = stream.more(metaLength);
        var metaHeader = DicomMessage.read(metaStream, useSyntax);
        //get the syntax
        var mainSyntax = metaHeader["00020010"].Value[0];
        mainSyntax = DicomMessage._normalizeSyntax(mainSyntax);
        var objects = DicomMessage.read(stream, mainSyntax);
        var dicomDict = new DicomDict(metaHeader);
        dicomDict.dict = objects;
        return dicomDict;
    };
    DicomMessage.writeTagObject = function (stream, tagString, vr, values, syntax) {
        var tag = Tag.fromString(tagString);
        tag.write(stream, vr, values, syntax);
    };
    DicomMessage.write = function (jsonObjects, useStream, syntax) {
        var written = 0;
        var sortedTags = Object.keys(jsonObjects).sort();
        sortedTags.forEach(function (tagString) {
            var tag = Tag.fromString(tagString), tagObject = jsonObjects[tagString], vrType = tagObject.vr, values = tagObject.Value;
            written += tag.write(useStream, vrType, values, syntax);
        });
        return written;
    };
    DicomMessage.readTag = function (stream, syntax) {
        var implicit = syntax == IMPLICIT_LITTLE_ENDIAN ? true : false, isLittleEndian = (syntax == IMPLICIT_LITTLE_ENDIAN || syntax == EXPLICIT_LITTLE_ENDIAN) ? true : false;
        var oldEndian = stream.isLittleEndian;
        stream.setEndian(isLittleEndian);
        var group = stream.readUint16(), element = stream.readUint16(), tag = tagFromNumbers(group, element);
        var length = 0;
        var vr;
        var vrType = '';
        if (implicit) {
            length = stream.readUint32();
            try {
                var edata = DicomMessage.lookupTag(tag);
                vrType = edata.vr;
                vr = ValueRepresentation.createByTypeString(vrType);
            }
            catch (e) {
                //unknown tag
                if (length == 0xffffffff) {
                    vrType = 'SQ';
                }
                else if (tag.isPixelDataTag()) {
                    vrType = 'OW';
                }
                else if (vrType == 'xs') {
                    vrType = 'US';
                }
                else {
                    vrType = 'UN';
                }
                vr = ValueRepresentation.createByTypeString(vrType);
            }
        }
        else {
            vrType = stream.readString(2);
            vr = ValueRepresentation.createByTypeString(vrType);
            if (vr.isExplicit()) {
                stream.increment(2);
                length = stream.readUint32();
            }
            else {
                length = stream.readUint16();
            }
        }
        if (!(vr instanceof ValueRepresentation)) {
            throw new TypeError("Could not find a value representation");
        }
        var values = [];
        if (vr.isBinary() && vr.maxLength && length > vr.maxLength && !vr.noMultiple) {
            var times = length / vr.maxLength, i = 0;
            while (i++ < times) {
                values.push(vr.read(stream, vr.maxLength, syntax));
            }
        }
        else {
            var val = vr.read(stream, length, syntax);
            if (!vr.isBinary() && singleVRs.indexOf(vr.type) == -1) {
                values = val.split(String.fromCharCode(0x5c));
            }
            else if (vr.type == 'SQ') {
                values = val;
            }
            else if (vr.type == 'OW' || vr.type == 'OB') {
                values = val;
            }
            else {
                values.push(val);
            }
        }
        stream.setEndian(oldEndian);
        return { tag: tag, vr: vr, values: values };
    };
    DicomMessage.lookupTag = function (tag) {
        var tagInfo = DicomMetaDictionary.dictionary[tag.toString()];
        if (!tagInfo) {
            throw new Error('Failed to lookup tag ' + tag.toString());
        }
        return tagInfo;
    };
    return DicomMessage;
}());
export default DicomMessage;
//# sourceMappingURL=Message.js.map