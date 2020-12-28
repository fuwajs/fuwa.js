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
var Res = /** @class */ (function () {
    function Res(req, token) {
        this.req = req;
        this.token = token;
        this.data = {};
    }
    /**
     * @param {string | Embed} content Can Send Both Embed And Message With Author Menntion
     * @param {Embed} embed Can Only Send Embed With Author Mention
     */
    Res.prototype.reply = function (content, embed) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof content === 'string') {
                            (this.data.content = '<@' + this.req.author.id + '> ' + content),
                                (this.data.tts = false);
                        }
                        else if (typeof content === 'object') {
                            Object.keys(content).map(function (el) {
                                if (el === 'color') {
                                    content[el] === null && el !== 'color'
                                        ? delete content[el]
                                        : 0;
                                    if (typeof content.color === 'string') {
                                        var colorcode = content.color
                                            ? 0 + 'x' + content.color.split('#')[1]
                                            : '0';
                                        colorcode !== '0'
                                            ? (content.color = parseInt(colorcode))
                                            : (content.color = content.color);
                                    }
                                }
                                (_this.data.embed = content),
                                    (_this.data.tts = false),
                                    (_this.data.content = '<@' + _this.req.author.id + '> ');
                            });
                        }
                        if (embed) {
                            Object.keys(embed).map(function (el) {
                                embed[el] === null && el !== 'color' ? delete embed[el] : 0;
                                if (el === 'color' && typeof embed.color === 'string') {
                                    var colorcode = embed.color
                                        ? 0 + 'x' + embed.color.split('#')[1]
                                        : '0';
                                    if (colorcode !== '0') {
                                        embed.color = parseInt(colorcode);
                                    }
                                }
                            });
                            (this.data.embed = embed), (this.data.tts = false);
                        }
                        return [4 /*yield*/, unicdi_1.uncidiOther('POST', "/api/v8/channels/" + this.req.channel_id + "/messages", this.token, JSON.stringify(this.data))];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * @param {string | Embed} content Can Send Both Embed And Message
     * @param {Embed} embed Can Only Send Embed
     */
    Res.prototype.send = function (content, embed) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof content === 'string') {
                            (this.data.content = content), (this.data.tts = false);
                        }
                        else if (typeof content === 'object') {
                            Object.keys(content).map(function (el) {
                                if (el === 'color') {
                                    content[el] === null && el !== 'color'
                                        ? delete content[el]
                                        : 0;
                                    if (typeof content.color === 'string') {
                                        var colorcode = content.color
                                            ? 0 + 'x' + content.color.split('#')[1]
                                            : '0';
                                        colorcode !== '0'
                                            ? (content.color = parseInt(colorcode))
                                            : (content.color = content.color);
                                    }
                                }
                                (_this.data.embed = content), (_this.data.tts = false);
                            });
                        }
                        if (embed) {
                            Object.keys(embed).map(function (el) {
                                embed[el] === null && el !== 'color' ? delete embed[el] : 0;
                                if (el == 'color' && typeof embed.color === 'string') {
                                    var colorcode = embed.color
                                        ? 0 + 'x' + embed.color.split('#')[1]
                                        : '0';
                                    if (colorcode !== '0') {
                                        embed.color = parseInt(colorcode);
                                    }
                                }
                            });
                            (this.data.embed = embed), (this.data.tts = false);
                        }
                        return [4 /*yield*/, unicdi_1.uncidiOther('POST', "/api/v8/channels/" + this.req.channel_id + "/messages", this.token, JSON.stringify(this.data))];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return Res;
}());
exports.default = Res;
