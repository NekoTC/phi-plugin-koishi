
export default class Chart {

    level: number
    difficulty: number
    combo: number
    charter: string

    constructor(data: any) {
        this.level = Number(data.level)
        this.difficulty = Number(data.difficulty)
        this.combo = Number(data.combo)
        this.charter = data.charter
    }
}