"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _Const_1 = require("../_Const");
var axios_1 = __importDefault(require("axios"));
var Channel = /** @class */ (function () {
    function Channel(token, res) {
        this.token = token;
        this.res = res;
    }
    ;
    //Gets Channel Through Id
    Channel.prototype.get = function (channelId) {
        return __awaiter(this, void 0, void 0, function () {
            var channel, guildid, result, guildsChannel, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channel = channelId;
                        if (!channel) {
                            //Give Some Proper Error Message
                            throw new Error("expected one argument got 0");
                        }
                        guildid = this.res.guild_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.get(_Const_1.discordAPI.api + "/guilds/" + guildid + "/channels", {
                                method: 'GET',
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": " Bot " + this.token,
                                },
                            })];
                    case 2:
                        result = _a.sent();
                        guildsChannel = result.data.filter(function (channels) { return channels.id === channel; });
                        return [2 /*return*/, guildsChannel];
                    case 3:
                        e_1 = _a.sent();
                        return [2 /*return*/, e_1.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //Gets Channel Through Name
    Channel.prototype.find = function (obj) {
        return __awaiter(this, void 0, void 0, function () {
            var channels, guildid, result, c, channel, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!obj) {
                            //Give Some Proper Error Message
                            throw new Error("expected one argument got 0");
                        }
                        channels = { "text": 0, "dm": 1, "voice": 2, "groupdm": 3, "category": 4, "news": 5, "store": 6 };
                        obj.type && channels[obj.type] !== undefined ? obj.type = channels[obj.type] : 0;
                        guildid = this.res.guild_id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.get(_Const_1.discordAPI.api + "/guilds/" + guildid + "/channels", {
                                method: 'GET',
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": " Bot " + this.token,
                                }
                            })];
                    case 2:
                        result = _a.sent();
                        if (Object.keys(obj).length == 0) {
                            return [2 /*return*/, result.data];
                        }
                        else {
                            c = result.data.filter(function (channels) {
                                var guildChannels = obj.name ? channels.name === obj.name : obj.type ?
                                    channels.type === obj.type : obj.nsfw ? channels.nsfw === obj.nsfw : obj.position ? channels.position == obj.position : null;
                                return guildChannels;
                            });
                            channel = c.includes(null) ? [] : c;
                            return [2 /*return*/, channel];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        return [2 /*return*/, e_2.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    //Creates Channel
    Channel.prototype.create = function (name, type, obj) {
        if (type === void 0) { type = "text"; }
        return __awaiter(this, void 0, void 0, function () {
            var channels, guildid, typeValue, data, result, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!name) {
                            //Give Some Proper Error Message
                            throw new Error("expected one argument but got 0 ");
                        }
                        channels = { "text": 0, "dm": 1, "voice": 2, "groupdm": 3, "category": 4, "news": 5, "store": 6 };
                        guildid = this.res.guild_id;
                        typeValue = channels[type];
                        data = { name: name, type: typeValue };
                        (obj === null || obj === void 0 ? void 0 : obj.nsfw) ? data.nsfw = obj.nsfw : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.position) ? data.position = obj.position : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.userLimit) ? data.user_limit = obj.userLimit : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.topic) ? data.topic = obj.topic : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.category) ? data.parent_id = obj.category : 0;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default(_Const_1.discordAPI.api + "/guilds/" + guildid + "/channels", { method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": " Bot " + this.token,
                                },
                                data: data
                            })];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result.data];
                    case 3:
                        e_3 = _a.sent();
                        return [2 /*return*/, e_3.response.data];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return Channel;
}());
exports.default = Channel;
