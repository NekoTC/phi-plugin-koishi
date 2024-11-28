import { Context } from "koishi";

export default new class Logger {
    info(ctx: Context, msg: string) {
        ctx.logger.info(msg)
    }

    error(ctx: Context, msg: string) {
        ctx.logger.error(msg)
    }

    warn(ctx: Context, msg: string) {
        ctx.logger.warn(msg)
    }
}