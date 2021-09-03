"use strict";
/******************************************************************************
 * @file src/lib/discord/Guild.ts
 * @fileoverview Exports a class 'implementation' of the Guild Interface
 * (IGuild)
 *****************************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _DiscordAPI_1 = require("../_DiscordAPI");
const Member_1 = __importDefault(require("./Member"));
// class Guild implements IGuild {
class Guild {
    constructor(data, token) {
        this.name = data.name;
        this.id = data.id;
        this.owner_id = data.owner_id;
        this.description = data.description;
        this.size = data.member_count;
        this.icon = `${_DiscordAPI_1.discordCDN}/icons/${this.id}/${data.icon}.png`;
        this.members = new Map(data.members.map(m => [m.user.id, (new Member_1.default(m, token))]));
        this.channels = new Map(data.channels.map(m => [m.id, m]));
        this.created_at = new Date(data.joined_at);
    }
}
exports.default = Guild;
