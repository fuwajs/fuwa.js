export declare enum opCodes {
    dispatch = 0,
    heartbeat = 1,
    indentify = 2,
    statusUpdate = 3,
    voiceStateUpdate = 4,
    voiceGuildPing = 5,
    resume = 6,
    reconnect = 7,
    requestGuildMembers = 8,
    invalidSession = 9,
    hello = 10,
    heartbeatAck = 11
}
export declare const discordAPI: {
    gateway: string;
    api: string;
    discord: string;
};
export interface DiscordAPIEvents {
    guildCreate: {
        op?: 0;
        t?: 'guildCreate';
        d: Guild;
    };
    ready: {
        op?: 0;
        t?: 'ready';
        d: Ready;
    };
    channelCreate: {
        op?: 0;
        t?: 'channelCreate';
        d: Ready;
    };
    messageCreate: {
        op?: 0;
        t?: 'messageCreate';
        d: Message;
    };
}
export interface Message {
    type: number;
    tts: boolean;
    timestamp: Date;
    referenced_message: null;
    pinned: boolean;
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
    username: string;
    public_flags: number;
    id: string;
    discriminator: string;
    avatar: string;
}
export interface Member {
    roles: null[];
    premium_since: null;
    pending: boolean;
    nick: null;
    mute: boolean;
    joined_at: Date;
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
export interface User {
    verified: boolean;
    username: string;
    mfa_enabled: boolean;
    id: string;
    flags: number;
    email: null;
    discriminator: string;
    bot: boolean;
    avatar: null | string;
}
export interface UserSettings {
    _: any;
}
export interface Guild {
    description: null;
    public_updates_channel_id: null;
    large: boolean;
    features: any[];
    unavailable: boolean;
    afk_channel_id: null;
    member_count: number;
    max_members: number;
    guild_hashes: GuildHashes;
    system_channel_flags: number;
    premium_tier: number;
    emojis: any[];
    discovery_splash: null;
    name: string;
    voice_states: any[];
    members: Member[];
    presences: any[];
    banner: null;
    region: string;
    channels: Channel[];
    icon: null;
    max_video_channel_users: number;
    afk_timeout: number;
    owner_id: string;
    preferred_locale: string;
    rules_channel_id: null;
    splash: null;
    verification_level: number;
    roles: Role[];
    lazy: boolean;
    application_id: null;
    mfa_level: number;
    explicit_content_filter: number;
    vanity_url_code: null;
    system_channel_id: string;
    threads: any[];
    id: string;
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
