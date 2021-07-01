/******************************************************************************
 * @file src/lib/_DiscordAPI.ts
 * @fileoverview Exports (most of) the Discord API interfaces.
 * {@link https://discord.com/developers/docs}
 *****************************************************************************/

 /**
  * @link https://discord.com/developers/docs/topics/gateway#list-of-intents
  * Add these intents together to use multiple.
  */
export enum GatewayIntents {
    guilds = 1 << 0,
    guildMembers = 1 << 1,
    guildBans = 1 << 2,
    guildEmojis = 1 << 3,
    guildIntegration = 1 << 4,
    guildWebhooks = 1 << 5,
    guildInvites = 1 << 6,
    guildVoiceStates = 1 << 7,
    guildPresences = 1 << 8,
    guildMessages = 1 << 9,
    guildMessageReactions = 1 << 10,
    guildMessageTyping  = 1 << 11,
    directMessages = 1 << 12,
    directMessageReactions = 1 << 13,
    directMessageTyping = 1 << 14
}
/**
 * @link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export enum OpCodes {
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

export const discordAPI = {
    gateway: 'wss://gateway.discord.gg/',
    api: `https://discord.com/api/v8/`,
    discord: 'https://discord.com',
};

export const discordCDN = 'https://cdn.discordapp.com';

/**
 * @see https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
 * TODO: Add more events
 */
export interface GatewayEvents {
    GUILD_CREATE: {
        op: 0;
        t: 'GUILD_CREATE';
        d: Guild;
    };
    RESUMED: {
        op: 0;
        t: 'RESUMED';
        d: any; // eh
    }
    READY: {
        op: 0;
        t: 'READY';
        d: Ready;
    };
    CHANNEL_CREATE: {
        op: 0;
        t: 'CHANNEL_CREATE';
        d: Channel;
    };
    MESSAGE_CREATE: {
        op: 0;
        t: 'MESSAGE_CREATE';
        d: Message;
    };
    MESSAGE_REACTION_ADD: {
        op: 0;
        t: 'MESSAGE_REACTION_ADD';
        d: Reaction;
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
    reactions: Reaction[]
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

enum StickerFormat {
    png = 1,
    apng,
    lottie,
}

enum MessageType {
    default,
    recipientAdd,
    recipientRemove,
    call,
    channelNameChange,
    channelIconChange,
    channelPinnedMessage,
    guildMemberJoin,
    userPremiumGuildSubscription,
    userPremiumGuildSubscriptionTier1,
    userPremiumGuildSubscriptionTier2,
    userPremiumGuildSubscriptionTier3,
    channelFollowAdd,
    guildFollowAdd,
    guildDiscorveryDisqualified,
    guildDiscoveryRequalified,
    reply,
    applicationCommand,
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
    fail_if_not_exists?: boolean;
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

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface Member {
    user?: User;
    nick: string | null;
    roles: string[];
    joined_at: Date;
    premium_since?: Date | null;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
}

export type GuildMember = Member;

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
            intents: number;
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
            status: UserStatus;
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
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    member?: Member;
    emoji: Emoji;
}

/**
 *  @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface Emoji {
    id: string | null;
    name: string | null;
    roles?: string[];
    user?: User;
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


/* eslint-disable */
export interface UserSettings { }

/** 
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure 
 */
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
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    roles: Role[];
    /** Custom guild emojis */
    emojis: Emoji[];
    features: GuildFeature[];
    mfa_level: number;
    application_id: string | null;
    system_channel_id: string | null;
    system_channel_flags: number;
    rules_channel_id: string | null;
    joined_at?: Date;
    large?: boolean;
    unavailable?: boolean;
    member_count?: number;
    voice_states: VoiceState[];
    members?: Member[];
    channels: Channel[];
    presences?: PresenceUpdate[];
    max_presences?: number;
    max_members?: number;
    vanity_url_code: string | null;
    description: string | null;
    banner: string | null;
    premium_tier: number;
    premium_subscription_count?: number;
    preferred_locale: string;
    public_updates_channel_id?: string | null;
    max_video_channel_users?: number;
    approximate_member_count?: number;
    aproximate_presence_count?: number;
}

/** 
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features 
 */
type GuildFeature =
    | 'INVITE_SPLASH' | 'VIP_REGIONS' | 'VANITY_URL' | 'VERIFIED'
    | 'PARTNERED' | 'COMMUNITY' | 'COMMERCE' | 'NEWS' | 'DISCOVERABLE'
    | 'FEATURABLE' | 'ANIMATED_ICON' | 'BANNER' | 'WELCOME_SCREEN_ENABLED'

/**
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
interface VoiceState {
    guild_id?: string;
    channel_id?: string;
    user_id: string;
    member?: Member;
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields
 */
interface PresenceUpdate {
    user: User;
    guild_id: string;
    status: UserStatus;
    activities: Activity[];
    client_status: ClientStatus;
}

export type UserStatus = 'idle' | 'dnd' | 'online' | 'offline';

/**
 * Could be important for Rich Presence (the thing that allows you to see what
 * game someone is playing)
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
 */
interface Activity {
    name: string;
    type: ActivityType;
    url?: string | null;
    created_at: number;
    timestamps?: ActivityTimestamps;
    application_id?: string;
    details?: string | null;
    state?: string | null;
    emoji?: ActivityEmoji | null;
    party?: ActivityParty;
    assets?: ActivityAssets;
    secrets?: ActivitySecrets;
    instance?: boolean;
    flags?: ActivityFlags;
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-types
 */
export enum ActivityType {
    game,
    streaming,
    listening,
    custom,
    competing
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-timestamps
 */
interface ActivityTimestamps {
    start?: number;
    end?: number;
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-emoji
 */
interface ActivityEmoji {
    name: string;
    id?: string;
    animated?: boolean;
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-party
 */
interface ActivityParty {
    id?: string;
    /**
     * [0]: current_size
     * [1]: max_size
     */
    size?: number[];
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-assets
 */
interface ActivityAssets {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-secrets
 */
interface ActivitySecrets {
    join?: string;
    spectate?: string;
    match?: string;
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-flags
 */
enum ActivityFlags {
    instance = 1 << 0,
    join = 1 << 1,
    spectate = 1 << 2,
    joinRequest = 1 << 3,
    sync = 1 << 4,
    play = 1 << 5,
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#client-status-object
 */
interface ClientStatus {
    desktop?: string;
    mobile?: string;
    web?: string;
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

export enum ChannelType {
    text,
    dm,
    voice,
    groupDM,
    catergory,
    news,
    store
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
export interface GatewayEventResponse<T extends keyof GatewayEvents> {
    op: 0;
    t: T;
    d: GatewayEvents[T];
}