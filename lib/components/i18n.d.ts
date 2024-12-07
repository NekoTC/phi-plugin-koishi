import { Context } from "koishi";
export declare const i18nList: {
    /**这里被管理员禁止使用这个功能了呐QAQ！ */
    beGroupBan: string;
    /**请先绑定sessionToken哦！\n如果不知道自己的sessionToken可以尝试扫码绑定嗷！\n获取二维码：/phi bind qrcode\n帮助：/phi tk help\n格式：/phi bind <sessionToken> */
    haveToBind: string;
    /**请先更新数据哦！\n格式：/phi update */
    haveToUpdate: string;
    /**喂喂喂！你还没输入sessionToken呐！\n扫码绑定：/phi bind qrcode\n普通绑定：/phi bind <sessionToken> */
    haveToInputToken: string;
};
export declare function apply(ctx: Context): void;
