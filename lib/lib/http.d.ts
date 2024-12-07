interface HttpClient {
    request: HttpRequest;
}
declare class HttpClient {
    constructor();
    /**
     *
     * @param {*} fetch_s_return response
     * @param {*} unknow
     * @returns response s json body
     */
    send(response: any): Promise<any>;
}
interface HttpRequest {
    url: URL;
    method: string;
    headers: Record<string, string>;
}
declare class HttpRequest {
    constructor();
    /**
     *
     * @param {String}  url
     * @returns Builder
     */
    uri(url: string): this;
    header(name: string, value: string): this;
    copy(): HttpRequest & this;
    DELETE(): this;
    GET(): this;
    build(): Promise<import("node-fetch").Response>;
}
export { HttpClient, HttpRequest };
