export default interface GameSettings {
    chordSupport: boolean;
    fcAPIndicator: boolean;
    enableHitSound: boolean;
    lowResolutionMode: boolean;
    deviceName: string;
    bright: number;
    musicVolume: number;
    effectVolume: number;
    hitSoundVolume: number;
    soundOffset: number;
    noteScale: number;
}
export default class GameSettings {
    constructor(data: string);
}
