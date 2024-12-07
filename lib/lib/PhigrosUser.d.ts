import GameProgress from './GameProgress';
import GameUser from './GameUser';
import GameSettings from './GameSettings';
export default interface PhigrosUser {
    sessionToken: string;
    saveInfo: any;
    gameRecord: any;
    saveUrl: URL;
    Recordver: number;
    gameProgress: GameProgress;
    gameuser: GameUser;
    gamesettings: GameSettings;
    chooseSave(choose: any): any;
    getSaveInfo(): any;
    buildRecord(): any;
}
/**
 * @param {String}  session
 * @param {string}  url
 * @param {Object} saveInfo 可能为Array，此时buildRecord返回1
 * @param {JSZip} savezip
 * @param {GameRecord} gameRecord
 */
export default class PhigrosUser {
    constructor(session: string);
}
