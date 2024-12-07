import { Context } from "koishi";

let Logger: Context['logger']

export let logger = new class log {
    info(...msg: any[]) {
        Logger.info(msg.join('\n'))
    }
    error(...msg: any[]) {
        Logger.error(msg.join('\n'))
    }
    warn(...msg: any[]) {
        Logger.warn(msg.join('\n'))
    }
}

export function apply(ctx: Context) {
    Logger = ctx.logger
}