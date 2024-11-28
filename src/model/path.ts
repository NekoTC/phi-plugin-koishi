import path from 'path'

/**插件根目录 */
export const pluginPath = __dirname.replace(/\\/g, '/').replace(/\/src\/model/, '')
// const _path = process.cwd().replace(/\\/g, '/')

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


/**数据路径 */
export const dataPath = path.join(pluginRoot, 'data')


/**用户娱乐数据路径 */
export const pluginDataPath = path.join(dataPath, 'pluginData')

/**用户存档数据路径 */
export const savePath = path.join(dataPath, 'saveData')

/**用户设置路径 */
export const configPath = path.join(pluginRoot, 'config', 'config')

/**默认设置路径 */
export const defaultPath = path.join(pluginRoot, 'config', 'default_config')

/**默认图片路径 */
export const imgPath = path.join(pluginResources, 'html', 'otherimg')

/**用户图片路径 */
export const ortherIllPath = path.join(pluginResources, 'otherill')

/**原画资源 */
export const originalIllPath = path.join(pluginResources, 'original_ill')

/**音频资源 */
export const guessMicPath = path.join(pluginResources, 'splited_music')

/**备份路径 */
export const backupPath = path.join(pluginRoot, 'backup')
