let head = {
    "X-LC-Id": "rAK3FfdieFob2Nn8Am",
    "X-LC-Key": "Qr9AEqtuoSVS3zeD6iVbM4ZC0AtkJcQ89tywVyi0",
    "X-LC-Session": "uhrmqs8v0mmn0ikzxqgozrctr"
}
let url = "https://rak3ffdi.cloud.tds1.tapapis.cn/1.1/users/63132abc3ec3276afe25707a/refreshSessionToken"

console.info(await (await fetch(url, { method: 'PUT', headers: head })).json())