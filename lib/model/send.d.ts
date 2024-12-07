import Save from "./class/Save";
import { Keys, Session } from 'koishi';
import allFnc from './class/allFnc';
declare class send {
    /**
     * 私聊省略@
     * @param session
     * @param msg
     * @param quote 是否引用回复
     * @param recallMsg recallMsg 单位，秒
     */
    send_with_At(session: Session, msg: any, quote?: boolean, recallMsg?: number): Promise<string[]>;
    /**
     * 检查存档部分
     * @param {*} e
     * @param {Number} ver 存档版本
     * @returns {Promise<Save>}
     * v1.0,取消对当次更新内容的存储，取消对task的记录，更正scoreHistory
     * v1.1,更正scoreHistory
     * v1.2,由于曲名错误，删除所有记录，曲名使用id记录
     */
    getsave_result(session: Session, ver?: number): Promise<Save>;
    /**
     * 该功能是否被ban
     * @param session
     * @param fnc 指令名称
     */
    isBan(session: Session, fnc: Keys<allFnc>): Promise<boolean>;
}
declare const _default: send;
export default _default;
