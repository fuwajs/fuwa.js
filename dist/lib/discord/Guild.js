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
const Channel_1 = __importDefault(require("./Channel"));
// class Guild implements IGuild {
class Guild {
    constructor(data) {
        Object.assign(this, Object.assign(Object.assign({}, data), { icon: `${_DiscordAPI_1.discordCDN}/icons/${data.id}/${data.icon}.png`, roles: new Map(data.roles.map((r) => [r.id, new Role_1.default(r, data.id)])), members: new Map(data.members.map((m) => [m.user.id, new Member_1.default(m)])), channels: new Map(data.channels.map((m) => [m.id, new Channel_1.default(m)])), created_at: new Date(data.joined_at) }));
    }
    modifyRolePosition(role, position) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = role instanceof Role_1.default ? role.id : role;
            return new Role_1.default(yield _http_1.default.POST(`/guilds/${this.id}/roles/`, JSON.stringify({ id, position })), this.id);
        });
    }
    modifyRole(role, data) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const id = role instanceof Role_1.default ? role.id : role;
            return new Role_1.default(yield _http_1.default.PATCH(`/guilds/${this.id}/roles/${id}`, JSON.stringify(Object.assign(Object.assign({}, data), { permissions: (_a = data.permissions) === null || _a === void 0 ? void 0 : _a.toString() }))), this.id);
        });
    }
    modifyEmoji(emoji, data) {
        let roles;
        if (data.roles)
            roles =
                data.roles &&
                    data.roles.map((r) => (typeof r === 'string' ? r : r.id));
        const id = typeof emoji === 'string' ? emoji : emoji.id;
        return _http_1.default.PATCH(`/guilds/${this.id}/emojis/${id}`, JSON.stringify({ name: data.name, roles }));
    }
    getMember(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Member_1.default(yield _http_1.default.GET(`/guilds/${this.id}/members/${uid}`));
        });
    }
    getMembersByNickname(nickname) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield _http_1.default.GET(`/guilds/${this.id}/members/search?query=${nickname}`)).map((member) => new Member_1.default(member));
        });
    }
    getEmojis() {
        return __awaiter(this, void 0, void 0, function* () {
            return (this.emojis = new Map((yield _http_1.default.GET(`/guilds/${this.id}/emojis`)).map((m) => [m.id, m])));
        });
    }
    getEmoji(id) {
        return _http_1.default.GET(`/guilds/${this.id}/emojis/${id}`);
    }
    getBans() {
        return __awaiter(this, void 0, void 0, function* () {
            return (this.bans = yield _http_1.default.GET(`/guilds/${this.id}/bans`));
        });
    }
    getBan(uid) {
        return _http_1.default.GET(`/guilds/${this.id}/bans/${uid}`);
    }
    getInvites() {
        return _http_1.default.GET(`/guilds/${this.id}/invites`);
    }
    getInvite(id) {
        return _http_1.default.GET(`/invites/${id}/`);
    }
    deleteInvite(invite) {
        const code = typeof invite === 'string' ? invite : invite.code;
        return _http_1.default.DELETE(`/invites/${code}`);
    }
    deleteChannel(channel) {
        const id = typeof channel === 'string' ? channel : channel.id;
        return _http_1.default.DELETE(`/channels/${id}`);
    }
    deleteEmoji(emoji) {
        const id = typeof emoji === 'string' ? emoji : emoji.id;
        return _http_1.default.DELETE(`/guilds/${this.id}/emojis/${id}`);
    }
    createChannel(data, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Channel_1.default(yield _http_1.default.POST(`/guilds/${this.id}/channels`, JSON.stringify(data), { 'X-Audit-Log-Reason': reason }));
        });
    }
    createRole(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Role_1.default(yield _http_1.default.POST(`/guilds/${this.id}/roles`, JSON.stringify(data)), this.id);
        });
    }
    createEmoji(data) {
        const roles = data.roles.map((r) => (typeof r === 'string' ? r : r.id));
        const imageURL = typeof data.image === 'string'
            ? data.image
            : `data:image/${data.image.mimetype};${data.image.data.toString('base64')}`;
        return _http_1.default.POST(`/guilds/${this.id}/emojis`, JSON.stringify({ name: data.name, roles, image: imageURL }));
    }
    ban(member, reason, delete_messages_since) {
        const id = member instanceof Member_1.default ? member.user.id : member;
        return _http_1.default.PUT(`/guilds/${this.id}/bans/${id}`, JSON.stringify({
            reason,
            delete_message_days: delete_messages_since,
        }), { 'X-Audit-Log-Reason': reason });
    }
    unban(member) {
        const id = member instanceof Member_1.default ? member.user.id : member;
        return _http_1.default.DELETE(`/guilds/${this.id}/bans/${id}`);
    }
    prune(days, reason) {
        return _http_1.default.POST(`/guilds/${this.id}/prune`, JSON.stringify({ days }), {
            'X-Audit-Log-Reason': reason,
        });
    }
}
exports.default = Guild;
//# sourceMappingURL=Guild.js.map