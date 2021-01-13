"use strict";
/********************************************************
 *
 */
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
exports.discordAPI = {
    gateway: 'wss://gateway.discord.gg/?v=6&encoding=json',
    api: `https://discord.com/api/v8/`,
    discord: 'https://discord.com',
};
var StickerFormat;
(function (StickerFormat) {
    StickerFormat[StickerFormat["png"] = 1] = "png";
    StickerFormat[StickerFormat["apng"] = 2] = "apng";
    StickerFormat[StickerFormat["lottie"] = 3] = "lottie";
})(StickerFormat || (StickerFormat = {}));
var MessageType;
(function (MessageType) {
    MessageType[MessageType["default"] = 0] = "default";
    MessageType[MessageType["recipientAdd"] = 1] = "recipientAdd";
    MessageType[MessageType["recipientRemove"] = 2] = "recipientRemove";
    MessageType[MessageType["call"] = 3] = "call";
    MessageType[MessageType["channelNameChange"] = 4] = "channelNameChange";
    MessageType[MessageType["channelIconChange"] = 5] = "channelIconChange";
    MessageType[MessageType["channelPinnedMessage"] = 6] = "channelPinnedMessage";
    MessageType[MessageType["guildMemberJoin"] = 7] = "guildMemberJoin";
    MessageType[MessageType["userPremiumGuildSubscription"] = 8] = "userPremiumGuildSubscription";
    MessageType[MessageType["userPremiumGuildSubscriptionTier1"] = 9] = "userPremiumGuildSubscriptionTier1";
    MessageType[MessageType["userPremiumGuildSubscriptionTier2"] = 10] = "userPremiumGuildSubscriptionTier2";
    MessageType[MessageType["userPremiumGuildSubscriptionTier3"] = 11] = "userPremiumGuildSubscriptionTier3";
    MessageType[MessageType["channelFollowAdd"] = 12] = "channelFollowAdd";
    MessageType[MessageType["guildFollowAdd"] = 13] = "guildFollowAdd";
    MessageType[MessageType["guildDiscorveryDisqualified"] = 14] = "guildDiscorveryDisqualified";
    MessageType[MessageType["guildDiscoveryRequalified"] = 15] = "guildDiscoveryRequalified";
    MessageType[MessageType["reply"] = 16] = "reply";
    MessageType[MessageType["applicationCommand"] = 17] = "applicationCommand";
})(MessageType || (MessageType = {}));
