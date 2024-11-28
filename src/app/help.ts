import { Context, h, Schema } from 'koishi'
import { } from 'koishi-plugin-puppeteer'
import path from 'node:path'
import { infoPath, pluginResources } from '../components/pluginPath'
import { Config } from '..'
import getFile from '../model/getFile'
import render from '../model/render'
import getInfo from '../model/getInfo'
import getBanGroup from '../model/getBanGroup'
import { i18nList } from '../components/i18n'

class help {

    constructor(ctx: Context, config: Config) {
        ctx.command('phi.help', '查看帮助', { authority: 0 }).action(async ({ session, next }) => {

            if (session.guild && await getBanGroup.get(session.guildId, 'help')) {
                session.text(i18nList.beGroupBan)
                return next()
            }

            let helpGroup = await getFile.FileReader(path.join(infoPath, 'help.json'))
            // let pluginData = await get.getpluginData(e.user_id)
            return session.send(await render.render(ctx, "help/help", {
                helpGroup: helpGroup,
                cmdHead: null,
                isMaster: session?.event?.member?.roles?.includes('owner'),
                background: getInfo.getill(getInfo.illlist[Math.floor(Math.random() * getInfo.illlist.length)]),
                theme: 'star'
            }))
        })
    }
}

export default help