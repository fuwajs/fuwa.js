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
const Embed_1 = __importDefault(require("./Embed"));
const _Debug_1 = __importDefault(require("./_Debug"));
const _unicdi_1 = __importDefault(require("./_unicdi"));
class Message {
    constructor(
    // hear me out. if you do await on the message it waits until the message 
    // is sent and in that time the cb func cant do anything
    data, // NO PROMISE BRO ????????? how to use promise in constructor?
    token, bot) {
        this.token = token;
        this.bot = bot;
        // otherwise u block the thread
        this.id = data.id;
        this.guild_id = data.guild_id;
        this.author_id = data.author.id;
        this.channel_id = data.channel_id;
        this.content = data.content;
        this.embeds = data.embeds.map((v) => new Embed_1.default(v));
    }
    edit(content) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = {};
            if (this.author_id !== this.bot.id)
                new _Debug_1.default(true).error('message edit', 'Cannot edit a message you didn\'t send');
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
            return new Message(yield _unicdi_1.default.PATCH(`/channels/${this.channel_id}/messages/${this.id}`, this.token, JSON.stringify(data)), this.token, this.bot);
        });
    }
    delete() {
        return _unicdi_1.default.DELETE(`/channels/${this.channel_id}/messages/${this.id}`, this.token).catch(console.error);
    }
}
exports.default = Message;
