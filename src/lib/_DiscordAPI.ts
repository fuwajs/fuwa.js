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

export enum opCodes {
    dispatch,
    heartbeat,
    indentify,
    statusUpdate,
    voiceStateUpdate,
    voiceGuildPing,
    resume,
    reconnect,
    requestGuildMembers,
    invalidSession,
    hello,
    heartbeatAck,
}

// export const OPCodeMap = new Map<keyof typeof OPCodes, keyof DiscordAPIOP>()
//     .set('HEARTBEAT', 1)
//     .set('IDENTIFY', 2)
//     .set('STATUS_UPDATE', 3)
//     .set('VOICE_STATE_UPDATE', 4)
//     .set('RESUME', 6)
//     .set('REQUEST_GUILD_MEMBERS', 8)
//     .set('INVALID_SESSION', 9)
//     .set('HELLO', 10);

export const discordAPI = {
    gateway: 'wss://gateway.discord.gg/?v=6&encoding=json',
    api: `https://discord.com/api/v8/`,
    discord: 'https://discord.com',
};

export interface DiscordAPIEvents {
    GUILD_CREATE: {
        op: 0;
        t: 'GUILD_CREATE';
        d: Guild;
    };
    READY: {
        op: 0;
        t: 'READY';
        d: Ready;
    };
    CHANNEL_CREATE: {
        op: 0;
        t: 'CHANNEL_CREATE';
        d: Ready;
    };
    MESSAGE_CREATE: {
        op: 0;
        t: 'MESSAGE_CREATE';
        d: Message;
    };
}
export interface Message {
    type: number;
    tts: boolean;
    timestamp: Date;
    referenced_message: null;
    pinned: boolean;
    reactions: Reaction[]
    nonce: string;
    mentions: any[];
    mention_roles: any[];
    mention_everyone: boolean;
    member: Member;
    id: string;
    flags: number;
    embeds: any[];
    edited_timestamp: null;
    content: string;
    channel_id: string;
    author: Author;
    attachments: any[];
    guild_id: string;
}

export interface Author {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
}

export interface Member {
    user: User;
    roles: string;
    premium_since?: null|number;
    pending: boolean;
    nick: string|null;
    mute: boolean;
    joined_at: number;
    is_pending: boolean;
    hoisted_role: string;
    deaf: boolean;
}

export interface DiscordAPIOP {
    1: {
        op?: 1;
        t?: null;
        d: number | null;
    };
    2: {
        op?: 2;
        t?: null;
        d: {
            token: string;
            intents: 513;
            properties: {
                $os: string;
                $browser: string;
                $device: string;
            };
        };
    };
    3: {
        op?: 3;
        t?: null;
        d: {
            since: number;
            activities: {
                name: string;
                type: 0 | 1 | 2 | 3 | 4 | 5;
            }[];
            status: 'offline' | 'online' | 'dnd' | 'idle';
            afk: boolean;
        };
    };
    4: {
        op?: 4;
        t?: null;
        d: {
            guild_id: string;
            channel_id: string;
            self_mute: boolean;
            self_deaf: boolean;
        };
    };
    6: {
        op?: 6;
        t?: null;
        d: {
            token: string;
            session_id: string;
            seq: 1337;
        };
    };
    8: {
        op?: 8;
        t?: null;
        d: {
            guild_id: number;
            query: string;
            limit: number;
        };
    };
    9: {
        op?: 9;
        t?: null;
        d: false;
    };
    10: {
        op?: 10;
        t?: null;
        d: {
            heartbeat_interval: number;
        };
    };
}

export interface Reaction {
    count: number;
    me: boolean;
    emoji: Emoji;
}

export interface Emoji {
    id: string,
    name: string,
    roles?: string[],
    user: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean
}

export interface Ready {
    v: number;
    user_settings: UserSettings;
    user: User;
    session_id: string;
    relationships: any[];
    private_channels: any[];
    presences: any[];
    guilds: Guild[];
    guild_join_requests: any[];
    geo_ordered_rtc_regions: string[];
    application: Application;
}

export interface Application {
    id: string;
    flags: number;
}

export interface Guild {
    unavailable: boolean;
    id: string;
}

export interface User extends Author {
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean; // is 2FA Enabled?
    locale?: string;
    verified?: boolean; // Is the user's email verfied?
    email?: string;
    flags?: number;
    premium_type?: number;
    public_flags?: number;
}


/* eslint-disable */
export interface UserSettings { }

// volt didnt do a good job he set some stuff to 'null' for some reason
// he left some things out also
export interface Guild {
    id: string;
    name: string;
    icon: string | null;
    icon_hash?: string | null;
    splash: string | null;
    discovery_splash: string | null; // so like this?
    owner?: boolean;
    owner_id: string;
    permissions?: string;
    region: string;
    afk_channel_id: string | null;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string;

    description: string;
    public_updates_channel_id: null;
    large: boolean;
    features: any[];
    unavailable: boolean;
    member_count: number;
    max_members: number;
    guild_hashes: GuildHashes;
    system_channel_flags: number;
    premium_tier: number;
    emojis: any[];
    voice_states: any[];
    members: Member[];
    presences: any[];
    banner: null;
    channels: Channel[];
    max_video_channel_users: number;
    preferred_locale: string;
    rules_channel_id: null;
    verification_level: number;
    roles: Role[];
    lazy: boolean;
    application_id: null;
    mfa_level: number;
    explicit_content_filter: number;
    vanity_url_code: null;
    system_channel_id: string;
    threads: any[];
    default_message_notifications: number;
    premium_subscription_count: number;
    joined_at: string;
}

export interface Overwrites {
    id: string;
    type: number;
    allow: string;
    deny: string;
}
export interface Channel {
    type: number;
    nsfw?: boolean;
    position?: number;
    permission_overwrites?: Overwrites[];
    name?: string;
    id: string;
    topic?: null;
    rate_limit_per_user?: number;
    parent_id?: string;
    last_message_id?: string;
    user_limit?: number;
    bitrate?: number;
    guild_id?: string;
}

export interface GuildHashes {
    version: number;
    roles: Channels;
    metadata: Channels;
    channels: Channels;
}

export interface Channels {
    omitted: boolean;
    hash: string;
}
export interface Role {
    position: number;
    permissions_new?: string;
    permissions: string;
    name: string;
    mentionable: boolean;
    managed: boolean;
    id: string;
    hoist: boolean;
    color: number;
}
export interface DiscordAPIEventResponse<T extends keyof DiscordAPIEvents> {
    op: 0;
    t: T;
    d: DiscordAPIEvents[T];
}
