"use strict";
/******************************************************************************
 * @file src/lib/discord/Response.ts
 * @fileoverview Exports the Response class which you can use to reply and
 * react to messages.
 *****************************************************************************/
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
const Embed_1 = __importDefault(require("./discord/Embed"));
const Message_1 = __importDefault(require("./discord/Message"));
const _http_1 = __importDefault(require("./_http"));
class Response {
    constructor(req) {
        this.req = req;
    }
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    reply(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {};
            if (typeof content === 'string') {
                // Just a normal message
                data.content = content;
                data.tts = false;
                data.message_reference = { message_id: this.req.id };
            }
            else if (content instanceof Embed_1.default) {
                data.embed = content;
                data.tts = false;
            }
            else {
                throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            }
            return new Message_1.default(yield _http_1.default.POST(`/channels/${this.req.channel_id}/messages`, JSON.stringify(data)));
        });
    }
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    send(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {};
            if (typeof content === 'string') {
                // Just a normal message
                data.content = content;
                data.tts = false;
            }
            else if (content instanceof Embed_1.default) {
                data.embed = content;
                data.tts = false;
            }
            else {
                throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            }
            return new Message_1.default(yield _http_1.default.POST(`/channels/${this.req.channel_id}/messages`, JSON.stringify(data)));
        });
    }
    /**
     * @param emojis The emoji(s) to send
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     */
    react(emojis, inOrder) {
        const react = (emoji) => __awaiter(this, void 0, void 0, function* () {
            const string = typeof emoji === 'string'
                ? encodeURI(emoji)
                : `${emoji.name}:${emoji.id}`;
            yield _http_1.default.PUT(`/channels/${this.req.channel_id}/messages/${this.req.id}/reactions/${string}/@me`);
        });
        if (Array.isArray(emojis)) {
            emojis.forEach((emoji) => {
                react(emoji);
            });
        }
        else {
            react(emojis);
        }
    }
}
exports.default = Response;
//# sourceMappingURL=Response.js.map