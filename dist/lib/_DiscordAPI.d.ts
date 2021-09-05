/******************************************************************************
 * TODO: make a web scraper that does this work
 * @file src/lib/_DiscordAPI.ts
 * @fileoverview Exports (most of) the Discord API interfaces.
 * {@link https://discord.com/developers/docs}
 *****************************************************************************/
/**
 * @link https://discord.com/developers/docs/topics/gateway#list-of-intents
 * Add these intents together to use multiple.
 */
export declare enum GatewayIntents {
    guilds = 1,
    guildMembers = 2,
    guildBans = 4,
    guildEmojis = 8,
    guildIntegration = 16,
    guildWebhooks = 32,
    guildInvites = 64,
    guildVoiceStates = 128,
    guildPresences = 256,
    guildMessages = 512,
    guildMessageReactions = 1024,
    guildMessageTyping = 2048,
    directMessages = 4096,
    directMessageReactions = 8192,
    directMessageTyping = 16384
}
/**
 * @link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export declare enum OpCodes {
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
export declare const discordCDN = "https://cdn.discordapp.com";
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
        d: any;
    };
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
/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message-jsonform-params}
 */
export interface MessageForm {
    content: string;
    tts?: boolean;
    file: string;
    embeds: Embed[];
    payload_json?: string;
    allowed_mentions?: AllowedMention[];
    message_reference?: MessageReference;
    components?: MessageComponent[];
}
declare type AllowedMentionType = 'roles' | 'users' | 'everyone';
interface AllowedMention {
    parse: AllowedMentionType[];
    roles: string[];
    users: string[];
    replied_user: boolean;
}
interface MessageComponent {
    type: ComponentType;
    style?: number;
}
declare enum ComponentType {
    ActionRow = 1,
    Button = 2,
    SelectMenu = 3
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
    fail_if_not_exists?: boolean;
}
export interface Attachment {
    id: string;
    filename: string;
    content_type?: string;
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
export declare type GuildMember = Member;
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
declare type GuildFeature = 'INVITE_SPLASH' | 'VIP_REGIONS' | 'VANITY_URL' | 'VERIFIED' | 'PARTNERED' | 'COMMUNITY' | 'COMMERCE' | 'NEWS' | 'DISCOVERABLE' | 'FEATURABLE' | 'ANIMATED_ICON' | 'BANNER' | 'WELCOME_SCREEN_ENABLED';
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
export declare type UserStatus = 'idle' | 'dnd' | 'online' | 'offline';
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
export declare enum ActivityType {
    game = 0,
    streaming = 1,
    listening = 2,
    custom = 3,
    competing = 4
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
declare enum ActivityFlags {
    instance = 1,
    join = 2,
    spectate = 4,
    joinRequest = 8,
    sync = 16,
    play = 32
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
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    tags?: RoleTags;
}
export interface RoleTags {
    bot_id?: string;
    integration_id?: string;
    premium_subscriber?: null;
}
export interface GatewayEventResponse<T extends keyof GatewayEvents> {
    op: 0;
    t: T;
    d: GatewayEvents[T];
}
export declare type createRoleProps = {
    name: string;
    permissions: PermissionFlags;
    color: string | number;
    hoist: boolean;
    mentionable: boolean;
};
export declare enum PermissionFlags {
    CreateInstantInvite = 1,
    KickMembers = 2,
    BanMembers = 4,
    Administrator = 8,
    ManageChannels = 16,
    ManageGuild = 32,
    AddReactions = 64,
    ViewAuditLog = 128,
    PrioritySpeaker = 256,
    Stream = 512,
    ViewChannel = 1024,
    SendMessages = 2048,
    SendTTSMessages = 4096,
    ManageMessages = 8192,
    EmbedLinks = 16,
    AttachFiles = 32768,
    ReadMessageHistory = 65536,
    MentionEveryone = 131072,
    ViewGuildInsights = 524288,
    Connect = 1048576,
    Speak = 2097152,
    MuteMembers = 4194304,
    DeafenMembers = 8388608,
    MoveMembers = 16777216,
    UseVAD = 33554432,
    ChangeNickname = 67108864,
    ManageNicknames = 134217728,
    ManageRoles = 268435456,
    ManageWebhooks = 536870912,
    ManageEmojisAndStickers = 1073741824,
    UseApplicationCommands = -2147483648,
    RequestToSpeak = 1,
    ManageThreads = 4,
    UsePublicThreads = 8,
    UsePrivateThreads = 16,
    UseExternalStickers = 32
}
export {};
