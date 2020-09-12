import { WriteBufferStream } from './BufferStream';
export default class Tag {
    value: number;
    constructor(value: any);
    toString(): string;
    toCleanString(): string;
    is(t: any): boolean;
    group(): number;
    element(): number;
    isPixelDataTag(): boolean;
    static fromString(str: any): Tag;
    static fromPString(str: any): Tag;
    static fromNumbers(group: any, element: any): Tag;
    static readTag(stream: any): Tag;
    write(stream: WriteBufferStream, vrType: string, values: Array<string>, syntax: string): number;
}
