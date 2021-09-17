/******************************************************************************
 * TODO: make a web scraper that does this work
 * @file src/lib/_DiscordAPI.ts
 * @fileoverview Exports (most of) the Discord API interfaces.
 * {@link https://discord.com/developers/docs}
 *****************************************************************************/

/**
 * @description Add these intents together to use multiple.
 * @link https://discord.com/developers/docs/topics/gateway#list-of-intents
 */
export enum GatewayIntents {
    Guilds = 1 << 0,
    GuildMembers = 1 << 1,
    GuildBans = 1 << 2,
    GuildEmojis = 1 << 3,
    GuildIntegration = 1 << 4,
    GuildWebhooks = 1 << 5,
    guildInvites = 1 << 6,
    GuildVoiceStates = 1 << 7,
    GuildPresences = 1 << 8,
    GuildMessages = 1 << 9,
    GuildMessageReactions = 1 << 10,
    GuildMessageTyping = 1 << 11,
    DirectMessages = 1 << 12,
    DirectMessageReactions = 1 << 13,
    DirectMessageTyping = 1 << 14,
}

/**
 * @link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export enum GatewayCodes {
    Dispatch,
    Heartbeat,
    Identify,
    StatusUpdate,
    VoiceStateUpdate,
    VoiceGuildPing,
    Resume,
    Reconnect,
    RequestGuildMembers,
    InvalidSession,
    Hello,
    HeartbeatAck,
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
    };
    INVALID_SESSION: {
        op: 9;
        d: false;
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

type AllowedMentionType = 'roles' | 'users' | 'everyone';

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

enum ComponentType {
    ActionRow = 1,
    Button = 2,
    SelectMenu = 3,
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
    Png,
    Apng,
    Lottie,
}

export enum MessageType {
    Default,
    RecipientAdd,
    RecipientRemove,
    Call,
    ChannelNameChange,
    ChannelIconChange,
    ChannelPinnedMessage,
    GuildMemberJoin,
    UserPremiumGuildSubscription,
    UserPremiumGuildSubscriptionTier1,
    UserPremiumGuildSubscriptionTier2,
    UserPremiumGuildSubscriptionTier3,
    ChannelFollowAdd,
    GuildFollowAdd,
    GuildDiscorveryDisqualified,
    GuildDiscoveryRequalified,
    Reply,
    ApplicationCommand,
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

export type GuildMember = Member;

export interface DiscordAPIOP {
    1: {
        op?: 1;
        t?: null;
        d: number | null;
        s: number;
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
        s: number;
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

export enum SlashCommandTypes {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10,
}

export interface Application {
    id: string;
    flags: number;
}
export enum PremiumTypes {
    None,
    NitroClassic,
    Nitro,
}
export enum UserFlags {
    None = 0,
    DiscordEmployee = 1 << 0,
    PartneredServerOwner = 1 << 1,
    HypesquadEvents = 1 << 2,
    BugHunterLevelOne = 1 << 3,
    HouseBravery = 1 << 6,
    HouseBrilliance = 1 << 7,
    HouseBalance = 1 << 8,
    EarlySupporter = 1 << 9,
    TeamUser = 1 << 10,
    BugHunterLevelTwo = 1 << 14,
    VerifiedBot = 1 << 16,
    EarlyVerifiedBotDev = 1 << 17,
    DiscordMod = 1 << 18,
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
    accent_color?: number;
    banner?: string;
    flags?: number;
    premium_type?: PremiumTypes;
    public_flags?: UserFlags;
}

/* eslint-disable */
export interface UserSettings {}

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
    features: GuildFeatures[];
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
type GuildFeatures =
    | 'INVITE_SPLASH'
    | 'VIP_REGIONS'
    | 'VANITY_URL'
    | 'VERIFIED'
    | 'PARTNERED'
    | 'COMMUNITY'
    | 'COMMERCE'
    | 'NEWS'
    | 'DISCOVERABLE'
    | 'FEATURABLE'
    | 'ANIMATED_ICON'
    | 'BANNER'
    | 'WELCOME_SCREEN_ENABLED';

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
    Game,
    Streaming,
    Listening,
    Custom,
    Competing,
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
    Instance = 1 << 0,
    Join = 1 << 1,
    Spectate = 1 << 2,
    JoinRequest = 1 << 3,
    Sync = 1 << 4,
    Play = 1 << 5,
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
    type: ChannelTypes;
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

export enum ChannelTypes {
    Text = 0,
    Dm = 1,
    Voice = 2,
    GroupDM = 3,
    Catergory = 4,
    News = 5,
    Store = 6,
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
export type RoleProps = {
    name: string;
    permissions: PermissionFlags;
    color: string | number;
    hoist: boolean;
    mentionable: boolean;
};
export type ChannelProps = {
    name: string;
    type: ChannelTypes;
    position?: number;
    topic?: string;
    nsfw?: boolean;
    rate_limit_per_user?: number;
    /**
     * Only works for voice channels
     */
    bitrate?: number;
    /**
     * Only works for voice channels
     */
    user_limit?: number;
    permission_overwrites?: Overwrite[];
    /**
     * This is for channel categories
     */
    parent_id?: string;

    rtc_region?: string;
    /**
     * Video quality of a voice channel
     */
    video_quality_mode?: number;
    default_auto_archive_duration?: number;
};

export enum PermissionFlags {
    CreateInstantInvite = 1 << 0,
    KickMembers = 1 << 1,
    BanMembers = 1 << 2,
    Administrator = 1 << 3,
    ManageChannels = 1 << 4,
    ManageGuild = 1 << 5,
    AddReactions = 1 << 6,
    ViewAuditLog = 1 << 7,
    PrioritySpeaker = 1 << 8,
    Stream = 1 << 9,
    ViewChannel = 1 << 10,
    SendMessages = 1 << 11,
    SendTTSMessages = 1 << 12,
    ManageMessages = 1 << 13,
    EmbedLinks = 1 << 4,
    AttachFiles = 1 << 15,
    ReadMessageHistory = 1 << 16,
    MentionEveryone = 1 << 17,
    ViewGuildInsights = 1 << 19,
    Connect = 1 << 20,
    Speak = 1 << 21,
    MuteMembers = 1 << 22,
    DeafenMembers = 1 << 23,
    MoveMembers = 1 << 24,
    UseVAD = 1 << 25,
    ChangeNickname = 1 << 26,
    ManageNicknames = 1 << 27,
    ManageRoles = 1 << 28,
    ManageWebhooks = 1 << 29,
    ManageEmojisAndStickers = 1 << 30,
    UseApplicationCommands = 1 << 31,
    RequestToSpeak = 1 << 32,
    ManageThreads = 1 << 34,
    UsePublicThreads = 1 << 35,
    UsePrivateThreads = 1 << 36,
    UseExternalStickers = 1 << 37,
}

export interface Ban {
    reason?: string;
    user: User;
}

export interface Invite {
    code: string;
    guild?: {
        id: string;
        name: string;
        splash?: string;
        banner?: string;
        description: string;
        icon: string;
        features: GuildFeatures[];
        verification_level: number;
        vanity_url_code?: number;
    };
    channel: {
        id: string;
        name: string;
        type: ChannelTypes;
    };
    inviter?: User;
    target_type?: InviteTargets;
    target_user?: User;
    target_application?: Application;
    approximate_presence_count?: number;
    approximate_member_count?: number;
    expires_at?: number;
    state_instance?: InviteStage;
}

export enum InviteTargets {
    Stream = 1,
    EmbeddedApplication,
}

export interface InviteStage {
    members: Member[];
    participant_count: number;
    speaker_count: number;
    topic: string;
}
