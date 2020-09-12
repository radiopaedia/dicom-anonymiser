export declare function toUTF8Array(str: any): number[];
export declare class BufferStream {
    size: number;
    buffer: ArrayBuffer;
    view: DataView;
    offset: number;
    isLittleEndian: boolean;
    constructor(sizeOrBuffer: any, littleEndian: any);
    setEndian(isLittle: any): void;
    writeUint8(value: any): any;
    writeInt8(value: any): any;
    writeUint16(value: any): any;
    writeInt16(value: any): any;
    writeUint32(value: any): any;
    writeInt32(value: any): any;
    writeFloat(value: any): any;
    writeDouble(value: any): any;
    writeString(value: any): any;
    writeHex(value: any): any;
    readUint32(): number;
    readUint16(): number;
    readUint8(): number;
    readUint8Array(length: any): Uint8Array;
    readUint16Array(length: any): Uint16Array;
    readInt16(): number;
    readInt32(): number;
    readFloat(): number;
    readDouble(): number;
    readString(length: any): string;
    readHex(length: any): string;
    checkSize(step: any): void;
    concat(stream: any): number;
    increment(step: any): any;
    getBuffer(start?: number, end?: number): ArrayBuffer;
    more(length: any): ReadBufferStream;
    reset(): this;
    end(): boolean;
    toEnd(): void;
}
export declare class ReadBufferStream extends BufferStream {
    constructor(buffer: any, littleEndian?: boolean);
}
export declare class WriteBufferStream extends BufferStream {
    constructor(buffer: any, littleEndian?: boolean);
}
