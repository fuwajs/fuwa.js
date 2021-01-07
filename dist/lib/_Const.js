"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordAPI = exports.OPCodeMap = exports.opCodes = exports.OPCodes = void 0;
exports.OPCodes = {
    // DISPATCH: 0,
    HEARTBEAT: 1,
    IDENTIFY: 2,
    STATUS_UPDATE: 3,
    VOICE_STATE_UPDATE: 4,
    // VOICE_GUILD_PING: 5,
    RESUME: 6,
    // RECONNECT: 7,
    REQUEST_GUILD_MEMBERS: 8,
    INVALID_SESSION: 9,
    HELLO: 10,
};
var opCodes;
(function (opCodes) {
    opCodes[opCodes["heartbeat"] = 0] = "heartbeat";
    opCodes[opCodes["indentify"] = 1] = "indentify";
    opCodes[opCodes["statusUpdate"] = 2] = "statusUpdate";
    opCodes[opCodes["voiceStateUpdate"] = 3] = "voiceStateUpdate";
    opCodes[opCodes["resume"] = 4] = "resume";
    opCodes[opCodes["requestGuildMembers"] = 5] = "requestGuildMembers";
    opCodes[opCodes["invalidSession"] = 6] = "invalidSession";
    opCodes[opCodes["hello"] = 7] = "hello";
})(opCodes = exports.opCodes || (exports.opCodes = {}));
exports.OPCodeMap = new Map()
    .set('HEARTBEAT', 1)
    .set('IDENTIFY', 2)
    .set('STATUS_UPDATE', 3)
    .set('VOICE_STATE_UPDATE', 4)
    .set('RESUME', 6)
    .set('REQUEST_GUILD_MEMBERS', 8)
    .set('INVALID_SESSION', 9)
    .set('HELLO', 10);
exports.discordAPI = {
    gateway: 'wss://gateway.discord.gg/?v=6&encoding=json',
    api: `https://discord.com/api/v8/`,
    discord: 'https://discord.com',
};
