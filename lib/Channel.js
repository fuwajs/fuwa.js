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
Object.defineProperty(exports, "__esModule", { value: true });
var unicdi_1 = require("./unicdi");
var _Channel_1 = require("./_Channel");
var channelType = { "text": 0, "dm": 1, "voice": 2, "groupdm": 3, "category": 4, "news": 5, "store": 6 };
var Channel = /** @class */ (function () {
    function Channel(token, res) {
        this.token = token;
        this.res = res;
        this.channelsArray = null;
        this.channelsArray = this.channels();
    }
    ;
    Channel.prototype.channels = function () {
        return __awaiter(this, void 0, void 0, function () {
            var path, channels, sortedChannels;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = "/api/v8/guilds/" + this.res.guild_id + "/channels";
                        return [4 /*yield*/, unicdi_1.uncidiGet(path, this.token)];
                    case 1:
                        channels = _a.sent();
                        sortedChannels = channels.map(function (channel) { return new _Channel_1.Channel(channel, _this.token).getObj(); });
                        return [2 /*return*/, sortedChannels];
                }
            });
        });
    };
    Channel.prototype.get = function (channelid) {
        return __awaiter(this, void 0, void 0, function () {
            var channels, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!channelid) {
                            return [2 /*return*/, null]; //-> THROW ERROR
                        }
                        if (!this.channelsArray) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.channelsArray];
                    case 1:
                        channels = _a.sent();
                        c = channels.filter(function (channel) { return channel.id === channelid; });
                        return [2 /*return*/, c.length == 1 ? c[0] : c];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Channel.prototype.find = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            var channels, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!condition) {
                            return [2 /*return*/, null]; //-> THROW ERROR
                        }
                        if (!this.channelsArray) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.channelsArray];
                    case 1:
                        channels = _a.sent();
                        c = channels.filter(condition);
                        return [2 /*return*/, c.length == 1 ? c[0] : c];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Channel.prototype.findFirst = function (condition) {
        return __awaiter(this, void 0, void 0, function () {
            var channels, c;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!condition) {
                            return [2 /*return*/, null]; //-> THROW ERROR
                        }
                        if (!this.channelsArray) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.channelsArray];
                    case 1:
                        channels = _a.sent();
                        c = channels.find(condition);
                        return [2 /*return*/, c && c.length == 1 ? c[0] : c];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Channel.prototype.createChannel = function (name, type, obj) {
        if (type === void 0) { type = "text"; }
        return __awaiter(this, void 0, void 0, function () {
            var guild, data, d, channel, sortedChannel;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!name) {
                            return [2 /*return*/, null]; //-> THROW ERROR
                        }
                        if (channelType[type] === undefined) {
                            return [2 /*return*/, null]; //-> THROW ERROR
                        }
                        guild = this.res.guild_id;
                        data = { name: name, type: channelType[type] };
                        (obj === null || obj === void 0 ? void 0 : obj.nsfw) ? data.nsfw = obj.nsfw : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.position) ? data.position = obj.position : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.userLimit) ? data.user_limit = obj.userLimit : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.topic) ? data.topic = obj.topic : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.categoryId) ? data.parent_id = obj.categoryId : 0;
                        (obj === null || obj === void 0 ? void 0 : obj.permissionOverwrites) ? data.permission_overwrites = obj.permissionOverwrites : 0;
                        d = JSON.stringify(data);
                        return [4 /*yield*/, unicdi_1.uncidiOther("POST", "/api/v8/guilds/" + guild + "/channels", this.token, d)];
                    case 1:
                        channel = _a.sent();
                        sortedChannel = new _Channel_1.Channel(channel, this.token).getObj();
                        return [2 /*return*/, sortedChannel];
                }
            });
        });
    };
    return Channel;
}());
exports.default = Channel;
