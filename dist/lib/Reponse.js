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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _unicdi_1 = __importDefault(require("./_unicdi"));
class Res {
    constructor(req, token) {
        this.req = req;
        this.token = token;
        this.data = {};
    }
    /**
     * @param content Can Send Both Embed And Message With Author Menntion
     * @param embed Can Only Send Embed With Author Mention
     */
    reply(content, embed) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof content === 'string') {
                this.data.content = '<@' + this.req.author.id + '> ' + content;
                this.data.tts = false;
            }
            else if (typeof content === 'object') {
                Object.keys(content).map((el) => {
                    if (el === 'color') {
                        content[el] === null && el !== 'color'
                            ? delete content[el]
                            : 0;
                        if (typeof content.color === 'string') {
                            let colorcode = content.color
                                ? 0 + 'x' + content.color.split('#')[1]
                                : '0';
                            colorcode !== '0'
                                ? (content.color = parseInt(colorcode))
                                : (content.color = content.color);
                        }
                    }
                    this.data.embed = content;
                    this.data.tts = false;
                    this.data.content = '<@' + this.req.author.id + '> ';
                });
            }
            if (embed) {
                Object.keys(embed).map((el) => {
                    embed[el] === null && el !== 'color' ? delete embed[el] : 0;
                    if (el === 'color' && typeof embed.color === 'string') {
                        let colorcode = embed.color
                            ? 0 + 'x' + embed.color.split('#')[1]
                            : '0';
                        if (colorcode !== '0') {
                            embed.color = parseInt(colorcode);
                        }
                    }
                });
                (this.data.embed = embed), (this.data.tts = false);
            }
            let result = yield _unicdi_1.default.OTHER('POST', `/api/v8/channels/${this.req.channel_id}/messages`, this.token, JSON.stringify(this.data));
            return result;
        });
    }
    /**
     * @param content Can Send Both Embed And Message
     * @param embed Can Only Send Embed
     */
    send(content, embed) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof content === 'string') {
                (this.data.content = content), (this.data.tts = false);
            }
            else if (typeof content === 'object') {
                Object.keys(content).map((el) => {
                    if (el === 'color') {
                        content[el] === null && el !== 'color'
                            ? delete content[el]
                            : 0;
                        if (typeof content.color === 'string') {
                            let colorcode = content.color
                                ? 0 + 'x' + content.color.split('#')[1]
                                : '0';
                            colorcode !== '0'
                                ? (content.color = parseInt(colorcode))
                                : (content.color = content.color);
                        }
                    }
                    (this.data.embed = content), (this.data.tts = false);
                });
            }
            if (embed) {
                Object.keys(embed).map((el) => {
                    embed[el] === null && el !== 'color' ? delete embed[el] : 0;
                    if (el == 'color' && typeof embed.color === 'string') {
                        let colorcode = embed.color
                            ? 0 + 'x' + embed.color.split('#')[1]
                            : '0';
                        if (colorcode !== '0') {
                            embed.color = parseInt(colorcode);
                        }
                    }
                });
                (this.data.embed = embed), (this.data.tts = false);
            }
            let result = yield _unicdi_1.default.OTHER('POST', `/api/v8/channels/${this.req.channel_id}/messages`, this.token, JSON.stringify(this.data));
            return result;
        });
    }
}
exports.default = Res;
