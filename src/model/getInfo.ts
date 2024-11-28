import readFile from './getFile'
import { DlcInfoPath, imgPath, infoPath, originalIllPath, ortherIllPath } from '../components/pluginPath'
import path from 'path'
import SongsInfo from './class/SongsInfo'
import fs from 'fs'
import { Level, MAX_DIFFICULTY } from './constNum'
import { Context } from 'koishi'
import { Logger } from '../components/Logger'
import { config } from '../components/Config'


let getInfo = new class getInfo {

    /**默认别名,以id为key */
    nicklist: { [key: string]: string[] }
    /**以别名为key */
    songnick: { [key: string]: string[] }
    /**扩增曲目信息 */
    DLC_Info: { [key: string]: string[] }
    /**头像id */
    avatarid: { [key: string]: string }
    /**Tips */
    tips: string[]
    /**原版信息 */
    ori_info: { [key: string]: any }
    /**通过id获取曲名 */
    songsid: { [key: string]: string }
    /**原曲名称获取id */
    idssong: { [key: string]: string }
    /**含有曲绘的曲目列表，id */
    illlist: string[]
    /**SP信息 */
    sp_info: { [key: string]: any }
    /**难度映射 */
    Level: string[]
    /**最高定数 */
    MAX_DIFFICULTY: number
    /**所有曲目曲名列表 */
    idlist: string[]
    /**note统计 */
    notesInfo: { [key: string]: any }
    /**今日人品 */
    word: { [key: string]: string }

    // constructor() {
    //     this.init()
    // }

    /**
     * 
     */
    async init() {

        /**默认别名,以id为key */
        this.nicklist = await readFile.FileReader(path.join(infoPath, 'nicklist.yaml'))
        /**以别名为key */
        this.songnick = {}
        for (let id in this.nicklist) {
            for (let j in this.nicklist[id]) {
                if (this.songnick[this.nicklist[id][j]]) {
                    this.songnick[this.nicklist[id][j]].push(id)
                } else {
                    this.songnick[this.nicklist[id][j]] = [id]
                }
            }
        }

        /**扩增曲目信息 */
        this.DLC_Info = {}
        let files = fs.readdirSync(DlcInfoPath).filter(file => file.endsWith('.json'))
        files.forEach(async (file) => {
            this.DLC_Info[path.basename(file, '.json')] = await readFile.FileReader(path.join(DlcInfoPath, file))
        })



        /**头像id */
        let csv_avatar = await readFile.FileReader(path.join(infoPath, 'avatar.csv'))
        this.avatarid = {}
        for (let i in csv_avatar) {
            this.avatarid[csv_avatar[i].id] = csv_avatar[i].name
        }

        /**
         * Tips []
         */
        this.tips = await readFile.FileReader(path.join(infoPath, 'tips.yaml'))


        /**原版信息 */
        this.ori_info = {}
        /**通过id获取曲名 */
        this.songsid = {}
        /**原曲名称获取id */
        this.idssong = {}
        /**含有曲绘的曲目列表，id */
        this.illlist = []

        /**SP信息 */
        this.sp_info = await readFile.FileReader(path.join(infoPath, 'spinfo.json'))
        for (let i in this.sp_info) {
            if (this.sp_info[i]['illustration_big']) {
                this.illlist.push(this.sp_info[i].song)
            }
        }



        /**难度映射 */
        this.Level = Level

        /**最高定数 */
        this.MAX_DIFFICULTY = 0

        /**所有曲目id列表 */
        this.idlist = []

        /**note统计 */
        this.notesInfo = await readFile.FileReader(path.join(infoPath, 'notesInfo.json'))

        /**信息文件 */
        let CsvInfo = await readFile.FileReader(path.join(infoPath, 'info.csv'))
        let Csvdif = await readFile.FileReader(path.join(infoPath, 'difficulty.csv'))
        let Jsoninfo = await readFile.FileReader(path.join(infoPath, 'infolist.json'))
        // console.info(CsvInfo, Csvdif, Jsoninfo)
        for (let i in CsvInfo) {
            let id = CsvInfo[i].id
            this.songsid[id + '.0'] = CsvInfo[i].song
            this.idssong[CsvInfo[i].song] = id + '.0'

            this.ori_info[id] = Jsoninfo[id]
            if (!Jsoninfo[id]) {
                this.ori_info[id] = { song: CsvInfo[i].song, chapter: '', bpm: '', length: '', chart: {} }
                console.info(`[phi-plugin]曲目详情未更新：${CsvInfo[i].song}`)
            }
            this.ori_info[id].song = CsvInfo[i].song
            this.ori_info[id].id = id
            this.ori_info[id].composer = CsvInfo[i].composer
            this.ori_info[id].illustrator = CsvInfo[i].illustrator
            this.ori_info[id].chart = {}
            for (let j in this.Level) {
                const level = this.Level[j]
                if (CsvInfo[i][level]) {
                    if (!this.ori_info[id].chart[level]) {
                        this.ori_info[id].chart[level] = {}
                    }
                    this.ori_info[id].chart[level].charter = CsvInfo[i][level]
                    this.ori_info[id].chart[level].difficulty = Csvdif[i][level]
                    this.ori_info[id].chart[level].tap = this.notesInfo[id][level].tap
                    this.ori_info[id].chart[level].drag = this.notesInfo[id][level].drag
                    this.ori_info[id].chart[level].hold = this.notesInfo[id][level].hold
                    this.ori_info[id].chart[level].flicke = this.notesInfo[id][level].flicke
                    this.ori_info[id].chart[level].combo = this.notesInfo[id][level].tap + this.notesInfo[id][level].drag + this.notesInfo[id][level].hold + this.notesInfo[id][level].flicke

                    /**最高定数 */
                    this.MAX_DIFFICULTY = Math.max(this.MAX_DIFFICULTY, Number(Csvdif[i][level]))
                }
            }
            this.illlist.push(id)
            this.idlist.push(id)
        }


        if (this.MAX_DIFFICULTY != MAX_DIFFICULTY) {
            console.error('[phi-plugin] MAX_DIFFICULTY 常量未更新，请回报作者！', MAX_DIFFICULTY, this.MAX_DIFFICULTY)
        }


        /**jrrp */
        this.word = await readFile.FileReader(path.join(infoPath, 'jrrp.json'))

    }

    /**
     * 返回原曲信息
     * @param {} [id=undefined] 原曲id
     * @returns {SongsInfo}
     */
    info(id: string): SongsInfo | {} {
        let result = { ...this.ori_info, ...this.sp_info }
        let info = result[id]
        if (!info) {
            return {}
        }
        return {
            /**id */
            id: info.id,
            /**曲目 */
            song: info.song,
            /**小型曲绘 */
            illustration: info.illustration,
            /**原版曲绘 */
            illustration_big: this.getill(info.song),
            /**是否不参与猜字母 */
            can_t_be_letter: info.can_t_be_letter || true,
            /**是否不参与猜曲绘 */
            can_t_be_guessill: info.can_t_be_guessill || true,
            /**章节 */
            chapter: info.chapter,
            /**bpm */
            bpm: info.bpm,
            /**作曲 */
            composer: info.composer,
            /**时长 */
            length: info.length,
            /**画师 */
            illustrator: info.illustrator,
            /**特殊信息 */
            spinfo: info.spinfo,
            /**谱面详情 */
            chart: info.chart
        }


    }

    /**
     * 返回所有曲目信息
     * @returns 
     */
    all_info() {
        return { ...this.ori_info, ...this.sp_info }
    }

    /**
    * 根据参数模糊匹配返回原曲名称
    * @param {string} mic 别名
    * @param {number} [Distance=0.85] 阈值 猜词0.95
    * @returns 原曲id数组，按照匹配程度降序
    */
    fuzzysongsnick(mic: string, Distance: number = 0.85) {

        const fuzzyMatch = (str1, str2) => {
            if (str1 == str2) {
                return 1
            }
            //首先第一次去除空格和其他符号，并转换为小写
            const pattern = /[\s~`!@#$%^&*()\-=_+\]{}|;:'",<.>/?！￥…（）—【】、；‘：“”，《。》？↑↓←→]/g
            const formattedStr1 = str1.replace(pattern, '').toLowerCase()
            const formattedStr2 = str2.replace(pattern, '').toLowerCase()

            //第二次再计算str1和str2之间的JaroWinkler距离
            const distance = this.jaroWinklerDistance(formattedStr1, formattedStr2)

            //如果距离大于等于某个阈值，则认为匹配
            //可以根据实际情况调整这个阈值
            return distance
        }

        /**按照匹配程度排序 */
        let result = []

        let allinfo = this.all_info()

        for (let std in this.songnick) {
            let dis = fuzzyMatch(mic, std)
            if (dis >= Distance) {
                for (let i in this.songnick[std]) {
                    result.push({ id: this.songnick[std][i], dis: dis })
                }
            }
        }
        for (let id in allinfo) {
            let std = allinfo[id].song
            let dis = fuzzyMatch(mic, std)
            if (dis >= Distance) {
                result.push({ id: id, dis: dis })
            }
        }

        result = result.sort((a, b) => b.dis - a.dis)

        let all = []
        for (let i in result) {

            if (all.includes(result[i].song)) continue //去重
            /**如果有完全匹配的曲目则放弃剩下的 */
            if (result[0].dis == 1 && result[i].dis < 1) break


            all.push(result[i].id)
        }

        return all
    }

    //采用Jaro-Winkler编辑距离算法来计算str间的相似度，复杂度为O(n)=>n为较长的那个字符出的长度
    jaroWinklerDistance(s1: string, s2: string): number {
        let m = 0 //匹配的字符数量

        //如果任任一字符串为空则距离为0
        if (s1.length === 0 || s2.length === 0) {
            return 0
        }

        //字符串完全匹配，距离为1
        if (s1 === s2) {
            return 1
        }

        let range = (Math.floor(Math.max(s1.length, s2.length) / 2)) - 1, //搜索范围
            s1Matches = new Array(s1.length),
            s2Matches = new Array(s2.length)

        //查找匹配的字符
        for (let i = 0; i < s1.length; i++) {
            let low = (i >= range) ? i - range : 0,
                high = (i + range <= (s2.length - 1)) ? (i + range) : (s2.length - 1)

            for (let j = low; j <= high; j++) {
                if (s1Matches[i] !== true && s2Matches[j] !== true && s1[i] === s2[j]) {
                    ++m
                    s1Matches[i] = s2Matches[j] = true
                    break
                }
            }
        }

        //如果没有匹配的字符，那么捏Jaro距离为0
        if (m === 0) {
            return 0
        }

        //计算转置的数量
        let k = 0, n_trans = 0
        for (let i = 0; i < s1.length; i++) {
            if (s1Matches[i] === true) {
                let j
                for (j = k; j < s2.length; j++) {
                    if (s2Matches[j] === true) {
                        k = j + 1
                        break
                    }
                }

                if (s1[i] !== s2[j]) {
                    ++n_trans
                }
            }
        }

        //计算Jaro距离
        let weight = (m / s1.length + m / s2.length + (m - (n_trans / 2)) / m) / 3,
            l = 0,
            p = 0.1

        //如果Jaro距离大于0.7，计算Jaro-Winkler距离
        if (weight > 0.7) {
            while (s1[l] === s2[l] && l < 4) {
                ++l
            }

            weight = weight + l * p * (1 - weight)
        }

        return weight
    }


    /**
     * id获取曲绘，返回地址
     * @param {string} id id
     * @param {'common'|'blur'|'low'} [kind='common'] 清晰度
     * @return {string} 网址或文件地址
    */
    getill(id: string, kind: 'common' | 'blur' | 'low' = 'common'): string {
        let songsinfo = this.all_info()[id]
        let ans = songsinfo?.illustration_big
        let reg = /^(?:(http|https|ftp):\/\/)((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i
        if (ans && !reg.test(ans)) {
            ans = path.join(ortherIllPath, ans)
        } else if (this.ori_info[id]) {
            if (fs.existsSync(path.join(originalIllPath, id.replace(/.0$/, '.png')))) {
                ans = path.join(originalIllPath, id.replace(/.0$/, '.png'))
            } else if (fs.existsSync(path.join(originalIllPath, "ill", id.replace(/.0$/, '.png')))) {
                if (kind == 'common') {
                    ans = path.join(originalIllPath, "ill", id.replace(/.0$/, '.png'))
                } else if (kind == 'blur') {
                    ans = path.join(originalIllPath, "illBlur", id.replace(/.0$/, '.png'))
                } else if (kind == 'low') {
                    ans = path.join(originalIllPath, "illLow", id.replace(/.0$/, '.png'))
                }
            }
            try {
                fs.accessSync(ans)
            } catch (e) {
                ans = null
            }
            if (!ans) {
                if (kind == 'common') {
                    ans = `${config.onLinePhiIllUrl}/ill/${id.replace(/.0$/, '.png')}`
                } else if (kind == 'blur') {
                    ans = `${config.onLinePhiIllUrl}/illBlur/${id.replace(/.0$/, '.png')}`
                } else if (kind == 'low') {
                    ans = `${config.onLinePhiIllUrl}/illLow/${id.replace(/.0$/, '.png')}`
                }
            }
        }
        if (!ans) {
            ans = path.join(imgPath, 'phigros.png')
        }
        return ans
    }

    /**
     * 返回章节封面 url
     * @param {string} name 标准章节名
     */
    getChapIll(name: string) {
        if (fs.existsSync(path.join(originalIllPath, "chap", `${name}.png`))) {
            return path.join(originalIllPath, "chap", `${name}.png`)
        } else {
            return `https://gitee.com/Steveeee-e/phi-plugin-ill/raw/main/chap/${name}.png`
        }
    }

    /**
     * 通过id获得头像文件名称
     * @param {string} id 
     * @returns file name
     */
    idgetavatar(id: string) {
        if (this.avatarid[id]) {
            return this.avatarid[id]
        } else {
            return 'Introduction'
        }
    }

    /**
     * 根据曲目id获取原名
     * @param {String} id 曲目id
     * @returns 原名
     */
    idgetsong(id: string) {
        return this.songsid[id]
    }

    /**
     * 通过原曲曲目获取曲目id
     * @param {String} song 原曲曲名
     * @returns 曲目id
     */
    SongGetId(song: string) {
        return this.idssong[song]
    }

}()

getInfo.init()

export default getInfo