import { BufferStream } from "./BufferStream";
import ValueRepresentation from "./ValueRepresentation";
import Tag from "./Tag";
export declare const IMPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2";
export declare const EXPLICIT_LITTLE_ENDIAN = "1.2.840.10008.1.2.1";
export declare const EXPLICIT_BIG_ENDIAN = "1.2.840.10008.1.2.2";
export type NormalizedSyntax = typeof IMPLICIT_LITTLE_ENDIAN | typeof EXPLICIT_LITTLE_ENDIAN | typeof EXPLICIT_BIG_ENDIAN;
export declare class DicomDict {
    meta: TagDict;
    dict: TagDict;
    constructor(meta: TagDict);
    upsertTag(tag: string, vr: string, values: Array<string | ArrayBuffer | number>): void;
    write(dict?: TagDict, size?: number): ArrayBuffer;
}
export type TagDict = Record<string, TagValue>;
export type TagValueEntry = string | ArrayBuffer | number | TagDict;
export type TagValue = {
    vr: string;
    Value: Array<TagValueEntry>;
};
export default class DicomMessage {
    static read(bufferStream: BufferStream, syntax: NormalizedSyntax, length?: number): TagDict;
    static _normalizeSyntax(syntax: unknown): NormalizedSyntax;
    static isEncapsulated(syntax: string): boolean;
    static readFile(buffer: ArrayBuffer): DicomDict;
    static writeTagObject(stream: BufferStream, tagString: string, vr: string, values: number, syntax: NormalizedSyntax): number;
    static write(jsonObjects: TagDict, useStream: BufferStream, syntax: string): number;
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
    static readTag(stream: BufferStream, syntax: NormalizedSyntax): {
        tag: Tag;
        vr: ValueRepresentation<TagValueEntry>;
        values: any;
    };
    static lookupTag(tag: Tag): {
        name: string;
        vr: string;
    };
}
