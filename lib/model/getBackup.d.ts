import JSZip from "jszip";
export default class getBackup {
    /**备份 */
    static backup(): Promise<{
        zipName: string;
        zip: JSZip;
    }>;
    /**
     * 从zip中恢复
     * @param {path} zipPath
     */
    static restore(zipPath: string): Promise<void>;
}
