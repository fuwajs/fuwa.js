export * from './extention';
import type { Member, User } from '../member';
import type { Channel, StageInstance } from '../channel';
import type { Emoji } from '../message';
import { Channels, GuildMemberWithUser, GuildNsfwLevel, WelcomeScreen } from '..';
/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-structure
 */
export interface Guild {
    /** Guild id */
    id: string;
    /** Guild name (2-100 characaters, excluding trailing and leading whitespace) */
    name: string;
    /** Icon hash */
    icon: string | null;
    /** Icon hash, returned when in the template object */
    icon_hash?: string | null;
    /** Splash hash */
    splash: string | null;
    /** Discovery splash hash; only present for guilds with the "DISCOVERABLE" feature */
    discovery_splash: string | null;
    /** True if the user is the owner of the guild */
    owner?: boolean;

    owner_id: string;
    /** Id of the owner */
    permissions?: string;
    /** Total permissions for the user in the guild (execludes overwrites) */
    region: string;
    /** Id of afk channel */
    afk_channel_id: string | null;
    /** Afk timeout in seconds */
    afk_timeout: number;
    /** True if the server widget is enabled */
    widget_enabled?: boolean;
    /** The channel id that the widget will generate an invite to, or null if set to no invite */
    widget_channel_id?: string;
    /** Verification level required for the guild */
    verification_level: number;
    /** Default message notifications level */
    default_message_notifications: number;
    /** Explicit content filter level */
    explicit_content_filter: number;
    /** Roles in the guild */
    roles: Role[];
    /** Custom guild emojis */
    emojis: Emoji[];
    /** Enabled guild features */
    features: GuildFeatures[];
    /** Required MFA level for the guild */
    mfa_level: number;
    /** Application id of the guild creator if it is bot-created */
    application_id: string | null;

    /** The id of the channel where guild notices such as welcome messages and boost events are posted */
    system_channel_id: string | null;
    /** System channel flags */
    system_channel_flags: number;
    /** The id of the channel where community guilds can display rules and/or guidelines */
    rules_channel_id: string | null;
    /** When this guild was joined at */
    joined_at?: Date;
    /** True if this is considered a large guild */
    large?: boolean;
    /** True if this guild is unavailable due to an outage */
    unavailable?: boolean;
    /** Total number of members in this guild */
    member_count?: number;
    /** States of members currently in voice channels; lacks the guild_id key */
    voice_states: Omit<VoiceState, 'guild_id'>[];
    /** Users in the guild */
    members?: Member[];
    /** Channels in the guild */
    channels: Channel[];
    // TODO: check if need to omit
    /** All active threads in the guild that the current user has permission to view */
    threads?: Channel[];
    /** Presences of the members in the guild, will only include non-offline members if the size is greater than large threshold */
    presences?: Partial<PresenceUpdate>[];
    /** The maximum number of presences for the guild (the default value, currently 25000, is in effect when null is returned) */
    max_presences?: number;
    /** The maximum number of members for the guild */
    max_members?: number;
    /** The vaniy url code for the guild */
    vanity_url_code: string | null;
    /** The description of a Community guild */
    description: string | null;
    /** Banner hash */
    banner: string | null;
    /** Premium tier (Server Boost level) */
    premium_tier: number;
    /** The number of boosts this guild currently has */
    premium_subscription_count?: number;
    /** The preferred locale of a Community guild; used in server discovery and notices from Discord; defaults to "en-US" */
    preferred_locale: string;
    /** The id of the channel where admins and moderators of Community guilds receive notices from Discord */
    public_updates_channel_id?: string | null;
    /** The maximum amount of users in a video channel */
    max_video_channel_users?: number;
    /** Approximate number of members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true */
    approximate_member_count?: number;
    /**	Approximate number of non-offline members in this guild, returned from the GET /guilds/<id> endpoint when with_counts is true */
    aproximate_presence_count?: number;
    /** The welcome screen of a Community guild, shown to new members, returned in an Invite's guild object */
    welcome_screen?: WelcomeScreen;
    /** Guild NSFW level */
    nsfw_level: GuildNsfwLevel;
    /** Stage instances in the guild */
    stage_instances?: StageInstance[];
}

/** @see https://discord.com/developers/docs/resources/guild#guild-member-object */
export type GuildMember = Member;

