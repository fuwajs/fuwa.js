"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./discord/User"));
const Guild_1 = __importDefault(require("./discord/Guild"));
const Message_1 = __importDefault(require("./discord/Message"));
class Request {
    constructor(msg, token, cache, bot) {
        this.author = new User_1.default(msg.author, token);
        this.rawData = msg;
        this.reactions = msg.reactions;
        this.message = new Message_1.default(msg, token, bot);
        this.guild = new Guild_1.default(cache.data.guilds.get(msg.guild_id), token);
    }
}
exports.default = Request;
