export default class getFile {
    /**
     * 读取文件
     * @param filePath 完整路径
     * @param style 强制设置文件格式
     */
    static FileReader(filePath: string, style?: string | 'JSON' | 'YAML' | 'TXT'): any;
    static csvReader(filePath: string): Promise<any[]>;
    /**
     * 存储文件
     * @param {string} filepath 文件名，含后缀
     * @param {any} data 目标数据
     * @param {string|'TXT'|'JSON'|'YAML'} [style=undefined] 强制指定保存格式
     */
    static SetFile(filepath: string, data: any, style?: string | 'JSON' | 'YAML' | 'TXT'): boolean;
    static DelFile(path: string): boolean;
}
