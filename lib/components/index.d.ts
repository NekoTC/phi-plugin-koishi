import { Context } from 'koishi';
import Version from './Version';
import { Config } from '..';
declare const Display_Plugin_Name = "Phi-Plugin";
declare const Plugin_Name = "phi-plugin";
export { Version, Plugin_Name, Display_Plugin_Name };
export declare function apply(ctx: Context, cfg: Config): void;
