"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordAPI = exports.OPCodes = void 0;
exports.OPCodes = {
    DISPATCH: 0,
    HEARTBEAT: 1,
    IDENTIFY: 2,
    STATUS_UPDATE: 3,
    VOICE_STATE_UPDATE: 4,
    VOICE_GUILD_PING: 5,
    RESUME: 6,
    RECONNECT: 7,
    REQUEST_GUILD_MEMBERS: 8,
    INVALID_SESSION: 9,
    HELLO: 10,
    HEARTBEAT_ACK: 11,
};
exports.discordAPI = {
    gateway: 'wss://gateway.discord.gg/?v=6&encoding=json',
    api: 'https://discord.com/api/v8/'
};
