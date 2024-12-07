import Save from './class/Save';
import saveHistory from './class/saveHistory';
import PhigrosUser from '../lib/PhigrosUser';
export default class getSave {
    /**获取 user_id 号对应的 Token */
    static get_user_token(user_id: string): Promise<string>;
    /**添加 user_id 号对应的 Token */
    static add_user_token(user_id: string, token: string): Promise<import("minato").Driver.WriteResult>;
    /**移除 user_id 对应的 Token */
    static del_user_token(user_id: string): Promise<import("minato").Driver.WriteResult>;
    /**
     * 获取 user_id 对应的存档文件
     * @param {String} user_id user_id
     * @returns {Promise<Save>}
     */
    static getSave(user_id: string): Promise<Save>;
    /**
     * 获取 sessionToken 对应的存档文件
     * @param {string} Token
     * @returns
     */
    static getSaveBySessionToken(Token: string): Promise<Save>;
    /**
     * 保存 user_id 对应的存档文件
     * @param {String} user_id user_id
     * @param {Save} data
     */
    static putSave(user_id: string, data: Save | PhigrosUser): Promise<boolean>;
    /**
     * 获取 user_id 对应的历史记录
     * @param {string} user_id
     * @returns {Promise<saveHistory>}
     */
    static getHistory(user_id: string): Promise<saveHistory>;
    /**
     * 保存 user_id 对应的历史记录
     * @param {String} user_id user_id
     * @param {Object} data
     */
    static putHistory(user_id: string, data: object): Promise<boolean>;
    /**
     * 获取玩家 Dan 数据
     * @param {string} user_id QQ号
     * @param {boolean} [all=false] 是否返回所有数据
     * @returns {object|Array} Dan数据
     */
    static getDan(user_id: string, all?: boolean): Promise<object | any[]>;
    /**
     * 删除 user_id 对应的存档文件
     * @param {String} user_id user_id
     */
    static delSave(user_id: string): Promise<boolean>;
    /**
     * 删除 token 对应的存档文件
     * @param {String} Token Token
     */
    static delSaveBySessionToken(Token: string): Promise<boolean>;
    static banSessionToken(token: string): Promise<import("minato").Driver.WriteResult>;
    static allowSessionToken(token: string): Promise<import("minato").Driver.WriteResult>;
    static isBanSessionToken(token: string): Promise<boolean>;
    static getGod(): Promise<import("minato").FlatPick<import("../components/redis").phigrosBanSessionToken, "sessionToken">[]>;
}
