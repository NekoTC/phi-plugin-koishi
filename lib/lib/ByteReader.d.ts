export default interface ByteReader {
    data: Buffer;
    position: number;
    remaining(): number;
    getByte(): number;
    putByte(num: number): void;
    getAllByte(): string;
    getShort(): number;
    putShort(num: number): void;
    getInt(): number;
    putInt(num: number): void;
    getFloat(): number;
    putFloat(num: number): void;
    getVarInt(): number;
    skipVarInt(num: number): void;
    getBytes(): Uint8Array;
    getString(): string;
    putString(s: string): void;
    skipString(): void;
    insertBytes(bytes: Uint8Array): void;
    replaceBytes(length: number, bytes: Uint8Array): void;
}
export default class ByteReader {
    constructor(data: any, position?: number);
}
