import { Context, h, Keys, Session } from "koishi";
import { Config } from "..";
import send from "../model/send";
import getQRcode from "../lib/getQRcode";
import fCompute from "../model/fCompute";
import { logger } from "../components/Logger";
import PhigrosUser from "../lib/PhigrosUser";
import Save from "../model/class/Save";
import buildingRecord from "../model/getUpdate";
import getSave from "../model/getSave";
import getPluginData from "../model/getPluginData";
import scoreHistory from "../model/class/scoreHistory";
import getInfo from "../model/getInfo";
import render from "../model/render";
import { idString, levelKind } from "../model/type/type";
import { i18nList } from "../components/i18n";


export default class phiSstk {
    constructor(ctx: Context, config: Config) {

        ctx.command('phi.bind <string>', '绑定sessionToken').action(async ({ session }, token) => {

            if (await send.isBan(session, 'help')) {
                return;
            }

            let sessionToken = token?.match(/[0-9a-zA-Z]{25}|qrcode/g)[0]

            if (!sessionToken) {
                return session.text(i18nList.bind.haveToInputToken, { prefix: getInfo.getCmdPrefix(ctx, session) })
            }

            if (sessionToken == "qrcode") {
                let request = await getQRcode.getRequest();
                let qrCodeMsg;
                if (config.TapTapLoginQRcode) {
                    qrCodeMsg = await send.send_with_At(session, h.image(await getQRcode.getQRcode(request.data.qrcode_url), 'image/png') + session.text(i18nList.bind.QRCode), false, 60);
                } else {
                    qrCodeMsg = await send.send_with_At(session, request.data.qrcode_url + session.text(i18nList.bind.QRCode), false, 60);
                }
                let t1 = new Date();
                let result;
                /**是否发送过已扫描提示 */
                let flag = false;
                while ((new Date()).getTime() - t1.getTime() < request.data.expires_in * 1000) {
                    result = await getQRcode.checkQRCodeResult(request);
                    if (!result.success) {
                        if (result.data.error == "authorization_waiting" && !flag) {
                            send.send_with_At(session, session.text(i18nList.bind.QRCodeBeUsed), false, 10);
                            fCompute.recallMsg(session, qrCodeMsg)
                            flag = true;
                        }
                    } else {
                        break
                    }
                    await fCompute.sleep(2000)
                }

                if (!result.success) {
                    send.send_with_At(session, session.text(i18nList.bind.QRCodeTimeout));
                    return;
                }
                try {
                    sessionToken = await getQRcode.getSessionToken(result);
                } catch (err) {
                    logger.error(err)
                    send.send_with_At(session, session.text(i18nList.bind.QRCodeFail));
                    return;
                }
            }

            send.send_with_At(session, session.text(i18nList.bind.tipProtectToken, { prefix: getInfo.getCmdPrefix(ctx, session) }), false, 10)


            if (!config.isGuild) {
                send.send_with_At(session, session.text(i18nList.bind.ing), false, 5)
            }

            try {
                await build(ctx, session, sessionToken, config)
            } catch (error) {
                logger.error(error)
                send.send_with_At(session, session.text(i18nList.bind.failed, [error]))
            }
        })

        ctx.command('phi.update', '更新存档').action(async ({ session }) => {

            if (await send.isBan(session, 'update')) {
                return null
            }

            let token = await getSave.get_user_token(session.userId)
            if (!token) {
                send.send_with_At(session, session.text(i18nList.common.haveToBind, { prefix: getInfo.getCmdPrefix(ctx, session) }))
                return null
            }

            if (!config.isGuild || !session.guild) {
                send.send_with_At(session, session.text(i18nList.bind.ing), true, 5)
            }
            try {
                await build(ctx, session, token, config)
            } catch (error) {
                logger.error(error)
                send.send_with_At(session, session.text(i18nList.bind.failed, [error]))
            }

            return null
        })

        ctx.command('phi.unbind', '解绑').action(async ({ session }) => {

            if (await send.isBan(session, 'unbind')) {
                return;
            }


            if (!getSave.get_user_token(session.userId)) {
                send.send_with_At(session, session.text(i18nList.common.haveToBind, { prefix: getInfo.getCmdPrefix(ctx, session) }))
                return;
            }

            send.send_with_At(session, session.text(i18nList.bind.unbind))

            let res = await session.prompt(30000)

            if (res.includes(session.text(i18nList.bind.unbindKeyWord))) {
                let flag = true
                try {
                    getSave.delSave(session.userId)
                } catch (err) {
                    send.send_with_At(session, err)
                    flag = false
                }
                try {
                    let pluginData = await getPluginData.get(session.userId)

                    if (pluginData) {
                        if (pluginData.plugin_data) {
                            pluginData.plugin_data.task = []
                        }
                        await getPluginData.put(session.userId, pluginData)
                    }
                    getSave.del_user_token(session.userId)
                } catch (err) {
                    send.send_with_At(session, err)
                    flag = false
                }
                if (flag) {
                    send.send_with_At(session, session.text(i18nList.bind.unbindSuccess))
                } else {
                    send.send_with_At(session, session.text(i18nList.common.haveToBind, { prefix: getInfo.getCmdPrefix(ctx, session) }))
                }
            } else {
                send.send_with_At(session, session.text(i18nList.bind.unbindCancel))
            }

            return;
        })

        ctx.command('phi.clear', '清除全部数据').action(async ({ session }) => {
            send.send_with_At(session, session.text(i18nList.bind.clear))
            let res = await session.prompt(30000)
            if (res.includes(session.text(i18nList.bind.unbindKeyWord))) {
                let flag = true
                try {
                    getSave.delSave(session.userId)
                } catch (err) {
                    send.send_with_At(session, err)
                    flag = false
                }
                try {
                    getPluginData.del(session.userId)
                } catch (err) {
                    send.send_with_At(session, err)
                    flag = false
                }
                if (flag) {
                    send.send_with_At(session, session.text(i18nList.bind.unbindSuccess))
                }
            } else {
                send.send_with_At(session, session.text(i18nList.bind.unbindCancel))
            }
        })

        ctx.command('phi.sessionToken', '获取sessionToken').action(async ({ session }) => {

            if (session.guild) {
                send.send_with_At(session, session.text(i18nList.common.turnToPrivate))
                return;
            }

            let save = await send.getsave_result(ctx, session)
            if (!save) {
                send.send_with_At(session, session.text(i18nList.common.haveToBind, { prefix: getInfo.getCmdPrefix(ctx, session) }))
                return;
            }

            send.send_with_At(session, `PlayerId: ${fCompute.convertRichText(save.saveInfo.PlayerId, true)}\nsessionToken: ${save.sessionToken}\nObjectId: ${save.saveInfo.objectId}\nId: ${session.userId}`)

        })
    }
}

