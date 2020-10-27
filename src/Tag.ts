import ValueRepresentation from "./ValueRepresentation";
import DicomMessage, { TagValueEntry } from "./Message";
import { BufferStream, WriteBufferStream } from "./BufferStream";

const IMPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2";
const EXPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2.1";

function paddingLeft(paddingValue: string, string: string): string {
  return String(paddingValue + string).slice(-paddingValue.length);
}

export default class Tag {
  value: number;
  constructor(value: number) {
    this.value = value;
  }

  toString(): string {
    return (
      "(" +
      paddingLeft("0000", this.group().toString(16).toUpperCase()) +
      "," +
      paddingLeft("0000", this.element().toString(16).toUpperCase()) +
      ")"
    );
  }

  toCleanString(): string {
    return (
      paddingLeft("0000", this.group().toString(16).toUpperCase()) +
      paddingLeft("0000", this.element().toString(16).toUpperCase())
    );
  }

  is(t: number): boolean {
    return this.value == t;
  }

  group(): number {
    return this.value >>> 16;
  }

  element(): number {
    return this.value & 0xffff;
  }

  isPixelDataTag(): boolean {
    return this.is(0x7fe00010);
  }

  static fromString(str: string): Tag {
    var group = parseInt(str.substring(0, 4), 16),
      element = parseInt(str.substring(4), 16);
    return Tag.fromNumbers(group, element);
  }

  static fromPString(str: string): Tag {
    var group = parseInt(str.substring(1, 5), 16),
      element = parseInt(str.substring(6, 10), 16);
    return Tag.fromNumbers(group, element);
  }

  static fromNumbers(group: number, element: number): Tag {
    return new Tag(((group << 16) | element) >>> 0);
  }

  static readTag(stream: BufferStream): Tag {
    var group = stream.readUint16(),
      element = stream.readUint16();
    return Tag.fromNumbers(group, element);
  }

  write(
    stream: WriteBufferStream,
    vrType: string,
    values: TagValueEntry | Array<TagValueEntry>,
    syntax: string
  ): number {
    var vr = ValueRepresentation.createByTypeString(vrType),
      useSyntax = DicomMessage._normalizeSyntax(syntax);

    var implicit = useSyntax == IMPLICIT_LITTLE_ENDIAN ? true : false,
      isLittleEndian =
        useSyntax == IMPLICIT_LITTLE_ENDIAN ||
        useSyntax == EXPLICIT_LITTLE_ENDIAN
          ? true
          : false,
      isEncapsulated = DicomMessage.isEncapsulated(syntax);

    var oldEndian = stream.isLittleEndian;
    stream.setEndian(isLittleEndian);

    stream.writeUint16(this.group());
    stream.writeUint16(this.element());

    var tagStream = new WriteBufferStream(256),
      valueLength;
    tagStream.setEndian(isLittleEndian);

    if (vrType == "OW" || vrType == "OB") {
      valueLength = vr.writeBytes(tagStream, values, useSyntax, isEncapsulated);
    } else {
      valueLength = vr.writeBytes(tagStream, values, useSyntax);
    }

    if (vrType == "SQ") {
      valueLength = 0xffffffff;
    }
    var written = tagStream.size + 4;

    if (implicit) {
      stream.writeUint32(valueLength);
      written += 4;
    } else {
      if (vr.isExplicit()) {
        stream.writeString(vr.type);
        stream.writeHex("0000");
        stream.writeUint32(valueLength);
        written += 8;
      } else {
        stream.writeString(vr.type);
        stream.writeUint16(valueLength);
        written += 4;
      }
    }

    stream.concat(tagStream);

    stream.setEndian(oldEndian);

    return written;
  }
}
