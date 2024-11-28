import getInfo from "../getInfo.js"
import Chart from "./Chart"

export default class SongsInfo {
    /**
     * @param {{
     * song:string,
     * illustration:string,
     * illustration_big:string,
     * chapter:string,
     * bpm:string,
     * composer:string,
     * length:string,
     * illustrator:string,
     * spinfo:string,
     * chart: Chart,
     * can_t_be_letter: boolean,
     * can_t_be_guessill: boolean,
     * }} data 原始数据
     */
}

export default interface SongsInfo {
    id: number
    song: string
    illustration: string
    illustration_big: string
    can_t_be_letter: boolean
    can_t_be_guessill: boolean
    chapter: string
    bpm: string
    composer: string
    length: string
    illustrator: string
    spinfo: string
    chart: { [String]: Chart }
}