/** @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features */
export enum GuildFeatures {
    /** Guild has access to set an invite splash background */
    InviteSplash = 'INVITE_SPLASH',
    /** Guild has access to set 384kbps bitrate in voice (previously VIP voice servers) */
    VipRegions = 'VIP_REGIONS',
    /** Guild has access to set a vanity URL */
    VanityUrl = 'VANITY_URL',
    /** Guild is verified */
    Verified = 'VERIFIED',
    /** Guild is partnered */
    Partnered = 'PARTNERED',
    /** Guild can enable welcome screen, Membership Screening, stage channels and discovery, and recives community updates */
    Community = 'COMMUNITY',
    /** Guild has access to use commerce features (i.e. create store channels) */
    Commerce = 'COMMERCE',
    /** Guild has access to create news channels */
    News = 'NEWS',
    /** Guild is able to be discovered in the directory */
    Discoverable = 'DISCOVERABLE',
    /** guild cannot be discoverable */
    DiscoverableDisabled = 'DISCOVERABLE_DISABLED',
    /** Guild is able to be featured in the directory */
    Feature = 'FEATURABLE',
    /** Guild has access to set an animated guild icon */
    AnimatedIcon = 'ANIMATED_ICON',
    /** Guild has access to set a guild banner image */
    Banner = 'BANNER',
    /** Guild has enabled the welcome screen */
    WelcomeScreenEnabled = 'WELCOME_SCREEN_ENABLED',
    /** Guild has enabled [Membership Screening](https://discord.com/developers/docs/resources/guild#membership-screening-object) */
    MemberVerificationGateEnabled = 'MEMBER_VERIFICATION_GATE_ENABLED',
    /** Guild can be previewed before joining via Membership Screening or the directory */
    PreviewEnabled = 'PREVIEW_ENABLED',
    /** Guild has enabled ticketed events */
    TicketedEventsEnabled = 'TICKETED_EVENTS_ENABLED',
    /** Guild has enabled monetization */
    MonetizationEnabled = 'MONETIZATION_ENABLED',
    /** Guild has increased custom sticker slots */
    MoreStickers = 'MORE_STICKERS',
}
/**
 * @see https://discord.com/developers/docs/resources/voice#voice-state-object-voice-state-structure
 */
export interface VoiceState {
    /** The guild id this voice state is for */
    guild_id?: string;
    /** The channel id this user is connected to */
    channel_id: string | null;
    /** The user id this voice state is for */
    user_id: string;
    /** The guild member this voice state is for */
    member?: GuildMemberWithUser;
    /** The session id for this voice state */
    session_id: string;
    /** Whether this user is deafened by the server */
    deaf: boolean;
    /** Whether this user is muted by the server */
    mute: boolean;
    /** Whether this user is locally deafened */
    self_deaf: boolean;
    /** Whether this user is locally muted */
    self_mute: boolean;
    /** Whether this user is streaming using "Go Live" */
    self_stream?: boolean;
    /** Whether this user's camera is enabled */
    self_video: boolean;
    /** Whether this user is muted by the current user */
    suppress: boolean;
    /** The time at which the user requested to speak */
    request_to_speak_timestamp: string | null;
}

/** @see https://discord.com/developers/docs/topics/gateway#voice-server-update */
export interface VoiceServerUpdate {
    /** Voice connection token */
    token: string;
    /** The guild this voice server update is for */
    guildId: string;
    /** The voice server host */
    endpoint: string | null;
}
/** @see https://discord.com/developers/docs/topics/gateway#update-voice-state */
export interface UpdateVoiceState {
    /** id of the guild */
    guildId: string;
    /** id of the voice channel client wants to join (null if disconnecting) */
    channelId: string | null;
    /** Is the client muted */
    selfMute: boolean;
    /** Is the client deafened */
    selfDeaf: boolean;
}

