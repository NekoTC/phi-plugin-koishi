import { Context, is } from "koishi";
import { fCompute, getInfo, getNotes, getSave, render, send } from "../model/index";
import { Config } from "..";
import { Level } from "../model/constNum";
import { logger } from "../components/Logger";
import { idString } from "../model/type/type";
import { i18nList } from "../components/i18n";


export default class phiUserInfo {
    constructor(ctx: Context, config: Config) {
        ctx.command('phi.data', '查看用户data').action(async ({ session }) => {

            if (await send.isBan(session, 'data')) {
                return;
            }

            let User = await getSave.getSave(session.userId)
            if (User) {
                if (User.gameProgress) {
                    let data = User.gameProgress.money
                    send.send_with_At(session, session.text(i18nList.userinfo.data) + `${data[4] ? `${data[4]}PB ` : ''}${data[3] ? `${data[3]}TB ` : ''}${data[2] ? `${data[2]}GB ` : ''}${data[1] ? `${data[1]}MB ` : ''}${data[0] ? `${data[0]}KB ` : ''}`)
                } else {
                    send.send_with_At(session, session.text(i18nList.common.haveToUpdate, { prefix: getInfo.getCmdPrefix(ctx, session) }))
                }
            } else {
                send.send_with_At(session, session.text(i18nList.common.haveToBind, { prefix: getInfo.getCmdPrefix(ctx, session) }))
            }
            return;
        })

        ctx.command('phi.info <message:text>', '查看用户信息').action(async ({ session }, arg) => {
            if (await send.isBan(session, 'info')) {
                return;
            }
            /**背景 */
            let bksong = arg
            if (bksong) {
                let tem = getInfo.fuzzysongsnick(bksong)[0]
                if (tem) {
                    bksong = getInfo.getill(tem)
                } else {
                    bksong = undefined
                }
            }
            if (!bksong) {
                bksong = getInfo.getill(getInfo.illlist[fCompute.randBetween(0, getInfo.illlist.length - 1)], 'blur')
            }

            let save = await send.getsave_result(ctx, session, 1.0)

            if (!save) {
                return;
            }
            
            let stats = await save.getStats()

            let money = save.gameProgress.money
            let userbackground = await fCompute.getBackground(save.gameuser.background)

            if (!userbackground) {
                send.send_with_At(session, session.text(i18nList.common.notFoundSong, [save.gameuser.background]))
                logger.error(`未找到${save.gameuser.background}对应的曲绘！`)
            }


            let gameuser = {
                avatar: getInfo.idgetavatar(save.gameuser.avatar) || 'Introduction',
                ChallengeMode: (save.saveInfo.summary.challengeModeRank - (save.saveInfo.summary.challengeModeRank % 100)) / 100,
                ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
                rks: save.saveInfo.summary.rankingScore,
                data: `${money[4] ? `${money[4]}PiB ` : ''}${money[3] ? `${money[3]}TiB ` : ''}${money[2] ? `${money[2]}GiB ` : ''}${money[1] ? `${money[1]}MiB ` : ''}${money[0] ? `${money[0]}KiB ` : ''}`,
                selfIntro: fCompute.convertRichText(save.gameuser.selfIntro),
                backgroundurl: userbackground,
                PlayerId: fCompute.convertRichText(save.saveInfo.PlayerId),
            }

            let user_data = await getSave.getHistory(session.userId)

            let rks_history_ = []
            let data_history_ = []
            let user_rks_data = user_data.rks
            let user_data_data = user_data.data
            let rks_range = [17, 0]
            let data_range = [1e9, 0]
            let rks_date = [new Date(user_rks_data[0].date).getTime(), 0]
            let data_date = [new Date(user_data_data[0].date).getTime(), 0]

            for (let i in user_rks_data) {
                user_rks_data[i].date = new Date(user_rks_data[i].date)
                if (i as any <= 1 || user_rks_data[i].value != rks_history_[rks_history_.length - 2].value) {
                    rks_history_.push(user_rks_data[i])
                    rks_range[0] = Math.min(rks_range[0], user_rks_data[i].value)
                    rks_range[1] = Math.max(rks_range[1], user_rks_data[i].value)
                } else {
                    rks_history_[rks_history_.length - 1].date = user_rks_data[i].date
                }
                rks_date[1] = user_rks_data[i].date.getTime()
            }


            for (let i in user_data_data) {
                let value = user_data_data[i].value
                let valueNum = (((value[4] * 1024 + value[3]) * 1024 + value[2]) * 1024 + value[1]) * 1024 + value[0]
                user_data_data[i].date = new Date(user_data_data[i].date)
                if (i as any <= 1 || user_data_data[i].value != data_history_[data_history_.length - 2].value) {
                    data_history_.push(user_data_data[i])
                    data_range[0] = Math.min(data_range[0], valueNum)
                    data_range[1] = Math.max(data_range[1], valueNum)
                } else {
                    data_history_[data_history_.length - 1].date = user_data_data[i].date
                }
                data_date[1] = user_data_data[i].date.getTime()
            }

            let rks_history = []
            let data_history = []

            for (let i in rks_history_) {

                let ni = Number(i)

                if (!rks_history_[i + 1]) break
                let x1 = range(rks_history_[ni].date, rks_date)
                let y1 = range(rks_history_[ni].value, rks_range)
                let x2 = range(rks_history_[ni + 1].date, rks_date)
                let y2 = range(rks_history_[ni + 1].value, rks_range)
                rks_history.push([x1, y1, x2, y2])
            }

            for (let i in data_history_) {

                let ni = Number(i)

                if (!data_history_[ni + 1]) break
                let x1 = range(data_history_[ni].date, data_date)
                let y1 = range(data_history_[ni].value, data_range)
                let x2 = range(data_history_[ni + 1].date, data_date)
                let y2 = range(data_history_[ni + 1].value, data_range)
                data_history.push([x1, y1, x2, y2])
            }


            let unit = ["KiB", "MiB", "GiB", "TiB", "Pib"]

            for (let i in [1, 2, 3, 4]) {
                if (Math.floor(data_range[0] / (Math.pow(1024, Number(i)))) < 1024) {
                    data_range[0] = `${Math.floor(data_range[0] / (Math.pow(1024, Number(i))))}${unit[i]}` as any
                }
            }

            for (let i in [1, 2, 3, 4]) {
                if (Math.floor(data_range[1] / (Math.pow(1024, Number(i)))) < 1024) {
                    data_range[1] = `${Math.floor(data_range[1] / (Math.pow(1024, Number(i))))}${unit[i]}` as any
                }
            }


            /**统计在要求acc>=i的前提下，玩家的rks为多少 */
            /**存档 */
            let acc_rksRecord = save.getRecord()
            /**phi列表 */
            let acc_rks_phi = save.findAccRecord(100)
            /**所有rks节点 */
            let acc_rks_data = []
            /**转换成坐标的节点 */
            let acc_rks_data_ = []
            /**rks上下界 */
            let acc_rks_range = [100, 0]

            /**原本b19中最小acc 要展示的acc序列 */
            let acc_rks_AccRange = [100]

            for (let i = 0; i < Math.min(acc_rksRecord.length, 19); i++) {
                acc_rks_AccRange[0] = Math.min(acc_rks_AccRange[0], acc_rksRecord[i].acc)
            }

            for (let i = acc_rks_AccRange[0]; i <= 100; i += 0.01) {
                let sum_rks = 0
                if (!acc_rksRecord[0]) break
                for (let j = 0; j < acc_rksRecord.length; j++) {
                    if (j >= 19) break
                    if (acc_rksRecord[j]?.acc < i) {
                        /**预处理展示的acc数字 */
                        acc_rks_AccRange.push(i)
                    }
                    while (acc_rksRecord[j]?.acc < i) {
                        acc_rksRecord.splice(j, 1)
                    }
                    if (acc_rksRecord[j]) {
                        sum_rks += acc_rksRecord[j].rks
                    } else {
                        break
                    }
                }
                // console.info(acc_rksRecord[0])
                let tem_rks = (sum_rks + (acc_rks_phi[0]?.rks || 0)) / 20
                acc_rks_data.push([i, tem_rks])
                acc_rks_range[0] = Math.min(acc_rks_range[0], tem_rks)
                acc_rks_range[1] = Math.max(acc_rks_range[1], tem_rks)
            }

            if (acc_rks_AccRange[acc_rks_AccRange.length - 1] < 100) {
                acc_rks_AccRange.push(100)
            }
            // console.info(acc_rks_AccRange)

            for (let i = 1; i < acc_rks_data.length; ++i) {
                if (acc_rks_data_[0] && acc_rks_data[i - 1][1] == acc_rks_data[i][1]) {
                    acc_rks_data_[acc_rks_data_.length - 1][2] = range(acc_rks_data[i][0], acc_rks_AccRange)
                } else {
                    acc_rks_data_.push([range(acc_rks_data[i - 1][0], acc_rks_AccRange), range(acc_rks_data[i - 1][1], acc_rks_range), range(acc_rks_data[i][0], acc_rks_AccRange), range(acc_rks_data[i][1], acc_rks_range)])
                }
            }
            // console.info(acc_rks_data_)

            /**处理acc显示区间，防止横轴数字重叠 */
            if (acc_rks_AccRange[0] == 100) {
                acc_rks_AccRange[0] = 0
            }
            let acc_length = (100 - acc_rks_AccRange[0])
            let min_acc = acc_rks_AccRange[0]
            /**要传的数组 */
            let acc_rks_AccRange_position = []
            while (100 - acc_rks_AccRange[acc_rks_AccRange.length - 2] < acc_length / 10) {
                acc_rks_AccRange.splice(acc_rks_AccRange.length - 2, 1)
            }
            acc_rks_AccRange_position.push([acc_rks_AccRange[0], 0])
            for (let i = 1; i < acc_rks_AccRange.length; i++) {
                while (acc_rks_AccRange[i] - acc_rks_AccRange[i - 1] < acc_length / 10) {
                    acc_rks_AccRange.splice(i, 1)
                }
                acc_rks_AccRange_position.push([acc_rks_AccRange[i], (acc_rks_AccRange[i] - min_acc) / acc_length * 100])
            }
            // console.info(acc_rks_AccRange_position)
            // console.info(acc_rks_data_)
            // console.info(acc_rks_range)

            let data = {
                gameuser: gameuser,
                userstats: stats,
                rks_history: rks_history,
                data_history: data_history,
                rks_range: rks_range,
                data_range: data_range,
                data_date: [fCompute.date_to_string(data_date[0]), fCompute.date_to_string(data_date[1])],
                rks_date: [fCompute.date_to_string(rks_date[0]), fCompute.date_to_string(rks_date[1])],
                acc_rks_data: acc_rks_data_,
                acc_rks_range: acc_rks_range,
                acc_rks_AccRange: acc_rks_AccRange_position,
                background: bksong,
            }
            send.send_with_At(session, await render(ctx, 'userinfo', data))
        })

        ctx.command('phi.lvsco <message:text>', '查询范围成绩').action(async ({ session }, arg) => {

            if (await send.isBan(session, 'lvscore')) {
                return;
            }


            let save = await send.getsave_result(ctx, session, 1.0)

            if (!save) {
                return;
            }

            /**匹配定数区间 */

            let { isask, range } = fCompute.match_request(arg)

            let unlockcharts = 0
            let totreal_score = 0
            let totacc = 0
            let totcharts = 0
            let totcleared = 0
            let totfc = 0
            let totphi = 0
            let tottot_score = 0
            let tothighest = 0
            let totlowest = 17
            let totsongs = 0
            let totRating = {
                F: 0,
                C: 0,
                B: 0,
                A: 0,
                S: 0,
                V: 0,
                FC: 0,
                phi: 0,
            }
            let totRank = {
                AT: 0,
                IN: 0,
                HD: 0,
                EZ: 0,
            }
            let unlockRank = {
                AT: 0,
                IN: 0,
                HD: 0,
                EZ: 0,
            }
            let unlocksongs = 0

            let Record = save.gameRecord


            for (let id in getInfo.ori_info) {
                let info = getInfo.ori_info[id]
                let vis = false
                for (let i in info.chart) {
                    let difficulty = info['chart'][i].difficulty
                    if (range[0] <= difficulty && difficulty <= range[1] && isask[Level.indexOf(i)]) {
                        ++totcharts
                        ++totRank[i]
                        if (!vis) {
                            ++totsongs
                            vis = true
                        }
                    }
                }
            }


            for (let i in Record) {
                let id = i as idString
                let info = getInfo.info(id)
                if (!info) continue
                let record = Record[id]
                let vis = false
                for (let lv in [0, 1, 2, 3]) {
                    if (!info.chart[Level[lv]]) continue
                    let difficulty = info.chart[Level[lv]].difficulty
                    if (range[0] <= difficulty && difficulty <= range[1] && isask[lv]) {

                        if (!record[lv]) continue

                        ++unlockcharts
                        ++unlockRank[Level[lv]]

                        if (!vis) {
                            ++unlocksongs
                            vis = true
                        }
                        if (record[lv].score >= 700000) {
                            ++totcleared
                        }
                        if (record[lv].fc || record[lv].score == 1000000) {
                            ++totfc
                        }
                        if (record[lv].score == 1000000) {
                            ++totphi
                        }
                        ++totRating[record[lv].Rating]
                        totacc += record[lv].acc
                        totreal_score += record[lv].score
                        tottot_score += 1000000

                        tothighest = Math.max(record[lv].rks, tothighest)
                        totlowest = Math.min(record[lv].rks, totlowest)
                    }
                }
            }

            let illustration = await fCompute.getBackground(save.gameuser.background)

            if (!illustration) {
                send.send_with_At(session, session.text(i18nList.common.notFoundSong, [save.gameuser.background]))
                logger.error(`未找到${save.gameuser.background}的曲绘！`)
            }

            let data = {
                tot: {
                    at: totRank.AT,
                    in: totRank.IN,
                    hd: totRank.HD,
                    ez: totRank.EZ,
                    songs: totsongs,
                    charts: totcharts,
                    score: tottot_score,
                },
                real: {
                    at: unlockRank.AT,
                    in: unlockRank.IN,
                    hd: unlockRank.HD,
                    ez: unlockRank.EZ,
                    songs: unlocksongs,
                    charts: unlockcharts,
                    score: totreal_score,
                },
                rating: {
                    tot: fCompute.rate(totreal_score, tottot_score, totfc == totcharts),
                    ...totRating,
                },
                range: {
                    bottom: range[0],
                    top: range[1],
                    left: range[0] / getInfo.MAX_DIFFICULTY * 100,
                    length: (range[1] - range[0]) / getInfo.MAX_DIFFICULTY * 100
                },
                illustration: illustration,
                highest: tothighest,
                lowest: totlowest,
                tot_cleared: totcleared,
                tot_fc: totfc,
                tot_phi: totphi,
                tot_acc: (totacc / totcharts),
                date: fCompute.date_to_string(save.saveInfo.modifiedAt.iso),
                progress_phi: Number((totphi / totcharts * 100).toFixed(2)),
                progress_fc: Number((totfc / totcharts * 100).toFixed(2)),
                avatar: getInfo.idgetavatar(save.gameuser.avatar),
                ChallengeMode: (save.saveInfo.summary.challengeModeRank - (save.saveInfo.summary.challengeModeRank % 100)) / 100,
                ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
                rks: save.saveInfo.summary.rankingScore,
                PlayerId: fCompute.convertRichText(save.saveInfo.PlayerId),
            }

            send.send_with_At(session, await render(ctx, 'lvsco', data))
        })

        ctx.command('phi.list <message:text>', '查询范围成绩列表').action(async ({ session }, arg) => {

            if (await send.isBan(session, 'list')) {
                return;
            }


            let save = await send.getsave_result(ctx, session)

            if (!save) {
                return;
            }



            /**EZ HD IN AT */
            let { isask, range, scoreAsk } = fCompute.match_request(arg)


            let Record = save.gameRecord

            let data = []

            for (let i in Record) {
                let id = i as idString
                let song = getInfo.idgetsong(id)
                if (!song) {
                    logger.warn('[phi-plugin]', id, '曲目无信息')
                    continue
                }
                let info = getInfo.info(id)
                let record = Record[id]
                for (let lv in [0, 1, 2, 3]) {
                    if (!info.chart[Level[lv]]) continue
                    let difficulty = info.chart[Level[lv]].difficulty
                    if (range[0] <= difficulty && difficulty <= range[1] && isask[lv]) {
                        if ((!record[lv] && !scoreAsk.NEW)) continue
                        if (record[lv] && !scoreAsk[record[lv].Rating.toUpperCase()]) continue
                        if (!record[lv]) {
                            record[lv] = {} as any
                        }
                        record[lv].suggest = save.getSuggest(id, Number(lv), 4)
                        data.push({ ...record[lv], ...info, illustration: getInfo.getill(id, 'low'), difficulty: difficulty, rank: Level[lv] })
                    }
                }
            }

            if (data.length > config.listScoreMaxNum) {
                send.send_with_At(session, session.text(i18nList.common.listToLong, [data.length, config.listScoreMaxNum]))
                return;
            }

            data.sort((a, b) => {
                return (b.difficulty || 0) - (a.difficulty || 0)
            })

            let plugin_data = getNotes.get(session.userId)

            let request = []
            request.push(`${range[0]} - ${range[1]}`)



            send.send_with_At(session, await render(ctx, 'list', {
                head_title: "成绩筛选",
                song: data,
                background: getInfo.getill(getInfo.illlist[fCompute.randBetween(0, getInfo.illlist.length - 1)]),
                theme: plugin_data?.plugin_data?.theme || 'star',
                PlayerId: save.saveInfo.PlayerId,
                Rks: Number(save.saveInfo.summary.rankingScore).toFixed(4),
                Date: save.saveInfo.updatedAt,
                ChallengeMode: (save.saveInfo.summary.challengeModeRank - (save.saveInfo.summary.challengeModeRank % 100)) / 100,
                ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
                request: request
            }))
        })

    }
}


/**
 * 计算百分比
 * @param {Number} value 值
 * @param {Array} range 区间数组 (0,..,1)
 * @returns 百分数，单位%
 */
function range(value: number, range: number[]): number {
    if (range[0] == range[range.length - 1]) {
        return 50
    } else {
        return (value - range[0]) / (range[range.length - 1] - range[0]) * 100
    }
}