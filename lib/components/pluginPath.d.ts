import { Context } from 'koishi';
/**插件根目录 */
export declare const pluginPath: string;
/**插件名 */
export declare const pluginName: string;
/**src 根目录 */
export declare const pluginRoot: string;
/**插件资源目录 */
export declare const pluginResources: string;
export declare const htmlPath: string;
/**曲绘资源、曲目信息路径 */
export declare const infoPath: string;
/**额外曲目名称信息（开字母用） */
export declare const DlcInfoPath: string;
/**默认图片路径 */
export declare const imgPath: string;
/**用户图片路径 */
export declare const ortherIllPath: string;
/**音频资源 */
export declare const guessMicPath: string;
/**数据路径 */
export declare let dataPath: string;
/**用户娱乐数据路径 */
export declare let pluginDataPath: string;
/**用户存档数据路径 */
export declare let savePath: string;
/**备份路径 */
export declare let backupPath: string;
/**临时文件路径 */
export declare let tempPath: string;
/**缓存路径 */
export declare let cachePath: string;
/**原画资源 */
export declare let originalIllPath: string;
export declare function apply(ctx: Context): void;
