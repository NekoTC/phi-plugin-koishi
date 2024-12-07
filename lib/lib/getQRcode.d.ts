declare const _default: {
    /**
     * 获取登录二维码url
     */
    getRequest(): Promise<any>;
    /**
     * 生成url二维码
     * @param {string} url 链接
     * @returns 二维码
     */
    getQRcode(url: any): Promise<any>;
    /**
     * 检查二维码扫描结果
     * @returns authorization_pending authorization_waiting
     */
    checkQRCodeResult(request: any): Promise<any>;
    /**
     * 获取sessionToken
     * @param {any} result
     * @returns token
     */
    getSessionToken(result: any): Promise<any>;
};
export default _default;
