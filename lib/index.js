var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Config: () => Config3,
  apply: () => apply8,
  inject: () => inject,
  logger: () => logger2,
  name: () => name
});
module.exports = __toCommonJS(src_exports);
var import_koishi6 = require("koishi");

// src/components/index.ts
var components_exports = {};
__export(components_exports, {
  Display_Plugin_Name: () => Display_Plugin_Name,
  Plugin_Name: () => Plugin_Name,
  Version: () => Version_default,
  apply: () => apply6
});

// src/components/Version.ts
var import_fs = __toESM(require("fs"));

// src/components/pluginPath.ts
var pluginPath_exports = {};
__export(pluginPath_exports, {
  DlcInfoPath: () => DlcInfoPath,
  apply: () => apply,
  backupPath: () => backupPath,
  cachePath: () => cachePath,
  dataPath: () => dataPath,
  guessMicPath: () => guessMicPath,
  htmlPath: () => htmlPath,
  imgPath: () => imgPath,
  infoPath: () => infoPath,
  originalIllPath: () => originalIllPath,
  ortherIllPath: () => ortherIllPath,
  pluginDataPath: () => pluginDataPath,
  pluginName: () => pluginName,
  pluginPath: () => pluginPath,
  pluginResources: () => pluginResources,
  pluginRoot: () => pluginRoot,
  savePath: () => savePath,
  tempPath: () => tempPath
});
var import_path = __toESM(require("path"));
var pluginPath = __dirname.replace(/\\/g, "/").replace(/\/src\/components/, "");
var _path = process.cwd().replace(/\\/g, "/");
var pluginName = import_path.default.basename(import_path.default.join(pluginPath, "../../"));
var pluginRoot = import_path.default.join(pluginPath, "src");
var pluginResources = import_path.default.join(pluginRoot, "resources");
var htmlPath = import_path.default.join(pluginResources, "html");
var infoPath = import_path.default.join(pluginResources, "info");
var DlcInfoPath = import_path.default.join(pluginResources, "info", "DLC");
var imgPath = import_path.default.join(pluginResources, "html", "otherimg");
var ortherIllPath = import_path.default.join(pluginResources, "otherill");
var guessMicPath = import_path.default.join(pluginResources, "splited_music");
var dataPath;
var pluginDataPath;
var savePath;
var backupPath;
var tempPath;
var cachePath;
var originalIllPath;
function apply(ctx) {
  dataPath = import_path.default.join(ctx.baseDir, "data", "Catrong@phi-plugin");
  pluginDataPath = import_path.default.join(dataPath, "pluginData");
  savePath = import_path.default.join(dataPath, "saveData");
  backupPath = import_path.default.join(dataPath, "backup");
  tempPath = import_path.default.join(ctx.baseDir, "temp", "Catrong@phi-plugin");
  cachePath = import_path.default.join(ctx.baseDir, "cache", "Catrong@phi-plugin");
  originalIllPath = import_path.default.join(cachePath, "original_ill");
}
__name(apply, "apply");

// src/components/Version.ts
var README_path = `${pluginPath}/README.md`;
var currentVersion;
try {
  if (import_fs.default.existsSync(README_path)) {
    let README = import_fs.default.readFileSync(README_path, "utf8") || "";
    let reg = /https:\/\/img.shields.io\/badge\/%E7%89%88%E6%9C%AC-(.*)-9cf\?style=for-the-badge/.exec(README);
    if (reg) {
      currentVersion = "v" + reg[1];
    }
  }
} catch (err) {
}
var Version = {
  get ver() {
    return currentVersion;
  }
};
var Version_default = Version;

// src/components/Logger.ts
var Logger_exports = {};
__export(Logger_exports, {
  apply: () => apply2,
  logger: () => logger
});
var Logger;
var logger = new class log {
  static {
    __name(this, "log");
  }
  info(...msg) {
    Logger.info(msg.join("\n"));
  }
  error(...msg) {
    Logger.error(msg.join("\n"));
  }
  warn(...msg) {
    Logger.warn(msg.join("\n"));
  }
}();
function apply2(ctx) {
  Logger = ctx.logger;
}
__name(apply2, "apply");

// src/components/Config.ts
var Config_exports = {};
__export(Config_exports, {
  apply: () => apply3,
  config: () => config
});
var config;
function apply3(ctx, cfg) {
  config = cfg;
}
__name(apply3, "apply");

// src/components/redis.ts
var redis_exports = {};
__export(redis_exports, {
  apply: () => apply4,
  banGroupId: () => banGroupId,
  phigrosBanSessionTokenId: () => phigrosBanSessionTokenId,
  phigrosJrrpId: () => phigrosJrrpId,
  phigrosUserRksId: () => phigrosUserRksId,
  phigrosUserTokenId: () => phigrosUserTokenId,
  redis: () => redis
});
var redis;
var banGroupId = {
  id: "id",
  groupId: "groupId",
  help: "help",
  bind: "bind",
  b19: "b19",
  wb19: "wb19",
  song: "song",
  ranklist: "ranklist",
  fnc: "fnc",
  tipgame: "tipgame",
  guessgame: "guessgame",
  ltrgame: "ltrgame",
  sign: "sign",
  setting: "setting",
  dan: "dan"
};
var phigrosUserTokenId = {
  id: "id",
  userId: "userId",
  token: "token"
};
var phigrosBanSessionTokenId = {
  id: "id",
  sessionToken: "sessionToken"
};
var phigrosUserRksId = {
  id: "id",
  token: "token",
  rks: "rks"
};
var phigrosJrrpId = {
  id: "id",
  userId: "userId",
  value: "value"
};
function apply4(ctx) {
  redis = ctx.database;
  ctx.model.extend("phigrosBanGroup", {
    // 各字段的类型声明
    id: "unsigned",
    groupId: "string",
    help: "boolean",
    bind: "boolean",
    b19: "boolean",
    wb19: "boolean",
    song: "boolean",
    ranklist: "boolean",
    fnc: "boolean",
    tipgame: "boolean",
    guessgame: "boolean",
    ltrgame: "boolean",
    sign: "boolean",
    setting: "boolean",
    dan: "boolean"
  });
  ctx.model.extend("phigrosUserToken", {
    id: "unsigned",
    userId: "string",
    token: "string"
  });
  ctx.model.extend("phigrosBanSessionToken", {
    id: "unsigned",
    sessionToken: "string"
  });
  ctx.model.extend("phigrosUserRks", {
    id: "unsigned",
    token: "string",
    rks: "double"
  });
  ctx.model.extend("phigrosJrrp", {
    id: "unsigned",
    userId: "string",
    value: "string"
  });
}
__name(apply4, "apply");

// src/components/i18n.ts
var i18n_exports = {};
__export(i18n_exports, {
  apply: () => apply5,
  i18nList: () => i18nList
});
var i18nList = {
  /**这里被管理员禁止使用这个功能了呐QAQ！ */
  beGroupBan: "beGroupBan",
  /**请先绑定sessionToken哦！\n如果不知道自己的sessionToken可以尝试扫码绑定嗷！\n获取二维码：/phi bind qrcode\n帮助：/phi tk help\n格式：/phi bind <sessionToken> */
  haveToBind: "haveToBind",
  /**请先更新数据哦！\n格式：/phi update */
  haveToUpdate: "haveToUpdate",
  /**喂喂喂！你还没输入sessionToken呐！\n扫码绑定：/phi bind qrcode\n普通绑定：/phi bind <sessionToken> */
  haveToInputToken: "haveToInputToken"
};
function apply5(ctx) {
  ctx.i18n.define("zh-CN", {
    beGroupBan: "这里被管理员禁止使用这个功能了呐QAQ！",
    haveToBind: "请先绑定sessionToken哦！\n如果不知道自己的sessionToken可以尝试扫码绑定嗷！\n获取二维码：/phi bind qrcode\n帮助：/phi tk help\n格式：/phi bind <sessionToken>",
    haveToUpdate: "请先更新数据哦！\n格式：/phi update",
    haveToInputToken: "喂喂喂！你还没输入sessionToken呐！\n扫码绑定：/phi bind qrcode\n普通绑定：/phi bind <sessionToken>"
  });
}
__name(apply5, "apply");

// src/components/index.ts
var Display_Plugin_Name = "Phi-Plugin";
var Plugin_Name = "phi-plugin";
function apply6(ctx, cfg) {
  ctx.plugin(Logger_exports);
  ctx.plugin(Config_exports, cfg);
  ctx.plugin(pluginPath_exports);
  ctx.plugin(redis_exports);
  ctx.plugin(i18n_exports);
}
__name(apply6, "apply");

// src/app/index.ts
var app_exports = {};
__export(app_exports, {
  apply: () => apply7
});

// src/model/getSave.ts
var import_path3 = __toESM(require("path"));

// src/model/getFile.ts
var import_node_fs = __toESM(require("node:fs"));
var import_csvtojson = __toESM(require("csvtojson"));
var import_node_path = __toESM(require("node:path"));
var import_yaml = __toESM(require("yaml"));
var getFile = class {
  static {
    __name(this, "getFile");
  }
  /**
   * 读取文件
   * @param filePath 完整路径
   * @param style 强制设置文件格式
   */
  static FileReader(filePath, style = void 0) {
    try {
      if (!import_node_fs.default.existsSync(filePath)) {
        return false;
      }
      if (!style) {
        style = import_node_path.default.extname(filePath).toUpperCase().replace(".", "");
      }
      switch (style) {
        case "JSON": {
          return JSON.parse(import_node_fs.default.readFileSync(filePath, "utf8"));
        }
        // case 'CSV': {
        //     return (await csv().fromString(fs.readFileSync(filePath, 'utf8')))
        // }
        case "YAML": {
          return import_yaml.default.parse(import_node_fs.default.readFileSync(filePath, "utf8"));
        }
        case "TXT": {
          return import_node_fs.default.readFileSync(filePath, "utf8");
        }
        default: {
          return import_node_fs.default.readFileSync(filePath, "utf8");
        }
      }
    } catch (error) {
      logger.warn(`[phi-plugin][${filePath}] 读取失败`);
      logger.warn(error);
      return false;
    }
  }
  static async csvReader(filePath) {
    return await (0, import_csvtojson.default)().fromFile(filePath);
  }
  /**
   * 存储文件
   * @param {string} filepath 文件名，含后缀
   * @param {any} data 目标数据
   * @param {string|'TXT'|'JSON'|'YAML'} [style=undefined] 强制指定保存格式
   */
  static SetFile(filepath, data, style = void 0) {
    try {
      const fatherPath = import_node_path.default.dirname(filepath);
      const fileName = import_node_path.default.basename(filepath);
      if (!import_node_fs.default.existsSync(fatherPath)) {
        import_node_fs.default.mkdirSync(fatherPath, { recursive: true });
      }
      if (!style) {
        style = import_node_path.default.extname(filepath).toUpperCase().replace(".", "");
      }
      switch (style) {
        case "JSON": {
          import_node_fs.default.writeFileSync(filepath, JSON.stringify(data), "utf8");
          break;
        }
        case "YAML": {
          import_node_fs.default.writeFileSync(filepath, import_yaml.default.stringify(data), "utf8");
          break;
        }
        case "TXT": {
          import_node_fs.default.writeFileSync(filepath, data, "utf8");
        }
        default: {
          import_node_fs.default.writeFileSync(filepath, data, "utf8");
          break;
        }
      }
      return true;
    } catch (error) {
      console.info(error);
      logger.warn(`[phi-plugin]写入文件 ${filepath} 时遇到错误`);
      logger.warn(error);
      return false;
    }
  }
  static DelFile(path11) {
    try {
      if (!import_node_fs.default.existsSync(`${path11}`)) {
        return false;
      }
      import_node_fs.default.unlink(`${path11}`, (err) => {
        if (err) throw err;
      });
      return true;
    } catch (error) {
      logger.warn(`[phi-plugin][${path11}] 删除失败`);
      logger.warn(error);
      return false;
    }
  }
};

// src/model/constNum.ts
var Level = ["EZ", "HD", "IN", "AT", "LEGACY"];
var LevelNum = {
  EZ: 0,
  HD: 1,
  IN: 2,
  AT: 3,
  LEGACY: 4
};
var MAX_DIFFICULTY = 16.8;

// src/model/fCompute.ts
var import_koishi = require("koishi");

