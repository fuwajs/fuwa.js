"use strict";
/******************************************************************************
 * @file src/lib/discord/Message.ts
 * @fileoverview Exports a class 'implementation' of the Message Interface
 * (IMessage)
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
const Embed_1 = __importDefault(require("./Embed"));
const User_1 = __importDefault(require("./User"));
const _Debug_1 = __importDefault(require("../_Debug"));
const _http_1 = __importDefault(require("../_http"));
// class Message implements IMessage {
class Message {
    constructor(data, bot) {
        var _a;
        this.bot = bot;
        Object.assign(this, Object.assign(Object.assign({}, data), { author: new User_1.default(data.author), timestamp: new Date(data === null || data === void 0 ? void 0 : data.timestamp), embeds: (_a = data === null || data === void 0 ? void 0 : data.embeds) === null || _a === void 0 ? void 0 : _a.map((v) => new Embed_1.default(v)) }));
        if (data.message_reference) {
            _http_1.default.GET(`/channels/${data.message_reference.channel_id}/messages/${data.message_reference.message_id}`).then((msg) => (this.message_reference = new Message(msg, bot)));
        }
    }
    edit(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {};
            if (this.author.id.toString() !== this.bot.id.toString()) {
                new _Debug_1.default(true).error('message edit', "Cannot edit a message you didn't send");
                return;
            }
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
                // throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
                return;
            }
            return new Message(yield _http_1.default.PATCH(`/channels/${this.channel_id}/messages/${this.id}`, JSON.stringify(data)), this.bot);
        });
    }
    delete() {
        return _http_1.default
            .DELETE(`/channels/${this.channel_id}/messages/${this.id}`)
            .catch(console.error);
    }
    /**
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     * @param emojis The emoji(s) to send
     */
    react(emojis, inOrder) {
        if (typeof emojis === 'string') {
            return _http_1.default.PUT(`/channels/${this.channel_id}/messages/${this.id}` +
                `/reactions/${emojis}/@me`);
        }
        else if (inOrder) {
            return _http_1.default
                .PUT(`/channels/${this.channel_id}/messages/${this.id}` +
                `/reactions/${encodeURI(emojis[0])}/@me`)
                .then(() => this.react(emojis.slice(1), true));
        }
        else {
            const ret = [];
            emojis.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                ret.push(_http_1.default.PUT(`/channels/${this.channel_id}/messages/${this.id}` +
                    `/reactions/${encodeURI(e)}/@me`));
            }));
            return ret;
        }
    }
}
exports.default = Message;
