import { HttpClient, HttpRequest } from './http';
export default class SaveManager {
    static baseUrl: string;
    static client: HttpClient;
    static globalRequest: HttpRequest;
    static fileTokens: string;
    static fileCallback: string;
    static save: string;
    static userInfo: string;
    static files: string;
    static getPlayerId(session: string): Promise<any>;
    /**
     *
     * @param {String} session
     * @returns Array
     */
    static saveArray(session: string): Promise<any>;
    /**
     *
     * @param {String} session
     * @returns Array|Objct
     */
    static saveCheck(session: string): Promise<any[]>;
    static key: string;
    static iv: string;
    static decrypt(data: string): Promise<any>;
    static encrypt(data: string): Promise<any>;
}