async function build(ctx: Context, session: Session, sessionToken: string, config: Config) {
    let User: PhigrosUser | Save
    try {
        User = new PhigrosUser(sessionToken)
    } catch (err) {
        logger.error(`[phi-plugin]绑定sessionToken错误`, err)
        send.send_with_At(session, session.text(i18nList.bind.errToken, { prefix: getInfo.getCmdPrefix(ctx, session) }), false, 10)
        return true
    }

    /**记录存档rks,note变化 */
    let added_rks_notes: any = await buildingRecord(ctx, session, User)
    if (!added_rks_notes) {
        return true
    }

    if (added_rks_notes[0]) added_rks_notes[0] = `${added_rks_notes[0] > 0 ? '+' : ''}${added_rks_notes[0] >= 1e-4 ? added_rks_notes[0].toFixed(4) : ''}`
    if (added_rks_notes[1]) added_rks_notes[1] = `${added_rks_notes[1] > 0 ? '+' : ''}${added_rks_notes[1]}`


    /**图片 */

    /**标记数据中含有的时间 */
    let time_vis: { [key: string]: number } = {}

    /**总信息 */
    let tot_update = []


    let now = new Save(User)
    let pluginData = getPluginData.get(session.userId)
    let saveHistory = await getSave.getHistory(session.userId)

    // const RecordErr = now.checkRecord()

    // if (RecordErr) {
    //     send.send_with_At(e, '[测试功能，概率有误，暂时不清楚错误原因]\n请注意，你的存档可能存在一些问题：\n' + RecordErr)
    // }

    for (let id in saveHistory.scoreHistory) {
        let tem = saveHistory.scoreHistory[id]
        for (let level in tem) {
            let history: any[] = tem[level]
            if (!history) continue
            for (let i = 0; i < history.length; ++i) {
                let score_date = fCompute.date_to_string(scoreHistory.date(history[i]))
                let score_info = scoreHistory.extend(id as idString, level as levelKind, history[i], history[i - 1])
                if (time_vis[score_date] == undefined) {
                    time_vis[score_date] = tot_update.length
                    tot_update.push({ date: score_date, color: fCompute.getRandomBgColor(), update_num: 0, song: [] })
                }
                ++tot_update[time_vis[score_date]].update_num
                tot_update[time_vis[score_date]].song.push(score_info)
            }
        }
    }

    let newnum: number = tot_update[time_vis[fCompute.date_to_string(now.saveInfo.modifiedAt.iso)]]?.update_num || 0

    tot_update.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    /**实际显示的数量 */
    let show = 0
    /**每日显示上限 */
    const DayNum = Math.max(config.HistoryDayNum, 2)
    /**显示日期上限 */
    const DateNum = config.HistoryDateNum
    /**总显示上限 */
    const TotNum = config.HistoryScoreNum



    for (let d in tot_update) {
        let date = Number(d)
        /**天数上限 */
        if (date >= DateNum || TotNum < show + Math.min(DayNum, tot_update[date].update_num)) {
            tot_update.splice(date, tot_update.length)
            break
        }

        /**预处理每日显示上限 */
        tot_update[date].song.sort((a: any, b: any) => { return b.rks_new - a.rks_new })

        tot_update[date].song = tot_update[date].song.slice(0, Math.min(DayNum, TotNum - show))


        /**总上限 */
        show += tot_update[date].song.length

    }

    /**预分行 */
    let box_line = []

    box_line[box_line.length - 1]

    /**循环中当前行的数量 */
    let line_num = 0


    line_num = 5
    let flag = false

    while (tot_update.length) {
        if (line_num == 5) {
            if (flag) {
                box_line.push([{ color: tot_update[0].color, song: tot_update[0].song.splice(0, 5) }])
            } else {
                box_line.push([{ date: tot_update[0].date, color: tot_update[0].color, song: tot_update[0].song.splice(0, 5) }])
            }
            let tem = box_line[box_line.length - 1]
            line_num = tem[tem.length - 1].song.length
        } else {
            let tem = box_line[box_line.length - 1]
            if (flag) {
                tem.push({ color: tot_update[0].color, song: tot_update[0].song.splice(0, 5 - line_num) })
            } else {
                tem.push({ date: tot_update[0].date, color: tot_update[0].color, song: tot_update[0].song.splice(0, 5 - line_num) })

            }
            line_num += tem[tem.length - 1].song.length
        }
        let tem = box_line[box_line.length - 1]
        tem[tem.length - 1].width = comWidth(tem[tem.length - 1].song.length)
        flag = true
        if (!tot_update[0].song.length) {
            tem[tem.length - 1].update_num = tot_update[0].update_num
            tot_update.shift()
            flag = false
        }
    }

    /**添加任务信息 */
    let task_data = pluginData?.plugin_data?.task
    let task_time = fCompute.date_to_string(pluginData?.plugin_data?.task_time)

    /**添加曲绘 */
    if (task_data) {
        for (let i in task_data) {
            if (task_data[i]) {
                task_data[i].illustration = getInfo.getill(task_data[i].id)
                if (task_data[i].request.type == 'acc') {
                    task_data[i].request.value = task_data[i].request.value.toFixed(2) + '%'
                    if (task_data[i].request.value.length < 6) {
                        task_data[i].request.value = '0' + task_data[i].request.value
                    }
                }
            }
        }
    }

    let user_data = await getSave.getHistory(session.userId)
    let { rks_history, rks_date, rks_range } = user_data.getRksAndDataLine()

    let data = {
        PlayerId: fCompute.convertRichText(now.saveInfo.PlayerId),
        Rks: Number(now.saveInfo.summary.rankingScore).toFixed(4),
        Date: now.saveInfo.updatedAt,
        ChallengeMode: (now.saveInfo.summary.challengeModeRank - (now.saveInfo.summary.challengeModeRank % 100)) / 100,
        ChallengeModeRank: now.saveInfo.summary.challengeModeRank % 100,
        background: getInfo.getill(getInfo.illlist[Math.floor((Math.random() * (getInfo.illlist.length - 1)))]),
        box_line: box_line,
        update_ans: newnum ? session.text(i18nList.bind.updated, [newnum]) : session.text(i18nList.bind.noUpdate),
        Notes: pluginData.plugin_data ? pluginData.plugin_data.money : 0,
        show: show,
        tips: getInfo.tips[Math.floor((Math.random() * (getInfo.tips.length - 1)) + 1)],
        task_data: task_data,
        task_time: task_time,
        dan: await getSave.getDan(session.userId),
        added_rks_notes: added_rks_notes,
        theme: pluginData?.plugin_data?.theme || 'star',
        rks_date: [fCompute.date_to_string(rks_date[0]), fCompute.date_to_string(rks_date[1])],
        rks_history, rks_range,
    }

    send.send_with_At(session, `PlayerId: ${fCompute.convertRichText(now.saveInfo.PlayerId, true)}` + await render(ctx, 'update', data))

    return false
}

/**计算/update宽度 */
function comWidth(num: number) {
    return num * 135 + 20 * num - 20
}