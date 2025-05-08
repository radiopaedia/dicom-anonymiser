import {
  WriteBufferStream,
  ReadBufferStream,
  BufferStream,
} from "./BufferStream";
import ValueRepresentation, { tagFromNumbers } from "./ValueRepresentation";
import Tag from "./Tag";
import DicomMetaDictionary from "./MetaDictionary";

export const IMPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2";
export const EXPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2.1";
export const EXPLICIT_BIG_ENDIAN = "1.2.840.10008.1.2.2";

const singleVRs = ["SQ", "OF", "OW", "OB", "UN"];
const encapsulatedSyntaxes = [
  "1.2.840.10008.1.2.4.50",
  "1.2.840.10008.1.2.4.51",
  "1.2.840.10008.1.2.4.57",
  "1.2.840.10008.1.2.4.70",
  "1.2.840.10008.1.2.4.80",
  "1.2.840.10008.1.2.4.81",
  "1.2.840.10008.1.2.4.90",
  "1.2.840.10008.1.2.4.91",
  "1.2.840.10008.1.2.4.92",
  "1.2.840.10008.1.2.4.93",
  "1.2.840.10008.1.2.4.94",
  "1.2.840.10008.1.2.4.95",
  "1.2.840.10008.1.2.5",
  "1.2.840.10008.1.2.6.1",
  "1.2.840.10008.1.2.4.100",
  "1.2.840.10008.1.2.4.102",
  "1.2.840.10008.1.2.4.103",
];

export type NormalizedSyntax =
  | typeof IMPLICIT_LITTLE_ENDIAN
  | typeof EXPLICIT_LITTLE_ENDIAN
  | typeof EXPLICIT_BIG_ENDIAN;

export class DicomDict {
  meta: TagDict;
  dict: TagDict;
  constructor(meta: TagDict) {
    this.meta = meta;
    this.dict = {};
  }

  upsertTag(
    tag: string,
    vr: string,
    values: Array<string | ArrayBuffer | number>
  ): void {
    if (this.dict[tag]) {
      this.dict[tag].Value = values;
    } else {
      this.dict[tag] = { vr: vr, Value: values };
    }
  }

  write(dict: TagDict = this.dict, size: number = 4096): ArrayBuffer {
    var metaSyntax: NormalizedSyntax = EXPLICIT_LITTLE_ENDIAN;
    var fileStream = new WriteBufferStream(size, true);
    fileStream.writeHex("00".repeat(128));
    fileStream.writeString("DICM");

    var metaStream = new WriteBufferStream(1024);
    if (!this.meta["00020010"]) {
      this.meta["00020010"] = { vr: "UI", Value: [EXPLICIT_LITTLE_ENDIAN] };
    }
    DicomMessage.write(this.meta, metaStream, metaSyntax);
    DicomMessage.writeTagObject(
      fileStream,
      "00020000",
      "UL",
      metaStream.size,
      metaSyntax
    );
    fileStream.concat(metaStream);

    var useSyntax = this.meta["00020010"].Value[0];

    if (typeof useSyntax !== "string") {
      throw new Error(`Invalid syntax type ${typeof useSyntax}: ${useSyntax} for meta 00020010`)
    }
    DicomMessage.write(dict, fileStream, useSyntax);
    return fileStream.getBuffer();
  }
}

export type TagDict = Record<string, TagValue>;
export type TagValueEntry = string | ArrayBuffer | number | TagDict;

export type TagValue = {
  vr: string;
  Value: Array<TagValueEntry>;
};

export default class DicomMessage {
  static read(
    bufferStream: BufferStream,
    syntax: NormalizedSyntax,
    length: number = 0
  ): TagDict {
    var dict: TagDict = {};
    while (!bufferStream.end()) {
      var readInfo = DicomMessage.readTag(bufferStream, syntax);

      dict[readInfo.tag.toCleanString()] = {
        vr: readInfo.vr.type,
        Value: readInfo.values,
      };
    }
    return dict;
  }

  static _normalizeSyntax(syntax: unknown): NormalizedSyntax {
    if (syntax == IMPLICIT_LITTLE_ENDIAN) {
      return IMPLICIT_LITTLE_ENDIAN
    }
    if (syntax == EXPLICIT_LITTLE_ENDIAN) {
      return EXPLICIT_LITTLE_ENDIAN
    }
    if (syntax == EXPLICIT_BIG_ENDIAN) {
      return EXPLICIT_BIG_ENDIAN
    }
    return EXPLICIT_LITTLE_ENDIAN;
  }

  static isEncapsulated(syntax: string): boolean {
    return encapsulatedSyntaxes.indexOf(syntax) != -1;
  }

