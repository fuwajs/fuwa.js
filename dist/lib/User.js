"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(data) {
        this.id = data.id;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.bot = data.bot;
        this.avatar = `https://cdn.discordapp.com/avatars/${this.id}/${data.avatar}.png`;
        this.verified = data.verified;
        this.mfa_enabled = data.mfa_enabled;
        this.flags = data.flags;
        this.email = data.email;
    }
}
exports.User = User;
exports.default = User;
