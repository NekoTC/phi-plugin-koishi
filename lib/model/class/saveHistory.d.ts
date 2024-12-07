import { Keys } from "koishi";
import Save from "./Save";
import levelKind from "../type/levelKind";
export default interface saveHistory {
    /**data货币变更记录 */
    data: {
        date: Date;
        value: number[];
    }[];
    /**rks变更记录 */
    rks: {
        date: Date;
        value: number;
    }[];
    /**历史成绩 */
    scoreHistory: {
        [key: string]: {
            [key in Keys<levelKind>]?: [number, number, Date, boolean][];
        };
    };
    /**民间考核 */
    dan: any[];
    version: number;
}
export default class saveHistory {
    /**
     *
     * @param {saveHistory} data
     */
    constructor(data: saveHistory);
    /**
     * 合并记录
     * @param {saveHistory} data 另一个 History 存档
     */
    add(data: saveHistory): void;
    /**
     * 检查新存档中的变更并记录
     * @param {Save} save 新存档
     */
    update(save: Save): void;
    /**
     * 获取歌曲最新的历史记录
     * @param {string} id 曲目id
     * @returns
     */
    getSongsLastRecord(id: string): Promise<{
        acc: number;
        score: number;
        date?: Date;
        fc: boolean;
    }[]>;
}
