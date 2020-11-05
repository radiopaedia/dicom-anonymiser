import { TagValueEntry } from "./Message";
import { BufferStream, WriteBufferStream } from "./BufferStream";
export default class Tag {
    value: number;
    constructor(value: number);
    toString(): string;
    toCleanString(): string;
    is(t: number): boolean;
    group(): number;
    element(): number;
    isPixelDataTag(): boolean;
    static fromString(str: string): Tag;
    static fromPString(str: string): Tag;
    static fromNumbers(group: number, element: number): Tag;
    static readTag(stream: BufferStream): Tag;
    write(stream: WriteBufferStream, vrType: string, values: TagValueEntry | Array<TagValueEntry>, syntax: string): number;
}
