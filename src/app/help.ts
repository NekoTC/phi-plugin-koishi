import { Context, h, Schema } from 'koishi'
import { } from 'koishi-plugin-puppeteer'
import path from 'node:path'
import { pluginResources } from '../model/path'
import { Config } from '..'
import getFile from '../model/getFile'
import render from '../model/render'
import getInfo from '../model/getInfo'

class help {

    constructor(ctx: Context, config: Config) {
        ctx.middleware(async (session, next) => {
            if (new RegExp(`/\\s*help`).test(session.content)) {

                let head = config.cmdhead
                let helpGroup = getFile.FileReader(path.join(pluginResources, 'help.json'))
                head = head.match(RegExp(head))[0]
                session.send(await render.render(ctx, "help/help", {
                    helpGroup: helpGroup,
                    cmdHead: head || null,
                    isMaster: session?.event?.member?.roles?.includes('owner'),
                    background: getInfo.getill(getInfo.illlist[Math.floor(Math.random() * getInfo.illlist.length)]),
                    theme: 'star'
                }))
                return;
            } else {
                return next()
            }
        })
    }
}

namespace help {

}




export default help