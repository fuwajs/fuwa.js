export interface channel {
    id: string;
    type: string;
    position?: number | null;
    name?: string | null;
    topic?: string | null;
    nsfw?: boolean | null;
    permission_overwrites?: Object[] | null;
    icon?: string | null;
    owner_id?: string | null;
    application_id?: string | null;
    parent_id?: string | null;
    bitrate?: number | null;
    user_limit?: number | null;
    permissionOverwrite?: Object[] | null;
    userLimit?: number | null;
    applicationId?: string | null;
    ownerId?: string | null;
    guild_id?: string | null;
    guildId?: string | null;
    parentId?: string | null;
    rate_limit_per_user?: number | null;
    rateLimitPerUser?: number | null;
    last_pin_timestamp?: string | null;
    last_message_id?: string | null;
    lastMessageId?: string | null;
    lastPinTimestamp?: string | null;
}
export declare class Channel {
    private object;
    constructor(data: channel);
    getObj(): channel;
}
