import { Context } from "koishi";

let logger: Context['logger']

export let Logger = new class log {
    info(msg: string) {
        logger.info(msg)
    }
    error(msg: string) {
        logger.error(msg)
    }
    warn(msg: string) {
        logger.warn(msg)
    }
}

export function apply(ctx: Context) {
    logger = ctx.logger
}