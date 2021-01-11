"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Guild {
    constructor(data) {
        this.members = new Map(data.members.map(m => [m.user.id, m]));
        this.channels = new Map(data.channels.map(m => [m.id, m]));
    }
}
exports.default = Guild;
