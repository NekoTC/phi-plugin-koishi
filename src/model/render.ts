import { Context, h, Keys } from 'koishi'
import { } from 'koishi-plugin-puppeteer'
import path from 'path'
import fs from 'fs'
import { pluginResources, imgPath, htmlPath, tempPath } from '../components/pluginPath'
import { config } from '../components/Config'
import { Version, Display_Plugin_Name, Plugin_Name } from '../components/index'
import artTemplate from 'art-template'
import getFile from './getFile'
import tplName from './type/tplName'
import { logger } from '../components/Logger'
import { Page } from 'puppeteer-core'
import fCompute from './fCompute'

let renderList: { [keys in Keys<tplName>]?: { page: Page, using: boolean } } = {}

let waitingList: { [keys in Keys<tplName>]?: number[] } = {}


/**
 * 
 * @param ctx 
 * @param app 
 * @param params 参数数据
 * @returns 
 */

export default async function render(ctx: Context, app: Keys<tplName>, params: any) {
    let layoutPath = pluginResources.replace(/\\/g, '/') + `/html/common/layout/`
    let resPath = pluginResources.replace(/\\/g, '/') + `/`

    let data = {
        ...params,
        _plugin: Display_Plugin_Name,
        tplFile: path.join(htmlPath, app, app + '.art').replace(/\\/g, '/'),
        pluResPath: resPath,
        _res_path: resPath,
        _imgPath: imgPath.replace(/\\/g, '/') + '/',
        _layout_path: layoutPath,
        defaultLayout: layoutPath + 'default.art',
        elemLayout: layoutPath + 'elem.art',
        pageGotoParams: {
            waitUntil: params.waitUntil || 'networkidle2',
            timeout: config.timeout,
        },
        sys: {
            scale: `style=transform:scale(${config.renderScale / 100 || 1})`,
            copyright: `Created By phi-Plugin<span class="version">${Version.ver}</span>`
        },
        Version: Version,
        quality: config.randerQuality,
        fCompute,
    }

    /**检查是否已有page */
    if (!renderList[app]) {
        renderList[app] = { page: await ctx.puppeteer.page(), using: false }
        waitingList[app] = []
    }

    let renderId = Date.now()
    waitingList[app].push(renderId)

    while (renderList[app].using || waitingList[app][0] != renderId) {
        await new Promise((resolve) => { setTimeout(resolve, 500) })
        if (Date.now() - renderId > config.waitingTimeout) {
            logger.error(`waiting ${app} timeout`)
            logger.error(`waitingList length: ${waitingList[app].length}`)
            return '渲染超时，请稍后再试QAQ！';
        }
    }

    renderList[app].using = true
    waitingList[app].shift()
    let page = renderList[app].page

    /**保存模板文件 */
    let html = artTemplate.render(fs.readFileSync(data.tplFile, { encoding: 'utf-8' }), data)
    getFile.SetFile(path.join(tempPath, app, `${app}.html`), html, 'txt')

    await page.goto(path.join(tempPath, app, `${app}.html`), { waitUntil: 'networkidle2' })
    let time1 = Date.now()

    let base64: Buffer = null
    try {
        base64 = await (await page.waitForSelector('body', { timeout: config.timeout })).screenshot({
            type: 'jpeg', quality: config.randerQuality,
            // path: path.join(tempPath, 'img', `${app}.jpeg`)
        })
    } catch (error) {
        logger.error(error)
    }

    renderList[app].using = false
    let time2 = Date.now()
    if (base64) {
        logger.info(`render ${app} time: ${time2 - time1}ms`)
        /**返回 */
        return h.image(base64, 'image/jpeg')
    } else {
        logger.error(`render ${app} failed in ${time2 - time1}ms`)
        return '渲染失败，请稍后再试QAQ！'
    }

}
