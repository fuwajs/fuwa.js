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
const User_1 = __importDefault(require("./discord/User"));
const Guild_1 = __importDefault(require("./discord/Guild"));
const _http_1 = __importDefault(require("./_http"));
const Message_1 = __importDefault(require("./discord/Message"));
const _globals_1 = require("./_globals");
class Request {
    constructor(msg, cache, bot) {
        this.author = new User_1.default(msg.author);
        this.rawData = msg;
        this.guild_id = msg.guild_id;
        this.reactions = msg.reactions;
        this.message = new Message_1.default(msg, bot);
    }
    getGuild(memberLimit = 100) {
        return __awaiter(this, void 0, void 0, function* () {
            let guild = Object.assign(Object.assign({}, (yield _http_1.default.GET(`/guilds/${this.guild_id}`, _globals_1.token))), { members: yield _http_1.default.GET(`/guilds/${this.guild_id}/members?limit=${memberLimit}`), channels: yield _http_1.default.GET(`/guilds/${this.guild_id}/channels`) });
            console.log(guild.members);
            return (this.guild = new Guild_1.default(guild, _globals_1.token));
        });
    }
}
exports.default = Request;
