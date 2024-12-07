import ByteReader from './ByteReader';
export default interface GameRecord {
    name: string;
    version: number;
    data: ByteReader;
    Record: any;
    songsnum: number;
    init(err: Array<string>): any;
}
export default class GameRecord {
    static name: string;
    static version: number;
    constructor(data: string);
}
