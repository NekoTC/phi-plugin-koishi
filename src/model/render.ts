import { } from 'koishi-plugin-puppeteer'
import path from 'path'
import fs from 'fs'
import { pluginResources, imgPath, htmlPath } from '../model/path'
import { Context } from 'koishi'
import { cfg } from '..'
import { Version, Display_Plugin_Name, Plugin_Name } from '../components/index'
import artTemplate from 'art-template'

let renderList = {}

export default new class render {
    async render(ctx: Context, appPath: string, params: any) {
        let [app, tpl] = appPath.split('/')
        let layoutPath = pluginResources + `/html/common/layout/`
        let resPath = pluginResources + `/`

        let data = {
            ...params,
            _plugin: Display_Plugin_Name,
            tplFile: path.join(htmlPath, app, tpl + '.html'),
            pluResPath: resPath,
            _res_path: resPath,
            _imgPath: imgPath + '/',
            _layout_path: layoutPath,
            defaultLayout: layoutPath + 'default.html',
            elemLayout: layoutPath + 'elem.html',
            pageGotoParams: {
                waitUntil: params.waitUntil || 'networkidle2',
                timeout: cfg.timeout,
            },
            sys: {
                scale: `style=transform:scale(${cfg.renderScale || 1})`,
                copyright: `Created By phi-Plugin<span class="version">${Version.ver}</span>`
            },
            Version: Version,
            quality: cfg.randerQuality,
        }

        return await ctx.puppeteer.render(artTemplate.render(fs.readFileSync(data.tplFile, { encoding: 'utf-8' }), data))

    }
}()