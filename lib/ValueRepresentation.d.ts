import { BufferStream } from "./BufferStream";
import { NormalizedSyntax, TagDict, TagValueEntry } from "./Message";
import Tag from "./Tag";
export declare function tagFromNumbers(group: number, element: number): Tag;
export declare type WriteType = "Uint8" | "Int8" | "Uint16" | "Int16" | "Uint32" | "Int32" | "Float" | "Double" | "String" | "Hex";
export default abstract class ValueRepresentation<Value extends TagValueEntry> {
    type: string;
    multi: boolean;
    maxLength: number | undefined;
    noMultiple: boolean;
    fillWith: string;
    padByte: string;
    fixed?: boolean;
    defaultValue?: Value;
    valueLength?: number;
    maxCharLength?: number;
    checkLength?: (value: string) => boolean;
    constructor(type: string);
    isBinary(): boolean;
    allowMultiple(): boolean;
    isExplicit(): boolean;
    read(stream: BufferStream, length: number, syntax: NormalizedSyntax): undefined | Value | Array<Value>;
    abstract readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): Value | Array<Value>;
    readNullPaddedString(stream: BufferStream, length: number): string;
    writeFilledString(stream: BufferStream, value: string, length: number): number;
    write(stream: BufferStream, type: "Uint8", ...valueArgs: Array<number>): Array<number>;
    write(stream: BufferStream, type: "Int8", ...valueArgs: Array<number>): Array<number>;
    write(stream: BufferStream, type: "Uint16", ...valueArgs: Array<number>): Array<number>;
    write(stream: BufferStream, type: "Int16", ...valueArgs: Array<number>): Array<number>;
    write(stream: BufferStream, type: "Uint32", ...valueArgs: Array<number>): Array<number>;
    write(stream: BufferStream, type: "Int32", ...valueArgs: Array<number>): Array<number>;
    write(stream: BufferStream, type: "Float", ...valueArgs: Array<number>): Array<number>;
    write(stream: BufferStream, type: "Double", ...valueArgs: Array<number>): Array<number>;
    write(stream: BufferStream, type: "String", ...valueArgs: Array<string>): Array<number>;
    write(stream: BufferStream, type: "Hex", ...valueArgs: Array<string>): Array<number>;
    abstract writeBytes(stream: BufferStream, value: Value | Array<Value>, syntax: NormalizedSyntax, isEncapsulated?: boolean): number;
    writeByteLengths(stream: BufferStream, value: Value | Array<Value>, lengths: Array<number>, isEncapsulated?: boolean): number;
    static createByTypeString(type: string): ValueRepresentation<TagValueEntry>;
}
export declare class StringRepresentation extends ValueRepresentation<string> {
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
    writeBytes(stream: BufferStream, value: string, syntax: NormalizedSyntax, isEncapsulated: boolean): number;
}
export declare class BinaryRepresentation extends ValueRepresentation<ArrayBuffer> {
    writeBytes(stream: BufferStream, value: Array<ArrayBuffer>, syntax: NormalizedSyntax, isEncapsulated: boolean): number;
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): Array<ArrayBuffer>;
}
export declare class ApplicationEntity extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class CodeString extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class AgeString extends StringRepresentation {
    constructor();
}
export declare class AttributeTag extends ValueRepresentation<number> {
    maxLength: number;
    valueLength: number;
    padByte: string;
    fixed: boolean;
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): number;
    writeBytes(stream: BufferStream, value: number): number;
}
export declare class DateValue extends StringRepresentation {
    constructor();
}
export declare class DecimalString extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class DateTime extends StringRepresentation {
    constructor();
}
export declare class FloatingPointSingle extends ValueRepresentation<number> {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): number;
    writeBytes(stream: BufferStream, value: number): number;
}
export declare class FloatingPointDouble extends ValueRepresentation<number> {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): number;
    writeBytes(stream: BufferStream, value: number): number;
}
export declare class IntegerString extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class LongString extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class LongText extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class PersonName extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class ShortString extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class SignedLong extends ValueRepresentation<number> {
    maxLength: number;
    padByte: string;
    fixed: boolean;
    defaultValue: number;
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): number;
    writeBytes(stream: BufferStream, value: number): number;
}
export declare class SequenceOfItems extends ValueRepresentation<TagDict> {
    maxLength: undefined | number;
    padByte: string;
    noMultiple: boolean;
    defaultValue: undefined;
    constructor();
    readBytes(stream: BufferStream, sqlength: number, syntax: NormalizedSyntax): Array<TagDict>;
    writeBytes(stream: BufferStream, value: Array<TagDict>, syntax: NormalizedSyntax): number;
}
export declare class SignedShort extends ValueRepresentation<number> {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): number;
    writeBytes(stream: BufferStream, value: number): number;
}
export declare class ShortText extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class TimeValue extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class UnlimitedCharacters extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class UnlimitedText extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class UnsignedShort extends ValueRepresentation<number> {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): number;
    writeBytes(stream: BufferStream, value: number): number;
}
export declare class UnsignedLong extends ValueRepresentation<number> {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): number;
    writeBytes(stream: BufferStream, value: number): number;
}
export declare class UniqueIdentifier extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class UniversalResource extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class UnknownValue extends StringRepresentation {
    constructor();
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
}
export declare class OtherWordString extends BinaryRepresentation {
    constructor();
}
export declare class OtherByteString extends BinaryRepresentation {
    constructor();
}
