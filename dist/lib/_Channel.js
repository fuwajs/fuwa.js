"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Channel {
    constructor(data) {
        this.nsfw = false;
        this.id = data.id;
        this.type = data.type;
        if (data.guild_id) {
            this.guildId = data.guild_id;
        }
        if (data.topic) {
            this.topic = data.topic;
        }
        if (data.name) {
            this.name = data.name;
        }
        if (data.parent_id) {
            this.parentId = data.parent_id;
        }
        if (data.guild_id) {
            this.guildId = data.guild_id;
        }
        if (data.permission_overwrites) {
            this.permissionOverwrites = data.permission_overwrites;
        }
        if (data.last_message_id) {
            this.lastMessageId = data.last_message_id;
        }
        if (data.bitrate) {
            this.bitrate = data.bitrate;
        }
        if (data.nsfw) {
            this.nsfw = data.nsfw;
        }
        if (data.user_limit) {
            this.userLimit = data.user_limit;
        }
        if (data.rate_limit_per_user) {
            this.rateLimitPerUser = data.rate_limit_per_user;
        }
    }
    get channel() {
        return this;
    }
}
exports.default = Channel;
