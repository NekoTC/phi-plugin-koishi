export default interface GameUser {
    name: string;
    version: number;
    showPlayerId: boolean;
    selfIntro: string;
    avatar: string;
    background: string;
}
export default class GameUser {
    constructor(data: string);
}
