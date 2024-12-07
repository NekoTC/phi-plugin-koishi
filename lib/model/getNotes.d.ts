import pluginData from './class/pluginData';
export default class getNotes {
    /**
     * 获取并初始化用户数据
     * @param {string} user_id
     * @returns {{plugin_data:{money:number,sign_in:string,task_time:string,task:Array<object>,theme:string}}}
     */
    static getNotesData(user_id: string): pluginData;
    static putNotesData(user_id: string, data: any): Promise<boolean>;
    static delNotesData(user_id: string): Promise<boolean>;
}
