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
const Colors_1 = __importDefault(require("./Colors"));
const Embed_1 = __importDefault(require("./Embed"));
const _unicdi_1 = __importDefault(require("./_unicdi"));
class Response {
    constructor(req, token) {
        this.req = req;
        this.token = token;
        this.data = {};
    }
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    reply(content) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof content === 'string') { // Just a normal message
                this.data.content = content;
                this.data.tts = false;
                this.data.message_reference = { message_id: this.req.id };
            }
            else if (content instanceof Embed_1.default) {
                if (!content.color) {
                    content.color = Colors_1.default.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                }
                if (typeof content.color === 'string') {
                    content.color = parseInt('0x' + (((_a = content === null || content === void 0 ? void 0 : content.color) === null || _a === void 0 ? void 0 : _a.split('#')[1]) || 'ffffff'));
                }
                this.data.embed = content;
                this.data.tts = false;
            }
            else {
                throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            }
            return yield _unicdi_1.default.POST(`/api/v8/channels/${this.req.channel_id}/messages`, this.token, JSON.stringify(this.data));
        });
    }
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    send(content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof content === 'string') { // Just a normal message
                this.data.content = content;
                this.data.tts = false;
            }
            else if (content instanceof Embed_1.default) {
                if (!content.color) {
                    content.color = Colors_1.default.rgb(Math.random() * 255, Math.random() * 255, Math.random() * 255);
                }
                if (typeof content.color === 'string') {
                    content.color = parseInt('0x' + (content.color.split('#')[1] || 'ffffff'));
                }
                this.data.embed = content;
                this.data.tts = false;
            }
            else {
                throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            }
            return yield _unicdi_1.default.OTHER('POST', `/api/v8/channels/${this.req.channel_id}/messages`, this.token, JSON.stringify(this.data));
        });
    }
}
exports.default = Response;
