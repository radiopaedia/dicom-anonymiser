import { BufferStream } from "./BufferStream";
import { NormalizedSyntax, TagDict, TagValueEntry } from "./Message";
import Tag from "./Tag";
export declare function tagFromNumbers(group: number, element: number): Tag;
export type EncapsulationErrorCode = "ITEM_TAG_MISSING" | "OFFSET_TABLE_LENGTH" | "ITEM_PAST_END" | "FRAGMENT_LENGTH_UNDEFINED" | "FRAGMENT_LENGTH_ODD" | "FRAGMENT_LENGTH_ZERO" | "FRAGMENT_TOO_LONG" | "OFFSET_TOO_LARGE" | "DELIMITER_MISSING" | "DELIMITER_LENGTH" | "OFFSET_TABLE_MISMATCH";
/**
 * Encapsulated Pixel Data (PS3.5 A.4) that cannot be read or written
 * correctly. Thrown instead of guessing, because a wrong guess leaves a file
 * whose frames after the first cannot be located by a viewer.
 */
export declare class EncapsulationError extends Error {
    readonly code: EncapsulationErrorCode;
    constructor(code: EncapsulationErrorCode, message: string);
}
export type WriteType = "Uint8" | "Int8" | "Uint16" | "Int16" | "Uint32" | "Int32" | "Float" | "Double" | "String" | "Hex";
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
    abstract writeBytes(stream: BufferStream, value: Value | Array<Value>, syntax: NormalizedSyntax, isEncapsulated?: boolean, basicOffsetTable?: Array<number>): number;
    writeByteLengths(stream: BufferStream, value: Value | Array<Value>, lengths: Array<number>, isEncapsulated?: boolean): number;
    static createByTypeString(type: string): ValueRepresentation<TagValueEntry>;
}
export declare class StringRepresentation extends ValueRepresentation<string> {
    readBytes(stream: BufferStream, length: number, _syntax: NormalizedSyntax): string;
    writeBytes(stream: BufferStream, value: string, syntax: NormalizedSyntax, isEncapsulated: boolean): number;
}
export declare class BinaryRepresentation extends ValueRepresentation<ArrayBuffer> {
    /**
     * Basic Offset Table read from encapsulated pixel data (PS3.5 A.4): one
     * byte offset per frame, or [] when the file carried an empty table.
     * Set by readBytes; DicomMessage.read copies it onto the TagValue.
     */
    basicOffsetTable: Array<number> | undefined;
    /**
     * The Basic Offset Table to write for these fragment lengths (PS3.5 A.4).
     * Offsets count from the first fragment item, each item taking 8 + length
     * bytes, so a valid table starts at 0 ("the first entry will always be
     * 00000000H") and names only fragment item boundaries. That it strictly
     * increases is inferred from each offset naming the start of a successive
     * frame's first fragment; A.4 has no sentence saying so. A table that does not match would leave frames
     * 2..N unlocatable in a viewer, so: an empty table stays empty; a valid one
     * is kept; a mismatched one is rebuilt when it has one entry per fragment
     * (one fragment per frame, the only layout it can describe); otherwise the
     * write is refused.
     */
    static offsetTableFor(table: Array<number>, lengths: Array<number>): Array<number>;
    writeBytes(stream: BufferStream, value: Array<ArrayBuffer>, syntax: NormalizedSyntax, isEncapsulated: boolean, basicOffsetTable?: Array<number>): number;
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
/** OV (PS3.5 6.2): 64-bit words, e.g. the Extended Offset Table (7FE0,0001). */
export declare class OtherVeryLongString extends BinaryRepresentation {
    constructor();
}
export declare class OtherByteString extends BinaryRepresentation {
    constructor();
}
