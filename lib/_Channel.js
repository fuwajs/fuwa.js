"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
var Channel = /** @class */ (function () {
    function Channel(data) {
        this.object = __assign({}, data);
        if (this.object.permission_overwrites) {
            this.object.permissionOverwrite = this.object.permission_overwrites;
            delete this.object.permission_overwrites;
        }
        if (this.object.user_limit) {
            this.object.userLimit = this.object.user_limit;
            delete this.object.user_limit;
        }
        if (this.object.application_id) {
            this.object.applicationId = this.object.application_id;
            delete this.object.application_id;
        }
        if (this.object.owner_id) {
            this.object.ownerId = this.object.owner_id;
            delete this.object.owner_id;
        }
        if (this.object.guild_id) {
            this.object.guildId = this.object.guild_id;
            delete this.object.guild_id;
        }
        if (this.object.parent_id) {
            this.object.parentId = this.object.parent_id;
            delete this.object.parent_id;
        }
        //this is not working dn't know why ..
        if (this.object.rate_limit_per_user) {
            this.object.rateLimitPerUser = this.object.rate_limit_per_user;
            delete this.object.rate_limit_per_user;
        }
        if (this.object.last_message_id) {
            this.object.lastMessageId = this.object.last_message_id;
            delete this.object.last_message_id;
        }
        if (this.object.last_pin_timestamp) {
            this.object.lastPinTimestamp = this.object.last_pin_timestamp;
            delete this.object.last_pin_timestamp;
        }
    }
    Channel.prototype.getObj = function () {
        return this.object;
    };
    return Channel;
}());
exports.Channel = Channel;
