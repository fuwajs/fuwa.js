"use strict";
/******************************************************************************
 * @file src/lib/discord/Channel.ts
 * @fileoverview Exports a class implementation of the Channel Interface
 * (IChannel)
 *****************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
class Channel {
    constructor(json, token, bot) {
        this.token = token;
        this.bot = bot;
        Object.assign(this, json);
    }
}
exports.Channel = Channel;
