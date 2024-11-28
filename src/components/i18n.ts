import { Context } from "koishi";

export const i18nList = {
    /**这里被管理员禁止使用这个功能了呐QAQ！ */
    beGroupBan: 'beGroupBan',
}

export function apply(ctx: Context) {
    ctx.i18n.define('zh_CN', {
        beGroupBan: '这里被管理员禁止使用这个功能了呐QAQ！',
    })
}