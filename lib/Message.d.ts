import ValueRepresentation from "./ValueRepresentation";
import Tag from "./Tag";
export declare class DicomDict {
    meta: any;
    dict: Record<string, TagValue>;
    constructor(meta: any);
    upsertTag(tag: any, vr: any, values: any): void;
    write(dict?: Record<string, TagValue>): ArrayBuffer;
}
export declare type TagValue = {
    vr: string;
    Value: Array<ValueRepresentation>;
};
export default class DicomMessage {
    static read(bufferStream: any, syntax: any, length?: number): {};
    static _normalizeSyntax(syntax: any): any;
    static isEncapsulated(syntax: any): boolean;
    static readFile(buffer: any): DicomDict;
    static writeTagObject(stream: any, tagString: any, vr: any, values: any, syntax: any): void;
    static write(jsonObjects: any, useStream: any, syntax: any): number;
    static readTag(stream: any, syntax: any): {
        tag: Tag;
        vr: ValueRepresentation;
        values: any;
    };
    static lookupTag(tag: any): any;
}
