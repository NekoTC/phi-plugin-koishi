import readFile from './getFile.js'
import path from 'path'
import { pluginDataPath } from '../components/pluginPath'
export default new class getNotes {

    /**
     * 获取并初始化用户数据
     * @param {string} user_id 
     * @returns {{plugin_data:{money:number,sign_in:string,task_time:string,task:Array<object>,theme:string}}}
     */
    async getNotesData(user_id: string) {
        let data = await readFile.FileReader(path.join(pluginDataPath, `${user_id}_.json`))
        if (!data||!data.plugin_data) {
            data = {
                plugin_data: {
                    money: 0,
                    sign_in: "Wed Apr 03 2024 23:03:52 GMT+0800 (中国标准时间)",
                    task_time: "Wed Apr 03 2024 23:03:52 GMT+0800 (中国标准时间)",
                    task: [],
                    theme: "common"
                }
            }
        }
        return data
    }

    async putNotesData(user_id, data) {
        return await readFile.SetFile(path.join(pluginDataPath, `${user_id}_.json`), data)
    }

}()
