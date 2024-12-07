export default interface Summary {
    updatedAt: string;
    saveVersion: number;
    challengeModeRank: number;
    rankingScore: number;
    gameVersion: number;
    avatar: string;
    cleared: number[];
    fullCombo: number[];
    phi: number[];
}
export default class Summary {
    constructor(summary: any);
}
