export default interface GameProgress {
    isFirstRun: boolean;
    legacyChapterFinished: boolean;
    alreadyShowCollectionTip: boolean;
    alreadyShowAutoUnlockINTip: boolean;
    completed: string;
    songUpdateInfo: number;
    challengeModeRank: number;
    money: number[];
    unlockFlagOfSpasmodic: number;
    unlockFlagOfIgallta: number;
    unlockFlagOfRrharil: number;
    flagOfSongRecordKey: number;
    randomVersionUnlocked: number;
    chapter8UnlockBegin: boolean;
    chapter8UnlockSecondPhase: boolean;
    chapter8Passed: boolean;
    chapter8SongUnlocked: number;
}
export default class GameProgress {
    constructor(data: any);
}
