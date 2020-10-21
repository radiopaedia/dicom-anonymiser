import {
  WriteBufferStream,
  ReadBufferStream
} from './BufferStream';
import ValueRepresentation, {tagFromNumbers} from "./ValueRepresentation";
import Tag from "./Tag";
import DicomMetaDictionary from "./MetaDictionary";

const IMPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2";
const EXPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2.1";
const EXPLICIT_BIG_ENDIAN = "1.2.840.10008.1.2.2";

const singleVRs = ["SQ", "OF", "OW", "OB", "UN"];
const encapsulatedSyntaxes = [
      "1.2.840.10008.1.2.4.50", "1.2.840.10008.1.2.4.51", "1.2.840.10008.1.2.4.57", "1.2.840.10008.1.2.4.70",
      "1.2.840.10008.1.2.4.80", "1.2.840.10008.1.2.4.81", "1.2.840.10008.1.2.4.90", "1.2.840.10008.1.2.4.91",
      "1.2.840.10008.1.2.4.92", "1.2.840.10008.1.2.4.93", "1.2.840.10008.1.2.4.94", "1.2.840.10008.1.2.4.95",
      "1.2.840.10008.1.2.5", "1.2.840.10008.1.2.6.1", "1.2.840.10008.1.2.4.100", "1.2.840.10008.1.2.4.102",
      "1.2.840.10008.1.2.4.103"
    ];

export class DicomDict {
  meta: any;
  dict: Record<string, TagValue>;
    constructor(meta) {
      this.meta = meta;
      this.dict = {};
    }

    upsertTag(tag, vr, values) {
      if (this.dict[tag]) {
        this.dict[tag].Value = values;
      } else {
        this.dict[tag] = {vr: vr, Value: values};
      }
    }

    write(dict=this.dict) {
      var metaSyntax = EXPLICIT_LITTLE_ENDIAN;
      var fileStream = new WriteBufferStream(4096, true);
      fileStream.writeHex("00".repeat(128));
      fileStream.writeString("DICM");

      var metaStream = new WriteBufferStream(1024);
      if (!this.meta['00020010']) {
          this.meta['00020010'] = {vr: 'UI', Value: [EXPLICIT_LITTLE_ENDIAN]}
      }
      DicomMessage.write(this.meta, metaStream, metaSyntax);
      DicomMessage.writeTagObject(fileStream, "00020000", "UL", metaStream.size, metaSyntax);
      fileStream.concat(metaStream);

      var useSyntax = this.meta['00020010'].Value[0];
      DicomMessage.write(dict, fileStream, useSyntax);
      return fileStream.getBuffer();
    }
}

export type TagValue = {
  vr: string;
  Value: Array<string | ArrayBuffer | number>;
}

export default class DicomMessage {
    static read(bufferStream, syntax, length=0) {
        var dict = {};
        while (!bufferStream.end()) {
          var readInfo = DicomMessage.readTag(bufferStream, syntax);

          dict[readInfo.tag.toCleanString()] = {
            vr: readInfo.vr.type,
            Value: readInfo.values
          };
        }
        return dict;
    }

    static _normalizeSyntax(syntax) {
      if (syntax == IMPLICIT_LITTLE_ENDIAN || syntax == EXPLICIT_LITTLE_ENDIAN || syntax == EXPLICIT_BIG_ENDIAN) {
        return syntax;
      } else {
        return EXPLICIT_LITTLE_ENDIAN;
      }
    }

    static isEncapsulated(syntax) {
      return encapsulatedSyntaxes.indexOf(syntax) != -1;
    }

    static readFile(buffer) {
      var stream = new ReadBufferStream(buffer), useSyntax = EXPLICIT_LITTLE_ENDIAN;
      stream.reset();
      stream.increment(128);
      if (stream.readString(4) != 'DICM') {
        throw new Error('Invalid: not a dicom file');
      }
      var el = DicomMessage.readTag(stream, useSyntax),
          metaLength = el.values[0];

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
    }

    static writeTagObject(stream, tagString, vr, values, syntax) {
      var tag = Tag.fromString(tagString);

      tag.write(stream, vr, values, syntax);
    }

