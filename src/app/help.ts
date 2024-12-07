import { Context } from 'koishi'
import path from 'node:path'
import { infoPath } from '../components/pluginPath'
import getFile from '../model/getFile'
import render from '../model/render'
import getInfo from '../model/getInfo'
import send from '../model/send'

export default class phiHelp {

    constructor(ctx: Context) {
        ctx.command('phi.help', '查看帮助', { authority: 0 }).action(async ({ session }) => {


            // let nick = getInfo.nicklist;
            // let newNick = {}
            // console.info(nick)

            // for (let song in nick) {
            //     newNick[getInfo.SongGetId(song)] = nick[song]
            // }

            // console.info(newNick)
            // getFile.SetFile(path.join(infoPath, 'nick1.yaml'), newNick)
            // return;
            if (await send.isBan(session, 'help')) {
                return;
            }

            let helpGroup = await getFile.FileReader(path.join(infoPath, 'help.json'))
            // let pluginData = await get.getpluginData(e.user_id)
            session.send(await render(ctx, "help", {
                helpGroup: helpGroup,
                cmdHead: null,
                isMaster: session?.event?.member?.roles?.includes('owner'),
                background: getInfo.getill(getInfo.illlist[Math.floor(Math.random() * getInfo.illlist.length)]),
                theme: 'star'
            }))
            return;
            // return '1';
        })
    }
}