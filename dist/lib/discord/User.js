"use strict";
/******************************************************************************
 * @file src/lib/discord/User.ts
 * @fileoverview Exports a class implementation of the User Interface
 * (IUser)
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
exports.User = void 0;
const Embed_1 = __importDefault(require("./Embed"));
const _DiscordAPI_1 = require("../_DiscordAPI");
const _http_1 = __importDefault(require("../_http"));
class User {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.bot = data.bot;
        this.avatar = `${_DiscordAPI_1.discordCDN}/avatars/${this.id}/${data.avatar}.png`;
        this.verified = data.verified;
        this.mfa_enabled = data.mfa_enabled;
        this.flags = data.flags;
        this.email = data.email;
    }
    /**
     * Send a Direct Message to 'this' user.
     * @param content The contents of the message. Can be a string or an Embed.
     */
    dm(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {};
            data.recipient_id = this.id;
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
            const dm = yield _http_1.default
                .POST('/users/@me/channels', JSON.stringify({ recipient_id: this.id }))
                .catch(console.error);
            return _http_1.default
                .POST(`/channels/${dm.id}/messages`, JSON.stringify(data))
                .catch(console.error);
        });
    }
}
exports.User = User;
exports.default = User;
//# sourceMappingURL=User.js.map