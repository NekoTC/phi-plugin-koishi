import Chart from "./Chart"


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
    chart: { [key: string]: Chart }
}