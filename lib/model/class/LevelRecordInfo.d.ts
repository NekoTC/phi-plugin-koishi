export default interface LevelRecordInfo {
    id: string;
    fc: boolean;
    score: number;
    acc: number;
    rank: string;
    song: string;
    illustration: string;
    Rating: string;
    difficulty: number;
    rks: number;
    suggest?: string;
}
export default class LevelRecordInfo {
    /**
     * @param {{fc:boolean, score:number, acc: number}} data 原始数据
     * @param {string} id 曲目id
     * @param {number} rank 难度
     */
    constructor(data: {
        fc: boolean;
        score: number;
        acc: number;
    }, id: string, rank: number);
}
