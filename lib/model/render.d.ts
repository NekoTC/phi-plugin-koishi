import { Context, h, Keys } from 'koishi';
import tplName from './type/tplName';
/**
 *
 * @param ctx
 * @param app
 * @param params 参数数据
 * @returns
 */
export default function render(ctx: Context, app: Keys<tplName>, params: any): Promise<h | "渲染超时，请稍后再试QAQ！" | "渲染失败，请稍后再试QAQ！">;
