import { Context, Schema } from 'koishi';
export declare const name = "phi-plugin";
export declare const inject: {
    required: string[];
};
export interface Config {
    /**渲染设置 */
    /**在线曲绘来源 */
    onLinePhiIllUrl: string;
    /**渲染精度 */
    renderScale: number;
    /**渲染质量 */
    randerQuality: number;
    /**渲染超时时间 */
    timeout: number;
    /**等待超时时间 */
    waitingTimeout: number;
    /**并行渲染数量 */
    renderNum: number;
    /**B19最大限制 */
    B19MaxNum: number;
    /**历史成绩单日数量 */
    HistoryDayNum: number;
    /**历史成绩展示天数 */
    HistoryDateNum: number;
    /**历史成绩展示数量 */
    HistoryScoreNum: number;
    /** /list 最大数量 */
    listScoreMaxNum: number;
    /**系统设置 */
    /**自动更新曲绘 */
    autoPullPhiIll: boolean;
    /**频道模式 */
    isGuild: boolean;
    /**绑定二维码 */
    TapTapLoginQRcode: boolean;
    /**命令头 */
    cmdhead: string;
    /**曲库类型 */
    songSet: number;
    /**猜曲绘设置 */
    /**提示间隔 */
    GuessTipCd: number;
    /**猜曲绘撤回 */
    GuessRecall: boolean;
    /**开字母设置 */
    /**字母条数 */
    LetterNum: number;
    /**发送曲绘 */
    LetterIllustration: string;
    /**翻开字母CD */
    LetterRevealCd: number;
    /**回答CD */
    LetterGuessCd: number;
    /**提示CD */
    LetterTipCd: number;
    /**最长时长 */
    LetterTimeLength: number;
    /**提示猜歌设置 */
    /**提示CD */
    GuessTipsTipCD: number;
    /**提示条数 */
    GuessTipsTipNum: number;
    /**最长时长 */
    GuessTipsTimeout: number;
    /**额外时间 */
    GuessTipsAnsTime: number;
    /**其他设置 */
    /**段位认证tk */
    VikaToken?: string;
}
export declare const Config: Schema<Config>;
export declare let logger: Context['logger'];
export declare function apply(ctx: Context, config: Config): Promise<void>;
