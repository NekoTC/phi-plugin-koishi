import { Session } from "koishi";
import PhigrosUser from "../lib/PhigrosUser";
/**
     * 更新存档
     * @param session
     * @param User
     * @returns [rks变化值，note变化值]，失败返回 false
     */
export default function buildingRecord(session: Session, User: PhigrosUser): Promise<number[]>;
