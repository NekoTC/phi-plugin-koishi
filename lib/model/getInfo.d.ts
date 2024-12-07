import SongsInfo from './class/SongsInfo';
import Chart from './class/Chart';
export default class getInfo {
    /**默认别名,以id为key */
    static nicklist: {
        [key: string]: string[];
    };
    /**以别名为key */
    static songnick: {
        [key: string]: string[];
    };
    /**扩增曲目信息 */
    static DLC_Info: {
        [key: string]: string[];
    };
    /**头像id */
    static avatarid: {
        [key: string]: string;
    };
    /**Tips [] */
    static tips: string[];
    /**原版信息 */
    static ori_info: {
        [key: string]: any;
    };
    /**通过id获取曲名 */
    static songsid: {
        [key: string]: string;
    };
    /**原曲名称获取id */
    static idssong: {
        [key: string]: string;
    };
    /**含有曲绘的曲目列表，id */
    static illlist: string[];
    /**按dif分的info */
    static info_by_difficulty: {
        [key: string]: Chart[];
    };
    /**SP信息 */
    static sp_info: {
        [key: string]: any;
    };
    /**难度映射 */
    static Level: string[];
    /**最高定数 */
    static MAX_DIFFICULTY: number;
    /**所有曲目id列表 */
    static idlist: string[];
    /**note统计 */
    static notesInfo: {
        [key: string]: any;
    };
    /**jrrp */
    static word: {
        [key: string]: string;
    };
    static setCsvInfo(csv_avatar: {
        name: string;
        id: string;
    }[], CsvInfo: any, Csvdif: any): void;
    /**
     * 返回原曲信息
     * @param {} [id=undefined] 原曲id
     * @returns {SongsInfo}
     */
    static info(id: string): SongsInfo;
    /**
     * 返回所有曲目信息
     * @returns
     */
    static all_info(): {
        [x: string]: any;
    };
    /**
    * 根据参数模糊匹配返回id数组
    * @param {string} mic 别名
    * @param {number} [Distance=0.85] 阈值 猜词0.95
    * @returns 原曲id数组，按照匹配程度降序
    */
    static fuzzysongsnick(mic: string, Distance?: number): any[];
    static jaroWinklerDistance(s1: string, s2: string): number;
    /**
     * id获取曲绘，返回地址
     * @param {string} id id
     * @param {'common'|'blur'|'low'} [kind='common'] 清晰度
     * @return {string} 网址或文件地址
    */
    static getill(id: string, kind?: 'common' | 'blur' | 'low'): string;
    /**
     * 返回章节封面 url
     * @param {string} name 标准章节名
     */
    static getChapIll(name: string): string;
    /**
     * 通过id获得头像文件名称
     * @param {string} id
     * @returns file name
     */
    static idgetavatar(id: string): string;
    /**
     * 根据曲目id获取原名
     * @param {String} id 曲目id
     * @returns 原名
     */
    static idgetsong(id: string): string;
    /**
     * 通过原曲曲目获取曲目id
     * @param {String} song 原曲曲名
     * @returns 曲目id
     */
    static SongGetId(song: string): string;
}
