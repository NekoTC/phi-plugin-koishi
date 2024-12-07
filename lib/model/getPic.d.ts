import { Context, Keys } from "koishi";
import tplName from "./type/tplName";
export default class pic {
    /**
     * 获取歌曲图鉴，曲名为原名
     * @param {any} ctx 上下文
     * @param {string} id 曲名
     * @param {any} data 自定义数据
     * @returns
     */
    static GetSongsInfoAtlas(ctx: Context, id: Keys<tplName>, data?: any): Promise<string | import("koishi").Element>;
    /**
     * 获取曲绘图鉴
     * @param {*} e 消息e
     * @param {string} id 原曲名称
     * @param { {illustration:string, illustrator:string} } data 自定义数据
     * @returns
     */
    static GetSongsIllAtlas(ctx: Context, id: string, data?: {
        illustration: string;
        illustrator: string;
    }): Promise<import("koishi").Element | "渲染超时，请稍后再试QAQ！" | "渲染失败，请稍后再试QAQ！">;
    /**
     * 获取本地图片，文件格式默认png
     * @param {string} img 文件名
     * @param {string} style 文件格式，默认为png
     */
    static getimg(img: string, style?: string): string;
}
