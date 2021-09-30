export * from "./member"
import type { Member, User } from '../member';
import type { Channel } from '../channel';
import type { Emoji } from '../message';
import { Channels, GuildMemberWithUser } from '..';
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

/** @see https://discord.com/developers/docs/resources/guild#guild-member-object */
export interface GuildMember {
    /** The user this guild member represents */
    user?: User;
    /** This users guild nickname */
    nick?: string | null;
    /** Array of role object ids */
    roles: string[];
    /** When the user joined the guild */
    joined_at: string;
    /** When the user started boosing the guild */
    premium_since?: string | null;
    /** Whether the user is deafened in voice channels */
    deaf: boolean;
    /** Whether the user is muted in voice channels */
    mute: boolean;
    /** Whether the user has not yet passed the guild's Membership Screening requirements */
    pending?: boolean;
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export type GuildFeatures =
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
    MemerRoleUpdate = 25,
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
  /** If this role is showed seperately in the user listing */
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
export type UnavailableGuild = Pick<Guild, "id" | "unavailable">;