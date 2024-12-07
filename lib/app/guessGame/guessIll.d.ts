import { Context, Session } from 'koishi';
export default class guessIll {
    /**猜曲绘 */
    static start(ctx: Context, session: Session, gameList: any): Promise<boolean>;
    /**玩家猜测 */
    static guess(ctx: Context, session: Session, msg: string, gameList: any): Promise<boolean>;
    static ans(ctx: Context, session: Session, gameList: any): Promise<boolean>;
    /** 洗牌 **/
    static mix(session: Session): Promise<boolean>;
}
