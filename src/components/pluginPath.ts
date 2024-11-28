import { Context } from 'koishi'
import path from 'path'


/**插件根目录 */
export const pluginPath = __dirname.replace(/\\/g, '/').replace(/\/src\/components/, '')
const _path = process.cwd().replace(/\\/g, '/')

/**插件名 */
export const pluginName = path.basename(path.join(import.meta.url, '../../'))
/**src 根目录 */
export const pluginRoot = path.join(pluginPath, 'src')

/**插件资源目录 */
export const pluginResources = path.join(pluginRoot, 'resources')

export const htmlPath = path.join(pluginResources, 'html')


/**曲绘资源、曲目信息路径 */
export const infoPath = path.join(pluginResources, 'info')

/**额外曲目名称信息（开字母用） */
export const DlcInfoPath = path.join(pluginResources, 'info', 'DLC')


/**默认图片路径 */
export const imgPath = path.join(pluginResources, 'html', 'otherimg')

/**用户图片路径 */
export const ortherIllPath = path.join(pluginResources, 'otherill')

/**原画资源 */
export const originalIllPath = path.join(pluginResources, 'original_ill')

/**音频资源 */
export const guessMicPath = path.join(pluginResources, 'splited_music')

/**数据路径 */
export let dataPath: string

/**用户娱乐数据路径 */
export let pluginDataPath: string

/**用户存档数据路径 */
export let savePath: string

/**备份路径 */
export let backupPath: string

export let tempPath: string

export function apply(ctx: Context) {
    dataPath = path.join(ctx.baseDir, 'data', 'Catrong@phi-plugin')
    pluginDataPath = path.join(dataPath, 'pluginData')
    savePath = path.join(dataPath, 'saveData')
    backupPath = path.join(dataPath, 'backup')
    tempPath = path.join(ctx.baseDir, 'temp', 'Catrong@phi-plugin')
}

