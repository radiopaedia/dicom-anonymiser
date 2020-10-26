export declare function toUTF8Array(str: any): number[];
export declare class BufferStream {
    size: number;
    buffer: ArrayBuffer;
    view: DataView;
    offset: number;
    isLittleEndian: boolean;
    constructor(sizeOrBuffer: any, littleEndian: any);
    setEndian(isLittle: any): void;
    writeUint8(value: any): number;
    writeInt8(value: any): number;
    writeUint16(value: any): number;
    writeInt16(value: any): number;
    writeUint32(value: any): number;
    writeInt32(value: any): number;
    writeFloat(value: any): number;
    writeDouble(value: any): number;
    writeString(value: any): number;
    writeHex(value: any): number;
    readUint32(): number;
    readUint16(): number;
    readUint8(): number;
    readUint8Array(length: any): Uint8Array;
    readUint16Array(length: any): Uint16Array;
    readInt8(): number;
    readInt16(): number;
    readInt32(): number;
    readFloat(): number;
    readDouble(): number;
    readString(length: number): string;
    readHex(length: number): string;
    checkSize(step: number): void;
    concat(stream: BufferStream): void;
    increment(step: number): number;
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
