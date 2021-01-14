/********************************************************
 *
 */
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
    id: string;
    channel_id: string;
    guild_id?: string;
    author: Author;
    member?: Member;
    /** The actual contents of the message */
    content: string;
    timestamp: Date;
    edited_timestamp: Date | null;
    tts: boolean;
    mention_everyone: boolean;
    mentions: User[];
    mention_roles: string[];
    mention_channels?: ChannelMention[];
    attachments: Attachment[];
    embeds: Embed[];
    reactions: Reaction[];
    nonce: number | string;
    pinned: boolean;
    webhook_id?: string;
    type: MessageType;
    activity?: MessageActivity;
    application?: MessageApplication;
    message_reference?: MessageReference;
    flags?: number;
    stickers: Sticker[];
    referenced_message?: Message | null;
}
interface Sticker {
    id: string;
    pack_id: string;
    name: string;
    description: string;
    tags?: string;
    asset: string;
    preview_asset: string | null;
    format_type: StickerFormat;
}
declare enum StickerFormat {
    png = 1,
    apng = 2,
    lottie = 3
}
declare enum MessageType {
    default = 0,
    recipientAdd = 1,
    recipientRemove = 2,
    call = 3,
    channelNameChange = 4,
    channelIconChange = 5,
    channelPinnedMessage = 6,
    guildMemberJoin = 7,
    userPremiumGuildSubscription = 8,
    userPremiumGuildSubscriptionTier1 = 9,
    userPremiumGuildSubscriptionTier2 = 10,
    userPremiumGuildSubscriptionTier3 = 11,
    channelFollowAdd = 12,
    guildFollowAdd = 13,
    guildDiscorveryDisqualified = 14,
    guildDiscoveryRequalified = 15,
    reply = 16,
    applicationCommand = 17
}
interface MessageActivity {
    type: number;
    party_id?: string;
}
interface MessageApplication {
    id: string;
    cover_image?: string;
    description: string;
    icon: string | null;
    name: string;
}
interface MessageReference {
    message_id?: string;
    channel_id?: string;
    guild_id?: string;
}
export interface Attachment {
    id: string;
    filename: string;
    /** Size of the file **in bytes** */
    size: number;
    url: string;
    proxy_url: string;
    height: number | null;
    width: number | null;
}
export interface Embed {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: Date;
    color?: number;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: EmbedField[];
}
interface EmbedThumbnail {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}
interface EmbedVideo {
    url?: string;
    height?: number;
    width?: number;
}
interface EmbedImage {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}
interface EmbedFooter {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}
interface EmbedProvider {
    name?: string;
    url?: string;
}
interface EmbedAuthor {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}
interface EmbedField {
    name: string;
    value: string;
    inline?: boolean;
}
export interface ChannelMention {
    id: string;
    guild_id: string;
    type: number;
    name: string;
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
    premium_since?: null | number;
    pending: boolean;
    nick: string | null;
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
    id: string;
    name: string;
    roles?: string[];
    user: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
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
    /** IS 2FA Enabled */
    mfa_enabled?: boolean;
    locale?: string;
    /** Is the user's email verfied? */
    verified?: boolean;
    email?: string;
    flags?: number;
    premium_type?: number;
    public_flags?: number;
}
export interface UserSettings {
}
export interface Guild {
    id: string;
    name: string;
    icon: string | null;
    icon_hash?: string | null;
    splash: string | null;
    discovery_splash: string | null;
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
export interface Overwrite {
    id: string;
    type: number;
    allow: string;
    deny: string;
}
export interface Channel {
    id: string;
    type: ChannelType;
    guild_id?: string;
    position?: number;
    permission_overwrites?: Overwrite[];
    name?: string;
    topic?: string | null;
    nsfw?: boolean;
    last_message_id?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: User[];
    icon?: string | null;
    owner_id?: string;
    application_id?: string;
    parent_id?: string | null;
    last_pin_timestamp?: Date | null;
}
export declare enum ChannelType {
    text = 0,
    dm = 1,
    voice = 2,
    groupDM = 3,
    catergory = 4,
    news = 5,
    store = 6
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
export {};
