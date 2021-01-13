"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const Guild_1 = __importDefault(require("./Guild"));
class Request {
    constructor(msg, token, cache) {
        this.author = new User_1.default(msg.author);
        this.message = { content: msg.content };
        this.rawData = msg;
        this.reactions = msg.reactions;
        // this.getGuild(msg.guild_id, token);
        this.guild = new Guild_1.default(cache.guilds.get(msg.guild_id));
    }
}
exports.default = Request;
