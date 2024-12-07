import allFnc from "./class/allFnc";
import { Keys } from "koishi";
export default class getBanGroup {
    /**
     *
     * @param {string} group
     * @param {string} fnc
     * @returns
     */
    static redis(group: string, fnc: string): Promise<boolean>;
    /**
     *
     * @param {string} group
     * @param {string} fnc
     * @returns
     */
    static get(group: string, fnc: Keys<allFnc>): Promise<boolean>;
}
