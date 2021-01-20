"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
        if (typeof content === 'string') { // Just a normal message
            this.data.content = content;
            this.data.tts = false;
            this.data.message_reference = { message_id: this.req.id };
        }
        else if (content instanceof Embed_1.default) {
            this.data.embed = content;
            this.data.tts = false;
        }
        else {
            throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
        }
        return _unicdi_1.default.POST(`/channels/${this.req.channel_id}/messages`, this.token, JSON.stringify(this.data)).catch(console.error);
    }
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    send(content) {
        if (typeof content === 'string') { // Just a normal message
            this.data.content = content;
            this.data.tts = false;
        }
        else if (content instanceof Embed_1.default) {
            this.data.embed = content;
            this.data.tts = false;
        }
        else {
            // throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            return;
        }
        return _unicdi_1.default.POST(`/channels/${this.req.channel_id}/messages`, this.token, JSON.stringify(this.data)).catch(console.error);
    }
    /**
     * @param emojis The emoji(s) to send
     * @returns Another Response so you can chain reactions
     */
    react(...emojis) {
        emojis.forEach(e => {
            _unicdi_1.default.PUT(`/channels/${this.req.channel_id}/messages/${this.req.id}`
                + `/reactions/${encodeURI(e)}/@me`, this.token, JSON.stringify(emojis.map(e => encodeURI(e)))).catch(console.error);
        });
        return this;
    }
}
exports.default = Response;
