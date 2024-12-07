import LevelRecordInfo from './LevelRecordInfo';
import PhigrosUser from '../../lib/PhigrosUser';
export default interface Save {
    sessionToken: string;
    /**存档上传时间 "2023-10-06T03:46:33.000Z" */
    modifiedAt: string;
    saveInfo: {
        /**账户创建时间 2022-09-03T10:21:48.613Z */
        createdAt: string;
        gameFile: {
            /**存档创建时间 2023-10-05T07:41:24.503Z */
            createdAt: string;
            /**gamesaves/{32}/.save */
            key: string;
            /**存档id {24} */
            objectId: string;
            /**存档更新时间 2023-10-05T07:41:24.503Z */
            updatedAt: string;
            /**https://rak3ffdi.tds1.tapfiles.cn/gamesaves/{32}/.save */
            url: string;
        };
        /**存档上传时间 {__type："Date", "iso": "2023-10-06T03:46:33.000Z"} */
        modifiedAt: {
            "__type": "Date";
            "iso": string;
        };
        /**用户id {24} 与 gameFile 中的不同 */
        objectId: string;
        summary: {
            /**插件获取存档时间 2023 Oct.06 11:46:33 */
            updatedAt: string;
            /**存档版本 */
            saveVersion: number;
            /**课题分 */
            challengeModeRank: number;
            /**rks */
            rankingScore: number;
            /**客户端版本号 */
            gameVersion: number;
            /**头像 */
            avatar: string;
            /**完成曲目数量 */
            cleared: [number, number, number, number];
            /**FC曲目数量 */
            fullCombo: [number, number, number, number];
            /**AP曲目数量 */
            phi: [number, number, number, number];
        };
        /**存档上传时间 2023 Oct.06 11:46:33 */
        updatedAt: string;
        /**用户信息 */
        user: {
            __type: "Pointer";
            className: "_User";
            objectId: string;
        };
        /**用户名 */
        PlayerId: string;
    };
    /**存档url */
    saveUrl: string;
    /**官方存档版本号 */
    Recordver: number;
    gameProgress: {
        /**首次运行 */
        isFirstRun: boolean;
        /**过去的章节已完成 */
        legacyChapterFinished: boolean;
        /**已展示收藏品Tip */
        alreadyShowCollectionTip: boolean;
        /**已展示自动解锁IN Tip */
        alreadyShowAutoUnlockINTip: boolean;
        /**剧情完成(显示全部歌曲和课题模式入口) */
        completed: string;
        /**？？？ */
        songUpdateInfo: number;
        /**课题分 */
        challengeModeRank: number;
        /**data货币 */
        money: number[];
        /**痉挛解锁 */
        unlockFlagOfSpasmodic: number;
        /**Igallta解锁 */
        unlockFlagOfIgallta: number;
        /**Rrhar'il解锁 */
        unlockFlagOfRrharil: number;
        /**IN达到S(倒霉蛋,船,Shadow,心之所向,inferior,DESTRUCTION 3,2,1,Distorted Fate) */
        flagOfSongRecordKey: number;
        /**Random切片解锁 */
        randomVersionUnlocked: number;
        /**第八章入场 */
        chapter8UnlockBegin: boolean;
        /**第八章第二阶段 */
        chapter8UnlockSecondPhase: boolean;
        /**第八章通过 */
        chapter8Passed: boolean;
        /**第八章各曲目解锁 */
        chapter8SongUnlocked: number;
    };
    gameuser?: {
        /**user */
        name: string;
        /**版本 */
        version: number;
        /**是否展示Id */
        showPlayerId: boolean;
        /**简介 */
        selfIntro: string;
        /**头像 */
        avatar: string;
        /**背景 */
        background: string;
    };
    gameRecord?: {
        [key: string]: LevelRecordInfo[];
    };
}
export default class Save {
    /**
     * @param {Save} data
     * @param {boolean} ignore 跳过存档检查
     */
    constructor(data: Save | PhigrosUser, ignore?: boolean);
    /**按照 rks 排序的数组 */
    sortedRecord: LevelRecordInfo[];
    /**
     * 获取存档
     * @returns 按照 rks 排序的数组
     */
    getRecord(): any[];
    /**
     * 筛选满足ACC条件的成绩
     * @param {number} acc ≥acc
     * @param {boolean} [same=false] 是否筛选最高rks
     * @returns 按照rks排序的数组
     */
    findAccRecord(acc: number, same?: boolean): any[];
    /**计算rks+0.01的最低所需要提升的rks */
    minUpRks(): number;
    /**简单检查存档是否存在问题 */
    checkRecord(): string;
    /**
     *
     * @param {string} id 曲目id
     */
    getSongsRecord(id: string): LevelRecordInfo[];
    /**phi 和 b19 */
    B19List: {
        phi: LevelRecordInfo;
        b19_list: LevelRecordInfo[];
    };
    /**b0 rks */
    b0_rks: number;
    /**b19 rks */
    b19_rks: number;
    /**
     *
     * @param {number} num B几
     * @returns phi, b19_list
     */
    getB19(num: number): Promise<{
        phi: any;
        b19_list: any[];
    }>;
    /**
     *
     * @param {string} id
     * @param {number} lv
     * @param {number} count 保留位数
     * @param {number} difficulty
     * @returns
     */
    getSuggest(id: string, lv: number, count: number): string;
    /**
     * 获取存档RKS
     * @returns {number}
     */
    getRks(): number;
    /**
     * 获取存档sessionToken
     */
    getSessionToken(): string;
}
