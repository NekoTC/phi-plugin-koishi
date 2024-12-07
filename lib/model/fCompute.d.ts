import { Session } from 'koishi';
export default class compute {
    /**
     * 计算等效rks
     * @param {number} acc
     * @param {number} difficulty
     * @returns
     */
    static rks(acc: number, difficulty: number): number;
    /**
     * 计算所需acc
     * @param {Number} rks 目标rks
     * @param {Number} difficulty 定数
     * @param {Number} [count=undefined] 保留位数
     * @returns 所需acc
     */
    static suggest(rks: number, difficulty: number, count?: number): string | number;
    /**
     * 发送文件
     * @param e
     * @param file
     * @param title 文件名称
     */
    static sendFile(session: Session, file: Buffer, title?: string): Promise<void>;
    /**
     * 获取角色介绍背景曲绘
     * @param {string} save_background
     * @returns
     */
    static getBackground(save_background: string): Promise<string | false>;
    /**
     * 为数字添加前导零
     * @param {number} num 原数字
     * @param {number} cover 总位数
     * @returns 前导零数字
     */
    static ped(num: number, cover: number): string;
    /**
     * 标准化分数
     * @param {number} score 分数
     * @returns 标准化的分数 0'000'000
     */
    static std_score(score: number): string;
    /**
     * 随机数，包含上下界
     * @param {number} min 最小值
     * @param {number} max 最大值
     * @returns 随机数
     */
    static randBetween(min: number, max: number): number;
    /**
     * 随机打乱数组
     * @param {Array} arr 原数组
     * @returns 随机打乱的数组
     */
    static randArray(arr: Array<any>): any[];
    /**
     * 转换时间格式
     * @param {Date|string} date 时间
     * @returns 2020/10/8 10:08:08
     */
    static formatDate(date: Date | string): string;
    /**
     * 转换unity富文本
     * @param {string} richText
     * @param {boolean} [onlyText=false] 是否只返回文本
     * @returns
     */
    static convertRichText(richText: string, onlyText?: boolean): string;
    /**是否是管理员 */
    static authority(session: Session): boolean;
    /**
     * 捕获消息中的范围
     * @param {string} msg 消息字符串
     * @param {Array} range 范围数组
     * @param {number} [max=MAX_DIFFICULTY] 最大值
     * @param {number} [min=0] 最小值
     */
    static match_range(msg: string, range: Array<any>, max?: number, min?: number): void;
    /**
     * 匹配消息中对成绩的筛选
     * @param {string} msg
     * @param {number} [max=MAX_DIFFICULTY] 范围最大值
     * @param {number} [min=0] 范围最小值
     * @returns
     */
    static match_request(msg?: string, max?: number, min?: number): {
        range: number[];
        isask: boolean[];
        scoreAsk: {
            NEW: boolean;
            F: boolean;
            C: boolean;
            B: boolean;
            A: boolean;
            S: boolean;
            V: boolean;
            FC: boolean;
            PHI: boolean;
        };
    };
    static recallMsg(session: Session, messageId: string): Promise<void>;
    static sleep(ms: number): Promise<unknown>;
    /**
     * 转换时间格式
     * @param {Date|string} date 时间
     * @returns 2020/10/8 10:08:08
     */
    static date_to_string(date: Date | string | number): string;
    static getRandomBgColor(): string;
    static toHex(num: number): string;
    /**
     *
     * @param {number} real_score 真实成绩
     * @param {number} tot_score 总成绩
     * @param {boolean} fc 是否fc
     * @returns
     */
    static rate(real_score: number, tot_score: number, fc: boolean): "F" | "C" | "B" | "A" | "S" | "V" | "FC" | "phi";
}
