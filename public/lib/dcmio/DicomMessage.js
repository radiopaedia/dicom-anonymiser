
var dcmio = dcmio || {};

dcmio.IMPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2";
dcmio.EXPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2.1";
dcmio.EXPLICIT_BIG_ENDIAN = "1.2.840.10008.1.2.2";

dcmio.explicitVRList = ["OB", "OW", "OF", "SQ", "UC", "UR", "UT", "UN"],
dcmio.binaryVRs = ["FL", "FD", "SL", "SS", "UL", "US", "AT"],
dcmio.singleVRs = ["SQ", "OF", "OW", "OB", "UN"],
dcmio.encapsulatedSyntaxes = [
      "1.2.840.10008.1.2.4.50", "1.2.840.10008.1.2.4.51", "1.2.840.10008.1.2.4.57", "1.2.840.10008.1.2.4.70",
      "1.2.840.10008.1.2.4.80", "1.2.840.10008.1.2.4.81", "1.2.840.10008.1.2.4.90", "1.2.840.10008.1.2.4.91",
      "1.2.840.10008.1.2.4.92", "1.2.840.10008.1.2.4.93", "1.2.840.10008.1.2.4.94", "1.2.840.10008.1.2.4.95",
      "1.2.840.10008.1.2.5", "1.2.840.10008.1.2.6.1", "1.2.840.10008.1.2.4.100", "1.2.840.10008.1.2.4.102",
      "1.2.840.10008.1.2.4.103"
    ];

dcmio.DicomDict = class{
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

    write() {
      var metaSyntax = dcmio.EXPLICIT_LITTLE_ENDIAN;
      var fileStream = new dcmio.WriteBufferStream(4096, true);
      fileStream.writeHex("00".repeat(128));
      fileStream.writeString("DICM");

      var metaStream = new dcmio.WriteBufferStream(1024);
      if (!this.meta['00020010']) {
          this.meta['00020010'] = {vr: 'UI', Value: [dcmio.EXPLICIT_LITTLE_ENDIAN]}
      }
      dcmio.DicomMessage.write(this.meta, metaStream, metaSyntax);
      dcmio.DicomMessage.writeTagObject(fileStream, "00020000", "UL", metaStream.size, metaSyntax);
      fileStream.concat(metaStream);

      var useSyntax = this.meta['00020010'].Value[0];
      dcmio.DicomMessage.write(this.dict, fileStream, useSyntax);
      return fileStream.getBuffer();
    }
}

dcmio.DicomMessage = class {
    static read(bufferStream, syntax, length) {
        var dict = {};
        while (!bufferStream.end()) {
          var readInfo = dcmio.DicomMessage.readTag(bufferStream, syntax);

          dict[readInfo.tag.toCleanString()] = {
            vr: readInfo.vr.type, Value: readInfo.values
          };
        }
        return dict;
    }

    static _normalizeSyntax(syntax) {
      if (syntax == dcmio.IMPLICIT_LITTLE_ENDIAN || syntax == dcmio.EXPLICIT_LITTLE_ENDIAN || syntax == dcmio.EXPLICIT_BIG_ENDIAN) {
        return syntax;
      } else {
        return dcmio.EXPLICIT_LITTLE_ENDIAN;
      }
    }

    static isEncapsulated(syntax) {
      return dcmio.encapsulatedSyntaxes.indexOf(syntax) != -1;
    }

    static readFile(buffer) {
      var stream = new dcmio.ReadBufferStream(buffer), useSyntax = dcmio.EXPLICIT_LITTLE_ENDIAN;
      stream.reset();
      stream.increment(128);
      if (stream.readString(4) != 'DICM') {
        throw new Error('Invalid a dicom file');
      }
      var el = dcmio.DicomMessage.readTag(stream, useSyntax),
          metaLength = el.values[0];

      //read header buffer
      var metaStream = stream.more(metaLength);

      var metaHeader = dcmio.DicomMessage.read(metaStream, useSyntax);
      //get the syntax
      var mainSyntax = metaHeader["00020010"].Value[0];
      mainSyntax = dcmio.DicomMessage._normalizeSyntax(mainSyntax);
      var objects = dcmio.DicomMessage.read(stream, mainSyntax);

      var dicomDict = new dcmio.DicomDict(metaHeader);
      dicomDict.dict = objects;

      return dicomDict;
    }

    static writeTagObject(stream, tagString, vr, values, syntax) {
      var tag = dcmio.Tag.fromString(tagString);

      tag.write(stream, vr, values, syntax);
    }

    static write(jsonObjects, useStream, syntax) {
      var written = 0;

      var sortedTags = Object.keys(jsonObjects).sort();
      sortedTags.forEach(function(tagString){
        console.log(tagString);
        var tag = dcmio.Tag.fromString(tagString), tagObject = jsonObjects[tagString],
            vrType = tagObject.vr, values = tagObject.Value;

        written += tag.write(useStream, vrType, values, syntax);
        console.log('..cool')
      });

      return written;
    }

    static readTag(stream, syntax) {
      var implicit = syntax == dcmio.IMPLICIT_LITTLE_ENDIAN ? true : false,
          isLittleEndian = (syntax == dcmio.IMPLICIT_LITTLE_ENDIAN || syntax == dcmio.EXPLICIT_LITTLE_ENDIAN) ? true : false;

      var oldEndian = stream.isLittleEndian;
      stream.setEndian(isLittleEndian);
      var group = stream.readUint16(),
          element = stream.readUint16(),
          tag = dcmio.tagFromNumbers(group, element);

      var length = null, vr = null, vrType;

      if (implicit) {
        length = stream.readUint32();
        try {
          var edata = dcmio.DicomMessage.lookupTag(tag);
          vrType = edata.vr;
          vr = dcmio.ValueRepresentation.createByTypeString(vrType);
        } catch(e) {
          //unknown tag
          if (length == 0xffffffff) {
            vrType = 'SQ';
          } else if (tag.isPixelDataTag()) {
            vrType = 'OW';
          } else if (vrType == 'xs') {
            vrType = 'US';
          } else {
            vrType = 'UN';
          }

          vr = dcmio.ValueRepresentation.createByTypeString(vrType);
        }
      } else {
        vrType = stream.readString(2);
        vr = dcmio.ValueRepresentation.createByTypeString(vrType);
        if (vr.isExplicit()) {
          stream.increment(2);
          length = stream.readUint32();
        } else {
          length = stream.readUint16();
        }
      }

      var values = [];
      if (vr.isBinary() && length > vr.maxLength && !vr.noMultiple) {
        var times = length / vr.maxLength, i = 0;
        while (i++ < times) {
          values.push(vr.read(stream, vr.maxLength, syntax));
        }
      } else {
        var val = vr.read(stream, length, syntax);
        if (!vr.isBinary() && dcmio.singleVRs.indexOf(vr.type) == -1) {
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
        var tagInfo = dcmio.DicomMetaDictionary.dictionary[tag.toString()];
        if (!tagInfo) {
          throw new Error('Failed to lookup tag ' + tag.toString());
        }
        return tagInfo;
    }
}
