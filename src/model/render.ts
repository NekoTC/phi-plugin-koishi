import { Context, h } from 'koishi'
import { } from 'koishi-plugin-puppeteer'
import path from 'path'
import fs from 'fs'
import { pluginResources, imgPath, htmlPath, tempPath } from '../components/pluginPath'
import { config } from '../components/Config'
import { Version, Display_Plugin_Name, Plugin_Name } from '../components/index'
import artTemplate from 'art-template'
import getFile from './getFile'

let renderList = {}

export default new class render {
    async render(ctx: Context, appPath: string, params: any) {
        console.info(pluginResources.replace(/\\/g, '/'))
        let [app, tpl] = appPath.split('/')
        let layoutPath = pluginResources.replace(/\\/g, '/') + `/html/common/layout/`
        let resPath = pluginResources.replace(/\\/g, '/') + `/`

        let data = {
            ...params,
            _plugin: Display_Plugin_Name,
            tplFile: path.join(htmlPath, app, tpl + '.html').replace(/\\/g, '/'),
            pluResPath: resPath,
            _res_path: resPath,
            _imgPath: imgPath.replace(/\\/g, '/') + '/',
            _layout_path: layoutPath,
            defaultLayout: layoutPath + 'default.html',
            elemLayout: layoutPath + 'elem.html',
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
        }
        // await ctx.puppeteer.start()

        let page = await ctx.puppeteer.page()
        let html = artTemplate.render(fs.readFileSync(data.tplFile, { encoding: 'utf-8' }), data)
        await getFile.SetFile(path.join(tempPath, app, `${tpl}.html`), html, 'txt')
        await page.goto(path.join(tempPath, app, `${tpl}.html`), { waitUntil: 'networkidle2' })
        let body = await page.$('body')
        let box = await body.boundingBox()
        page.setViewport({ width: box.width, height: box.height })
        return h.image(await body.screenshot({ type: 'jpeg', quality: config.randerQuality, captureBeyondViewport: false }), 'image/jpeg')

    }
}()