export const OPCodes = {
    DISPATCH: 0,
    HEARTBEAT: 1,
    IDENTIFY: 2,
    STATUS_UPDATE: 3,
    VOICE_STATE_UPDATE: 4,
    VOICE_GUILD_PING: 5,
    RESUME: 6,
    RECONNECT: 7,
    REQUEST_GUILD_MEMBERS: 8,
    INVALID_SESSION: 9,
    HELLO: 10,
    HEARTBEAT_ACK: 11,
};

export const discordAPI = {
    gateway: 'wss://gateway.discord.gg/?v=6&encoding=json',
    api: `https://discord.com/api/v8/`,
    discord: 'https://discord.com',
};

export interface DiscordAPIEvents {
    GUILD_CREATE: Guild;
    READY: Ready;
    CHANNEL_CREATE: Channel;
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

export interface UserSettings {}
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
    nsfw: boolean;
    position: number;
    permission_overwrites: Overwrites[];
    name: string;
    id: string;
    topic?: null;
    rate_limit_per_user?: number;
    parent_id?: string;
    last_message_id?: string;
    user_limit?: number;
    bitrate?: number;
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

export interface Member {
    user: User;
    roles: string[];
    mute: boolean;
    joined_at: string;
    hoisted_role: null;
    deaf: boolean;
}

export interface Role {
    position: number;
    permissions_new: string;
    permissions: number;
    name: string;
    mentionable: boolean;
    managed: boolean;
    id: string;
    hoist: boolean;
    color: number;
}
export interface DiscordAPIRespone<T extends keyof DiscordAPIEvents> {
    op: 0;
    t: T;
    d: DiscordAPIEvents[T];
}
