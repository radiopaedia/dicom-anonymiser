import Tag from './Tag';
export declare function tagFromNumbers(group: any, element: any): Tag;
export default class ValueRepresentation {
    type: string;
    multi: boolean;
    maxLength: number | undefined;
    noMultiple: boolean;
    fillWith: string;
    padByte: string;
    fixed: boolean;
    16: any;
    defaultValue: string | number;
    valueLength: number;
    maxCharLength: number;
    checkLength?: (value: string) => boolean;
    constructor(type: any, value?: undefined);
    isBinary(): boolean;
    allowMultiple(): boolean;
    isExplicit(): boolean;
    read(stream: any, length: any, syntax: any): any;
    readBytes(stream: any, length: any, _syntax: any): any;
    readNullPaddedString(stream: any, length: any): any;
    writeFilledString(stream: any, value: any, length: any): any;
    write(stream: any, type: any, ...valueArgs: any[]): any[];
    writeBytes(stream: any, value: any, lengths: any, isEncapsulated?: boolean): number;
    static createByTypeString(type: string): ValueRepresentation;
}
export declare class StringRepresentation extends ValueRepresentation {
    readBytes(stream: any, length: any, _syntax: any): any;
    writeBytes(stream: any, value: any, syntax: any, isEncapsulated: any): number;
}
export declare class BinaryRepresentation extends ValueRepresentation {
    writeBytes(stream: any, value: any, syntax: any, isEncapsulated: any): number;
    readBytes(stream: any, length: any, _syntax: any): any[];
}
export declare class ApplicationEntity extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class CodeString extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class AgeString extends StringRepresentation {
    constructor();
}
export declare class AttributeTag extends ValueRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): number;
    writeBytes(stream: any, value: any): number;
}
export declare class DateValue extends StringRepresentation {
    constructor(value: any);
}
export declare class DecimalString extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class DateTime extends StringRepresentation {
    constructor();
}
export declare class FloatingPointSingle extends ValueRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
    writeBytes(stream: any, value: any): number;
}
export declare class FloatingPointDouble extends ValueRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
    writeBytes(stream: any, value: any): number;
}
export declare class IntegerString extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class LongString extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class LongText extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class PersonName extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class ShortString extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class SignedLong extends ValueRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
    writeBytes(stream: any, value: any): number;
}
export declare class SequenceOfItems extends ValueRepresentation {
    constructor();
    readBytes(stream: any, sqlength: any, syntax: any): any[];
    writeBytes(stream: any, value: any, syntax: any): number;
}
export declare class SignedShort extends ValueRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
    writeBytes(stream: any, value: any): number;
}
export declare class ShortText extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class TimeValue extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class UnlimitedCharacters extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class UnlimitedText extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class UnsignedShort extends ValueRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
    writeBytes(stream: any, value: any): number;
}
export declare class UnsignedLong extends ValueRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
    writeBytes(stream: any, value: any): number;
}
export declare class UniqueIdentifier extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class UniversalResource extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class UnknownValue extends StringRepresentation {
    constructor();
    readBytes(stream: any, length: any, _syntax: any): any;
}
export declare class OtherWordString extends BinaryRepresentation {
    constructor();
}
export declare class OtherByteString extends BinaryRepresentation {
    constructor();
}
