"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Member {
    constructor(data, token) {
        this.deaf = data.deaf;
        this.hoisted_role = data.hoisted_role;
        this.roles = data.roles;
        this.user = new User_1.default(data.user, token);
    }
}
exports.default = Member;
