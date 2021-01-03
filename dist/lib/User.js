"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(data) {
        this.id = data.id;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.bot = data.bot;
        this.avatar = data.avatar;
        this.verified = data.verified;
        this.mfa_enabled = data.mfa_enabled;
        this.flags = data.flags;
        this.email = data.email;
    }
    return User;
}());
exports.User = User;
exports.default = User;
