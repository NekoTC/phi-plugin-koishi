declare const _default: {
    /**
     * 添加成绩
     * @param {string} sessionToken
     * @param {number} rks
     */
    addUserRks(sessionToken: string, rks: number): Promise<import("minato").Driver.WriteResult>;
    /**
     * 删除成绩
     * @param {string} sessionToken
     */
    delUserRks(sessionToken: string): Promise<import("minato").Driver.WriteResult>;
    /**
     * 获取用户排名
     * @param {number} rks
     */
    getUserRank(rks: number): Promise<number>;
    /**
     * 获取sessionToken rks
     * @param {number} sessionToken
     * @returns {Promise<number>}
     */
    getUserRks(sessionToken: string): Promise<import("minato").FlatPick<import("../components/redis").phigrosUserRks, "rks">>;
    /**
     * 获取排名
     * @param {number} min 0起
     * @param {number} max 不包含
     */
    getRankUser(min: number, max: number): Promise<import("../components/redis").phigrosUserRks[]>;
    /**
     * 获取所有排名
     */
    getAllRank(): Promise<import("../components/redis").phigrosUserRks[]>;
};
export default _default;