  static readFile(buffer: ArrayBuffer) {
    var stream = new ReadBufferStream(buffer),
      useSyntax: NormalizedSyntax = EXPLICIT_LITTLE_ENDIAN;
    stream.reset();
    // Skip the File Preamble (128 bytes)
    stream.increment(128);
    // Check the DICOM Prefix
    if (stream.readString(4) != "DICM") {
      throw new Error("Invalid: not a dicom file");
    }
    var el = DicomMessage.readTag(stream, useSyntax);

    var metaLength;

    // File Meta Information Group Length is correctly suplied
    if (el.tag.value == 0x00020000) {
      metaLength = el.values[0];
    // No Length but there are metadata tags
    } else if ((el.tag.value & 0xFFFF0000) === 0x00020000) {
      console.warn("Warning: missing File Meta Information Group Length! (0002,0000)");

      // Try to calculate the size of the metadata block by reading all (0002,xxxx) tags
      while (true) {
        // Metadata is at least this long
        metaLength = stream.offset-128-4;

        var isMetaTag = DicomMessage.readTag(stream, useSyntax);
        if ((isMetaTag.tag.value & 0xFFFF0000) !== 0x00020000) {
          // Rewind the stream to the start of the metadata
          stream.reset();
          stream.increment(128+4);
          break;
        }
      }
    // Malformed data, no metadata at all
    } else {
      throw new Error("Invalid: missing meta information");
    }


    //read header buffer
    var metaStream = stream.more(metaLength);

    var metaHeader = DicomMessage.read(metaStream, useSyntax);

    // We rely on the Transfer Syntax being supplied so make sure it is
    if ("00020010" in metaHeader === false) {
      throw new Error("Invalid: missing transfer syntax");
    }
    var mainSyntax: NormalizedSyntax = DicomMessage._normalizeSyntax(metaHeader["00020010"].Value[0]);

    var objects = DicomMessage.read(stream, mainSyntax);

    var dicomDict = new DicomDict(metaHeader);
    dicomDict.dict = objects;

    return dicomDict;
  }

  static writeTagObject(
    stream: BufferStream,
    tagString: string,
    vr: string,
    values: number,
    syntax: NormalizedSyntax
  ): number {
    var tag = Tag.fromString(tagString);

    return tag.write(stream, vr, values, syntax);
  }

  static write(
    jsonObjects: TagDict,
    useStream: BufferStream,
    syntax: string
  ): number {
    var written = 0;

    var sortedTags = Object.keys(jsonObjects).sort();
    sortedTags.forEach(function (tagString) {
      var tag = Tag.fromString(tagString),
        tagObject = jsonObjects[tagString],
        vrType = tagObject.vr,
        values = tagObject.Value;

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
  static readTag(
    stream: BufferStream,
    syntax: NormalizedSyntax
  ): { tag: Tag; vr: ValueRepresentation<TagValueEntry>; values: any } {
    var implicit = syntax == IMPLICIT_LITTLE_ENDIAN,
      isLittleEndian =
        syntax == IMPLICIT_LITTLE_ENDIAN || syntax == EXPLICIT_LITTLE_ENDIAN;
    // Set the appropriate endianess
    var oldEndian = stream.isLittleEndian;
    stream.setEndian(isLittleEndian);
    // Read the group and element fields (these will be first 32 bits for all types).
    var group = stream.readUint16(),
      element = stream.readUint16(),
      tag = tagFromNumbers(group, element);

    let length = 0;
    let vr: ValueRepresentation<TagValueEntry>;
    let vrType: string = "";

    if (implicit) {
      length = stream.readUint32();
      try {
        var edata = DicomMessage.lookupTag(tag);
        vrType = edata.vr;
        vr = ValueRepresentation.createByTypeString(vrType);
      } catch (e) {
        //unknown tag
        // console.log('Tag is unknown : ' + group.toString(16) + ',' + element.toString(16));

        if (length == 0xffffffff) {
          vrType = "SQ";
        } else if (tag.isPixelDataTag()) {
          vrType = "OW";
        } else if (vrType == "xs") {
          vrType = "US";
        } else {
          vrType = "UN";
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

    if (!(vr instanceof ValueRepresentation)) {
      throw new TypeError("Could not find a value representation");
    }

    var values: Array<TagValueEntry> = [];
    // If the vr is a binary sequence(?)
    if (
      vr.isBinary() &&
      vr.maxLength &&
      length > vr.maxLength &&
      !vr.noMultiple
    ) {
      var times = length / vr.maxLength,
        i = 0;
      //console.log('Reading: ' + vr.type + ' ' + times + ' times');
      while (i++ < times) {
        // Read the max length of the VR?
        const value = vr.read(stream, vr.maxLength, syntax)
        if (value) {
          // @ts-expect-error
          // vr.read returns Value | Array<Value>, but
          // for a binary VR it always returns Value
          values.push(value);
        }
      }
    } else {
      var val = vr.read(stream, length, syntax);
      if (val !== undefined) {
        if (!vr.isBinary() && singleVRs.indexOf(vr.type) == -1) {
          // @ts-expect-error the type of `val` could be inferred from knowing the kind of VR but it doesn't propagate
          values = val.split(String.fromCharCode(0x5c));
        } else if (vr.type == "SQ") {
          // @ts-expect-error the type of `val` could be inferred from knowing the kind of VR but it doesn't propagate
          values = val;
        } else if (vr.type == "OW" || vr.type == "OB") {
          // @ts-expect-error the type of `val` could be inferred from knowing the kind of VR but it doesn't propagate
          values = val;
        } else {
          // @ts-expect-error the type of `val` could be inferred from knowing the kind of VR but it doesn't propagate
          values.push(val);
        }
      }
    }
    stream.setEndian(oldEndian);

    return { tag: tag, vr: vr, values: values };
  }

  static lookupTag(tag: Tag) {
    var tagInfo = DicomMetaDictionary.dictionary[tag.toString()];
    if (!tagInfo) {
      throw new Error("Failed to lookup tag " + tag.toString());
    }
    return tagInfo;
  }
}