/** @see https://discord.com/developers/docs/resources/voice#voice-region-object-voice-region-structure */
export interface VoiceRegion {
    /** Unique Id for the region */
    id: string;
    /** Name of the region */
    name: string;
    /** true if this is a vip-only server */
    vip: boolean;
    /** true for a single server that is closest to the current user's client */
    optimal: boolean;
    /** Whether this is a deprecated voice region (avoid swithing to these) */
    deprecated: boolean;
    /** Whether this is a custom voice region (used for events/etc) */
    custom: boolean;
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#presence-update-presence-update-event-fields
 */
export interface PresenceUpdate {
    /** the user presence is being update for */
    user: User;
    /** id of the guild */
    guild_id: string;
    /** either "idle", "dnd", "online", or "offline" */
    status: Omit<StatusType, 'invisible'>;
    /** user's current activities */
    activities: Activity[];
    /** user's platform-dependent status */
    client_status: ClientStatus;
}

export type Presence = PresenceUpdate;

export interface GuildMemberRemove {
    guild_id: string;
    user: User;
}

/**
 * @see https://discord.com/developers/docs/topics/gateway#update-presence-status-types
 */
export type StatusType = 'online' | 'dnd' | 'idle' | 'invisible' | 'offline';

/**
 * Could be important for Rich Presence (the thing that allows you to see what
 * game someone is playing)
 * @see https://discord.com/developers/docs/topics/gateway#activity-object-activity-structure
 */
export interface Activity {
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
    Watching,
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

export interface GuildHashes {
    version: number;
    roles: Channels;
    metadata: Channels;
    channels: Channels;
}

export enum AuditLogEvents {
    GuildUpdate = 1,
    ChannelCreate = 10,
    ChannelUpdate = 11,
    ChannelDelete = 12,
    ChannelOverwriteCreate = 13,
    ChanelOverwriteUpdate = 14,
    ChannelOverwriteDelete = 15,
    MemberKick = 20,
    MemberPrune = 21,
    MemberBanAdd = 22,
    MemberBanRemove = 23,
    MemberUpdate = 24,
    MemberRoleUpdate = 25,
    MemberMove = 26,
    MemberDisconnect = 27,
    BotAdd = 28,
    RolCreate = 30,
    RoleUpdate = 31,
    RoleDelete = 32,
    InviteCreate = 40,
    InviteUpdate = 41,
    InviteDelete = 42,
    WebhookCreate = 50,
    WebhookUpdate = 51,
    WebhookDelete = 52,
    EmojiCreate = 60,
    EmojiUpdate = 61,
    EmojiDelete = 62,
    MessageDelete = 72,
    MessageBulkDelete = 73,
    MessagePin = 74,
    MessageUnpin = 75,
    IntegrationCreate = 80,
    IntegrationUpdate = 81,
    IntegrationDelete = 82,
    StageInstanceCreate = 83,
    StageInstanceUpdate = 84,
    StageInstanceDelete = 85,
    StickerCreate = 90,
    StickerUpdate = 91,
    StickerDelete = 92,
    ThreadCreate = 110,
    ThreadUpdate = 111,
    ThreadDelete = 112,
}

/** @link https://discord.com/developers/docs/resources/template#template-object-template-structure */
export interface Template {
    /** The template code (unique Id) */
    code: string;
    /** Template name */
    name: string;
    /** The description for the template */
    description: string | null;
    /** Number of times this template has been used */
    usage_count: number;
    /** The Id of the user who created the template */
    creator_id: string;
    /** The user who created the template */
    creator: User;
    /** When this template was created */
    created_at: string;
    /** When this template was last synced to the source guild */
    updated_at: string;
    /** The Id of the guild this template is based on */
    sourceGuild_id: string;
    /** The guild snapshot this template contains */
    serialized_source_guild: Partial<Guild>;
    /** Whether the template has unsynced changes */
    is_dirty: boolean | null;
}

/** @see https://discord.com/developers/docs/resources/template#create-guild-from-template-json-params */
export interface CreateGuildFromTemplate {
    /** Name of the guild (2-100 characters) */
    name: string;
    /** base64 128x128 image for the guild icon */
    icon?: string;
}

/** @see https://discord.com/developers/docs/resources/template#modify-guild-template */
export interface ModifyGuildTemplate {
    /** Name of the template (1-100 characters) */
    name?: string;
    /** Description of the template (0-120 characters) */
    description?: string | null;
}

/** @see https://discord.com/developers/docs/topics/permissions#role-object-role-structure */
export interface Role {
    /** Role id */
    id: string;
    /** Role name */
    name: string;
    /** Integer representation of hexadecimal color code */
    color: number;
    /** If this role is showed separately in the user listing */
    hoist: boolean;
    /** Position of this role */
    position: number;
    /** Permission bit set */
    permissions: string;
    /** Whether this role is managed by an integration */
    managed: boolean;
    /** Whether this role is mentionable */
    mentionable: boolean;
    /** The tags this role has */
    tags?: RoleTags;
    unicode_emoji?: string | null;
    icon?: string | null;
}

/** @see https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure */
export interface RoleTags {
    /** The id of the bot this role belongs to */
    bot_id?: string;
    /** The id of the integration this role belongs to */
    integration_id?: string;
    /** Whether this is the guild's premium subscriber role */
    premium_subscriber?: null;
}

/** @see https://discord.com/developers/docs/resources/guild#unavailable-guild-object */
export type UnavailableGuild = Pick<Guild, 'id' | 'unavailable'>;
