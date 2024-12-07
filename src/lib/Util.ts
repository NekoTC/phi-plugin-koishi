// Assuming SaveManager is a class defined elsewhere

import SaveManager from './SaveManager'

class Util {
    static getBit(data: number, index: number) {
        return (data & (1 << index)) ? true : false
    }
    static modifyBit(data, index, b) {
        let result = 1 << index;
        if (b) {
            data |= result;
        } else {
            data &= ~result;
        }
        return data;
    }

    static async repair(session: any, index: number) {
        const array = await SaveManager.saveArray(session);
        if (array.length === 1) {
            throw new Error("存档无误");
        }
        let builder = "";
        for (let i = 0; i < array.length; i++) {
            if (i === index) {
                continue;
            }
            let response = await SaveManager.delete(
                session,
                array[i].objectId
            );
            builder += response + "\n";
        }
        return builder;
    }
}


export default Util