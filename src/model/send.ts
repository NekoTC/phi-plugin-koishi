import getSave from "./getSave";
import Save from "./class/Save";
import { h, Keys, Session } from 'koishi';
import { i18nList } from '../components/i18n';
import getBanGroup from './getBanGroup';
import allFnc from './class/allFnc';

class send {

    /**
     * 私聊省略@
     * @param session 
     * @param msg 
     * @param quote 是否引用回复
     * @param recallMsg recallMsg 单位，秒
     */
    async send_with_At(session: Session, msg: any, quote: boolean = false, recallMsg: number = 0) {
        let messageId: string[]
        if (session.guild) {
            messageId = await session.send(quote ? h.quote(session.messageId) : '' + h.at(session.userId) + msg)
        } else {
            messageId = await session.send(quote ? h.quote(session.messageId) : '' + msg)
        }
        if (recallMsg) {
            setTimeout(() => {
                for (let id in messageId) {
                    session.bot.deleteMessage(session.channelId, messageId[id])
                }
            }, recallMsg * 1000)
        }
        return messageId
    }

    /**
     * 检查存档部分
     * @param {*} e 
     * @param {Number} ver 存档版本
     * @returns {Promise<Save>}
     * v1.0,取消对当次更新内容的存储，取消对task的记录，更正scoreHistory 
     * v1.1,更正scoreHistory
     * v1.2,由于曲名错误，删除所有记录，曲名使用id记录
     */
    async getsave_result(session: Session, ver?: number): Promise<Save> {

        let sessionToken = await getSave.get_user_token(session.userId)

        let user_save = await getSave.getSave(session.userId)

        if (!sessionToken) {
            this.send_with_At(session, session.text(i18nList.haveToBind))
            return null
        }

        if (!user_save || (ver && (!user_save.Recordver || user_save.Recordver < ver))) {
            this.send_with_At(session, session.text(i18nList.haveToUpdate))
            return null
        }

        return user_save
    }

    /**
     * 该功能是否被ban
     * @param session 
     * @param fnc 指令名称
     */
    async isBan(session: Session, fnc: Keys<allFnc>): Promise<boolean> {
        if (session.guild && await getBanGroup.get(session.guildId, fnc)) {
            session.send(session.text(i18nList.beGroupBan))
            return true
        }
        return false
    }

}

export default new send()