    static write(jsonObjects, useStream, syntax) {
      var written = 0;

      var sortedTags = Object.keys(jsonObjects).sort();
      sortedTags.forEach(function(tagString){
        var tag = Tag.fromString(tagString), tagObject = jsonObjects[tagString],
            vrType = tagObject.vr, values = tagObject.Value;

        written += tag.write(useStream, vrType, values, syntax);
      });

      return written;
    }

    /**
     * Read a tag from a byte stream.
     * Tags are organised as follows:
     * For explicit VR storage types
     * | group | element | vr | reserved | value length | value |
     * |   2   |    2    |  2 |     2    |      4       |  ...  |
     * And for implicit VR tags:
     * | group | element | value length | value |
     * |   2   |    2    |      4       |  ...  |
     * @param stream
     * @param syntax
     */
    static readTag(stream, syntax): {tag: Tag, vr: ValueRepresentation, values: any} {
      var implicit = (syntax == IMPLICIT_LITTLE_ENDIAN),
          isLittleEndian = (syntax == IMPLICIT_LITTLE_ENDIAN || syntax == EXPLICIT_LITTLE_ENDIAN);
      // Set the appropriate endianess
      var oldEndian = stream.isLittleEndian;
      stream.setEndian(isLittleEndian);
      // Read the group and element fields (these will be first 32 bits for all types).
      var group = stream.readUint16(),
          element = stream.readUint16(),
          tag = tagFromNumbers(group, element);

      let length = 0;
      let vr: ValueRepresentation;
      let vrType: string = '';

      if (implicit) {
        length = stream.readUint32();
        try {
          var edata = DicomMessage.lookupTag(tag);
          vrType = edata.vr;
          vr = ValueRepresentation.createByTypeString(vrType);
        } catch(e) {
          //unknown tag
          // console.log('Tag is unknown : ' + group.toString(16) + ',' + element.toString(16));

          if (length == 0xffffffff) {
            vrType = 'SQ';
          } else if (tag.isPixelDataTag()) {
            vrType = 'OW';
          } else if (vrType == 'xs') {
            vrType = 'US';
          } else {
            vrType = 'UN';
          }
          // console.log('Guessing VR is ' + vrType);
          vr = ValueRepresentation.createByTypeString(vrType);
        }
      } else {
        // For explicit types the next 2 bytes is the VR string
        vrType = stream.readString(2);
        vr = ValueRepresentation.createByTypeString(vrType);
        if (vr.isExplicit()) {
          // For types OB, OW, SQ, UN we have a 2 byte reserved field
          stream.increment(2);
          // Then a 32bit length
          length = stream.readUint32();
          //console.log(vrType + ": len32=" + length.toString(16));
        } else {
          // For other types we just have a 16bit length
          length = stream.readUint16();
          //console.log(vrType + ": len16=" + length.toString(16));
        }
      }

      if (!(vr instanceof ValueRepresentation)) {throw new TypeError("Could not find a value representation")}

      var values: Array<ValueRepresentation> = [];
      // If the vr is a binary sequence(?)
      if (vr.isBinary() && vr.maxLength && length > vr.maxLength && !vr.noMultiple) {
        var times = length / vr.maxLength, i = 0;
        //console.log('Reading: ' + vr.type + ' ' + times + ' times');
        while (i++ < times) {
          // Read the max length of the VR?
          values.push(vr.read(stream, vr.maxLength, syntax));
        }
      } else {
        var val = vr.read(stream, length, syntax);
        if (!vr.isBinary() && singleVRs.indexOf(vr.type) == -1) {
          values = val.split(String.fromCharCode(0x5c));
        } else if (vr.type == 'SQ') {
          values = val;
        } else if (vr.type == 'OW' || vr.type == 'OB') {
          values = val;

        } else {
          values.push(val);
        }
      }
      stream.setEndian(oldEndian);

      return {tag: tag, vr: vr, values: values};
    }

    static lookupTag(tag) {
        var tagInfo = DicomMetaDictionary.dictionary[tag.toString()];
        if (!tagInfo) {
          throw new Error('Failed to lookup tag ' + tag.toString());
        }
        return tagInfo;
    }
}
