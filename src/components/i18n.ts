import { Context } from "koishi";

export const i18nList = {
    /**这里被管理员禁止使用这个功能了呐QAQ！ */
    beGroupBan: 'beGroupBan',
    /**请先绑定sessionToken哦！\n如果不知道自己的sessionToken可以尝试扫码绑定嗷！\n获取二维码：/phi bind qrcode\n帮助：/phi tk help\n格式：/phi bind <sessionToken> */
    haveToBind: 'haveToBind',
    /**请先更新数据哦！\n格式：/phi update */
    haveToUpdate: 'haveToUpdate',
    /**喂喂喂！你还没输入sessionToken呐！\n扫码绑定：/phi bind qrcode\n普通绑定：/phi bind <sessionToken> */
    haveToInputToken: 'haveToInputToken',
    letter: {
        /**已经在玩开字母啦！如果想要重新开始请先/phi ans结束本局游戏哦！ */
        haveAnotherGame: 'letter.haveAnotherGame',
        /**出你字母已开始！\n当前考试范围：{0}\n已翻开字母：{1}\n{2} */
        start: 'letter.start',
        /**每次只能翻开一个字母哦！ */
        onlyCanOpenOne: 'letter.onlyCanOpenOne',
        /**这个字母已经被翻开了哦！ */
        haveBeOpened: 'letter.haveBeOpened',
    }
}

export function apply(ctx: Context) {
    ctx.i18n.define('zh-CN', {
        beGroupBan: '这里被管理员禁止使用这个功能了呐QAQ！',
        haveToBind: '请先绑定sessionToken哦！\n如果不知道自己的sessionToken可以尝试扫码绑定嗷！\n获取二维码：/phi bind qrcode\n帮助：/phi tk help\n格式：/phi bind <sessionToken>',
        haveToUpdate: '请先更新数据哦！\n格式：/phi update',
        haveToInputToken: '喂喂喂！你还没输入sessionToken呐！\n扫码绑定：/phi bind qrcode\n普通绑定：/phi bind <sessionToken>',
        letter: {
            haveAnotherGame: '已经在玩开字母啦！如果想要重新开始请先/phi ans结束本局游戏哦！',
            start: '出你字母已开始！\n当前考试范围：{0}\n已翻开字母：{1}\n{2}',
            onlyCanOpenOne: '每次只能翻开一个字母哦！',
            haveBeOpened: '这个字母已经被翻开了哦！'
        }
    })

}