// src/model/getInfo.ts
var import_path2 = __toESM(require("path"));
var import_fs2 = __toESM(require("fs"));
getFile.csvReader(import_path2.default.join(infoPath, "avatar.csv")).then((avatar) => {
  getFile.csvReader(import_path2.default.join(infoPath, "info.csv")).then((info) => {
    getFile.csvReader(import_path2.default.join(infoPath, "difficulty.csv")).then((difficulty) => {
      getInfo.setCsvInfo(avatar, info, difficulty);
    });
  });
});
var getInfo = class {
  static {
    __name(this, "getInfo");
  }
  /**默认别名,以id为key */
  static nicklist = getFile.FileReader(import_path2.default.join(infoPath, "nicklist.yaml"));
  /**以别名为key */
  static songnick = {};
  /**扩增曲目信息 */
  static DLC_Info = {};
  /**头像id */
  static avatarid = {};
  /**Tips [] */
  static tips = getFile.FileReader(import_path2.default.join(infoPath, "tips.yaml"));
  /**原版信息 */
  static ori_info = {};
  /**通过id获取曲名 */
  static songsid = {};
  /**原曲名称获取id */
  static idssong = {};
  /**含有曲绘的曲目列表，id */
  static illlist = [];
  /**按dif分的info */
  static info_by_difficulty = {};
  /**SP信息 */
  static sp_info = getFile.FileReader(import_path2.default.join(infoPath, "spinfo.json"));
  /**难度映射 */
  static Level = Level;
  /**最高定数 */
  static MAX_DIFFICULTY = 0;
  /**所有曲目id列表 */
  static idlist = [];
  /**note统计 */
  static notesInfo = getFile.FileReader(import_path2.default.join(infoPath, "notesInfo.json"));
  /**jrrp */
  static word = getFile.FileReader(import_path2.default.join(infoPath, "jrrp.json"));
  static setCsvInfo(csv_avatar, CsvInfo, Csvdif) {
    for (let id in this.nicklist) {
      for (let j in this.nicklist[id]) {
        if (this.songnick[this.nicklist[id][j]]) {
          this.songnick[this.nicklist[id][j]].push(id);
        } else {
          this.songnick[this.nicklist[id][j]] = [id];
        }
      }
    }
    let files = import_fs2.default.readdirSync(DlcInfoPath).filter((file) => file.endsWith(".json"));
    files.forEach(async (file) => {
      this.DLC_Info[import_path2.default.basename(file, ".json")] = await getFile.FileReader(import_path2.default.join(DlcInfoPath, file));
    });
    for (let i in this.sp_info) {
      if (this.sp_info[i]["illustration_big"]) {
        this.illlist.push(this.sp_info[i].song);
      }
    }
    for (let i in csv_avatar) {
      this.avatarid[csv_avatar[i].id] = csv_avatar[i].name;
    }
    let Jsoninfo = getFile.FileReader(import_path2.default.join(infoPath, "infolist.json"));
    for (let i in CsvInfo) {
      let id = CsvInfo[i].id;
      this.songsid[id] = CsvInfo[i].song;
      this.idssong[CsvInfo[i].song] = id;
      this.ori_info[id] = Jsoninfo[id];
      if (!Jsoninfo[id]) {
        this.ori_info[id] = { song: CsvInfo[i].song, chapter: "", bpm: "", length: "", chart: {} };
        console.info(`[phi-plugin]曲目详情未更新：${CsvInfo[i].song}`);
      }
      this.ori_info[id].song = CsvInfo[i].song;
      this.ori_info[id].id = id;
      this.ori_info[id].composer = CsvInfo[i].composer;
      this.ori_info[id].illustrator = CsvInfo[i].illustrator;
      this.ori_info[id].chart = {};
      for (let j in this.Level) {
        const level = this.Level[j];
        if (CsvInfo[i][level]) {
          if (!this.ori_info[id].chart[level]) {
            this.ori_info[id].chart[level] = {};
          }
          this.ori_info[id].chart[level].charter = CsvInfo[i][level];
          this.ori_info[id].chart[level].difficulty = Csvdif[i][level];
          this.ori_info[id].chart[level].tap = this.notesInfo[id][level].tap;
          this.ori_info[id].chart[level].drag = this.notesInfo[id][level].drag;
          this.ori_info[id].chart[level].hold = this.notesInfo[id][level].hold;
          this.ori_info[id].chart[level].flicke = this.notesInfo[id][level].flicke;
          this.ori_info[id].chart[level].combo = this.notesInfo[id][level].tap + this.notesInfo[id][level].drag + this.notesInfo[id][level].hold + this.notesInfo[id][level].flicke;
          this.MAX_DIFFICULTY = Math.max(this.MAX_DIFFICULTY, Number(Csvdif[i][level]));
        }
      }
      this.illlist.push(id);
      this.idlist.push(id);
    }
    if (this.MAX_DIFFICULTY != MAX_DIFFICULTY) {
      console.error("[phi-plugin] MAX_DIFFICULTY 常量未更新，请回报作者！", MAX_DIFFICULTY, this.MAX_DIFFICULTY);
    }
    for (let id in this.ori_info) {
      for (let level in this.ori_info[id].chart) {
        let info = this.ori_info[id];
        if (this.info_by_difficulty[info.chart[level].difficulty]) {
          this.info_by_difficulty[info.chart[level].difficulty].push({
            id: info.id,
            rank: level,
            ...info.chart[level]
          });
        } else {
          this.info_by_difficulty[info.chart[level].difficulty] = [{
            id: info.id,
            rank: level,
            ...info.chart[level]
          }];
        }
      }
    }
  }
  /**
   * 返回原曲信息
   * @param {} [id=undefined] 原曲id
   * @returns {SongsInfo}
   */
  static info(id) {
    let result = { ...this.ori_info, ...this.sp_info };
    let info = result[id];
    if (!info) {
      return null;
    }
    return {
      /**id */
      id: info.id,
      /**曲目 */
      song: info.song,
      /**小型曲绘 */
      illustration: info.illustration,
      /**原版曲绘 */
      illustration_big: this.getill(info.id),
      /**是否不参与猜字母 */
      can_t_be_letter: info.can_t_be_letter || true,
      /**是否不参与猜曲绘 */
      can_t_be_guessill: info.can_t_be_guessill || true,
      /**章节 */
      chapter: info.chapter,
      /**bpm */
      bpm: info.bpm,
      /**作曲 */
      composer: info.composer,
      /**时长 */
      length: info.length,
      /**画师 */
      illustrator: info.illustrator,
      /**特殊信息 */
      spinfo: info.spinfo,
      /**谱面详情 */
      chart: info.chart
    };
  }
  /**
   * 返回所有曲目信息
   * @returns 
   */
  static all_info() {
    return { ...this.ori_info, ...this.sp_info };
  }
  /**
  * 根据参数模糊匹配返回id数组
  * @param {string} mic 别名
  * @param {number} [Distance=0.85] 阈值 猜词0.95
  * @returns 原曲id数组，按照匹配程度降序
  */
  static fuzzysongsnick(mic, Distance = 0.85) {
    const fuzzyMatch = /* @__PURE__ */ __name((str1, str2) => {
      if (str1 == str2) {
        return 1;
      }
      const pattern = /[\s~`!@#$%^&*()\-=_+\]{}|;:'",<.>/?！￥…（）—【】、；‘：“”，《。》？↑↓←→]/g;
      const formattedStr1 = str1.replace(pattern, "").toLowerCase();
      const formattedStr2 = str2.replace(pattern, "").toLowerCase();
      const distance = this.jaroWinklerDistance(formattedStr1, formattedStr2);
      return distance;
    }, "fuzzyMatch");
    let result = [];
    let allinfo = this.all_info();
    for (let std in this.songnick) {
      let dis = fuzzyMatch(mic, std);
      if (dis >= Distance) {
        for (let i in this.songnick[std]) {
          result.push({ id: this.songnick[std][i], dis });
        }
      }
    }
    for (let id in allinfo) {
      let std = allinfo[id].song;
      let dis = fuzzyMatch(mic, std);
      if (dis >= Distance) {
        result.push({ id, dis });
      }
    }
    result = result.sort((a, b) => b.dis - a.dis);
    let all = [];
    for (let i in result) {
      if (all.includes(result[i].song)) continue;
      if (result[0].dis == 1 && result[i].dis < 1) break;
      all.push(result[i].id);
    }
    return all;
  }
  //采用Jaro-Winkler编辑距离算法来计算str间的相似度，复杂度为O(n)=>n为较长的那个字符出的长度
  static jaroWinklerDistance(s1, s2) {
    let m = 0;
    if (s1.length === 0 || s2.length === 0) {
      return 0;
    }
    if (s1 === s2) {
      return 1;
    }
    let range2 = Math.floor(Math.max(s1.length, s2.length) / 2) - 1, s1Matches = new Array(s1.length), s2Matches = new Array(s2.length);
    for (let i = 0; i < s1.length; i++) {
      let low = i >= range2 ? i - range2 : 0, high = i + range2 <= s2.length - 1 ? i + range2 : s2.length - 1;
      for (let j = low; j <= high; j++) {
        if (s1Matches[i] !== true && s2Matches[j] !== true && s1[i] === s2[j]) {
          ++m;
          s1Matches[i] = s2Matches[j] = true;
          break;
        }
      }
    }
    if (m === 0) {
      return 0;
    }
    let k = 0, n_trans = 0;
    for (let i = 0; i < s1.length; i++) {
      if (s1Matches[i] === true) {
        let j;
        for (j = k; j < s2.length; j++) {
          if (s2Matches[j] === true) {
            k = j + 1;
            break;
          }
        }
        if (s1[i] !== s2[j]) {
          ++n_trans;
        }
      }
    }
    let weight = (m / s1.length + m / s2.length + (m - n_trans / 2) / m) / 3, l = 0, p = 0.1;
    if (weight > 0.7) {
      while (s1[l] === s2[l] && l < 4) {
        ++l;
      }
      weight = weight + l * p * (1 - weight);
    }
    return weight;
  }
  /**
   * id获取曲绘，返回地址
   * @param {string} id id
   * @param {'common'|'blur'|'low'} [kind='common'] 清晰度
   * @return {string} 网址或文件地址
  */
  static getill(id, kind = "common") {
    let songsinfo = this.all_info()[id];
    let ans = songsinfo?.illustration_big;
    let reg = /^(?:(http|https|ftp):\/\/)((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
    if (ans && !reg.test(ans)) {
      ans = import_path2.default.join(ortherIllPath, ans);
    } else if (this.ori_info[id]) {
      if (import_fs2.default.existsSync(import_path2.default.join(originalIllPath, id + ".png"))) {
        ans = import_path2.default.join(originalIllPath, id + ".png");
      } else if (import_fs2.default.existsSync(import_path2.default.join(originalIllPath, "ill", id + ".png"))) {
        if (kind == "common") {
          ans = import_path2.default.join(originalIllPath, "ill", id + ".png");
        } else if (kind == "blur") {
          ans = import_path2.default.join(originalIllPath, "illBlur", id + ".png");
        } else if (kind == "low") {
          ans = import_path2.default.join(originalIllPath, "illLow", id + ".png");
        }
      }
      try {
        import_fs2.default.accessSync(ans);
      } catch (e) {
        ans = null;
      }
      if (!ans) {
        if (kind == "common") {
          ans = `${config.onLinePhiIllUrl}/ill/${id + ".png"}`;
        } else if (kind == "blur") {
          ans = `${config.onLinePhiIllUrl}/illBlur/${id + ".png"}`;
        } else if (kind == "low") {
          ans = `${config.onLinePhiIllUrl}/illLow/${id + ".png"}`;
        }
      }
    }
    if (!ans) {
      ans = import_path2.default.join(imgPath, "phigros.png");
    }
    return ans;
  }
  /**
   * 返回章节封面 url
   * @param {string} name 标准章节名
   */
  static getChapIll(name2) {
    if (import_fs2.default.existsSync(import_path2.default.join(originalIllPath, "chap", `${name2}.png`))) {
      return import_path2.default.join(originalIllPath, "chap", `${name2}.png`);
    } else {
      return `https://gitee.com/Steveeee-e/phi-plugin-ill/raw/main/chap/${name2}.png`;
    }
  }
  /**
   * 通过id获得头像文件名称
   * @param {string} id 
   * @returns file name
   */
  static idgetavatar(id) {
    if (this.avatarid[id]) {
      return this.avatarid[id];
    } else {
      return "Introduction";
    }
  }
  /**
   * 根据曲目id获取原名
   * @param {String} id 曲目id
   * @returns 原名
   */
  static idgetsong(id) {
    id.replace(".0", "");
    return this.songsid[id];
  }
  /**
   * 通过原曲曲目获取曲目id
   * @param {String} song 原曲曲名
   * @returns 曲目id
   */
  static SongGetId(song) {
    return this.idssong[song];
  }
};

// src/model/fCompute.ts
var compute = class {
  static {
    __name(this, "compute");
  }
  /**
   * 计算等效rks
   * @param {number} acc 
   * @param {number} difficulty 
   * @returns 
   */
  static rks(acc, difficulty) {
    if (acc == 100) {
      return Number(difficulty);
    } else if (acc < 70) {
      return 0;
    } else {
      return difficulty * ((acc - 55) / 45 * ((acc - 55) / 45));
    }
  }
  /**
   * 计算所需acc
   * @param {Number} rks 目标rks
   * @param {Number} difficulty 定数
   * @param {Number} [count=undefined] 保留位数
   * @returns 所需acc
   */
  static suggest(rks, difficulty, count = void 0) {
    let ans = 45 * Math.sqrt(rks / difficulty) + 55;
    if (ans >= 100)
      return "无法推分";
    else {
      if (count != void 0) {
        return `${ans.toFixed(count)}%`;
      } else {
        return ans;
      }
    }
  }
  /**
   * 发送文件
   * @param e 
   * @param file 
   * @param title 文件名称
   */
  static async sendFile(session, file, title = "") {
    try {
      session.send(import_koishi.h.file(file, "application/octet-stream", { title }));
    } catch (err) {
      logger.error(`文件上传错误：`);
      logger.error(err);
      await session.send(`文件上传错误` + err.message);
    }
  }
  /**
   * 获取角色介绍背景曲绘
   * @param {string} save_background 
   * @returns 
   */
  static async getBackground(save_background) {
    try {
      switch (save_background) {
        case "Another Me ": {
          save_background = "Another Me (KALPA)";
          break;
        }
        case "Another Me": {
          save_background = "Another Me (Rising Sun Traxx)";
          break;
        }
        case "Re_Nascence (Psystyle Ver.) ": {
          save_background = "Re_Nascence (Psystyle Ver.)";
          break;
        }
        case "Energy Synergy Matrix": {
          save_background = "ENERGY SYNERGY MATRIX";
          break;
        }
        default: {
          break;
        }
      }
      return getInfo.getill(getInfo.SongGetId(save_background));
    } catch (err) {
      logger.error(`获取背景曲绘错误`, err);
      return false;
    }
  }
  /**
   * 为数字添加前导零
   * @param {number} num 原数字
   * @param {number} cover 总位数
   * @returns 前导零数字
   */
  static ped(num, cover) {
    return String("0".repeat(cover) + num).slice(-cover);
  }
  /**
   * 标准化分数
   * @param {number} score 分数
   * @returns 标准化的分数 0'000'000
   */
  static std_score(score) {
    let s1 = Math.floor(score / 1e6);
    let s2 = Math.floor(score / 1e3) % 1e3;
    let s3 = score % 1e3;
    return `${s1}'${this.ped(s2, 3)}'${this.ped(s3, 3)}`;
  }
  /**
   * 随机数，包含上下界
   * @param {number} min 最小值
   * @param {number} max 最大值
   * @returns 随机数
   */
  static randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  /**
   * 随机打乱数组
   * @param {Array} arr 原数组
   * @returns 随机打乱的数组
   */
  static randArray(arr) {
    let newArr = [];
    while (arr.length > 0) {
      newArr.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    return newArr;
  }
  /**
   * 转换时间格式
   * @param {Date|string} date 时间
   * @returns 2020/10/8 10:08:08
   */
  static formatDate(date) {
    date = new Date(date);
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.toString().match(/([0-9])+:([0-9])+:([0-9])+/)[0]}`;
  }
  /**
   * 转换unity富文本
   * @param {string} richText 
   * @param {boolean} [onlyText=false] 是否只返回文本
   * @returns 
   */
  static convertRichText(richText, onlyText = false) {
    if (!richText) {
      return richText;
    }
    richText = richText.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    let reg = [/&lt;color\s*=\s*.*?&gt;(.*?)&lt;\/color&gt;/, /&lt;size\s*=\s*.*?&gt;(.*?)&lt;\/size&gt;/, /&lt;i&gt;(.*?)&lt;\/i&gt;/, /&lt;b&gt;(.*?)&lt;\/b&gt;/];
    while (1) {
      if (richText.match(reg[0])) {
        let txt = richText.match(reg[0])[1];
        let color = richText.match(reg[0])[0].match(/&lt;color\s*=\s*(.*?)&gt;/)[1].replace(/[\s\"]/g, "");
        richText = richText.replace(reg[0], onlyText ? txt : `<span style="color:${color}">${txt}</span>`);
        continue;
      }
      if (richText.match(reg[2])) {
        let txt = richText.match(reg[2])[1];
        richText = richText.replace(reg[2], onlyText ? txt : `<i>${txt}</i>`);
        continue;
      }
      if (richText.match(reg[3])) {
        let txt = richText.match(reg[3])[1];
        richText = richText.replace(reg[3], onlyText ? txt : `<b>${txt}</b>`);
        continue;
      }
      if (richText.match(/\n\r?/)) {
        richText.replace(/\n\r?/g, "<br>");
      }
      break;
    }
    if (onlyText) {
      richText = richText.replace(/&lt;/g, "<").replace(/&gt;/g, ">");
    }
    return richText;
  }
  /**是否是管理员 */
  static authority(session) {
    let sessionRoles = session?.event?.member?.roles;
    return sessionRoles && (sessionRoles.includes("admin") || sessionRoles.includes("owner"));
  }
  /**
   * 捕获消息中的范围
   * @param {string} msg 消息字符串
   * @param {Array} range 范围数组
   * @param {number} [max=MAX_DIFFICULTY] 最大值
   * @param {number} [min=0] 最小值
   */
  static match_range(msg, range2, max = MAX_DIFFICULTY, min = 0) {
    range2[0] = min;
    range2[1] = max;
    if (msg.match(/[0-9]+(.[0-9]+)?\s*[-～~]\s*[0-9]+(.[0-9]+)?/g)) {
      msg = msg.match(/[0-9]+(.[0-9]+)?\s*[-～~]\s*[0-9]+(.[0-9]+)?/g)[0];
      let result = msg.split(/\s*[-～~]\s*/g);
      range2[0] = Number(result[0]);
      range2[1] = Number(result[1]);
      if (range2[0] > range2[1]) {
        let tem = range2[1];
        range2[1] = range2[0];
        range2[0] = tem;
      }
      if (range2[1] % 1 == 0 && !result.includes(".0")) range2[1] += 0.9;
    } else if (msg.match(/[0-9]+(.[0-9]+)?\s*[-+]/g)) {
      msg = msg.match(/[0-9]+(.[0-9]+)?\s*[-+]/g)[0];
      let result = msg.replace(/\s*[-+]/g, "");
      if (msg.includes("+")) {
        range2[0] = Number(result);
      } else {
        range2[1] = Number(result);
        if (range2[1] % 1 == 0 && !result.includes(".0")) range2[1] += 0.9;
      }
    } else if (msg.match(/[0-9]+(.[0-9]+)?/g)) {
      msg = msg.match(/[0-9]+(.[0-9]+)?/g)[0];
      range2[0] = range2[1] = Number(msg);
      if (!msg.includes(".")) {
        range2[1] += 0.9;
      }
    }
  }
  /**
   * 匹配消息中对成绩的筛选
   * @param {string} msg 
   * @param {number} [max=MAX_DIFFICULTY] 范围最大值
   * @param {number} [min=0] 范围最小值
   * @returns 
   */
  static match_request(msg = "", max = MAX_DIFFICULTY, min = 0) {
    let range2 = [min, max];
    let isask = [true, true, true, true];
    msg = msg.toUpperCase();
    if (msg.includes("EZ") || msg.includes("HD") || msg.includes("IN") || msg.includes("AT")) {
      isask = [false, false, false, false];
      if (msg.includes("EZ")) {
        isask[0] = true;
      }
      if (msg.includes("HD")) {
        isask[1] = true;
      }
      if (msg.includes("IN")) {
        isask[2] = true;
      }
      if (msg.includes("AT")) {
        isask[3] = true;
      }
    }
    msg = msg.replace(/(list|AT|IN|HD|EZ)*/g, "");
    let scoreAsk = { NEW: true, F: true, C: true, B: true, A: true, S: true, V: true, FC: true, PHI: true };
    if (msg.includes(" NEW") || msg.includes(" F") || msg.includes(" C") || msg.includes(" B") || msg.includes(" A") || msg.includes(" S") || msg.includes(" V") || msg.includes(" FC") || msg.includes(" PHI")) {
      scoreAsk = { NEW: false, F: false, C: false, B: false, A: false, S: false, V: false, FC: false, PHI: false };
      let rating = ["NEW", "F", "C", "B", "A", "S", "V", "FC", "PHI"];
      for (let i in rating) {
        if (msg.includes(` ${rating[i]}`)) {
          scoreAsk[rating[i]] = true;
        }
      }
    }
    if (msg.includes(` AP`)) {
      scoreAsk.PHI = true;
    }
    msg = msg.replace(/(NEW|F|C|B|A|S|V|FC|PHI|AP)*/g, "");
    this.match_range(msg, range2, max, min);
    return { range: range2, isask, scoreAsk };
  }
  static async recallMsg(session, messageId) {
    return await session.bot.deleteMessage(session.channelId, messageId);
  }
  static async sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  /**
   * 转换时间格式
   * @param {Date|string} date 时间
   * @returns 2020/10/8 10:08:08
   */
  static date_to_string(date) {
    if (!date) return void 0;
    date = new Date(date);
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${date.getFullYear()}/${month}/${day} ${date.toString().match(/([0-9])+:([0-9])+:([0-9])+/)[0]}`;
  }
  // 定义一个函数，不接受参数，返回一个随机的背景色
  static getRandomBgColor() {
    let red = Math.floor(Math.random() * 201);
    let green = Math.floor(Math.random() * 201);
    let blue = Math.floor(Math.random() * 201);
    let hexColor = "#" + this.toHex(red) + this.toHex(green) + this.toHex(blue);
    return hexColor;
  }
  // 定义一个函数，接受一个整数参数，返回它的十六进制形式
  static toHex(num) {
    if (num < 16) {
      return "0" + num.toString(16);
    } else {
      return num.toString(16);
    }
  }
  /**
   * 
   * @param {number} real_score 真实成绩
   * @param {number} tot_score 总成绩
   * @param {boolean} fc 是否fc
   * @returns 
   */
  static rate(real_score, tot_score, fc) {
    if (!real_score) {
      return "F";
    } else if (real_score == tot_score) {
      return "phi";
    } else if (fc) {
      return "FC";
    } else if (real_score >= tot_score * 0.96) {
      return "V";
    } else if (real_score >= tot_score * 0.92) {
      return "S";
    } else if (real_score >= tot_score * 0.88) {
      return "A";
    } else if (real_score >= tot_score * 0.82) {
      return "B";
    } else if (real_score >= tot_score * 0.7) {
      return "C";
    } else {
      return "F";
    }
  }
};

// src/model/class/LevelRecordInfo.ts
var LevelRecordInfo = class {
  static {
    __name(this, "LevelRecordInfo");
  }
  /**
   * @param {{fc:boolean, score:number, acc: number}} data 原始数据
   * @param {string} id 曲目id
   * @param {number} rank 难度
   */
  constructor(data, id, rank) {
    this.fc = data.fc;
    this.score = data.score;
    this.acc = data.acc;
    this.id = id;
    let info = getInfo.info(id);
    if (!info) {
      return;
    }
    this.rank = getInfo.Level[rank];
    this.song = info.song;
    this.illustration = getInfo.getill(id);
    this.Rating = Rating(this.score, this.fc);
    if (info.chart && info.chart[this.rank]?.difficulty) {
      this.difficulty = info.chart[this.rank]["difficulty"];
      this.rks = compute.rks(this.acc, this.difficulty);
    } else {
      this.difficulty = 0;
      this.rks = 0;
    }
  }
};
function Rating(score, fc) {
  if (score >= 1e6)
    return "phi";
  else if (fc)
    return "FC";
  else if (!score)
    return "NEW";
  else if (score < 7e5)
    return "F";
  else if (score < 82e4)
    return "C";
  else if (score < 88e4)
    return "B";
  else if (score < 92e4)
    return "A";
  else if (score < 96e4)
    return "S";
  else
    return "V";
}
__name(Rating, "Rating");

// src/model/class/Save.ts
var Save = class {
  static {
    __name(this, "Save");
  }
  /**
   * @param {Save} data 
   * @param {boolean} ignore 跳过存档检查
   */
  constructor(data, ignore = false) {
    this.sessionToken = data.sessionToken;
    this.modifiedAt = data.saveInfo.modifiedAt.iso;
    this.saveInfo = data.saveInfo;
    this.saveUrl = data.saveUrl + "";
    this.Recordver = data.Recordver;
    this.gameProgress = data.gameProgress;
    this.gameuser = data.gameuser;
    this.gameRecord = {};
    for (let id in data.gameRecord) {
      this.gameRecord[id] = [];
      for (let i in data.gameRecord[id]) {
        let level = Number(i);
        if (!data.gameRecord[id][level]) {
          this.gameRecord[id][level] = null;
          continue;
        }
        this.gameRecord[id][level] = new LevelRecordInfo(data.gameRecord[id][level], id, level);
        if (ignore) continue;
        if (data.gameRecord[id][level].acc > 100) {
          logger.error(`acc > 100 ${this.sessionToken}`);
        }
      }
    }
  }
  /**按照 rks 排序的数组 */
  sortedRecord;
  /**
   * 获取存档
   * @returns 按照 rks 排序的数组
   */
  getRecord() {
    if (this.sortedRecord) {
      return this.sortedRecord;
    }
    let sortedRecord = [];
    for (let id in this.gameRecord) {
      for (let level in this.gameRecord[id]) {
        if (Number(level) == 4) break;
        let tem = this.gameRecord[id][level];
        if (!tem?.score) continue;
        sortedRecord.push(tem);
      }
    }
    sortedRecord.sort((a, b) => {
      return b.rks - a.rks;
    });
    this.sortedRecord = sortedRecord;
    return sortedRecord;
  }
  /**
   * 筛选满足ACC条件的成绩
   * @param {number} acc ≥acc
   * @param {boolean} [same=false] 是否筛选最高rks
   * @returns 按照rks排序的数组
   */
  findAccRecord(acc, same = false) {
    let record = [];
    for (let id in this.gameRecord) {
      for (let level in this.gameRecord[id]) {
        if (Number(level) == 4) break;
        let tem = this.gameRecord[id][level];
        if (!tem) continue;
        if (tem.acc >= acc) {
          record.push(tem);
        }
      }
    }
    record.sort((a, b) => {
      return b.rks - a.rks;
    });
    if (same) {
      for (let i = 0; i < record.length - 1; i++) {
        if (record[i].rks != record[i + 1]?.rks) {
          return record.slice(0, i + 1);
        }
      }
    }
    return record;
  }
  /**计算rks+0.01的最低所需要提升的rks */
  minUpRks() {
    let minuprks = Math.floor(this.saveInfo.summary.rankingScore * 100) / 100 + 5e-3 - this.saveInfo.summary.rankingScore;
    return minuprks < 0 ? minuprks + 0.01 : minuprks;
  }
  /**简单检查存档是否存在问题 */
  checkRecord() {
    let error = ``;
    const Level2 = ["EZ", "HD", "IN", "AT", "LEGACY"];
    for (let i in this.gameRecord) {
      for (let j in this.gameRecord[i]) {
        let score = this.gameRecord[i][j];
        if (score.acc > 100 || score.acc < 0 || score.score > 1e6 || score.score < 0) {
          error += `
${i} ${Level2[j]} ${score.fc} ${score.acc} ${score.score} 非法的成绩`;
        }
        if (score.score >= 1e6 && score.acc < 100 || score.score < 1e6 && score.acc >= 100) {
          error += `
${i} ${Level2[j]} ${score.fc} ${score.acc} ${score.score} 成绩不自洽`;
        }
      }
    }
    return error;
  }
  /**
   * 
   * @param {string} id 曲目id
   */
  getSongsRecord(id) {
    if (!this.gameRecord[id]) {
      return [];
    }
    return [...this.gameRecord[id]];
  }
  /**phi 和 b19 */
  B19List;
  /**b0 rks */
  b0_rks;
  /**b19 rks */
  b19_rks;
  /**
   * 
   * @param {number} num B几
   * @returns phi, b19_list
   */
  async getB19(num) {
    if (this.B19List) {
      return this.B19List;
    }
    let com_rks = 0;
    let philist = this.findAccRecord(100, true);
    let phi = philist[Math.floor(Math.random() * philist.length)];
    if (phi?.rks) {
      com_rks += Number(phi.rks);
      phi.illustration = getInfo.getill(phi.id);
      phi.suggest = "无法推分";
    }
    let rkslist = this.getRecord();
    let userrks = this.saveInfo.summary.rankingScore;
    let minuprks = Math.floor(userrks * 100) / 100 + 5e-3 - userrks;
    if (minuprks < 0) {
      minuprks += 0.01;
    }
    let b19_list = [];
    for (let i = 0; i < num && i < rkslist.length; ++i) {
      if (i < 19) com_rks += Number(rkslist[i].rks);
      rkslist[i].num = i + 1;
      rkslist[i].suggest = compute.suggest(Number(i < 18 ? rkslist[i].rks : rkslist[18].rks) + minuprks * 20, rkslist[i].difficulty, 2);
      if (rkslist[i].suggest.includes("无") && (!phi?.rks || rkslist[i].rks > phi?.rks)) {
        rkslist[i].suggest = "100.00%";
      }
      rkslist[i].illustration = getInfo.getill(rkslist[i].id, "common");
      b19_list.push(rkslist[i]);
    }
    this.B19List = { phi, b19_list };
    this.b19_rks = b19_list[Math.min(b19_list.length - 1, 18)].rks;
    return { phi, b19_list };
  }
  /**
   * 
   * @param {string} id 
   * @param {number} lv 
   * @param {number} count 保留位数
   * @param {number} difficulty 
   * @returns 
   */
  getSuggest(id, lv, count) {
    let difficulty = getInfo.info(id).chart[Level[lv]].difficulty;
    if (!this.b19_rks) {
      let record = this.getRecord();
      this.b19_rks = record.length > 18 ? record[18].rks : 0;
      this.b0_rks = this.findAccRecord(100, true)[0]?.rks || 0;
    }
    let suggest = compute.suggest(Math.max(this.b19_rks, this.gameRecord[id][lv]?.rks ? this.gameRecord[id][lv].rks : 0) + this.minUpRks() * 20, difficulty, count) + "";
    return suggest.includes("无") ? difficulty > this.b0_rks ? Number(100).toFixed(count) + "%" : suggest : suggest;
  }
  /**
   * 获取存档RKS
   * @returns {number}
   */
  getRks() {
    return Number(this.saveInfo.summary.rankingScore);
  }
  /**
   * 获取存档sessionToken
   */
  getSessionToken() {
    return this.sessionToken;
  }
};

// src/model/getSave.ts
var import_fs3 = __toESM(require("fs"));

// src/model/class/saveHistory.ts
var saveHistory = class {
  static {
    __name(this, "saveHistory");
  }
  /**
   * 
   * @param {saveHistory} data 
   */
  constructor(data) {
    this.data = data?.data || [];
    this.rks = data?.rks || [];
    this.scoreHistory = data?.scoreHistory || {};
    this.dan = data?.dan || [];
    this.version = data?.version;
    if (!this.version || this.version < 2) {
      if (this.scoreHistory) {
        for (let i in this.scoreHistory) {
          if (!i.includes(".0")) {
            this.scoreHistory = {};
          }
          break;
        }
      }
      this.version = 2;
    }
  }
  /**
   * 合并记录
   * @param {saveHistory} data 另一个 History 存档
   */
  add(data) {
    this.data = merge(this.data, data.data);
    this.rks = merge(this.rks, data.rks);
    for (let song in data.scoreHistory) {
      if (!this.scoreHistory[song]) this.scoreHistory[song] = {};
      for (let dif in data.scoreHistory[song]) {
        if (this.scoreHistory[song] && this.scoreHistory[song][dif]) {
          this.scoreHistory[song][dif] = this.scoreHistory[song][dif].concat(data.scoreHistory[song][dif]);
          this.scoreHistory[song][dif].sort((a, b) => {
            return openHistory(a).date.getTime() - openHistory(b).date.getTime();
          });
        } else {
          this.scoreHistory[song][dif] = data.scoreHistory[song][dif];
        }
        let i = 1;
        while (i < this.scoreHistory[song][dif].length) {
          let last = openHistory(this.scoreHistory[song][dif][i - 1]);
          let now = openHistory(this.scoreHistory[song][dif][i]);
          if (last.score == now.score && last.acc == now.acc && last.fc == now.fc) {
            this.scoreHistory[song][dif].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }
  /**
   * 检查新存档中的变更并记录
   * @param {Save} save 新存档
   */
  update(save) {
    for (let id in save.gameRecord) {
      if (!this.scoreHistory[id]) this.scoreHistory[id] = {};
      for (let i in save.gameRecord[id]) {
        let level = Level[i];
        let now = save.gameRecord[id][i];
        now.date = new Date(save.modifiedAt);
        if (!this.scoreHistory[id][level] || !this.scoreHistory[id][level].length) {
          this.scoreHistory[id][level] = [createHistory(now.acc, now.score, save.saveInfo.modifiedAt.iso, now.fc)];
          continue;
        }
        if (!save.gameRecord[id][i]) continue;
        for (let i2 = this.scoreHistory[id][level].length - 1; i2 >= 0; --i2) {
          let old = openHistory(this.scoreHistory[id][level][i2]);
          if (old.score == now.score && old.acc == now.acc && old.fc == now.fc) {
            now = null;
            break;
          }
          if (old.date < new Date(now.date)) {
            if (old.acc.toString() != now.acc.toFixed(4) || old.score != now.score || old.fc != now.fc) {
              this.scoreHistory[id][level].splice(i2, 0, createHistory(now.acc, now.score, save.saveInfo.modifiedAt.iso, now.fc));
            }
            now = null;
            break;
          }
        }
        if (now) {
          this.scoreHistory[id][level].unshift(createHistory(now.acc, now.score, save.saveInfo.modifiedAt.iso, now.fc));
        }
        let j = 1;
        while (j < this.scoreHistory[id][level].length) {
          let last = openHistory(this.scoreHistory[id][level][j - 1]);
          let now2 = openHistory(this.scoreHistory[id][level][j]);
          if (last.score == now2.score && last.acc == now2.acc && last.fc == now2.fc) {
            this.scoreHistory[id][level].splice(j, 1);
          } else {
            ++j;
          }
        }
      }
    }
    for (let i = this.rks.length - 1; i >= 0; i--) {
      if (new Date(save.modifiedAt) > new Date(this.rks[i].date)) {
        if (this.rks[i].value != save.saveInfo.summary.rankingScore || this.rks[i + 1]?.value != save.saveInfo.summary.rankingScore) {
          this.rks.splice(i + 1, 0, {
            date: new Date(save.modifiedAt),
            value: save.saveInfo.summary.rankingScore
          });
        }
        break;
      }
    }
    if (!this.rks.length) {
      this.rks.push({
        date: new Date(save.modifiedAt),
        value: save.saveInfo.summary.rankingScore
      });
    }
    for (let i = this.data.length - 1; i >= 0; i--) {
      if (new Date(save.modifiedAt) > new Date(this.data[i].date)) {
        if (checkValue(this.data[i].value, save.gameProgress.money) && checkValue(this.data[i + 1]?.value, save.gameProgress.money)) {
          this.data.splice(i + 1, 0, {
            date: new Date(save.modifiedAt),
            value: save.gameProgress.money
          });
        }
        break;
      }
    }
    if (!this.data.length) {
      this.data.push({
        date: new Date(save.modifiedAt),
        value: save.gameProgress.money
      });
    }
  }
  /**
   * 获取歌曲最新的历史记录
   * @param {string} id 曲目id
   * @returns 
   */
  async getSongsLastRecord(id) {
    let score = { ...this.scoreHistory[id] };
    let ans = [];
    for (let i in score) {
      let level = Number(i);
      ans[level] = score[level] ? openHistory(score[level].at(-1)) : null;
      if (!ans[level]) continue;
      let date = ans[level].date;
      ans[level] = new LevelRecordInfo(ans[level], id, level);
      ans[level].date = date;
    }
    return ans;
  }
};
function merge(m, n) {
  let t = m.concat(n);
  t.sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  let i = 1;
  while (i < t.length - 1) {
    if (checkValue(t[i].value, t[i - 1].value) && checkValue(t[i].value, t[i + 1].value)) {
      t.splice(i, 1);
    } else {
      ++i;
    }
  }
  return t;
}
__name(merge, "merge");
function createHistory(acc, score, date, fc) {
  return [acc.toFixed(4), score, date, fc];
}
__name(createHistory, "createHistory");
function openHistory(data) {
  return {
    acc: Number(data[0]),
    score: Number(data[1]),
    date: new Date(data[2]),
    fc: Boolean(data[3])
  };
}
__name(openHistory, "openHistory");
function checkValue(a, b) {
  if (Object.prototype.toString.call(a) != "[object Array]") {
    return a == b;
  }
  if (!a || !b) {
    return false;
  }
  for (let i in a) {
    if (a[i] != b[i]) return false;
  }
  return true;
}
__name(checkValue, "checkValue");

// src/model/getRksRank.ts
var import_koishi2 = require("koishi");
var getRksRank_default = new class getRksRank {
  static {
    __name(this, "getRksRank");
  }
  /**
   * 添加成绩
   * @param {string} sessionToken 
   * @param {number} rks 
   */
  async addUserRks(sessionToken, rks) {
    return await redis.upsert("phigrosUserRks", [{ token: sessionToken, rks }], "token");
  }
  /**
   * 删除成绩
   * @param {string} sessionToken 
   */
  async delUserRks(sessionToken) {
    return await redis.remove("phigrosUserRks", { token: sessionToken });
  }
  /**
   * 获取用户排名
   * @param {number} rks 
   */
  async getUserRank(rks) {
    return await redis.select("phigrosUserRks").where((row) => import_koishi2.$.gt(row.rks, rks)).execute((row) => import_koishi2.$.count(row.id));
  }
  /**
   * 获取sessionToken rks
   * @param {number} sessionToken 
   * @returns {Promise<number>}
   */
  async getUserRks(sessionToken) {
    return (await redis.get("phigrosUserRks", { token: sessionToken }, ["rks"]))[0];
  }
  /**
   * 获取排名
   * @param {number} min 0起
   * @param {number} max 不包含
   */
  async getRankUser(min, max) {
    return await redis.select("phigrosUserRks").orderBy("rks", "desc").limit(min).offset(max - min).execute();
  }
  /**
   * 获取所有排名
   */
  async getAllRank() {
    return await redis.select("phigrosUserRks").orderBy("rks", "desc").execute();
  }
}();

// src/model/getSave.ts
var getSave = class {
  static {
    __name(this, "getSave");
  }
  /**获取 user_id 号对应的 Token */
  static async get_user_token(user_id) {
    return (await redis.get("phigrosUserToken", { userId: user_id }))[0]?.token;
  }
  /**添加 user_id 号对应的 Token */
  static async add_user_token(user_id, token) {
    return await redis.upsert("phigrosUserToken", [{ userId: user_id, token }], "userId");
  }
  /**移除 user_id 对应的 Token */
  static async del_user_token(user_id) {
    return await redis.remove("phigrosUserToken", { userId: user_id });
  }
  /**
   * 获取 user_id 对应的存档文件
   * @param {String} user_id user_id
   * @returns {Promise<Save>}
   */
  static async getSave(user_id) {
    let Token = await this.get_user_token(user_id);
    if (await this.isBanSessionToken(Token)) {
      throw new Error(`${Token} 已被禁用`);
    }
    let result = Token ? await getFile.FileReader(import_path3.default.join(savePath, Token, "save.json")) : null;
    if (result) {
      let tem = new Save(result);
      if (tem.saveInfo) {
      } else {
        return null;
      }
      return tem;
    } else {
      return null;
    }
  }
  /**
   * 获取 sessionToken 对应的存档文件
   * @param {string} Token 
   * @returns 
   */
  static async getSaveBySessionToken(Token) {
    if (await this.isBanSessionToken(Token)) {
      throw new Error(`${Token} 已被禁用`);
    }
    let result = Token ? await getFile.FileReader(import_path3.default.join(savePath, Token, "save.json")) : null;
    if (result) {
      let tem = new Save(result);
      if (tem.saveInfo) {
      } else {
        return null;
      }
      return tem;
    } else {
      return null;
    }
  }
  /**
   * 保存 user_id 对应的存档文件
   * @param {String} user_id user_id
   * @param {Save} data 
   */
  static async putSave(user_id, data) {
    let session = data.sessionToken;
    if (await this.isBanSessionToken(session)) {
      throw new Error(`${session} 已被禁用`);
    }
    this.add_user_token(user_id, session);
    await getRksRank_default.addUserRks(session, data.saveInfo.summary.rankingScore);
    return await getFile.SetFile(import_path3.default.join(savePath, session, "save.json"), data);
  }
  /**
   * 获取 user_id 对应的历史记录
   * @param {string} user_id 
   * @returns {Promise<saveHistory>}
   */
  static async getHistory(user_id) {
    let session = await this.get_user_token(user_id);
    let result = session ? await getFile.FileReader(import_path3.default.join(savePath, session, "history.json")) : null;
    return new saveHistory(result);
  }
  /**
   * 保存 user_id 对应的历史记录
   * @param {String} user_id user_id
   * @param {Object} data 
   */
  static async putHistory(user_id, data) {
    let session = await this.get_user_token(user_id);
    return await getFile.SetFile(import_path3.default.join(savePath, session, "history.json"), data);
  }
  /**
   * 获取玩家 Dan 数据
   * @param {string} user_id QQ号
   * @param {boolean} [all=false] 是否返回所有数据
   * @returns {object|Array} Dan数据
   */
  static async getDan(user_id, all = false) {
    let history = await this.getHistory(user_id);
    let dan = history?.dan;
    if (dan && Object.prototype.toString.call(dan) != "[object Array]") {
      dan = [dan];
    }
    return dan ? all ? dan : dan[0] : void 0;
  }
  /**
   * 删除 user_id 对应的存档文件
   * @param {String} user_id user_id
   */
  static async delSave(user_id) {
    let session = await this.get_user_token(user_id);
    if (!session) return false;
    let fPath = import_path3.default.join(savePath, session);
    await getFile.DelFile(import_path3.default.join(fPath, "save.json"));
    await getFile.DelFile(import_path3.default.join(fPath, "history.json"));
    await getRksRank_default.delUserRks(session);
    import_fs3.default.rmSync(import_path3.default.join(savePath, session), { recursive: true, force: true });
    this.del_user_token(user_id);
    return true;
  }
  /**
   * 删除 token 对应的存档文件
   * @param {String} Token Token
   */
  static async delSaveBySessionToken(Token) {
    let fPath = import_path3.default.join(savePath, Token);
    await getFile.DelFile(import_path3.default.join(fPath, "save.json"));
    await getFile.DelFile(import_path3.default.join(fPath, "history.json"));
    await getRksRank_default.delUserRks(Token);
    import_fs3.default.rmSync(import_path3.default.join(savePath, Token), { recursive: true, force: true });
    return true;
  }
  static async banSessionToken(token) {
    return await redis.upsert("phigrosBanSessionToken", [{ sessionToken: token }], "sessionToken");
  }
  static async allowSessionToken(token) {
    return await redis.remove("phigrosBanSessionToken", { sessionToken: token });
  }
  static async isBanSessionToken(token) {
    return (await redis.get("phigrosBanSessionToken", { sessionToken: token }))[0] ? true : false;
  }
  static async getGod() {
    return await redis.get("phigrosBanSessionToken", { id: { $lt: -1 } }, ["sessionToken"]);
  }
};

// src/model/send.ts
var import_koishi3 = require("koishi");

// src/model/getBanGroup.ts
var getBanGroup = class {
  static {
    __name(this, "getBanGroup");
  }
  /**
   * 
   * @param {string} group 
   * @param {string} fnc 
   * @returns 
   */
  static async redis(group, fnc) {
    let res = await redis.get("phigrosBanGroup", { groupId: group });
    return res[0] && res[0][fnc] ? true : false;
  }
  /**
   * 
   * @param {string} group 
   * @param {string} fnc 
   * @returns 
   */
  static async get(group, fnc) {
    if (!group) {
      return false;
    }
    switch (fnc) {
      case "help":
      case "tkhelp":
        return await this.redis(group, "help");
      case "bind":
      case "unbind":
        return await this.redis(group, "bind");
      case "b19":
      case "arcgrosB19":
      case "update":
      case "info":
      case "list":
      case "singlescore":
      case "lvscore":
      case "chap":
      case "suggest":
        return await this.redis(group, "b19");
      case "bestn":
      case "data":
        return await this.redis(group, "wb19");
      case "song":
      case "ill":
      case "search":
      case "alias":
      case "randmic":
        return await this.redis(group, "song");
      case "rankList":
      case "godList":
        return await this.redis(group, "ranklist");
      case "comrks":
      case "tips":
      case "lmtAcc":
      case "randClg":
        return await this.redis(group, "fnc");
      case "tipgame":
        return await this.redis(group, "tipgame");
      case "guessgame":
        return await this.redis(group, "guessgame");
      case "ltrgame":
        return await this.redis(group, "ltrgame");
      case "sign":
      case "send":
      case "tasks":
      case "retask":
      case "jrrp":
        return await this.redis(group, "sign");
      case "theme":
        return await this.redis(group, "setting");
      case "dan":
      case "danupdate":
        return await this.redis(group, "dan");
      default:
        return false;
    }
  }
};

// src/model/send.ts
var send = class {
  static {
    __name(this, "send");
  }
  /**
   * 私聊省略@
   * @param session 
   * @param msg 
   * @param quote 是否引用回复
   * @param recallMsg recallMsg 单位，秒
   */
  async send_with_At(session, msg, quote = false, recallMsg = 0) {
    let messageId;
    if (session.guild) {
      messageId = await session.send(quote ? import_koishi3.h.quote(session.messageId) : "" + import_koishi3.h.at(session.userId) + msg);
    } else {
      messageId = await session.send(quote ? import_koishi3.h.quote(session.messageId) : "" + msg);
    }
    if (recallMsg) {
      setTimeout(() => {
        for (let id in messageId) {
          session.bot.deleteMessage(session.channelId, messageId[id]);
        }
      }, recallMsg * 1e3);
    }
    return messageId;
  }
  /**
   * 检查存档部分
   * @param {*} e 
   * @param {Number} ver 存档版本
   * @returns {Promise<Save>}
   * v1.0,取消对当次更新内容的存储，取消对task的记录，更正scoreHistory 
   * v1.1,更正scoreHistory
   * v1.2,由于曲名错误，删除所有记录，曲名使用id记录
   */
  async getsave_result(session, ver) {
    let sessionToken = await getSave.get_user_token(session.userId);
    let user_save = await getSave.getSave(session.userId);
    if (!sessionToken) {
      this.send_with_At(session, session.text(i18nList.haveToBind));
      return null;
    }
    if (!user_save || ver && (!user_save.Recordver || user_save.Recordver < ver)) {
      this.send_with_At(session, session.text(i18nList.haveToUpdate));
      return null;
    }
    return user_save;
  }
  /**
   * 该功能是否被ban
   * @param session 
   * @param fnc 指令名称
   */
  async isBan(session, fnc) {
    if (session.guild && await getBanGroup.get(session.guildId, fnc)) {
      session.send(session.text(i18nList.beGroupBan));
      return true;
    }
    return false;
  }
};
var send_default = new send();

// src/model/getNotes.ts
var import_path4 = __toESM(require("path"));
var getNotes = class {
  static {
    __name(this, "getNotes");
  }
  /**
   * 获取并初始化用户数据
   * @param {string} user_id 
   * @returns {{plugin_data:{money:number,sign_in:string,task_time:string,task:Array<object>,theme:string}}}
   */
  static getNotesData(user_id) {
    let data = getFile.FileReader(import_path4.default.join(pluginDataPath, `${user_id}_.json`));
    if (!data || !data.plugin_data) {
      data = {
        plugin_data: {
          money: 0,
          sign_in: "Wed Apr 03 2024 23:03:52 GMT+0800 (中国标准时间)",
          task_time: "Wed Apr 03 2024 23:03:52 GMT+0800 (中国标准时间)",
          task: [],
          theme: "star"
        }
      };
    }
    return data;
  }
  static async putNotesData(user_id, data) {
    return getFile.SetFile(import_path4.default.join(pluginDataPath, `${user_id}_.json`), data);
  }
  static async delNotesData(user_id) {
    return getFile.DelFile(import_path4.default.join(pluginDataPath, `${user_id}_.json`));
  }
};

// src/lib/http.ts
var import_node_fetch = __toESM(require("node-fetch"));
var HttpClient = class {
  static {
    __name(this, "HttpClient");
  }
  constructor() {
    this.request = new HttpRequest();
  }
  /** 
   * 
   * @param {*} fetch_s_return response 
   * @param {*} unknow 
   * @returns response s json body
   */
  async send(response) {
    return await response.json();
  }
};
var HttpRequest = class _HttpRequest {
  static {
    __name(this, "HttpRequest");
  }
  constructor() {
    this.url = null;
    this.method = "GET";
    this.headers = {};
    return this;
  }
  /**
   * 
   * @param {String}  url 
   * @returns Builder
   */
  uri(url) {
    try {
      this.url = new URL(url);
      return this;
    } catch (error) {
      throw new Error("非法URL " + error);
    }
  }
  header(name2, value) {
    this.headers[name2] = String(value);
    return this;
  }
  copy() {
    let result = new _HttpRequest();
    return Object.assign(result, this);
  }
  DELETE() {
    this.method = "DELETE";
    return this;
  }
  GET() {
    this.method = "GET";
    return this;
  }
  async build() {
    if (this.url) {
      return await (0, import_node_fetch.default)(this.url, this);
    } else {
      throw new Error("未设置URL");
    }
  }
};

// src/lib/AES.ts
var import_crypto_js = __toESM(require("crypto-js"));
async function Encrypt(word, key, iv) {
  key = import_crypto_js.default.enc.Utf8.parse(key);
  iv = import_crypto_js.default.enc.Utf8.parse(iv);
  let srcs = import_crypto_js.default.enc.Utf8.parse(word);
  let encrypted = import_crypto_js.default.AES.encrypt(srcs, key, {
    iv,
    mode: import_crypto_js.default.mode.CBC,
    padding: import_crypto_js.default.pad.Pkcs7
  });
  return import_crypto_js.default.enc.Base64.stringify(encrypted.ciphertext);
}
__name(Encrypt, "Encrypt");
async function Decrypt(word) {
  let key = import_crypto_js.default.enc.Base64.parse("6Jaa0qVAJZuXkZCLiOa/Ax5tIZVu+taKUN1V1nqwkks=");
  let iv = import_crypto_js.default.enc.Base64.parse("Kk/wisgNYwcAV8WVGMgyUw==");
  const decrypt = import_crypto_js.default.AES.decrypt(word, key, {
    iv
  });
  let result = decrypt.toString(import_crypto_js.default.enc.Hex);
  return result;
}
__name(Decrypt, "Decrypt");

// src/lib/ByteReader.ts
var ByteReader = class {
  static {
    __name(this, "ByteReader");
  }
  constructor(data, position = 0) {
    this.data = Buffer.from(data, "hex");
    this.position = position;
  }
  /**返回剩余的字节数 */
  remaining() {
    return this.data.length - this.position;
  }
  getByte() {
    return this.data[this.position++];
  }
  putByte(num) {
    this.data[this.position++] = num;
  }
  /**
   * 
   * @returns {*} base64
   */
  getAllByte() {
    return this.data.toString("base64", this.position);
  }
  getShort() {
    this.position += 2;
    return this.data[this.position - 1] << 8 ^ this.data[this.position - 2] & 255;
  }
  putShort(num) {
    this.data[this.position++] = num & 255;
    this.data[this.position++] = num >>> 8 & 255;
  }
  getInt() {
    this.position += 4;
    return this.data[this.position - 1] << 24 ^ (this.data[this.position - 2] & 255) << 16 ^ (this.data[this.position - 3] & 255) << 8 ^ this.data[this.position - 4] & 255;
  }
  putInt(num) {
    this.data[this.position] = num & 255;
    this.data[this.position + 1] = num >>> 8 & 255;
    this.data[this.position + 2] = num >>> 16 & 255;
    this.data[this.position + 3] = num >>> 24 & 255;
    this.position += 4;
  }
  getFloat() {
    this.position += 4;
    return this.data.readFloatLE(this.position - 4);
  }
  putFloat(num) {
    this.data.writeFloatLE(num, this.position);
    this.position += 4;
  }
  getVarInt() {
    if (this.data[this.position] > 127) {
      this.position += 2;
      return Number(127 & this.data[this.position - 2]) ^ this.data[this.position - 1] << 7;
    } else return this.data[this.position++];
  }
  skipVarInt(num) {
    if (num) {
      for (; num > 0; num--) {
        this.skipVarInt();
      }
    } else {
      if (this.data[this.position] < 0) this.position += 2;
      else this.position++;
    }
  }
  getBytes() {
    let length = this.getByte();
    this.position += length;
    return this.data.subarray(this.position - length, this.position);
  }
  getString() {
    let length = this.getVarInt();
    this.position += length;
    return this.data.toString("utf-8", this.position - length, this.position);
  }
  putString(s) {
    let b = s.split("");
    let c = [];
    for (let i = 0; i < b.length; i++) {
      c[i] = b[i].charCodeAt(0);
    }
    this.data[this.position++] = b.length;
    this.data.set(c, this.position);
    this.position += b.length;
  }
  skipString() {
    this.position += this.getByte() + 1;
  }
  insertBytes(bytes) {
    let result = new Uint8Array(this.data.length + bytes.length);
    result.set(this.data.subarray(0, this.position), 0);
    result.set(bytes, this.position);
    result.set(this.data.subarray(this.position), this.position + bytes.length);
    this.data = Buffer.from(result);
  }
  replaceBytes(length, bytes) {
    if (bytes.length == length) {
      this.data.set(bytes, this.position);
      return;
    }
    let result = new Uint8Array(this.data.length + bytes.length - length);
    result.set(this.data.subarray(0, this.position), 0);
    result.set(bytes, this.position);
    result.set(
      this.data.subarray(this.position + length),
      this.position + bytes.length
    );
    this.data = Buffer.from(result);
  }
};

// src/lib/Base64.ts
var Base64 = class {
  static {
    __name(this, "Base64");
  }
  static decode(data) {
    let result = Buffer.from(data, "base64");
    return result.toString("hex");
  }
  static encode(data) {
    let result = Buffer.from(data, "hex");
    return result.toString("base64");
  }
};
var Base64_default = Base64;

// src/lib/Summary.ts
var Summary = class {
  static {
    __name(this, "Summary");
  }
  constructor(summary) {
    let now = Date().toString();
    let time = now.split(" ");
    this.updatedAt = `${time[3]} ${time[1]}.${time[2]} ${time[4]}`;
    this.saveVersion = 0;
    this.challengeModeRank = 0;
    this.rankingScore = 0;
    this.gameVersion = 0;
    this.avatar = "";
    this.cleared = [];
    this.fullCombo = [];
    this.phi = [];
    const reader = new ByteReader(Base64_default.decode(summary));
    this.saveVersion = reader.getByte();
    this.challengeModeRank = reader.getShort();
    this.rankingScore = reader.getFloat();
    this.gameVersion = reader.getByte();
    this.avatar = reader.getString();
    this.cleared = [];
    this.fullCombo = [];
    this.phi = [];
    for (let level = 0; level < 4; level++) {
      this.cleared[level] = reader.getShort();
      this.fullCombo[level] = reader.getShort();
      this.phi[level] = reader.getShort();
    }
  }
};

// src/lib/SaveManager.ts
var SaveManager = class _SaveManager {
  static {
    __name(this, "SaveManager");
  }
  static baseUrl = "https://rak3ffdi.cloud.tds1.tapapis.cn/1.1";
  static client = new HttpClient();
  static globalRequest = new HttpRequest().header("X-LC-Id", "rAK3FfdieFob2Nn8Am").header("X-LC-Key", "Qr9AEqtuoSVS3zeD6iVbM4ZC0AtkJcQ89tywVyi0").header("User-Agent", "LeanCloud-CSharp-SDK/1.0.3").header("Accept", "application/json");
  static fileTokens = _SaveManager.baseUrl + "/fileTokens";
  static fileCallback = _SaveManager.baseUrl + "/fileCallback";
  static save = _SaveManager.baseUrl + "/classes/_GameSave";
  static userInfo = _SaveManager.baseUrl + "/users/me";
  static files = _SaveManager.baseUrl + "/files/";
  static async getPlayerId(session) {
    let request = await this.globalRequest.copy().header("X-LC-Session", session).uri(this.userInfo).build();
    let response = await this.client.send(request);
    return response.nickname;
  }
  /**
   * 
   * @param {String} session 
   * @returns Array
   */
  static async saveArray(session) {
    let request = await this.globalRequest.copy().header("X-LC-Session", session).uri(this.save).build();
    let response = await this.client.send(request);
    return response.results;
  }
  /**
   * 
   * @param {String} session 
   * @returns Array|Objct
   */
  static async saveCheck(session) {
    let array = await this.saveArray(session);
    let size = array.length;
    if (size == 0)
      throw new Error("存档不存在,sessionToken: " + session);
    else {
      let results = [];
      for (let i in array) {
        array[i].summary = new Summary(array[i].summary);
        array[i].PlayerId = await this.getPlayerId(session);
        let date = new Date(array[i].updatedAt).toString();
        let time = date.split(" ");
        array[i].updatedAt = `${time[3]} ${time[1]}.${time[2]} ${time[4]}`;
        if (array[i].gameFile) {
          array[i] = {
            createdAt: array[i].createdAt,
            gameFile: {
              createdAt: array[i].gameFile.createdAt,
              key: array[i].gameFile.key,
              objectId: array[i].gameFile.objectId,
              updatedAt: array[i].gameFile.updatedAt,
              url: array[i].gameFile.url
            },
            modifiedAt: array[i].modifiedAt,
            objectId: array[i].objectId,
            summary: array[i].summary,
            updatedAt: array[i].updatedAt,
            user: array[i].user,
            PlayerId: array[i].PlayerId
          };
          results.push(array[i]);
        }
      }
      return results;
    }
  }
  static key = Buffer.from([-24, -106, -102, -46, -91, 64, 37, -101, -105, -111, -112, -117, -120, -26, -65, 3, 30, 109, 33, -107, 110, -6, -42, -118, 80, -35, 85, -42, 122, -80, -110, 75]).toString("hex");
  static iv = Buffer.from([42, 79, -16, -118, -56, 13, 99, 7, 0, 87, -59, -107, 24, -56, 50, 83]).toString("hex");
  static async decrypt(data) {
    try {
      return Decrypt(data);
    } catch (e) {
      throw new Error(e);
    }
  }
  static async encrypt(data) {
    try {
      return Encrypt(data, this.key, this.iv);
    } catch (e) {
      throw new Error(e);
    }
  }
};

// src/lib/PhigrosUser.ts
var import_jszip = __toESM(require("jszip"));
var import_node_fetch2 = __toESM(require("node-fetch"));

// src/lib/LevelRecord.ts
var LevelRecord = class {
  static {
    __name(this, "LevelRecord");
  }
  fc;
  score;
  acc;
  constructor() {
    this.fc = false;
    this.score = 0;
    this.acc = 0;
  }
};
var LevelRecord_default = LevelRecord;

// src/lib/Util.ts
var Util = class {
  static {
    __name(this, "Util");
  }
  static getBit(data, index) {
    return data & 1 << index ? true : false;
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
};
var Util_default = Util;

// src/lib/GameRecord.ts
var GameRecord = class {
  static name = "gameRecord";
  static version = 1;
  constructor(data) {
    this.name = "gameRecord";
    this.version = 1;
    this.data = new ByteReader(data);
    this.Record = {};
    this.songsnum = 0;
  }
  /**
   * 
   * @param {Array} err 错误消息
   */
  async init(err) {
    this.songsnum = this.data.getVarInt();
    while (this.data.remaining() > 0) {
      let key = this.data.getString().replace(".0", "");
      this.data.skipVarInt();
      let length = this.data.getByte();
      let fc = this.data.getByte();
      let song = [];
      for (let level = 0; level < 5; level++) {
        if (Util_default.getBit(length, level)) {
          song[level] = new LevelRecord_default();
          song[level].score = this.data.getInt();
          song[level].acc = this.data.getFloat();
          song[level].fc = song[level].score == 1e6 && song[level].acc == 100 ? true : Util_default.getBit(fc, level);
        }
      }
      if (!getInfo.idgetsong(key)) {
        err.push(key);
      }
      this.Record[key] = song;
    }
  }
};

// src/lib/GameProgress.ts
var GameProgress = class {
  static {
    __name(this, "GameProgress");
  }
  constructor(data) {
    let Reader = new ByteReader(data);
    let tem = Reader.getByte();
    this.isFirstRun = Util_default.getBit(tem, 0);
    this.legacyChapterFinished = Util_default.getBit(tem, 1);
    this.alreadyShowCollectionTip = Util_default.getBit(tem, 2);
    this.alreadyShowAutoUnlockINTip = Util_default.getBit(tem, 3);
    this.completed = Reader.getString();
    this.songUpdateInfo = Reader.getVarInt();
    this.challengeModeRank = Reader.getShort();
    this.money = [0, 0, 0, 0, 0];
    this.money[0] = Reader.getVarInt();
    this.money[1] = Reader.getVarInt();
    this.money[2] = Reader.getVarInt();
    this.money[3] = Reader.getVarInt();
    this.money[4] = Reader.getVarInt();
    this.unlockFlagOfSpasmodic = Reader.getByte();
    this.unlockFlagOfIgallta = Reader.getByte();
    this.unlockFlagOfRrharil = Reader.getByte();
    this.flagOfSongRecordKey = Reader.getByte();
    this.randomVersionUnlocked = Reader.getByte();
    tem = Reader.getByte();
    this.chapter8UnlockBegin = Util_default.getBit(tem, 0);
    this.chapter8UnlockSecondPhase = Util_default.getBit(tem, 1);
    this.chapter8Passed = Util_default.getBit(tem, 2);
    this.chapter8SongUnlocked = Reader.getByte();
  }
};

// src/lib/GameUser.ts
var GameUser = class {
  static {
    __name(this, "GameUser");
  }
  constructor(data) {
    this.name = "user";
    this.version = 1;
    let Reader = new ByteReader(data);
    this.showPlayerId = Util_default.getBit(Reader.getByte(), 0);
    this.selfIntro = Reader.getString();
    this.avatar = Reader.getString();
    this.background = Reader.getString();
  }
};

// src/lib/GameSettings.ts
var GameSettings = class {
  static {
    __name(this, "GameSettings");
  }
  constructor(data) {
    let Reader = new ByteReader(data);
    let tem = Reader.getByte();
    this.chordSupport = Util_default.getBit(tem, 0);
    this.fcAPIndicator = Util_default.getBit(tem, 1);
    this.enableHitSound = Util_default.getBit(tem, 2);
    this.lowResolutionMode = Util_default.getBit(tem, 3);
    this.deviceName = Reader.getString();
    this.bright = Reader.getFloat();
    this.musicVolume = Reader.getFloat();
    this.effectVolume = Reader.getFloat();
    this.hitSoundVolume = Reader.getFloat();
    this.soundOffset = Reader.getFloat();
    this.noteScale = Reader.getFloat();
  }
};

// src/lib/PhigrosUser.ts
var PhigrosUser = class {
  static {
    __name(this, "PhigrosUser");
  }
  constructor(session) {
    this.sessionToken = "";
    this.saveInfo = {};
    this.gameRecord = {};
    if (!session.match(/[a-z0-9]{25}/))
      throw new Error("SessionToken格式错误");
    this.sessionToken = session;
  }
  /**
   * 获取 SaveInfo
   */
  async getSaveInfo() {
    this.saveInfo = await SaveManager.saveCheck(this.sessionToken);
    if (this.saveInfo[0] && this.saveInfo[0].createdAt) {
      this.saveInfo = this.saveInfo[0];
    } else {
      logger.error(`[Phi-Plugin]错误的存档`);
      logger.error(this.saveInfo);
      throw new Error("未找到存档QAQ！");
    }
    try {
      this.saveUrl = new URL(this.saveInfo.gameFile.url);
    } catch (err) {
      logger.error("[phi-plugin]设置saveUrl失败！", err);
      throw new Error(err);
    }
    return this.saveInfo;
  }
  /**
   * 
   * @returns 返回未绑定的信息数组，没有则为false
   */
  async buildRecord() {
    if (!this.saveUrl) {
      await this.getSaveInfo();
    }
    if (this.saveUrl) {
      let save = await (0, import_node_fetch2.default)(this.saveUrl, { method: "GET" });
      try {
        var savezip = await import_jszip.default.loadAsync(await save.arrayBuffer());
      } catch (err2) {
        logger.error(err2);
        throw new Error("解压zip文件失败！ " + err2);
      }
      this.Recordver = 1;
      let file = new ByteReader(await savezip.file("gameProgress").async("nodebuffer"));
      file.getByte();
      this.gameProgress = new GameProgress(await SaveManager.decrypt(file.getAllByte()));
      file = new ByteReader(await savezip.file("user").async("nodebuffer"));
      file.getByte();
      this.gameuser = new GameUser(await SaveManager.decrypt(file.getAllByte()));
      file = new ByteReader(await savezip.file("settings").async("nodebuffer"));
      file.getByte();
      this.gamesettings = new GameSettings(await SaveManager.decrypt(file.getAllByte()));
      file = new ByteReader(await savezip.file("gameRecord").async("nodebuffer"));
      if (file.getByte() != GameRecord.version) {
        this.gameRecord = {};
        logger.info("版本号已更新，请更新PhigrosLibrary。");
        throw new Error("版本号已更新");
      }
      let Record = new GameRecord(await SaveManager.decrypt(file.getAllByte()));
      const err = [];
      await Record.init(err);
      this.gameRecord = Record.Record;
      if (err) {
        return err;
      }
    } else {
      logger.info("获取存档链接失败！");
      throw new Error("获取存档链接失败！");
    }
    return null;
  }
};

// src/model/getUpdate.ts
async function buildingRecord(session, User) {
  let old = await getSave.getSave(session.userId);
  if (old) {
    if (old.sessionToken) {
      if (old.sessionToken == User.sessionToken) {
      } else {
        send_default.send_with_At(session, `检测到新的sessionToken，将自动更换绑定。如果需要删除统计记录请 /phi unbind 进行解绑哦！`);
        await getSave.add_user_token(session.userId, User.sessionToken);
        old = await getSave.getSave(session.userId);
      }
    }
  }
  try {
    let save_info = await User.getSaveInfo();
    if (old && old.modifiedAt == save_info.modifiedAt.iso) {
      return [0, 0];
    }
    let err = await User.buildRecord();
    if (err.length) {
      send_default.send_with_At(session, "以下曲目无信息，可能导致b19显示错误\n" + err.join("\n"));
    }
  } catch (err) {
    send_default.send_with_At(session, "绑定失败！QAQ\n" + err);
    logger.error(err);
    return null;
  }
  try {
    await getSave.putSave(session.userId, User);
  } catch (err) {
    send_default.send_with_At(session, `保存存档失败！` + err);
    logger.error(err);
    return null;
  }
  let now = new Save(User);
  let history = await getSave.getHistory(session.userId);
  history.update(now);
  logger.info(1111111, history);
  getSave.putHistory(session.userId, history);
  let pluginData = await getNotes.getNotesData(session.userId);
  let add_money = 0;
  let task = pluginData?.plugin_data?.task;
  if (task) {
    for (let id in now.gameRecord) {
      for (let i in task) {
        if (!task[i]) continue;
        if (!task[i].finished && getInfo.songsid[id] == task[i].song) {
          let level = Level.indexOf(task[i].request.rank);
          if (!now.gameRecord[id][level]) continue;
          switch (task[i].request.type) {
            case "acc": {
              if (now.gameRecord[id][level].acc >= task[i].request.value) {
                pluginData.plugin_data.task[i].finished = true;
                pluginData.plugin_data.money += task[i].reward;
                add_money += task[i].reward;
              }
              break;
            }
            case "score": {
              if (now.gameRecord[id][level].score >= task[i].request.value) {
                pluginData.plugin_data.task[i].finished = true;
                pluginData.plugin_data.money += task[i].reward;
                add_money += task[i].reward;
              }
              break;
            }
          }
        }
      }
    }
  }
  await getNotes.putNotesData(session.userId, pluginData);
  let add_rks = old ? now.saveInfo.summary.rankingScore - old.saveInfo.summary.rankingScore : 0;
  return [add_rks, add_money];
}
__name(buildingRecord, "buildingRecord");

// src/model/render.ts
var import_koishi4 = require("koishi");
var import_path5 = __toESM(require("path"));
var import_fs4 = __toESM(require("fs"));
var import_art_template = __toESM(require("art-template"));
var renderList = {};
var waitingList = {};
async function render(ctx, app, params) {
  let layoutPath = pluginResources.replace(/\\/g, "/") + `/html/common/layout/`;
  let resPath = pluginResources.replace(/\\/g, "/") + `/`;
  let data = {
    ...params,
    _plugin: Display_Plugin_Name,
    tplFile: import_path5.default.join(htmlPath, app, app + ".art").replace(/\\/g, "/"),
    pluResPath: resPath,
    _res_path: resPath,
    _imgPath: imgPath.replace(/\\/g, "/") + "/",
    _layout_path: layoutPath,
    defaultLayout: layoutPath + "default.art",
    elemLayout: layoutPath + "elem.art",
    pageGotoParams: {
      waitUntil: params.waitUntil || "networkidle2",
      timeout: config.timeout
    },
    sys: {
      scale: `style=transform:scale(${config.renderScale / 100 || 1})`,
      copyright: `Created By phi-Plugin<span class="version">${Version_default.ver}</span>`
    },
    Version: Version_default,
    quality: config.randerQuality,
    fCompute: compute
  };
  if (!renderList[app]) {
    renderList[app] = { page: await ctx.puppeteer.page(), using: false };
    waitingList[app] = [];
  }
  let renderId = Date.now();
  waitingList[app].push(renderId);
  while (renderList[app].using || waitingList[app][0] != renderId) {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    if (Date.now() - renderId > config.waitingTimeout) {
      logger.error(`waiting ${app} timeout`);
      logger.error(`waitingList length: ${waitingList[app].length}`);
      return "渲染超时，请稍后再试QAQ！";
    }
  }
  renderList[app].using = true;
  waitingList[app].shift();
  let page = renderList[app].page;
  let html = import_art_template.default.render(import_fs4.default.readFileSync(data.tplFile, { encoding: "utf-8" }), data);
  getFile.SetFile(import_path5.default.join(tempPath, app, `${app}.html`), html, "txt");
  await page.goto(import_path5.default.join(tempPath, app, `${app}.html`), { waitUntil: "networkidle2" });
  let time1 = Date.now();
  let base64 = null;
  try {
    base64 = await (await page.waitForSelector("body", { timeout: config.timeout })).screenshot({
      type: "jpeg",
      quality: config.randerQuality
      // path: path.join(tempPath, 'img', `${app}.jpeg`)
    });
  } catch (error) {
    logger.error(error);
  }
  renderList[app].using = false;
  let time2 = Date.now();
  if (base64) {
    logger.info(`render ${app} time: ${time2 - time1}ms`);
    return import_koishi4.h.image(base64, "image/jpeg");
  } else {
    logger.error(`render ${app} failed in ${time2 - time1}ms`);
    return "渲染失败，请稍后再试QAQ！";
  }
}
__name(render, "render");

// src/model/class/scoreHistory.ts
var scoreHistory = class {
  static {
    __name(this, "scoreHistory");
  }
  /**
   * 生成成绩记录数组
   * @param {number} acc 
   * @param {number} score 
   * @param {Date} date
   * @param {boolean} fc 
   * @returns []
   */
  static create(acc, score, date, fc) {
    return [acc.toFixed(4), score, date, fc];
  }
  /**
   * 扩充信息
   * @param id 曲目id
   * @param level 难度
   * @param now 
   * @param old 
   */
  static extend(id, level, now, old) {
    now[0] = Number(now[0]);
    now[1] = Number(now[1]);
    if (old) {
      old[0] = Number(old[0]);
      old[1] = Number(old[1]);
    }
    if (getInfo.info(id)?.chart[level]?.difficulty) {
      return {
        song: getInfo.idgetsong(id) || id,
        rank: level,
        illustration: getInfo.getill(id),
        Rating: Rating2(now[1], now[3]),
        rks_new: compute.rks(now[0], getInfo.info(id).chart[level].difficulty),
        rks_old: old ? compute.rks(old[0], getInfo.info(id).chart[level].difficulty) : void 0,
        acc_new: now[0],
        acc_old: old ? old[0] : void 0,
        score_new: now[1],
        score_old: old ? old[1] : void 0,
        date_new: new Date(now[2]),
        date_old: old ? new Date(old[2]) : void 0
      };
    } else {
      return {
        song: getInfo.idgetsong(id) || id,
        rank: level,
        illustration: getInfo.getill(id),
        Rating: Rating2(now[1], now[3]),
        acc_new: now[0],
        acc_old: old ? old[0] : void 0,
        score_new: now[1],
        score_old: old ? old[1] : void 0,
        date_new: new Date(now[2]),
        date_old: old ? new Date(old[2]) : void 0
      };
    }
  }
  /**
   * 展开信息
   * @param {Array} data 历史成绩
   */
  static open(data) {
    return {
      acc: data[0],
      score: data[1],
      date: new Date(data[2]),
      fc: data[3]
    };
  }
  /**
   * 获取该成绩记录的日期
   * @param {Array} data 成绩记录
   * @returns {Date} 该成绩的日期
   */
  static date(data) {
    return new Date(data[2]);
  }
};
function Rating2(score, fc) {
  if (score >= 1e6)
    return "phi";
  else if (fc)
    return "FC";
  else if (score < 7e5)
    return "F";
  else if (score < 82e4)
    return "C";
  else if (score < 88e4)
    return "B";
  else if (score < 92e4)
    return "A";
  else if (score < 96e4)
    return "S";
  else
    return "V";
}
__name(Rating2, "Rating");

// src/app/b19.ts
var phiB19 = class {
  static {
    __name(this, "phiB19");
  }
  constructor(ctx, config2) {
    ctx.command("phi.pgr", "获取B19").option("best", "-b <val:natural> 输出bN", { fallback: 21 }).action(async ({ session, options }) => {
      if (await send_default.isBan(session, "b19")) {
        return;
      }
      let save = await send_default.getsave_result(session);
      if (!save) {
        return;
      }
      let nnum = Number(options.best);
      if (!nnum) {
        nnum = 21;
      }
      nnum = Math.max(nnum, 21);
      nnum = Math.min(nnum, config2.B19MaxNum);
      let plugin_data = await getNotes.getNotesData(session.userId);
      if (!config2.isGuild)
        send_default.send_with_At(session, "正在生成图片，请稍等一下哦！\n//·/w\\·\\\\", false, 5);
      if (nnum == 21) {
        try {
          buildingRecord(session, new PhigrosUser(save.sessionToken));
          save = await send_default.getsave_result(session);
          if (!save) {
            return;
          }
        } catch (err) {
          send_default.send_with_At(session, err);
          logger2.error(err);
        }
      }
      let save_b19 = await save.getB19(nnum);
      let money = save.gameProgress.money;
      let gameuser = {
        avatar: getInfo.idgetavatar(save.gameuser.avatar) || "Introduction",
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
        rks: save.saveInfo.summary.rankingScore,
        data: `${money[4] ? `${money[4]}PiB ` : ""}${money[3] ? `${money[3]}TiB ` : ""}${money[2] ? `${money[2]}GiB ` : ""}${money[1] ? `${money[1]}MiB ` : ""}${money[0] ? `${money[0]}KiB ` : ""}`,
        selfIntro: save.gameuser.selfIntro,
        backgroundUrl: await compute.getBackground(save.gameuser.background),
        PlayerId: compute.convertRichText(save.saveInfo.PlayerId)
      };
      let data = {
        phi: save_b19.phi,
        b19_list: save_b19.b19_list,
        gameuser,
        PlayerId: gameuser.PlayerId,
        Rks: Number(save.saveInfo.summary.rankingScore).toFixed(4),
        Date: save.saveInfo.updatedAt,
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
        background: getInfo.getill(getInfo.illlist[Number((Math.random() * (getInfo.illlist.length - 1)).toFixed(0))], "blur"),
        theme: plugin_data?.plugin_data?.theme || "star",
        nnum
      };
      send_default.send_with_At(session, await render(ctx, "b19", data));
    });
    ctx.command("phi.a", "获取B30").option("best", "-b <val:natural> 输出bN", { fallback: 30 }).action(async ({ session, options }) => {
      if (await send_default.isBan(session, "arcgrosB19")) {
        return;
      }
      let save = await send_default.getsave_result(session);
      if (!save) {
        return;
      }
      let nnum = options.best;
      nnum = nnum ? Number(nnum) - 1 : 29;
      if (!nnum) {
        nnum = 29;
      }
      nnum = Math.max(nnum, 19);
      nnum = Math.min(nnum, config2.B19MaxNum);
      let save_b19 = await save.getB19(nnum);
      let money = save.gameProgress.money;
      let gameuser = {
        avatar: getInfo.idgetavatar(save.gameuser.avatar) || "Introduction",
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
        rks: save.saveInfo.summary.rankingScore,
        data: `${money[4] ? `${money[4]}PiB ` : ""}${money[3] ? `${money[3]}TiB ` : ""}${money[2] ? `${money[2]}GiB ` : ""}${money[1] ? `${money[1]}MiB ` : ""}${money[0] ? `${money[0]}KiB ` : ""}`,
        selfIntro: save.gameuser.selfIntro,
        backgroundUrl: await compute.getBackground(save.gameuser.background),
        PlayerId: save.saveInfo.PlayerId
      };
      let plugin_data = await getNotes.getNotesData(session.userId);
      let data = {
        phi: save_b19.phi,
        b19_list: save_b19.b19_list,
        gameuser,
        PlayerId: compute.convertRichText(save.saveInfo.PlayerId),
        Rks: Number(save.saveInfo.summary.rankingScore).toFixed(4),
        Date: save.saveInfo.updatedAt,
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
        background: getInfo.getill(getInfo.illlist[Number((Math.random() * (getInfo.illlist.length - 1)).toFixed(0))], "blur"),
        theme: plugin_data?.plugin_data?.theme || "star",
        nnum
      };
      send_default.send_with_At(session, await render(ctx, "arcgrosB19", data));
    });
    ctx.command("phi.score <message:text>", "单曲分数").action(async ({ session }, arg = "") => {
      if (await send_default.isBan(session, "singlescore")) {
        return;
      }
      const save = await send_default.getsave_result(session);
      if (!save) {
        return;
      }
      let song = arg;
      if (!song) {
        send_default.send_with_At(session, `请指定曲名哦！
格式：/phi score <曲名>`);
        return;
      }
      if (!getInfo.fuzzysongsnick(song)[0]) {
        send_default.send_with_At(session, `未找到 ${song} 的有关信息哦！`);
        return;
      }
      let songId = getInfo.fuzzysongsnick(song)[0];
      let songName = getInfo.idgetsong(songId);
      let Record = save.gameRecord;
      let ans = Record[songId];
      if (!ans) {
        send_default.send_with_At(session, `我不知道你关于[${songName}]的成绩哦！可以试试更新成绩哦！
格式：/phi update`);
        return;
      }
      let HistoryData = await getSave.getHistory(session.userId);
      if (HistoryData) {
        HistoryData = HistoryData[songId];
      }
      let history = [];
      if (HistoryData) {
        for (let i in HistoryData) {
          for (let j in HistoryData[i]) {
            const tem = scoreHistory.extend(songId, i, HistoryData[i][j]);
            tem.date_new = compute.date_to_string(tem.date_new);
            history.push(tem);
          }
        }
      }
      history.sort((a, b) => new Date(b.date_new).getTime() - new Date(a.date_new).getTime());
      history.splice(16);
      let data = {
        songName,
        PlayerId: save.saveInfo.PlayerId,
        avatar: getInfo.idgetavatar(save.saveInfo.summary.avatar),
        Rks: Number(save.saveInfo.summary.rankingScore).toFixed(2),
        Date: save.saveInfo.updatedAt,
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
        scoreData: {},
        history,
        illustration: getInfo.getill(songId)
      };
      let songsinfo = getInfo.info(songId);
      for (let i in Level) {
        if (!songsinfo.chart[Level[i]]) break;
        data.scoreData[Level[i]] = {};
        data.scoreData[Level[i]].difficulty = songsinfo["chart"][Level[i]]["difficulty"];
      }
      for (let i in ans) {
        if (!songsinfo["chart"][Level[i]]) break;
        if (ans[i]) {
          ans[i].acc = ans[i].acc.toFixed(4);
          ans[i].rks = ans[i].rks.toFixed(4);
          data.scoreData[Level[i]] = {
            ...ans[i],
            suggest: save.getSuggest(songId, Number(i), 4)
          };
        } else {
          data.scoreData[Level[i]] = {
            Rating: "NEW"
          };
        }
      }
      data.Rks = Number(save.saveInfo.summary.rankingScore).toFixed(4);
      send_default.send_with_At(session, await render(ctx, "score", data));
      return;
    });
    ctx.command("phi.suggest <message:text>", "获取推分建议").action(async ({ session }, arg) => {
      if (await send_default.isBan(session, "suggest")) {
        return;
      }
      let save = await send_default.getsave_result(session);
      if (!save) {
        return;
      }
      let { range: range2, isask, scoreAsk } = compute.match_request(arg);
      let Record = save.gameRecord;
      let data = [];
      for (let id in Record) {
        let song = getInfo.idgetsong(id);
        if (!song) {
          logger2.warn("[phi-plugin]", id, "曲目无信息");
          continue;
        }
        let info = getInfo.info(id);
        let record = Record[id];
        for (let lv in [0, 1, 2, 3]) {
          if (!info.chart[Level[lv]]) continue;
          let difficulty = info.chart[Level[lv]].difficulty;
          if (range2[0] <= difficulty && difficulty <= range2[1] && isask[lv]) {
            if (!record[lv] && !scoreAsk.NEW) continue;
            if (record[lv] && !scoreAsk[record[lv].Rating.toUpperCase()]) continue;
            if (!record[lv]) {
              record[lv] = {};
            }
            record[lv].suggest = save.getSuggest(id, Number(lv), 4);
            if (record[lv].suggest.includes("无")) {
              continue;
            }
            data.push({ ...record[lv], ...info, illustration: getInfo.getill(id, "low"), difficulty, rank: Level[lv] });
          }
        }
      }
      if (data.length > config2.listScoreMaxNum) {
        send_default.send_with_At(session, `谱面数量过多(${data.length})大于设置的最大值(${config2.listScoreMaxNum})，只显示前${config2.listScoreMaxNum}条！`);
      }
      data.splice(config2.listScoreMaxNum);
      data = data.sort(cmpsugg());
      let plugin_data = await getNotes.getNotesData(session.userId);
      send_default.send_with_At(session, await render(ctx, "list", {
        head_title: "推分建议",
        song: data,
        background: getInfo.getill(getInfo.illlist[compute.randBetween(0, getInfo.illlist.length - 1)]),
        theme: plugin_data?.plugin_data?.theme || "star",
        PlayerId: save.saveInfo.PlayerId,
        Rks: Number(save.saveInfo.summary.rankingScore).toFixed(4),
        Date: save.saveInfo.updatedAt,
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100
      }));
    });
  }
};
function cmpsugg() {
  return function(a, b) {
    function com(difficulty, suggest) {
      return difficulty + Math.min(suggest - 98, 1) * Math.min(suggest - 98, 1) * difficulty * 0.089;
    }
    __name(com, "com");
    let s_a = Number(a.suggest.replace("%", ""));
    let s_b = Number(b.suggest.replace("%", ""));
    return com(a.difficulty, s_a) - com(b.difficulty, s_b);
  };
}
__name(cmpsugg, "cmpsugg");

// src/app/help.ts
var import_node_path2 = __toESM(require("node:path"));
var phiHelp = class {
  static {
    __name(this, "phiHelp");
  }
  constructor(ctx) {
    ctx.command("phi.help", "查看帮助", { authority: 0 }).action(async ({ session }) => {
      if (await send_default.isBan(session, "help")) {
        return;
      }
      let helpGroup = await getFile.FileReader(import_node_path2.default.join(infoPath, "help.json"));
      session.send(await render(ctx, "help", {
        helpGroup,
        cmdHead: null,
        isMaster: session?.user?.authority == 4,
        background: getInfo.getill(getInfo.illlist[Math.floor(Math.random() * getInfo.illlist.length)]),
        theme: "star"
      }));
      return;
    });
  }
};

// src/app/session.ts
var import_koishi5 = require("koishi");

// src/lib/TapTap/LCHelper.js
var import_node_fetch3 = __toESM(require("node-fetch"));
var import_crypto_js2 = __toESM(require("crypto-js"));
var AppKey = "Qr9AEqtuoSVS3zeD6iVbM4ZC0AtkJcQ89tywVyi0";
var ClientId = "rAK3FfdieFob2Nn8Am";
var LCHelper_default = new class LCHelper {
  static {
    __name(this, "LCHelper");
  }
  md5HashHexStringDefaultGetter(input) {
    return import_crypto_js2.default.MD5(input).toString(import_crypto_js2.default.enc.Hex);
  }
  async loginWithAuthData(data, failOnNotExist = false) {
    let authData = { taptap: data };
    let path11 = failOnNotExist ? "users?failOnNotExist=true" : "users";
    let response = await this.request(path11, "post", { authData });
    return response.json();
  }
  async loginAndGetToken(data, failOnNotExist = false) {
    let response = await this.loginWithAuthData(data, failOnNotExist);
    return response;
  }
  async request(path11, method, data = null, queryParams = null, withAPIVersion = true) {
    let url = `https://rak3ffdi.cloud.tds1.tapapis.cn/1.1/users`;
    let headers = {
      "X-LC-Id": ClientId,
      "Content-Type": "application/json"
    };
    this.fillHeaders(headers);
    let response = await (0, import_node_fetch3.default)(url, {
      method,
      headers,
      body: JSON.stringify(data)
    });
    return response;
  }
  buildUrl(path11, queryParams, withAPIVersion) {
    let url = "https://rak3ffdi.cloud.tds1.tapapis.cn";
    if (withAPIVersion) {
      url += "/1.1";
    }
    url += `/${path11}`;
    if (queryParams) {
      let queryPairs = Object.entries(queryParams).filter(([, value]) => value !== null).map(([key, value]) => `${key}=${encodeURIComponent(value.toString())}`);
      let queries = queryPairs.join("&");
      url += `?${queries}`;
    }
    return url;
  }
  fillHeaders(headers, reqHeaders = null) {
    if (reqHeaders !== null) {
      Object.entries(reqHeaders).forEach(([key, value]) => {
        headers[key] = value.toString();
      });
    }
    let timestamp = Math.floor(Date.now() / 1e3);
    let data = `${timestamp}${AppKey}`;
    let hash = import_crypto_js2.default.MD5(data).toString(import_crypto_js2.default.enc.Hex);
    let sign = `${hash},${timestamp}`;
    headers["X-LC-Sign"] = sign;
  }
}();

// src/lib/TapTap/TapTapHelper.js
var import_node_fetch4 = __toESM(require("node-fetch"));
var import_crypto = __toESM(require("crypto"));

// src/lib/TapTap/CompleteQRCodeData.js
var CompleteQRCodeData = class {
  static {
    __name(this, "CompleteQRCodeData");
  }
  /**
   * @param {} code - 部分 TapTap QR 码数据对象。
   */
  constructor(code) {
    this.deviceID = code.deviceId;
    this.deviceCode = code.data.device_code;
    this.expiresInSeconds = code.data.expires_in;
    this.url = code.data.qrcode_url;
    this.interval = code.data.interval;
  }
};

// src/lib/TapTap/TapTapHelper.js
var TapTapHelper_default = new class TapTapHelper {
  static {
    __name(this, "TapTapHelper");
  }
  constructor() {
    this.TapSDKVersion = "2.1";
    this.WebHost = "https://accounts.tapapis.com";
    this.ChinaWebHost = "https://accounts.tapapis.cn";
    this.ApiHost = "https://open.tapapis.com";
    this.ChinaApiHost = "https://open.tapapis.cn";
    this.CodeUrl = `${this.WebHost}/oauth2/v1/device/code`;
    this.ChinaCodeUrl = `${this.ChinaWebHost}/oauth2/v1/device/code`;
    this.TokenUrl = `${this.WebHost}/oauth2/v1/token`;
    this.ChinaTokenUrl = `${this.ChinaWebHost}/oauth2/v1/token`;
  }
  GetChinaProfileUrl(havePublicProfile = true) {
    return havePublicProfile ? this.ChinaApiHost + "/account/profile/v1?client_id=" : this.ChinaApiHost + "/account/basic-info/v1?client_id=";
  }
  async requestLoginQrCode(permissions = ["public_profile"], useChinaEndpoint = true) {
    let clientId = import_crypto.default.randomUUID().replace(/\-/g, "");
    let params = new FormData();
    params.append("client_id", "rAK3FfdieFob2Nn8Am");
    params.append("response_type", "device_code");
    params.append("scope", permissions.join(","));
    params.append("version", this.TapSDKVersion);
    params.append("platform", "unity");
    params.append("info", JSON.stringify({ device_id: clientId }));
    let endpoint = useChinaEndpoint ? this.ChinaCodeUrl : this.CodeUrl;
    let response = await (0, import_node_fetch4.default)(endpoint, {
      method: "POST",
      body: params
    });
    let data = await response.json();
    return { ...data, deviceId: clientId };
  }
  /**
   * 
   * @param {*} qrCodeData 
   * @param {*} useChinaEndpoint 
   * @returns 
   */
  async checkQRCodeResult(data, useChinaEndpoint = true) {
    let qrCodeData = new CompleteQRCodeData(data);
    let params = new FormData();
    params.append("grant_type", "device_token");
    params.append("client_id", "rAK3FfdieFob2Nn8Am");
    params.append("secret_type", "hmac-sha-1");
    params.append("code", qrCodeData.deviceCode);
    params.append("version", "1.0");
    params.append("platform", "unity");
    params.append("info", JSON.stringify({ device_id: qrCodeData.deviceID }));
    let endpoint = useChinaEndpoint ? this.ChinaTokenUrl : this.TokenUrl;
    try {
      let response = await (0, import_node_fetch4.default)(endpoint, {
        method: "POST",
        body: params
      });
      let data2 = await response.json();
      return data2;
    } catch (error) {
      console.error("Error checking QR code result:", error);
      return null;
    }
  }
  async getProfile(token, useChinaEndpoint = true, timestamp = 0) {
    if (!token.scope.includes("public_profile")) {
      throw new Error("Public profile permission is required.");
    }
    let url;
    if (useChinaEndpoint) {
      url = `${this.ChinaApiHost}/account/profile/v1?client_id=rAK3FfdieFob2Nn8Am`;
    } else {
      url = `${this.ApiHost}/account/profile/v1?client_id=rAK3FfdieFob2Nn8Am`;
    }
    let method = "GET";
    let authorizationHeader = getAuthorization(url, method, token.kid, token.mac_key);
    let response = await (0, import_node_fetch4.default)(url, {
      method: "GET",
      headers: { Authorization: authorizationHeader }
    });
    return response.json();
  }
}();
function getAuthorization(requestUrl, method, keyId, macKey) {
  const url = new URL(requestUrl);
  const time = Math.floor(Date.now() / 1e3).toString().padStart(10, "0");
  const randomStr = getRandomString(16);
  const host = url.hostname;
  const uri = url.pathname + url.search;
  const port = url.port || (url.protocol === "https:" ? "443" : "80");
  const other = "";
  const sign = signData(mergeData(time, randomStr, method, uri, host, port, other), macKey);
  return `MAC id="${keyId}", ts="${time}", nonce="${randomStr}", mac="${sign}"`;
}
__name(getAuthorization, "getAuthorization");
function getRandomString(length) {
  return import_crypto.default.randomBytes(length).toString("base64");
}
__name(getRandomString, "getRandomString");
function mergeData(time, randomCode, httpType, uri, domain, port, other) {
  let prefix = `${time}
${randomCode}
${httpType}
${uri}
${domain}
${port}
`;
  if (!other) {
    prefix += "\n";
  } else {
    prefix += `${other}
`;
  }
  return prefix;
}
__name(mergeData, "mergeData");
function signData(signatureBaseString, key) {
  const hmac = import_crypto.default.createHmac("sha1", key);
  hmac.update(signatureBaseString);
  return hmac.digest("base64");
}
__name(signData, "signData");

// src/lib/getQRcode.ts
var import_qrcode = __toESM(require("qrcode"));
var getQRcode_default = new class getQRcode {
  static {
    __name(this, "getQRcode");
  }
  /**
   * 获取登录二维码url
   */
  async getRequest() {
    return await TapTapHelper_default.requestLoginQrCode();
  }
  /**
   * 生成url二维码
   * @param {string} url 链接
   * @returns 二维码
   */
  async getQRcode(url) {
    return await import_qrcode.default.toBuffer(url, { scale: 10 });
  }
  /**
   * 检查二维码扫描结果
   * @returns authorization_pending authorization_waiting
   */
  async checkQRCodeResult(request) {
    return await TapTapHelper_default.checkQRCodeResult(request);
  }
  /**
   * 获取sessionToken
   * @param {any} result 
   * @returns token
   */
  async getSessionToken(result) {
    let profile = await TapTapHelper_default.getProfile(result.data);
    return (await LCHelper_default.loginAndGetToken({ ...profile.data, ...result.data })).sessionToken;
  }
}();

// src/app/session.ts
var phiSstk = class {
  static {
    __name(this, "phiSstk");
  }
  constructor(ctx, config2) {
    ctx.command("phi.bind <string>", "绑定sessionToken").action(async ({ session }, token) => {
      if (await send_default.isBan(session, "help")) {
        return;
      }
      let sessionToken = token?.match(/[0-9a-zA-Z]{25}|qrcode/g)[0];
      if (!sessionToken) {
        return session.text("haveToInputToken");
      }
      if (sessionToken == "qrcode") {
        let request = await getQRcode_default.getRequest();
        let qrCodeMsg;
        if (config2.TapTapLoginQRcode) {
          qrCodeMsg = await send_default.send_with_At(session, "请扫描二维码进行登录！如只有一个设备请长按识别二维码登录嗷！请勿错扫他人二维码。请注意，登录TapTap可能造成账号及财产损失，请在信任Bot来源的情况下扫码登录。" + import_koishi5.h.image(await getQRcode_default.getQRcode(request.data.qrcode_url)), false, 60);
        } else {
          qrCodeMsg = await send_default.send_with_At(session, `请点击链接进行登录嗷！请勿使用他人的链接。请注意，登录TapTap可能造成账号及财产损失，请在信任Bot来源的情况下扫码登录。
${request.data.qrcode_url}`, false, 60);
        }
        let t1 = /* @__PURE__ */ new Date();
        let result;
        let flag = false;
        while ((/* @__PURE__ */ new Date()).getTime() - t1.getTime() < request.data.expires_in * 1e3) {
          result = await getQRcode_default.checkQRCodeResult(request);
          if (!result.success) {
            if (result.data.error == "authorization_waiting" && !flag) {
              send_default.send_with_At(session, `登录二维码已扫描，请确认登录`, false, 10);
              compute.recallMsg(session, qrCodeMsg);
              flag = true;
            }
          } else {
            break;
          }
          await compute.sleep(2e3);
        }
        if (!result.success) {
          send_default.send_with_At(session, `操作超时，请重试！`);
          return;
        }
        try {
          sessionToken = await getQRcode_default.getSessionToken(result);
        } catch (err) {
          logger.error(err);
          send_default.send_with_At(session, `获取sessionToken失败QAQ！请确认您的Phigros已登录TapTap账号！
错误信息：${err}`);
          return;
        }
      }
      send_default.send_with_At(session, `请注意保护好自己的sessionToken呐！如果需要获取已绑定的sessionToken可以私聊发送 /phi sessionToken 哦！`, false, 10);
      if (!config2.isGuild) {
        send_default.send_with_At(session, "正在绑定，请稍等一下哦！\n >_<", false, 5);
      }
      try {
        await build(ctx, session, sessionToken, config2);
      } catch (error) {
        logger.error(error);
        send_default.send_with_At(session, `更新失败，请检查你的sessionToken是否正确！
错误信息：${error}`);
      }
    });
    ctx.command("phi.update", "更新存档").action(async ({ session }) => {
      if (await send_default.isBan(session, "update")) {
        return null;
      }
      let token = await getSave.get_user_token(session.userId);
      if (!token) {
        send_default.send_with_At(session, `没有找到你的存档哦！请先绑定sessionToken！
帮助：/phi tk help
格式：/phi bind <sessionToken>`);
        return null;
      }
      if (!config2.isGuild || !session.guild) {
        send_default.send_with_At(session, "正在更新，请稍等一下哦！\n >_<", true, 5);
      }
      try {
        await build(ctx, session, token, config2);
      } catch (error) {
        logger.error(error);
        send_default.send_with_At(session, `更新失败，请检查你的sessionToken是否正确！
错误信息：${error}`);
      }
      return null;
    });
    ctx.command("phi.unbind", "解绑").action(async ({ session }) => {
      if (await send_default.isBan(session, "unbind")) {
        return;
      }
      if (!getSave.get_user_token(session.userId)) {
        send_default.send_with_At(session, "没有找到你的存档信息嗷！");
        return;
      }
      send_default.send_with_At(session, "解绑会导致历史数据全部清空呐QAQ！真的要这么做吗？（确认/取消）");
      let res = await session.prompt(30);
      if (res.includes("确认")) {
        let flag = true;
        try {
          getSave.delSave(session.userId);
        } catch (err) {
          send_default.send_with_At(session, err);
          flag = false;
        }
        try {
          let pluginData = await getNotes.getNotesData(session.userId);
          if (pluginData) {
            if (pluginData.plugin_data) {
              pluginData.plugin_data.task = [];
            }
            await getNotes.putNotesData(session.userId, pluginData);
          }
          getSave.del_user_token(session.userId);
        } catch (err) {
          send_default.send_with_At(session, err);
          flag = false;
        }
        if (flag) {
          send_default.send_with_At(session, "解绑成功");
        } else {
          send_default.send_with_At(session, "没有找到你的存档哦！");
        }
      } else {
        send_default.send_with_At(session, `取消成功！`);
      }
      return;
    });
    ctx.command("phi.clear", "清除全部数据").action(async ({ session }) => {
      send_default.send_with_At(session, "请注意，本操作将会删除Phi-Plugin关于您的所有信息QAQ！（确认/取消）");
      let res = await session.prompt(30);
      if (res.includes("确认")) {
        let flag = true;
        try {
          getSave.delSave(session.userId);
        } catch (err) {
          send_default.send_with_At(session, err);
          flag = false;
        }
        try {
          getNotes.delNotesData(session.userId);
        } catch (err) {
          send_default.send_with_At(session, err);
          flag = false;
        }
        if (flag) {
          send_default.send_with_At(session, "清除成功");
        }
      } else {
        send_default.send_with_At(session, `取消成功！`);
      }
    });
    ctx.command("phi.sessionToken", "获取sessionToken").action(async ({ session }) => {
      if (session.userId) {
        send_default.send_with_At(session, `请私聊使用嗷`);
        return;
      }
      let save = await send_default.getsave_result(session);
      if (!save) {
        send_default.send_with_At(session, `未绑定存档，请先绑定存档嗷！`);
        return;
      }
      send_default.send_with_At(session, `PlayerId: ${compute.convertRichText(save.saveInfo.PlayerId, true)}
sessionToken: ${save.sessionToken}
ObjectId: ${save.saveInfo.objectId}
Id: ${session.userId}`);
    });
  }
};
async function build(ctx, session, sessionToken, config2) {
  let User;
  try {
    User = new PhigrosUser(sessionToken);
  } catch (err) {
    logger.error(`[phi-plugin]绑定sessionToken错误`, err);
    send_default.send_with_At(session, `绑定sessionToken错误QAQ!
错误的sstk:${sessionToken}
帮助：/phi tk help
格式：/phi bind <sessionToken>`, false, 10);
    return true;
  }
  let added_rks_notes = await buildingRecord(session, User);
  if (!added_rks_notes) {
    return true;
  }
  if (added_rks_notes[0]) added_rks_notes[0] = `${added_rks_notes[0] > 0 ? "+" : ""}${added_rks_notes[0] >= 1e-4 ? added_rks_notes[0].toFixed(4) : ""}`;
  if (added_rks_notes[1]) added_rks_notes[1] = `${added_rks_notes[1] > 0 ? "+" : ""}${added_rks_notes[1]}`;
  let time_vis = {};
  let tot_update = [];
  let now = new Save(User);
  let pluginData = await getNotes.getNotesData(session.userId);
  let saveHistory2 = await getSave.getHistory(session.userId);
  for (let song in saveHistory2.scoreHistory) {
    let tem = saveHistory2.scoreHistory[song];
    for (let level in tem) {
      let history = tem[level];
      if (!history) continue;
      for (let i = 0; i < history.length; ++i) {
        let score_date = compute.date_to_string(scoreHistory.date(history[i]));
        let score_info = scoreHistory.extend(song, level, history[i], history[i - 1]);
        if (time_vis[score_date] == void 0) {
          time_vis[score_date] = tot_update.length;
          tot_update.push({ date: score_date, color: compute.getRandomBgColor(), update_num: 0, song: [] });
        }
        ++tot_update[time_vis[score_date]].update_num;
        tot_update[time_vis[score_date]].song.push(score_info);
      }
    }
  }
  let newnum = tot_update[time_vis[compute.date_to_string(now.saveInfo.modifiedAt.iso)]]?.update_num || 0;
  tot_update.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  let show = 0;
  const DayNum = Math.max(config2.HistoryDayNum, 2);
  const DateNum = config2.HistoryDateNum;
  const TotNum = config2.HistoryScoreNum;
  for (let d in tot_update) {
    let date = Number(d);
    if (date >= DateNum || TotNum < show + Math.min(DayNum, tot_update[date].update_num)) {
      tot_update.splice(date, tot_update.length);
      break;
    }
    tot_update[date].song.sort((a, b) => {
      return b.rks_new - a.rks_new;
    });
    tot_update[date].song = tot_update[date].song.slice(0, Math.min(DayNum, TotNum - show));
    show += tot_update[date].song.length;
  }
  let box_line = [];
  box_line[box_line.length - 1];
  let line_num = 0;
  line_num = 5;
  let flag = false;
  while (tot_update.length) {
    if (line_num == 5) {
      if (flag) {
        box_line.push([{ color: tot_update[0].color, song: tot_update[0].song.splice(0, 5) }]);
      } else {
        box_line.push([{ date: tot_update[0].date, color: tot_update[0].color, song: tot_update[0].song.splice(0, 5) }]);
      }
      let tem2 = box_line[box_line.length - 1];
      line_num = tem2[tem2.length - 1].song.length;
    } else {
      let tem2 = box_line[box_line.length - 1];
      if (flag) {
        tem2.push({ color: tot_update[0].color, song: tot_update[0].song.splice(0, 5 - line_num) });
      } else {
        tem2.push({ date: tot_update[0].date, color: tot_update[0].color, song: tot_update[0].song.splice(0, 5 - line_num) });
      }
      line_num += tem2[tem2.length - 1].song.length;
    }
    let tem = box_line[box_line.length - 1];
    tem[tem.length - 1].width = comWidth(tem[tem.length - 1].song.length);
    flag = true;
    if (!tot_update[0].song.length) {
      tem[tem.length - 1].update_num = tot_update[0].update_num;
      tot_update.shift();
      flag = false;
    }
  }
  let task_data = pluginData?.plugin_data?.task;
  let task_time = compute.date_to_string(pluginData?.plugin_data?.task_time);
  if (task_data) {
    for (let i in task_data) {
      if (task_data[i]) {
        task_data[i].illustration = getInfo.getill(task_data[i].id);
        if (task_data[i].request.type == "acc") {
          task_data[i].request.value = task_data[i].request.value.toFixed(2) + "%";
          if (task_data[i].request.value.length < 6) {
            task_data[i].request.value = "0" + task_data[i].request.value;
          }
        }
      }
    }
  }
  let data = {
    PlayerId: compute.convertRichText(now.saveInfo.PlayerId),
    Rks: Number(now.saveInfo.summary.rankingScore).toFixed(4),
    Date: now.saveInfo.updatedAt,
    ChallengeMode: (now.saveInfo.summary.challengeModeRank - now.saveInfo.summary.challengeModeRank % 100) / 100,
    ChallengeModeRank: now.saveInfo.summary.challengeModeRank % 100,
    background: getInfo.getill(getInfo.illlist[Math.floor(Math.random() * (getInfo.illlist.length - 1))]),
    box_line,
    update_ans: newnum ? `更新了${newnum}份成绩` : `未收集到新成绩`,
    Notes: pluginData.plugin_data ? pluginData.plugin_data.money : 0,
    show,
    tips: getInfo.tips[Math.floor(Math.random() * (getInfo.tips.length - 1) + 1)],
    task_data,
    task_time,
    dan: await getSave.getDan(session.userId),
    added_rks_notes,
    theme: pluginData?.plugin_data?.theme || "star"
  };
  send_default.send_with_At(session, `PlayerId: ${compute.convertRichText(now.saveInfo.PlayerId, true)}` + await render(ctx, "update", data));
  return false;
}
__name(build, "build");
function comWidth(num) {
  return num * 135 + 20 * num - 20;
}
__name(comWidth, "comWidth");

// src/model/getPic.ts
var pic = class {
  static {
    __name(this, "pic");
  }
  /**
   * 获取歌曲图鉴，曲名为原名
   * @param {any} ctx 上下文
   * @param {string} id 曲名
   * @param {any} data 自定义数据
   * @returns 
   */
  static async GetSongsInfoAtlas(ctx, id, data = void 0) {
    data = data || getInfo.info(id);
    if (data) {
      if (!data.illustration) {
        data.illustration = getInfo.getill(id);
      }
      return await render(ctx, "song", data);
    } else {
      return `未找到${id}的相关曲目信息!QAQ`;
    }
  }
  /**
   * 获取曲绘图鉴
   * @param {*} e 消息e
   * @param {string} id 原曲名称
   * @param { {illustration:string, illustrator:string} } data 自定义数据
   * @returns 
   */
  static async GetSongsIllAtlas(ctx, id, data = void 0) {
    if (data) {
      return await render(ctx, "ill", { illustration: data.illustration, illustrator: data.illustrator });
    } else {
      return await render(ctx, "ill", { illustration: getInfo.getill(id), illustrator: getInfo.info(id).illustrator });
    }
  }
  /**
   * 获取本地图片，文件格式默认png
   * @param {string} img 文件名
   * @param {string} style 文件格式，默认为png
   */
  static getimg(img, style = "png") {
    let url = `${imgPath}/${img}.${style}`;
    if (url) {
      return url;
    }
    logger.info(`未找到 ${img}.${style}`);
    return null;
  }
};

// src/app/song.ts
var phiSong = class {
  static {
    __name(this, "phiSong");
  }
  constructor(ctx, config2) {
    ctx.command("phi.song <message:text>", "查看歌曲信息").action(async ({ session }, arg = "") => {
      if (await send_default.isBan(session, "song")) {
        return;
      }
      if (!arg) {
        send_default.send_with_At(session, `请指定曲名哦！
格式：/phi song <曲名>`);
        return;
      }
      let ids = getInfo.fuzzysongsnick(arg);
      if (ids[0]) {
        let msgRes = "";
        if (!ids[1]) {
          msgRes += await pic.GetSongsInfoAtlas(ctx, ids[0]);
          send_default.send_with_At(session, msgRes);
        } else {
          for (let i in ids) {
            msgRes += await pic.GetSongsInfoAtlas(ctx, ids[i]);
          }
          send_default.send_with_At(session, msgRes);
        }
      } else {
        send_default.send_with_At(session, `未找到${arg}的相关曲目信息QAQ`);
      }
    });
    ctx.command("phi.ill <message:text>", "查看曲绘信息").action(async ({ session }, arg = "") => {
      if (await send_default.isBan(session, "ill")) {
        return;
      }
      if (!arg) {
        send_default.send_with_At(session, `请指定曲名哦！
格式：/phi ill <曲名>`);
        return;
      }
      let ids = getInfo.fuzzysongsnick(arg);
      if (ids[0]) {
        let msgRes = "";
        if (!ids[1]) {
          msgRes += await pic.GetSongsIllAtlas(ctx, ids[0]);
          send_default.send_with_At(session, msgRes);
        } else {
          for (let i in ids) {
            msgRes += await pic.GetSongsIllAtlas(ctx, ids[i]);
          }
          send_default.send_with_At(session, msgRes);
        }
      } else {
        send_default.send_with_At(session, `未找到${arg}的相关曲目信息QAQ`);
      }
    });
    ctx.command("phi.rand <message:text>", "随机曲目").action(async ({ session }, arg = "") => {
      if (await send_default.isBan(session, "randmic")) {
        return;
      }
      let isask = [1, 1, 1, 1];
      arg = arg.toUpperCase();
      if (arg.includes("AT") || arg.includes("IN") || arg.includes("HD") || arg.includes("EZ")) {
        isask = [0, 0, 0, 0];
        if (arg.includes("EZ")) {
          isask[0] = 1;
        }
        if (arg.includes("HD")) {
          isask[1] = 1;
        }
        if (arg.includes("IN")) {
          isask[2] = 1;
        }
        if (arg.includes("AT")) {
          isask[3] = 1;
        }
      }
      arg = arg.replace(/((\s*)|AT|IN|HD|EZ)*/g, "");
      let rank = arg.split("-");
      let top;
      let bottom;
      if (rank[0]) {
        if (rank[0].includes("+")) {
          if (rank[1]) {
            send_default.send_with_At(session, `含有 '+' 的难度不支持指定范围哦！
/phi rand <定数>+ <难度(可多选)>`, true);
            return;
          } else {
            bottom = Number(rank[0].replace("+", ""));
            top = 100;
          }
        } else if (rank[0].includes("-") && !rank[1]) {
          bottom = Number(rank[0].replace("-", ""));
          if (bottom != bottom) {
            send_default.send_with_At(session, `${rank[0]} 不是一个定级哦
#/phi rand <定数>- <难度(可多选)>`, true);
            return;
          } else {
            bottom = 0;
            top = Number(rank[0]);
          }
        } else {
          bottom = Number(rank[0]);
          if (rank[1]) {
            top = Number(rank[1]);
            if (bottom != bottom || top != top) {
              send_default.send_with_At(session, `${rank[0]} - ${rank[1]} 不是一个定级范围哦
/phi rand <定数1> - <定数2> <难度(可多选)>`, true);
              return;
            }
            if (top < bottom) {
              top = top + bottom;
              bottom = top - bottom;
              top = top - bottom;
            }
          } else {
            bottom = Number(rank[0]);
            if (bottom != bottom) {
              send_default.send_with_At(session, `${rank[0]} 不是一个定级哦
#/phi rand <定数> <难度(可多选)>`, true);
              return;
            } else {
              top = bottom;
            }
          }
        }
      } else {
        top = 100;
        bottom = 0;
      }
      if (top % 1 == 0 && !arg.includes(".0")) top += 0.9;
      let idList = [];
      for (let id in getInfo.ori_info) {
        for (let level in Level) {
          if (isask[level] && getInfo.ori_info[id]["chart"][Level[level]]) {
            let difficulty = getInfo.ori_info[id]["chart"][Level[level]]["difficulty"];
            if (difficulty >= bottom && difficulty <= top) {
              idList.push({
                ...getInfo.ori_info[id]["chart"][Level[level]],
                rank: Level[level],
                illustration: getInfo.getill(id),
                song: getInfo.ori_info[id]["song"],
                illustrator: getInfo.ori_info[id]["illustrator"],
                composer: getInfo.ori_info[id]["composer"]
              });
            }
          }
        }
      }
      if (!idList[0]) {
        send_default.send_with_At(session, `未找到 ${bottom} - ${top} 的 ${isask[0] ? `${Level[0]} ` : ""}${isask[1] ? `${Level[1]} ` : ""}${isask[2] ? `${Level[2]} ` : ""}${isask[3] ? `${Level[3]} ` : ""}谱面QAQ!`);
        return;
      }
      let result = idList[compute.randBetween(0, idList.length - 1)];
      send_default.send_with_At(session, await render(ctx, "rand", result));
      return;
    });
    ctx.command("phi.alias <message:text>", "查看曲目别名").action(async ({ session }, arg = "") => {
      if (await send_default.isBan(session, "alias")) {
        return;
      }
      let song = getInfo.fuzzysongsnick(arg);
      if (song[0] || arg in getInfo.ori_info) {
        let id = song[0] || arg;
        let info = getInfo.info(id);
        let nick = "======================\n已有别名：\n";
        for (let i in getInfo.nicklist[id]) {
          nick += `${getInfo.nicklist[id][i]}
`;
        }
        send_default.send_with_At(session, `name: ${info.song}
id: ${info.id}
` + await pic.GetSongsIllAtlas(ctx, id) + nick);
      } else {
        send_default.send_with_At(session, `未找到${arg}的相关曲目信息QAQ！`, true);
      }
    });
    ctx.command("phi.randClg <message:text>", "随机课题").action(async ({ session }, arg = "") => {
      if (await send_default.isBan(session, "randClg")) {
        return;
      }
      let songReg = /[\(（].*[\)）]/;
      let songReq = "";
      console.info(arg.match(songReg));
      if (arg.match(songReq)) {
        songReq = arg.match(songReg)[0].replace(/[\(\)（）]/g, "");
        arg = arg.replace(songReq, "");
      }
      let songAsk = compute.match_request(songReq);
      console.info(songAsk, songReq);
      let { isask, range: range2 } = compute.match_request(arg, 48);
      let NumList = [];
      for (let i = range2[0]; i <= range2[1]; i++) {
        NumList.push(i);
      }
      let chartList = {};
      for (let dif in getInfo.info_by_difficulty) {
        if (Number(dif) < range2[1]) {
          for (let i in getInfo.info_by_difficulty[dif]) {
            let chart = getInfo.info_by_difficulty[dif][i];
            let difficulty = Math.floor(chart.difficulty);
            if (isask[LevelNum[chart.rank]] && chartMatchReq(songAsk, chart)) {
              if (chartList[difficulty]) {
                chartList[difficulty].push(chart);
              } else {
                chartList[difficulty] = [chart];
              }
            }
          }
        }
      }
      NumList = compute.randArray(NumList);
      let res = randClg(NumList.shift(), { ...chartList });
      while (!res && NumList.length) {
        res = randClg(NumList.shift(), { ...chartList });
      }
      let ans = "";
      if (res) {
        ans += `${getInfo.idgetsong(res[0].id)} ${res[0].rank} ${res[0].difficulty}
`;
        ans += `${getInfo.idgetsong(res[1].id)} ${res[1].rank} ${res[1].difficulty}
`;
        ans += `${getInfo.idgetsong(res[2].id)} ${res[2].rank} ${res[2].difficulty}`;
      }
      send_default.send_with_At(session, ans || "未找到符合条件的课题QAQ");
      return;
    });
    ctx.command("phi.com <message:text>", "计算等效rks").action(async ({ session }, arg = "") => {
      if (await send_default.isBan(session, "comrks")) {
        return;
      }
      let data = arg.split(" ");
      let dif = Number(data[0]);
      let acc = Number(data[1]);
      if (data && acc && dif > 0 && dif <= getInfo.MAX_DIFFICULTY && acc > 0 && acc <= 100) {
        send_default.send_with_At(session, `dif: ${dif} acc: ${acc}
计算结果：${compute.rks(Number(acc), Number(dif))}`, true);
        return;
      } else {
        send_default.send_with_At(session, `格式错误QAQ！
格式：/phi com <定数> <acc>`);
        return;
      }
    });
    ctx.command("phi.tips", "随机tips").action(async ({ session }) => {
      if (await send_default.isBan(session, "tips")) {
        return;
      }
      send_default.send_with_At(session, getInfo.tips[compute.randBetween(0, getInfo.tips.length - 1)]);
    });
  }
};
function randClg(clgNum, chartList) {
  let difList = null;
  let rand1 = [], rand2 = [];
  for (let i = 1; i <= Math.min(getInfo.MAX_DIFFICULTY, clgNum - 2); i++) {
    if (chartList[i]) {
      rand1.push(i);
      rand2.push(i);
    }
  }
  rand1 = compute.randArray(rand1);
  rand2 = compute.randArray(rand2);
  for (let i in rand1) {
    for (let j in rand2) {
      let a = rand1[i];
      let b = rand2[j];
      if (a + b >= clgNum) continue;
      let c = clgNum - a - b;
      let tem = {};
      tem[a] = 1;
      tem[b] ? ++tem[b] : tem[b] = 1;
      tem[c] ? ++tem[c] : tem[c] = 1;
      let flag = false;
      for (let i2 in tem) {
        if (!chartList[i2] || tem[i2] > chartList[i2].length) {
          flag = true;
          break;
        }
      }
      if (flag) continue;
      difList = [a, b, c];
      break;
    }
    if (difList) break;
  }
  if (!difList) {
    return;
  }
  let ans = [];
  for (let i in difList) {
    if (!chartList[difList[i]]) {
      console.info(difList[i], chartList);
    }
    let tem = chartList[difList[i]].splice(compute.randBetween(0, chartList[difList[i]].length - 1), 1)[0];
    ans.push(tem);
  }
  return ans;
}
__name(randClg, "randClg");
function chartMatchReq(ask, chart) {
  if (ask.isask[LevelNum[chart.rank]]) {
    if (chart.difficulty >= ask.range[0] && chart.difficulty <= ask.range[1]) {
      return true;
    }
  }
  return false;
}
__name(chartMatchReq, "chartMatchReq");

// src/model/getBackup.ts
var import_jszip2 = __toESM(require("jszip"));
var import_node_fs2 = __toESM(require("node:fs"));
var import_node_path3 = __toESM(require("node:path"));
var getBackup = class {
  static {
    __name(this, "getBackup");
  }
  /**备份 */
  static async backup() {
    let zip = new import_jszip2.default();
    import_node_fs2.default.readdirSync(savePath).forEach((folderName) => {
      let folderPath = import_node_path3.default.join(savePath, folderName);
      import_node_fs2.default.readdirSync(folderPath).forEach((fileName) => {
        let filePath = import_node_path3.default.join(folderPath, fileName);
        let file = import_node_fs2.default.statSync(filePath);
        if (file.isDirectory()) {
          logger.error(filePath, "[phi-plugin] 备份错误：意料之外的文件夹");
        } else {
          zip.folder("saveData").folder(folderName).file(fileName, import_node_fs2.default.readFileSync(filePath));
        }
      });
    });
    import_node_fs2.default.readdirSync(pluginDataPath).forEach((fileName) => {
      let filePath = import_node_path3.default.join(pluginDataPath, fileName);
      let file = import_node_fs2.default.statSync(filePath);
      if (file.isDirectory()) {
        logger.error(filePath, "[phi-plugin] 备份错误：意料之外的文件夹");
      } else {
        zip.folder("pluginData").file(fileName, import_node_fs2.default.readFileSync(filePath));
      }
    });
    let user_token = {};
    let keys = await redis.get("phigrosUserToken", {});
    for (let key of keys) {
      let user_id = key.userId;
      user_token[user_id] = key.token;
    }
    console.info(user_token);
    zip.file("user_token.json", JSON.stringify(user_token));
    let zipName = `${(/* @__PURE__ */ new Date()).toISOString().replace(/[\:\.]/g, "-")}.zip`;
    if (!import_node_fs2.default.existsSync(backupPath)) {
      import_node_fs2.default.mkdirSync(backupPath, { recursive: true });
    }
    import_node_fs2.default.writeFileSync(import_node_path3.default.join(backupPath, zipName), await zip.generateAsync({
      type: "nodebuffer",
      /**压缩算法 */
      compression: "DEFLATE",
      /**压缩等级 */
      compressionOptions: {
        level: 9
      }
    }));
    logger.info(import_node_path3.default.join(backupPath, zipName), "[phi-plugin]备份完成");
    return { zipName, zip };
  }
  /**
   * 从zip中恢复
   * @param {path} zipPath 
   */
  static async restore(zipPath) {
    let zip = await import_jszip2.default.loadAsync(import_node_fs2.default.readFileSync(zipPath));
    try {
      zip.folder("saveData").forEach((session) => {
        if (!session.includes(".json")) {
          getFile.FileReader(import_node_path3.default.join(savePath, session, "history.json")).then((old) => {
            zip.folder("saveData").folder(session).file("history.json").async("string").then((history) => {
              let now = new saveHistory(JSON.parse(history));
              now.add(new saveHistory(old));
              getFile.SetFile(import_node_path3.default.join(savePath, session, "history.json"), now);
            });
          });
          getFile.FileReader(import_node_path3.default.join(savePath, session, "save.json")).then((old) => {
            zip.folder("saveData").folder(session).file("save.json").async("string").then((save) => {
              let now = JSON.parse(save);
              if (old?.saveInfo?.modifiedAt?.iso && new Date(old?.saveInfo?.modifiedAt?.iso) > new Date(now?.saveInfo?.modifiedAt?.iso)) {
                now = old;
              }
              getFile.SetFile(import_node_path3.default.join(savePath, session, "save.json"), now);
            });
          });
        }
      });
    } catch (e) {
    }
    try {
      zip.folder("pluginData").forEach((fileName, file) => {
        file.async("string").then((data) => {
          getFile.SetFile(import_node_path3.default.join(pluginDataPath, fileName), JSON.parse(data));
        });
      });
    } catch (e) {
    }
    try {
      zip.file("user_token.json").async("string").then((data) => {
        let now = JSON.parse(data);
        redis.upsert("phigrosUserToken", now);
      });
    } catch (e) {
    }
  }
};

// src/app/jrrp.ts
var import_path6 = __toESM(require("path"));
var sentence = getFile.FileReader(import_path6.default.join(infoPath, "sentences.json"));
var phiJrrp = class {
  static {
    __name(this, "phiJrrp");
  }
  constructor(ctx, config2) {
    ctx.command("phi.jrrp", "今日人品").action(async ({ session }) => {
      if (await send_default.isBan(session, "jrrp")) {
        return;
      }
      let jrrp = (await redis.get("phigrosJrrp", { userId: session.userId }, ["value"]))[0]?.value;
      jrrp = jrrp ? JSON.parse(jrrp) : null;
      if (!jrrp || is_not_same_day(jrrp[10], Date.now())) {
        jrrp = [Math.round(easeOutCubic(Math.random()) * 100), Math.floor(Math.random() * sentence.length)];
        let good = [...getInfo.word.good];
        let bad = [...getInfo.word.bad];
        let common = [...getInfo.word.common];
        for (let i = 0; i < 4; i++) {
          let id = Math.floor(Math.random() * (good.length + common.length));
          if (id < good.length) {
            jrrp.push(good[id]);
            good.splice(id, 1);
          } else {
            jrrp.push(common[id - good.length]);
            common.splice(id - good.length, 1);
          }
        }
        for (let i = 0; i < 4; i++) {
          let id = Math.floor(Math.random() * (bad.length + common.length));
          if (id < bad.length) {
            jrrp.push(bad[id]);
            bad.splice(id, 1);
          } else {
            jrrp.push(common[id - bad.length]);
            common.splice(id - bad.length, 1);
          }
        }
        jrrp.push(compute.date_to_string(Date.now()));
        await redis.upsert("phigrosJrrp", [{ userId: session.userId, value: JSON.stringify(jrrp) }]);
      }
      let data = {
        bkg: getInfo.getill("ShineAfter.ADeanJocularACE"),
        lucky: jrrp[0],
        luckRank: jrrp[0] == 100 ? 5 : jrrp[0] >= 80 ? 4 : jrrp[0] >= 60 ? 3 : jrrp[0] >= 40 ? 2 : jrrp[0] >= 20 ? 1 : 0,
        year: (/* @__PURE__ */ new Date()).getFullYear(),
        month: compute.ped((/* @__PURE__ */ new Date()).getMonth() + 1, 2),
        day: compute.ped((/* @__PURE__ */ new Date()).getDate(), 2),
        sentence: sentence[jrrp[1]],
        good: jrrp.slice(2, 6),
        bad: jrrp.slice(6, 10)
      };
      send_default.send_with_At(session, await render(ctx, "jrrp", data));
    });
  }
};
function easeOutCubic(x) {
  return 1 - Math.pow(1 - x, 3);
}
__name(easeOutCubic, "easeOutCubic");
function is_not_same_day(date1, date2) {
  let d1 = new Date(date1);
  let d2 = new Date(date2);
  return d1.getFullYear() != d2.getFullYear() || d1.getMonth() != d2.getMonth() || d1.getDate() != d2.getDate();
}
__name(is_not_same_day, "is_not_same_day");

// src/app/manage.ts
var import_fs5 = __toESM(require("fs"));
var import_path7 = __toESM(require("path"));
var banSetting = ["help", "bind", "b19", "wb19", "song", "ranklist", "fnc", "tipgame", "guessgame", "ltrgame", "sign", "setting", "dan"];
var phiManage = class {
  static {
    __name(this, "phiManage");
  }
  constructor(ctx, config2) {
    ctx.command("phi.backup", "备份数据", { authority: 4 }).option("back", "-b 是否返回zip文件").action(async ({ session, options }) => {
      try {
        let zip = await getBackup.backup();
        send_default.send_with_At(session, `${zip.zipName.replace(".zip", "")} 成功备份到 ./backup 目录下`);
        if (options.back) {
          compute.sendFile(session, await zip.zip.generateAsync({ type: "nodebuffer" }), zip.zipName);
        }
      } catch (err) {
        logger2.error(err);
        send_default.send_with_At(session, err);
      }
    });
    ctx.command("phi.restore", "恢复数据", { authority: 4 }).action(async ({ session, options }) => {
      try {
        let msg = "";
        for (let i in import_fs5.default.readdirSync(backupPath).reverse()) {
          msg += `[${i}]${import_fs5.default.readdirSync(backupPath)[i]}
`;
        }
        send_default.send_with_At(session, "请选择需要恢复的备份文件：\n" + msg);
        let index = await session.prompt(30);
        try {
          let fileName = import_fs5.default.readdirSync(backupPath)[Number(index.replace(/\s*/g, ""))];
          let filePath = import_path7.default.join(backupPath, fileName);
          await getBackup.restore(filePath);
          send_default.send_with_At(session, `[${index}] ${import_fs5.default.readdirSync(backupPath).reverse()[index.replace(/\s*/g, "")]} 恢复成功`);
        } catch (err) {
          logger2.info(err);
          send_default.send_with_At(session, [`第[${index}]项不存在QAQ！`, err]);
        }
      } catch (err) {
        logger2.info(err);
        send_default.send_with_At(session, err);
      }
    });
    ctx.command("phi.ban <string>", "禁用功能", { authority: 4 }).action(async ({ session }, arg) => {
      if (!session.guildId) {
        send_default.send_with_At(session, "请在群聊中使用嗷！");
        return;
      }
      switch (arg) {
        case "all": {
          for (let i in banSetting) {
            await redis.upsert("phigrosBanGroup", [{ groupId: session.guildId, [banSetting[i]]: true }], "groupId");
          }
          break;
        }
        default: {
          for (let i in banSetting) {
            if (banSetting[i] == arg) {
              await redis.upsert("phigrosBanGroup", [{ groupId: session.guildId, [banSetting[i]]: true }], "groupId");
              break;
            }
          }
          break;
        }
      }
      let res = (await redis.get("phigrosBanGroup", { groupId: session.guildId }))[0];
      let resMsg = "";
      if (res) {
        for (let i in banSetting) {
          if (res[banSetting[i]]) {
            resMsg += `${banSetting[i]}
`;
          }
        }
      }
      send_default.send_with_At(session, `当前: ${session.guildId}
已禁用:
${resMsg}`);
    });
    ctx.command("phi.unban <string>", "解禁功能", { authority: 4 }).action(async ({ session }, arg) => {
      if (!session.guildId) {
        send_default.send_with_At(session, "请在群聊中使用嗷！");
        return;
      }
      switch (arg) {
        case "all": {
          for (let i in banSetting) {
            await redis.upsert("phigrosBanGroup", [{ groupId: session.guildId, [banSetting[i]]: false }], "groupId");
          }
          break;
        }
        default: {
          for (let i in banSetting) {
            if (banSetting[i] == arg) {
              await redis.upsert("phigrosBanGroup", [{ groupId: session.guildId, [banSetting[i]]: false }], "groupId");
              break;
            }
          }
          break;
        }
      }
      let res = (await redis.get("phigrosBanGroup", { groupId: session.guildId }))[0];
      let resMsg = "";
      if (res) {
        for (let i in banSetting) {
          if (res[banSetting[i]]) {
            resMsg += `${banSetting[i]}
`;
          }
        }
      }
      send_default.send_with_At(session, `当前: ${session.guildId}
已禁用:
${resMsg}`);
    });
  }
};

// src/app/download.ts
var import_lodash = __toESM(require("lodash"));
var import_fs6 = __toESM(require("fs"));
var import_child_process = require("child_process");
var uping = false;
var isUp = false;
var oldCommitId = "";
var phiDownload = class {
  static {
    __name(this, "phiDownload");
  }
  constructor(ctx, config2) {
    ctx.command("phi.downill", "下载illust", { authority: 4 }).action(async ({ session }) => {
      if (uping) {
        await session.send("已有命令更新中..请勿重复操作");
        return;
      }
      if (!await checkGit(session)) return;
      const isForce = 1;
      if (!import_fs6.default.existsSync(`${cachePath}/original_ill/.git`)) {
        await clone(session, config2);
      } else {
        await runUpdate(session, config2);
      }
      if (isUp) {
        await session.send("更新完毕");
      }
    });
  }
};
async function clone(session, config2) {
  let command = `git clone https://gitee.com/Steveeee-e/phi-plugin-ill.git ${cachePath}/original_ill/ --depth=1`;
  session.send("开始下载曲绘文件");
  uping = true;
  let ret = await execSyncGit(command);
  uping = false;
  if (ret.error) {
    logger.error(`曲绘文件更新失败QAQ!`);
    gitErr(ret.error, ret.stdout, session);
    return false;
  }
  let time = await getTime();
  if (/(Already up[ -]to[ -]date|已经是最新的)/.test(ret.stdout)) {
    await session.send(`曲绘文件已经是最新版本
最后更新时间：${time}`);
  } else {
    await session.send(`phi-plugin-ill
最后更新时间：${time}`);
    isUp = true;
    let log2 = await getLog(session, config2);
    await session.send(log2 ? log2.join("\n") : "");
  }
  logger.info(`最后更新时间：${time}`);
  return true;
}
__name(clone, "clone");
async function gitErr(err, stdout, session) {
  let msg = "更新失败！";
  let errMsg = err.toString();
  stdout = stdout.toString();
  if (errMsg.includes("Timed out")) {
    let remote = errMsg.match(/'(.+?)'/g)[0].replace(/'/g, "");
    await session.send(msg + `
连接超时：${remote}`);
    return;
  }
  if (/Failed to connect|unable to access/g.test(errMsg)) {
    let remote = errMsg.match(/'(.+?)'/g)[0].replace(/'/g, "");
    await session.send(msg + `
连接失败：${remote}`);
    return;
  }
  if (errMsg.includes("be overwritten by merge")) {
    await session.send(
      msg + `存在冲突：
${errMsg}
请解决冲突后再更新，或者执行#强制更新，放弃本地修改`
    );
    return;
  }
  if (stdout.includes("CONFLICT")) {
    await session.send([
      msg + "存在冲突\n",
      errMsg,
      stdout,
      "\n请解决冲突后再更新，或者执行#强制更新，放弃本地修改"
    ]);
    return;
  }
  await session.send([errMsg, stdout]);
}
__name(gitErr, "gitErr");
async function runUpdate(session, config2) {
  let command = `git -C ${cachePath}/original_ill/ pull --no-rebase`;
  command = `git -C ${cachePath}/original_ill/ checkout . && ${command}`;
  session.send("正在更新曲绘文件，请勿重复执行");
  oldCommitId = await getcommitId();
  uping = true;
  let ret = await execSyncGit(command);
  uping = false;
  if (ret.error) {
    logger.error(`曲绘文件更新失败QAQ!`);
    gitErr(ret.error, ret.stdout, session);
    return false;
  }
  let time = await getTime();
  if (/(Already up[ -]to[ -]date|已经是最新的)/.test(ret.stdout)) {
    await session.send(`曲绘文件已经是最新版本
最后更新时间：${time}`);
  } else {
    await session.send(`phi-plugin-ill
最后更新时间：${time}`);
    isUp = true;
    let log2 = await getLog(session, config2);
    await session.send(log2 ? log2.join("\n") : "");
  }
  logger.info(`最后更新时间：${time}`);
  return true;
}
__name(runUpdate, "runUpdate");
async function getLog(session, config2) {
  let cm = `cd ${cachePath}/original_ill/ && git log  -20 --oneline --pretty=format:"%h||[%cd]  %s" --date=format:"%m-%d %H:%M"`;
  let logAll;
  try {
    logAll = await (0, import_child_process.execSync)(cm, { encoding: "utf-8" });
  } catch (error) {
    logger.error(error.toString());
    session.send(error.toString());
  }
  if (!logAll) return false;
  logAll = logAll.split("\n");
  let log2 = [];
  for (let str of logAll) {
    str = str.split("||");
    if (str[0] == oldCommitId) break;
    if (str[1].includes("Merge branch")) continue;
    log2.push(str[1]);
  }
  if (!config2.isGuild) {
    log2.push("更多详细信息，请前往github查看\nhttps://github.com/Catrong/phi-plugin-ill");
  }
  let line = log2.length;
  if (line <= 1) return "";
  session.send(`最近更新日志：
${log2.join("\n")}`);
  return log2;
}
__name(getLog, "getLog");
async function getcommitId() {
  let cm = `git -C ${cachePath}/original_ill/ rev-parse --short HEAD`;
  let commitId = await (0, import_child_process.execSync)(cm, { encoding: "utf-8" });
  commitId = import_lodash.default.trim(commitId);
  return commitId;
}
__name(getcommitId, "getcommitId");
async function getTime() {
  let cm = `cd ${cachePath}/original_ill/ && git log -1 --oneline --pretty=format:"%cd" --date=format:"%m-%d %H:%M"`;
  let time = "";
  try {
    time = await (0, import_child_process.execSync)(cm, { encoding: "utf-8" });
    time = import_lodash.default.trim(time);
  } catch (error) {
    logger.error(error.toString());
    time = "获取时间失败";
  }
  return time;
}
__name(getTime, "getTime");
async function execSyncGit(cmd) {
  return new Promise((resolve, reject) => {
    (0, import_child_process.exec)(cmd, { windowsHide: true }, (error, stdout, stderr) => {
      resolve({ error, stdout, stderr });
    });
  });
}
__name(execSyncGit, "execSyncGit");
async function checkGit(session) {
  let ret = await (0, import_child_process.execSync)("git --version", { encoding: "utf-8" });
  if (!ret || !ret.includes("git version")) {
    await session.send("请先安装git");
    return false;
  }
  return true;
}
__name(checkGit, "checkGit");

// src/app/userInfo.ts
var phiUserInfo = class {
  static {
    __name(this, "phiUserInfo");
  }
  constructor(ctx, config2) {
    ctx.command("phi.data", "查看用户data").action(async ({ session }) => {
      if (await send_default.isBan(session, "data")) {
        return;
      }
      let User = await getSave.getSave(session.userId);
      if (User) {
        if (User.gameProgress) {
          let data = User.gameProgress.money;
          send_default.send_with_At(session, `您的data数为：${data[4] ? `${data[4]}PB ` : ""}${data[3] ? `${data[3]}TB ` : ""}${data[2] ? `${data[2]}GB ` : ""}${data[1] ? `${data[1]}MB ` : ""}${data[0] ? `${data[0]}KB ` : ""}`);
        } else {
          send_default.send_with_At(session, `请先更新数据哦！
/phi update`);
        }
      } else {
        send_default.send_with_At(session, `请先绑定sessionToken哦！
/phi bind <sessionToken>`);
      }
      return;
    });
    ctx.command("phi.info <message:text>", "查看用户信息").action(async ({ session }, arg) => {
      if (await send_default.isBan(session, "info")) {
        return;
      }
      let tot = [0, 0, 0, 0];
      let bksong = arg;
      if (bksong) {
        let tem = getInfo.fuzzysongsnick(bksong)[0];
        if (tem) {
          bksong = getInfo.getill(tem);
        } else {
          bksong = void 0;
        }
      }
      if (!bksong) {
        bksong = getInfo.getill(getInfo.illlist[compute.randBetween(0, getInfo.illlist.length - 1)], "blur");
      }
      let save = await send_default.getsave_result(session, 1);
      if (!save) {
        return;
      }
      let Record = save.gameRecord;
      let stats_ = {
        tatle: "",
        Rating: "",
        unlock: 0,
        tot: 0,
        cleared: 0,
        fc: 0,
        phi: 0,
        real_score: 0,
        tot_score: 0,
        highest: 0,
        lowest: 18
      };
      let stats = [{ ...stats_ }, { ...stats_ }, { ...stats_ }, { ...stats_ }];
      for (let song in getInfo.ori_info) {
        let info = getInfo.ori_info[song];
        if (info.chart["AT"] && Number(info.chart["AT"].difficulty)) {
          ++tot[3];
        }
        if (info.chart["IN"] && Number(info.chart["IN"].difficulty)) {
          ++tot[2];
        }
        if (info.chart["HD"] && Number(info.chart["HD"].difficulty)) {
          ++tot[1];
        }
        if (info.chart["EZ"] && Number(info.chart["EZ"].difficulty)) {
          ++tot[0];
        }
      }
      stats[0].tot = tot[0];
      stats[0].tatle = Level[0];
      stats[1].tot = tot[1];
      stats[1].tatle = Level[1];
      stats[2].tot = tot[2];
      stats[2].tatle = Level[2];
      stats[3].tot = tot[3];
      stats[3].tatle = Level[3];
      for (let id in Record) {
        if (!getInfo.idgetsong(id)) {
          continue;
        }
        let record = Record[id];
        for (let lv in [0, 1, 2, 3]) {
          if (!record[lv]) continue;
          ++stats[lv].unlock;
          if (record[lv].score >= 7e5) {
            ++stats[lv].cleared;
          }
          if (record[lv].fc || record[lv].score == 1e6) {
            ++stats[lv].fc;
          }
          if (record[lv].score == 1e6) {
            ++stats[lv].phi;
          }
          stats[lv].real_score += record[lv].score;
          stats[lv].tot_score += 1e6;
          stats[lv].highest = Math.max(record[lv].rks, stats[lv].highest);
          stats[lv].lowest = Math.min(record[lv].rks, stats[lv].lowest);
        }
      }
      for (let lv in [0, 1, 2, 3]) {
        stats[lv].Rating = compute.rate(stats[lv].real_score, stats[lv].tot_score, stats[lv].fc == stats[lv].unlock);
        if (stats[lv].lowest == 18) {
          stats[lv].lowest = 0;
        }
      }
      let money = save.gameProgress.money;
      let userbackground = await compute.getBackground(save.gameuser.background);
      if (!userbackground) {
        send_default.send_with_At(session, `ERROR: 未找到[${save.gameuser.background}]的有关信息！`);
        logger.error(`未找到${save.gameuser.background}对应的曲绘！`);
      }
      let gameuser = {
        avatar: getInfo.idgetavatar(save.gameuser.avatar) || "Introduction",
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
        rks: save.saveInfo.summary.rankingScore,
        data: `${money[4] ? `${money[4]}PiB ` : ""}${money[3] ? `${money[3]}TiB ` : ""}${money[2] ? `${money[2]}GiB ` : ""}${money[1] ? `${money[1]}MiB ` : ""}${money[0] ? `${money[0]}KiB ` : ""}`,
        selfIntro: compute.convertRichText(save.gameuser.selfIntro),
        backgroundurl: userbackground,
        PlayerId: compute.convertRichText(save.saveInfo.PlayerId)
      };
      let user_data = await getSave.getHistory(session.userId);
      let rks_history_ = [];
      let data_history_ = [];
      let user_rks_data = user_data.rks;
      let user_data_data = user_data.data;
      let rks_range = [17, 0];
      let data_range = [1e9, 0];
      let rks_date = [new Date(user_rks_data[0].date).getTime(), 0];
      let data_date = [new Date(user_data_data[0].date).getTime(), 0];
      for (let i in user_rks_data) {
        user_rks_data[i].date = new Date(user_rks_data[i].date);
        if (i <= 1 || user_rks_data[i].value != rks_history_[rks_history_.length - 2].value) {
          rks_history_.push(user_rks_data[i]);
          rks_range[0] = Math.min(rks_range[0], user_rks_data[i].value);
          rks_range[1] = Math.max(rks_range[1], user_rks_data[i].value);
        } else {
          rks_history_[rks_history_.length - 1].date = user_rks_data[i].date;
        }
        rks_date[1] = user_rks_data[i].date.getTime();
      }
      for (let i in user_data_data) {
        let value = user_data_data[i].value;
        let valueNum = (((value[4] * 1024 + value[3]) * 1024 + value[2]) * 1024 + value[1]) * 1024 + value[0];
        user_data_data[i].date = new Date(user_data_data[i].date);
        if (i <= 1 || user_data_data[i].value != data_history_[data_history_.length - 2].value) {
          data_history_.push(user_data_data[i]);
          data_range[0] = Math.min(data_range[0], valueNum);
          data_range[1] = Math.max(data_range[1], valueNum);
        } else {
          data_history_[data_history_.length - 1].date = user_data_data[i].date;
        }
        data_date[1] = user_data_data[i].date.getTime();
      }
      let rks_history = [];
      let data_history = [];
      for (let i in rks_history_) {
        let ni = Number(i);
        if (!rks_history_[i + 1]) break;
        let x1 = range(rks_history_[ni].date, rks_date);
        let y1 = range(rks_history_[ni].value, rks_range);
        let x2 = range(rks_history_[ni + 1].date, rks_date);
        let y2 = range(rks_history_[ni + 1].value, rks_range);
        rks_history.push([x1, y1, x2, y2]);
      }
      for (let i in data_history_) {
        let ni = Number(i);
        if (!data_history_[ni + 1]) break;
        let x1 = range(data_history_[ni].date, data_date);
        let y1 = range(data_history_[ni].value, data_range);
        let x2 = range(data_history_[ni + 1].date, data_date);
        let y2 = range(data_history_[ni + 1].value, data_range);
        data_history.push([x1, y1, x2, y2]);
      }
      let unit = ["KiB", "MiB", "GiB", "TiB", "Pib"];
      for (let i in [1, 2, 3, 4]) {
        if (Math.floor(data_range[0] / Math.pow(1024, Number(i))) < 1024) {
          data_range[0] = `${Math.floor(data_range[0] / Math.pow(1024, Number(i)))}${unit[i]}`;
        }
      }
      for (let i in [1, 2, 3, 4]) {
        if (Math.floor(data_range[1] / Math.pow(1024, Number(i))) < 1024) {
          data_range[1] = `${Math.floor(data_range[1] / Math.pow(1024, Number(i)))}${unit[i]}`;
        }
      }
      let acc_rksRecord = save.getRecord();
      let acc_rks_phi = save.findAccRecord(100);
      let acc_rks_data = [];
      let acc_rks_data_ = [];
      let acc_rks_range = [100, 0];
      let acc_rks_AccRange = [100];
      for (let i = 0; i < Math.min(acc_rksRecord.length, 19); i++) {
        acc_rks_AccRange[0] = Math.min(acc_rks_AccRange[0], acc_rksRecord[i].acc);
      }
      for (let i = acc_rks_AccRange[0]; i <= 100; i += 0.01) {
        let sum_rks = 0;
        if (!acc_rksRecord[0]) break;
        for (let j = 0; j < acc_rksRecord.length; j++) {
          if (j >= 19) break;
          if (acc_rksRecord[j]?.acc < i) {
            acc_rks_AccRange.push(i);
          }
          while (acc_rksRecord[j]?.acc < i) {
            acc_rksRecord.splice(j, 1);
          }
          if (acc_rksRecord[j]) {
            sum_rks += acc_rksRecord[j].rks;
          } else {
            break;
          }
        }
        let tem_rks = (sum_rks + (acc_rks_phi[0]?.rks || 0)) / 20;
        acc_rks_data.push([i, tem_rks]);
        acc_rks_range[0] = Math.min(acc_rks_range[0], tem_rks);
        acc_rks_range[1] = Math.max(acc_rks_range[1], tem_rks);
      }
      if (acc_rks_AccRange[acc_rks_AccRange.length - 1] < 100) {
        acc_rks_AccRange.push(100);
      }
      for (let i = 1; i < acc_rks_data.length; ++i) {
        if (acc_rks_data_[0] && acc_rks_data[i - 1][1] == acc_rks_data[i][1]) {
          acc_rks_data_[acc_rks_data_.length - 1][2] = range(acc_rks_data[i][0], acc_rks_AccRange);
        } else {
          acc_rks_data_.push([range(acc_rks_data[i - 1][0], acc_rks_AccRange), range(acc_rks_data[i - 1][1], acc_rks_range), range(acc_rks_data[i][0], acc_rks_AccRange), range(acc_rks_data[i][1], acc_rks_range)]);
        }
      }
      if (acc_rks_AccRange[0] == 100) {
        acc_rks_AccRange[0] = 0;
      }
      let acc_length = 100 - acc_rks_AccRange[0];
      let min_acc = acc_rks_AccRange[0];
      let acc_rks_AccRange_position = [];
      while (100 - acc_rks_AccRange[acc_rks_AccRange.length - 2] < acc_length / 10) {
        acc_rks_AccRange.splice(acc_rks_AccRange.length - 2, 1);
      }
      acc_rks_AccRange_position.push([acc_rks_AccRange[0], 0]);
      for (let i = 1; i < acc_rks_AccRange.length; i++) {
        while (acc_rks_AccRange[i] - acc_rks_AccRange[i - 1] < acc_length / 10) {
          acc_rks_AccRange.splice(i, 1);
        }
        acc_rks_AccRange_position.push([acc_rks_AccRange[i], (acc_rks_AccRange[i] - min_acc) / acc_length * 100]);
      }
      let data = {
        gameuser,
        userstats: stats,
        rks_history,
        data_history,
        rks_range,
        data_range,
        data_date: [compute.date_to_string(data_date[0]), compute.date_to_string(data_date[1])],
        rks_date: [compute.date_to_string(rks_date[0]), compute.date_to_string(rks_date[1])],
        acc_rks_data: acc_rks_data_,
        acc_rks_range,
        acc_rks_AccRange: acc_rks_AccRange_position,
        background: bksong
      };
      send_default.send_with_At(session, await render(ctx, "userinfo", data));
    });
    ctx.command("phi.lvsco <message:text>", "查询范围成绩").action(async ({ session }, arg) => {
      if (await send_default.isBan(session, "lvscore")) {
        return;
      }
      let save = await send_default.getsave_result(session, 1);
      if (!save) {
        return;
      }
      let { isask, range: range2 } = compute.match_request(arg);
      let unlockcharts = 0;
      let totreal_score = 0;
      let totacc = 0;
      let totcharts = 0;
      let totcleared = 0;
      let totfc = 0;
      let totphi = 0;
      let tottot_score = 0;
      let tothighest = 0;
      let totlowest = 17;
      let totsongs = 0;
      let totRating = {
        F: 0,
        C: 0,
        B: 0,
        A: 0,
        S: 0,
        V: 0,
        FC: 0,
        phi: 0
      };
      let totRank = {
        AT: 0,
        IN: 0,
        HD: 0,
        EZ: 0
      };
      let unlockRank = {
        AT: 0,
        IN: 0,
        HD: 0,
        EZ: 0
      };
      let unlocksongs = 0;
      let Record = save.gameRecord;
      for (let id in getInfo.ori_info) {
        let info = getInfo.ori_info[id];
        let vis = false;
        for (let i in info.chart) {
          let difficulty = info["chart"][i].difficulty;
          if (range2[0] <= difficulty && difficulty <= range2[1] && isask[Level.indexOf(i)]) {
            ++totcharts;
            ++totRank[i];
            if (!vis) {
              ++totsongs;
              vis = true;
            }
          }
        }
      }
      for (let id in Record) {
        let info = getInfo.info(id);
        let record = Record[id];
        let vis = false;
        for (let lv in [0, 1, 2, 3]) {
          if (!info.chart[Level[lv]]) continue;
          let difficulty = info.chart[Level[lv]].difficulty;
          if (range2[0] <= difficulty && difficulty <= range2[1] && isask[lv]) {
            if (!record[lv]) continue;
            ++unlockcharts;
            ++unlockRank[Level[lv]];
            if (!vis) {
              ++unlocksongs;
              vis = true;
            }
            if (record[lv].score >= 7e5) {
              ++totcleared;
            }
            if (record[lv].fc || record[lv].score == 1e6) {
              ++totfc;
            }
            if (record[lv].score == 1e6) {
              ++totphi;
            }
            ++totRating[record[lv].Rating];
            totacc += record[lv].acc;
            totreal_score += record[lv].score;
            tottot_score += 1e6;
            tothighest = Math.max(record[lv].rks, tothighest);
            totlowest = Math.min(record[lv].rks, totlowest);
          }
        }
      }
      let illustration = await compute.getBackground(save.gameuser.background);
      if (!illustration) {
        send_default.send_with_At(session, `ERROR: 未找到[${save.gameuser.background}]的有关信息！`);
        logger.error(`未找到${save.gameuser.background}的曲绘！`);
      }
      let data = {
        tot: {
          at: totRank.AT,
          in: totRank.IN,
          hd: totRank.HD,
          ez: totRank.EZ,
          songs: totsongs,
          charts: totcharts,
          score: tottot_score
        },
        real: {
          at: unlockRank.AT,
          in: unlockRank.IN,
          hd: unlockRank.HD,
          ez: unlockRank.EZ,
          songs: unlocksongs,
          charts: unlockcharts,
          score: totreal_score
        },
        rating: {
          tot: compute.rate(totreal_score, tottot_score, totfc == totcharts),
          ...totRating
        },
        range: {
          bottom: range2[0],
          top: range2[1],
          left: range2[0] / 16.9 * 100,
          length: (range2[1] - range2[0]) / 16.9 * 100
        },
        illustration,
        highest: tothighest,
        lowest: totlowest,
        tot_cleared: totcleared,
        tot_fc: totfc,
        tot_phi: totphi,
        tot_acc: totacc / totcharts,
        date: compute.date_to_string(save.saveInfo.modifiedAt.iso),
        progress_phi: Number((totphi / totcharts * 100).toFixed(2)),
        progress_fc: Number((totfc / totcharts * 100).toFixed(2)),
        avatar: getInfo.idgetavatar(save.gameuser.avatar),
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
        rks: save.saveInfo.summary.rankingScore,
        PlayerId: compute.convertRichText(save.saveInfo.PlayerId)
      };
      send_default.send_with_At(session, await render(ctx, "lvsco", data));
    });
    ctx.command("phi.list <message:text>", "查询范围成绩列表").action(async ({ session }, arg) => {
      if (await send_default.isBan(session, "list")) {
        return;
      }
      let save = await send_default.getsave_result(session);
      if (!save) {
        return;
      }
      let { isask, range: range2, scoreAsk } = compute.match_request(arg);
      let Record = save.gameRecord;
      let data = [];
      for (let id in Record) {
        let song = getInfo.idgetsong(id);
        if (!song) {
          logger.warn("[phi-plugin]", id, "曲目无信息");
          continue;
        }
        let info = getInfo.info(id);
        let record = Record[id];
        for (let lv in [0, 1, 2, 3]) {
          if (!info.chart[Level[lv]]) continue;
          let difficulty = info.chart[Level[lv]].difficulty;
          if (range2[0] <= difficulty && difficulty <= range2[1] && isask[lv]) {
            if (!record[lv] && !scoreAsk.NEW) continue;
            if (record[lv] && !scoreAsk[record[lv].Rating.toUpperCase()]) continue;
            if (!record[lv]) {
              record[lv] = {};
            }
            record[lv].suggest = save.getSuggest(id, Number(lv), 4);
            data.push({ ...record[lv], ...info, illustration: getInfo.getill(id, "low"), difficulty, rank: Level[lv] });
          }
        }
      }
      if (data.length > config2.listScoreMaxNum) {
        send_default.send_with_At(session, `谱面数量过多(${data.length})大于设置的最大值(${config2.listScoreMaxNum})，请缩小搜索范围QAQ！`);
        return;
      }
      data.sort((a, b) => {
        return (b.difficulty || 0) - (a.difficulty || 0);
      });
      let plugin_data = getNotes.getNotesData(session.userId);
      let request = [];
      request.push(`${range2[0]} - ${range2[1]}`);
      send_default.send_with_At(session, await render(ctx, "list", {
        head_title: "成绩筛选",
        song: data,
        background: getInfo.getill(getInfo.illlist[compute.randBetween(0, getInfo.illlist.length - 1)]),
        theme: plugin_data?.plugin_data?.theme || "star",
        PlayerId: save.saveInfo.PlayerId,
        Rks: Number(save.saveInfo.summary.rankingScore).toFixed(4),
        Date: save.saveInfo.updatedAt,
        ChallengeMode: (save.saveInfo.summary.challengeModeRank - save.saveInfo.summary.challengeModeRank % 100) / 100,
        ChallengeModeRank: save.saveInfo.summary.challengeModeRank % 100,
        request
      }));
    });
  }
};
function range(value, range2) {
  if (range2[0] == range2[range2.length - 1]) {
    return 50;
  } else {
    return (value - range2[0]) / (range2[range2.length - 1] - range2[0]) * 100;
  }
}
__name(range, "range");

// src/app/index.ts
function apply7(ctx, cfg) {
  ctx.plugin(phiB19, cfg);
  ctx.plugin(phiSstk, cfg);
  ctx.plugin(phiHelp, cfg);
  ctx.plugin(phiSong, cfg);
  ctx.plugin(phiJrrp, cfg);
  ctx.plugin(phiManage, cfg);
  ctx.plugin(phiDownload, cfg);
  ctx.plugin(phiUserInfo, cfg);
}
__name(apply7, "apply");

// src/index.ts
var name = "phi-plugin";
var inject = {
  required: ["puppeteer", "database"]
};
var Config3 = import_koishi6.Schema.intersect([
  /**渲染设置 */
  import_koishi6.Schema.object({
    /**在线曲绘来源 */
    onLinePhiIllUrl: import_koishi6.Schema.union([
      import_koishi6.Schema.const("https://gitee.com/Steveeee-e/phi-plugin-ill/raw/main/").description("Gitee"),
      import_koishi6.Schema.const("https://raw.githubusercontent.com/Catrong/phi-plugin-ill/refs/heads/main/").description("Github"),
      import_koishi6.Schema.const("https://ghp.ci/https://raw.githubusercontent.com/Catrong/phi-plugin-ill/refs/heads/main/").description("mirror.ghproxy"),
      import_koishi6.Schema.string().description("Custom").default("https://mirror.ghproxy.com/https://raw.githubusercontent.com/Catrong/phi-plugin-ill/main")
    ]).default("https://gitee.com/Steveeee-e/phi-plugin-ill/raw/main").description("在线曲绘来源"),
    /**渲染精度 */
    renderScale: import_koishi6.Schema.number().min(50).max(200).step(1).role("slider").default(100).description("渲染精度"),
    /**渲染质量 */
    randerQuality: import_koishi6.Schema.number().min(50).max(100).step(1).role("slider").default(100).description("渲染质量"),
    /**渲染超时时间 */
    timeout: import_koishi6.Schema.number().min(1e3).max(12e4).default(1e4).description("渲染超时时间，超时后重启puppeteer，单位ms"),
    /**等待超时时间 （废弃） */
    waitingTimeout: import_koishi6.Schema.number().min(1e3).max(12e4).default(1e4).description("等待超时时间，超时后退出渲染队列，单位ms"),
    /**并行渲染数量 */
    renderNum: import_koishi6.Schema.number().min(1).max(10).default(1).description("并行渲染数量"),
    /**B19最大限制 */
    B19MaxNum: import_koishi6.Schema.number().min(22).max(1e3).default(22).description("用户可以获取B19图片成绩的最大数量"),
    /**历史成绩单日数量 */
    HistoryDayNum: import_koishi6.Schema.number().min(2).max(1e4).default(10).description("/update 展现历史成绩的单日最大数量，至少为2"),
    /**历史成绩展示天数 */
    HistoryDateNum: import_koishi6.Schema.number().min(1).max(100).default(10).description("/update 展现历史成绩的最大天数"),
    /**历史成绩展示数量 */
    HistoryScoreNum: import_koishi6.Schema.number().min(10).max(1e4).default(10).description("/update 展现历史成绩的最大数量"),
    /** /list 最大数量 */
    listScoreMaxNum: import_koishi6.Schema.number().min(3).max(9999).default(300).description("/list 展现成绩的最大数量，建议为3的倍数")
  }).description("渲染设置"),
  /**系统设置 */
  import_koishi6.Schema.object({
    /**自动更新曲绘 */
    autoPullPhiIll: import_koishi6.Schema.boolean().default(false).description("开启后手动更新插件时自动更新曲绘文件"),
    /**频道模式 */
    isGuild: import_koishi6.Schema.boolean().default(false).description("（适用于频道）开启后文字版仅限私聊，关闭文字版图片，文字版将折叠为长消息"),
    /**绑定二维码 */
    TapTapLoginQRcode: import_koishi6.Schema.boolean().default(true).description("登录TapTap绑定是否发送二维码，开启仅发送二维码，关闭直接发送链接"),
    /**命令头 */
    cmdhead: import_koishi6.Schema.string().default("").description("命令正则匹配开头，不包含#/，支持正则表达式，'\\' 请双写( \\s --> \\\\s )，最外层可以不加括号"),
    /**曲库 */
    songSet: import_koishi6.Schema.union([
      import_koishi6.Schema.const(0).description("原版曲库"),
      import_koishi6.Schema.const(1).description("原版+自定义"),
      import_koishi6.Schema.const(2).description("仅自定义")
    ]).default(0).description("使用曲库的模式，若启用自定义则重名的以自定义为准")
  }).description("系统设置"),
  /**猜曲绘设置 */
  import_koishi6.Schema.object({
    /**提示间隔 */
    GuessTipCd: import_koishi6.Schema.number().min(1).max(120).default(15).description("猜曲绘提示间隔，单位：秒"),
    /**猜曲绘撤回 */
    GuessRecall: import_koishi6.Schema.boolean().default(true).description("是否在下一条提示发出的时候撤回上一条")
  }).description("猜曲绘设置"),
  /**开字母设置 */
  import_koishi6.Schema.object({
    /**字母条数 */
    LetterNum: import_koishi6.Schema.number().min(1).max(99).default(8).description("开字母条数"),
    /**发送曲绘 */
    LetterIllustration: import_koishi6.Schema.union(["水印版", "原版", "不发送"]).default("水印版").description("猜对后是否发送以及发送什么曲绘，Phigros水印版需要占用渲染资源，不发图片更快"),
    /**翻开字母CD */
    LetterRevealCd: import_koishi6.Schema.number().min(0).max(120).default(0).description("开字母的全局间隔时间，单位：秒"),
    /**回答CD */
    LetterGuessCd: import_koishi6.Schema.number().min(0).max(120).default(0).description("回答的全局间隔时间，单位：秒"),
    /**提示CD */
    LetterTipCd: import_koishi6.Schema.number().min(0).max(120).default(0).description("提示的全局间隔时间，单位：秒"),
    /**最长时长 */
    LetterTimeLength: import_koishi6.Schema.number().min(10).max(36e4).default(600).description("开字母的最长时长，单位：秒")
  }).description("开字母设置"),
  /**提示猜歌设置 */
  import_koishi6.Schema.object({
    /**提示CD */
    GuessTipsTipCD: import_koishi6.Schema.number().min(0).max(120).default(5).description("提示猜歌提示的冷却时间间隔，单位：秒"),
    /**提示条数 */
    GuessTipsTipNum: import_koishi6.Schema.number().min(0).max(17).default(7).description("提示猜歌的提示条数（除曲绘外），若总提示条数小于设定条数则将会发送全部提示"),
    /**最长时长 */
    GuessTipsTimeout: import_koishi6.Schema.number().min(30).max(600).default(600).description("提示猜歌的最长时长，单位：秒"),
    /**额外时间 */
    GuessTipsAnsTime: import_koishi6.Schema.number().min(5).max(600).default(30).description("发送曲绘后多久公布答案，单位：秒")
  }).description("提示猜歌设置"),
  /**其他设置 */
  import_koishi6.Schema.object({
    VikaToken: import_koishi6.Schema.string().role("secret").description("token 填写后请重载插件")
  }).description("其他设置")
  /**自定义设置 */
  // Schema.object({
  //     nickconfig: Schema.dict(Schema.array(String).role('table')).role('table'),
  // }).description("自定义别名设置"),
  // Schema.object({
  //     custominfo: Schema.dict(Schema.object({
  //         song: Schema.string(),
  //         composer: Schema.string(),
  //         illustration_big: Schema.path(),
  //         illustrator: Schema.string(),
  //         bpm: Schema.string(),
  //         length: Schema.string(),
  //         chapter: Schema.string(),
  //         spinfo: Schema.string(),
  //         can_t_be_guessill: Schema.boolean().default(true),
  //         can_t_be_letter: Schema.boolean().default(true),
  //         chart: Schema.dict(Schema.object({
  //             difficulty: Schema.string(),
  //             combo: Schema.string(),
  //             charter: Schema.string(),
  //             rgba: Schema.string(),
  //         })).role('table'),
  //     })),
  // }).description("自定义曲目设置"),
]);
var logger2;
async function apply8(ctx, config2) {
  ctx.plugin(app_exports, config2);
  ctx.plugin(components_exports, config2);
}
__name(apply8, "apply");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Config,
  apply,
  inject,
  logger,
  name
});
