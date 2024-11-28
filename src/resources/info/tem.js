import readFile from "../../model/getFile.js";

let json = await readFile.FileReader('./infolist.json')

for(let i in json){
    let info = json[i]
    delete info.chart
}

console.info(json)

readFile.SetFile('./infolist.json', json)