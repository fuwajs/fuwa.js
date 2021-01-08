"use strict";
// export const OPCodes = {
//     // DISPATCH: 0,
//     HEARTBEAT: 1,
//     IDENTIFY: 2,
//     STATUS_UPDATE: 3,
//     VOICE_STATE_UPDATE: 4,
//     // VOICE_GUILD_PING: 5,
//     RESUME: 6,
//     // RECONNECT: 7,
//     REQUEST_GUILD_MEMBERS: 8,
//     INVALID_SESSION: 9,
//     HELLO: 10,
//     // HEARTBEAT_ACK: 11,
// };
Object.defineProperty(exports, "__esModule", { value: true });
exports.discordAPI = exports.opCodes = void 0;
var opCodes;
(function (opCodes) {
    opCodes[opCodes["dispatch"] = 0] = "dispatch";
    opCodes[opCodes["heartbeat"] = 1] = "heartbeat";
    opCodes[opCodes["indentify"] = 2] = "indentify";
    opCodes[opCodes["statusUpdate"] = 3] = "statusUpdate";
    opCodes[opCodes["voiceStateUpdate"] = 4] = "voiceStateUpdate";
    opCodes[opCodes["voiceGuildPing"] = 5] = "voiceGuildPing";
    opCodes[opCodes["resume"] = 6] = "resume";
    opCodes[opCodes["reconnect"] = 7] = "reconnect";
    opCodes[opCodes["requestGuildMembers"] = 8] = "requestGuildMembers";
    opCodes[opCodes["invalidSession"] = 9] = "invalidSession";
    opCodes[opCodes["hello"] = 10] = "hello";
    opCodes[opCodes["heartbeatAck"] = 11] = "heartbeatAck";
})(opCodes = exports.opCodes || (exports.opCodes = {}));
// export const OPCodeMap = new Map<keyof typeof OPCodes, keyof DiscordAPIOP>()
//     .set('HEARTBEAT', 1)
//     .set('IDENTIFY', 2)
//     .set('STATUS_UPDATE', 3)
//     .set('VOICE_STATE_UPDATE', 4)
//     .set('RESUME', 6)
//     .set('REQUEST_GUILD_MEMBERS', 8)
//     .set('INVALID_SESSION', 9)
//     .set('HELLO', 10);
exports.discordAPI = {
    gateway: 'wss://gateway.discord.gg/?v=6&encoding=json',
    api: `https://discord.com/api/v8/`,
    discord: 'https://discord.com',
};
