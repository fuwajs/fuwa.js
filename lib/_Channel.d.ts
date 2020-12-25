export interface permissions {
    id: string;
    type: string;
    allow: string[] | string;
    deny: string[] | string;
}
/**
 * @interface channel
 */
export interface channel {
    /**
     * @description  id  of channel
     */
    id: string;
    /**
    * @description type of channel from text | voice | dm | unknown |
    * @default  type text
    */
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
    edit: Function;
    delete: Function;
}
export declare class Channel {
    private object;
    private token;
    constructor(data: channel, token: string);
    getObj(): channel;
}
