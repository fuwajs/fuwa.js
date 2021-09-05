"use strict";
/******************************************************************************
 * @file src/lib/discord/Member.ts
 * @fileoverview Exports a class implementation of the Member Interface
 * (IMember)
 *****************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Member {
    constructor(data) {
        Object.assign(this, Object.assign(Object.assign({}, data), { user: new User_1.default(data.user), joined_at: new Date(data.joined_at) }));
        this.user = new User_1.default(data.user);
    }
}
exports.default = Member;
