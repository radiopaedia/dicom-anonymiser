export declare function toUTF8Array(str: string): Array<number>;
export declare class BufferStream {
    size: number;
    buffer: ArrayBuffer;
    view: DataView;
    offset: number;
    isLittleEndian: boolean;
    constructor(sizeOrBuffer: number | ArrayBuffer, littleEndian: boolean);
    setEndian(isLittle: boolean): void;
    writeUint8(value: number | string): number;
    writeInt8(value: number | string): number;
    writeUint16(value: number | string): number;
    writeInt16(value: number | string): number;
    writeUint32(value: number | string): number;
    writeInt32(value: number | string): number;
    writeFloat(value: number | string): number;
    writeDouble(value: number | string): number;
    writeString(value: string): number;
    writeHex(value: string): number;
    readUint32(): number;
    readUint16(): number;
    readUint8(): number;
    readUint8Array(length: number): Uint8Array;
    readUint16Array(length: number): Uint16Array;
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
    more(length: number): ReadBufferStream;
    reset(): this;
    end(): boolean;
    toEnd(): void;
}
export declare class ReadBufferStream extends BufferStream {
    constructor(buffer: ArrayBuffer, littleEndian?: boolean);
}
export declare class WriteBufferStream extends BufferStream {
    constructor(buffer: number | ArrayBuffer, littleEndian?: boolean);
}
