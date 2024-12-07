import { Keys } from "koishi";
import levelKind from "../type/levelKind";
export default class scoreHistory {
    /**
     * 生成成绩记录数组
     * @param {number} acc
     * @param {number} score
     * @param {Date} date
     * @param {boolean} fc
     * @returns []
     */
    static create(acc: number, score: number, date: Date, fc: boolean): (string | number | boolean | Date)[];
    /**
     * 扩充信息
     * @param id 曲目id
     * @param level 难度
     * @param now
     * @param old
     */
    static extend(id: string, level: Keys<levelKind>, now: [number, number, Date, boolean], old?: [number, number, Date, boolean]): {
        song: string;
        rank: Keys<levelKind>;
        illustration: string;
        Rating: string;
        rks_new: number;
        rks_old: number;
        acc_new: number;
        acc_old: number;
        score_new: number;
        score_old: number;
        date_new: Date;
        date_old: Date;
    } | {
        song: string;
        rank: Keys<levelKind>;
        illustration: string;
        Rating: string;
        acc_new: number;
        acc_old: number;
        score_new: number;
        score_old: number;
        date_new: Date;
        date_old: Date;
        rks_new?: undefined;
        rks_old?: undefined;
    };
    /**
     * 展开信息
     * @param {Array} data 历史成绩
     */
    static open(data: [number, number, Date, boolean]): {
        acc: number;
        score: number;
        date: Date;
        fc: boolean;
    };
    /**
     * 获取该成绩记录的日期
     * @param {Array} data 成绩记录
     * @returns {Date} 该成绩的日期
     */
    static date(data: [number, number, Date, boolean]): Date;
}
