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
const Role_1 = __importDefault(require("./discord/Role"));
class Response {
    constructor(req, bot) {
        this.req = req;
        this.bot = bot;
        this.data = {};
    }
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    reply(content) {
        if (typeof content === 'string') {
            // Just a normal message
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
        return _http_1.default
            .POST(`/channels/${this.req.channel_id}/messages`, JSON.stringify(this.data))
            .catch(console.error);
    }
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    send(content) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof content === 'string') {
                // Just a normal message
                this.data.content = content;
                this.data.tts = false;
            }
            else if (content instanceof Embed_1.default) {
                this.data.embeds = [content];
                this.data.tts = false;
            }
            else {
                // throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
                return;
            }
            return new Message_1.default(yield _http_1.default.POST(`/channels/${this.req.channel_id}/messages`, JSON.stringify(this.data)), this.bot);
        });
    }
    /**
     * @param emojis The emoji(s) to send
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     */
    react(emojis, inOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            if (typeof emojis === 'string') {
                return _http_1.default.PUT(`/channels/${this.req.channel_id}/messages/${this.req.id}` +
                    `/reactions/${emojis}/@me`);
            }
            else if (inOrder) {
                return _http_1.default
                    .PUT(`/channels/${this.req.channel_id}/messages/${this.req.id}` +
                    `/reactions/${encodeURI(emojis[0])}/@me`)
                    .then((_) => this.react(emojis.slice(1), true));
            }
            else {
                const ret = [];
                emojis.forEach((e) => {
                    ret.push(_http_1.default.PUT(`/channels/${this.req.channel_id}/messages/${this.req.id}` +
                        `/reactions/${encodeURI(e)}/@me`));
                });
                return ret;
            }
        });
    }
    createRole(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Role_1.default(yield _http_1.default.POST(`/guilds/${this.req.guild_id}/roles`, JSON.stringify(Object.assign(Object.assign({}, data), { permissions: data.permissions.toString() }))));
        });
    }
}
exports.default = Response;
