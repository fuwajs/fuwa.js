"use strict";
/******************************************************************************
 * @file src/lib/discord/Guild.ts
 * @fileoverview Exports a class 'implementation' of the Guild Interface
 * (IGuild)
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
const _DiscordAPI_1 = require("../_DiscordAPI");
const Member_1 = __importDefault(require("./Member"));
const Role_1 = __importDefault(require("./Role"));
const _http_1 = __importDefault(require("../_http"));
// class Guild implements IGuild {
class Guild {
    constructor(data, token) {
        Object.assign(this, Object.assign(Object.assign({}, data), { icon: `${_DiscordAPI_1.discordCDN}/icons/${this.id}/${data.icon}.png`, roles: data.roles.map((r) => [r.id, new Role_1.default(r)]), members: new Map(data.members.map((m) => [m.user.id, new Member_1.default(m)])), channels: new Map(data.channels.map((m) => [m.id, m])), created_at: new Date(data.joined_at) }));
    }
    createRole(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Role_1.default(yield _http_1.default.POST(`/guilds/${this.id}/roles`, JSON.stringify(Object.assign(Object.assign({}, data), { permissions: data.permissions.toString() }))));
        });
    }
    changeRolePosition(role, position) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = role instanceof Role_1.default ? role.id : role;
            return new Role_1.default(yield _http_1.default.POST(`/guilds/${this.id}/roles/`, JSON.stringify({ id, position })));
        });
    }
    modifyRole(role, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = role instanceof Role_1.default ? role.id : role;
            return new Role_1.default(yield _http_1.default.PATCH(`/guilds/${this.id}/roles/${id}`, JSON.stringify(Object.assign(Object.assign({}, data), { permissions: data.permissions.toString() }))));
        });
    }
}
exports.default = Guild;
