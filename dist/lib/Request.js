"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
const Guild_1 = __importDefault(require("./Guild"));
class Request {
    constructor(msg) {
        this.author = new User_1.default(msg.author);
        this.message = { content: msg.content };
        this.guild = new Guild_1.default();
    }
}
exports.default = Request;
