import { Context } from "koishi";
export declare let logger: {
    info(...msg: any[]): void;
    error(...msg: any[]): void;
    warn(...msg: any[]): void;
};
export declare function apply(ctx: Context): void;
