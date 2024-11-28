import fs from 'node:fs';
import csv from 'csvtojson';
import path from 'node:path';
import YAML from 'yaml';
import { Logger } from '../components/Logger';


class readFile {

    /**
     * 读取文件
     * @param filePath 完整路径
     * @param style 强制设置文件格式
     */
    async FileReader(filePath: string, style: string | 'JSON' | 'YAML' | 'CSV' | 'TXT' = undefined) {
        try {
            if (!fs.existsSync(filePath)) { return false }
            // console.info(filePath)
            if (!style) {
                style = path.extname(filePath).toUpperCase().replace('.', '')
            }
            switch (style) {
                case 'JSON': {
                    return JSON.parse(fs.readFileSync(filePath, 'utf8'))
                }
                case 'CSV': {
                    return (await csv().fromString(fs.readFileSync(filePath, 'utf8')))
                }
                case 'TXT': {
                    return fs.readFileSync(filePath, 'utf8')
                }
                default: {

                    return fs.readFileSync(filePath, 'utf8')
                }
            }
        } catch (error) {
            Logger.warn(`[phi-plugin][${filePath}] 读取失败`)
            Logger.warn(error)
            return false
        }
    }

    /**
     * 存储文件
     * @param {string} filepath 文件名，含后缀
     * @param {any} data 目标数据
     * @param {string|'TXT'|'JSON'|'YAML'} [style=undefined] 强制指定保存格式
     */
    async SetFile(filepath: string, data: any, style: string | 'JSON' | 'YAML' | 'TXT' = undefined) {
        try {
            const fatherPath = path.dirname(filepath)
            const fileName = path.basename(filepath)
            // console.info(filepath, fatherPath, fileName)
            if (!fs.existsSync(fatherPath)) {
                // 递归创建目录
                fs.mkdirSync(fatherPath, { recursive: true });
            }
            if (!style) {
                style = path.extname(filepath).toUpperCase().replace('.', '')
            }
            switch (style) {
                case 'JSON': {
                    fs.writeFileSync(filepath, JSON.stringify(data), 'utf8')
                    break
                }
                case 'YAML': {
                    fs.writeFileSync(filepath, YAML.stringify(data), 'utf8')
                    break
                }
                case 'TXT': {
                    fs.writeFileSync(filepath, data, 'utf8')
                }
                default: {
                    // Logger.error(`[phi-plugin][Set]不支持的文件格式`, style, filepath)
                    fs.writeFileSync(filepath, data, 'utf8')
                    break
                }
            }
            return true
        } catch (error) {
            console.info(error)
            Logger.warn(`[phi-plugin]写入文件 ${filepath} 时遇到错误`)
            Logger.warn(error)
            return false
        }
    }

}

export default new readFile()