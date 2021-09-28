import type { Member, User } from "../member/DiscordAPI";
import type { Channel} from "../channel/DiscordAPI"
import type { Channels, Role } from "../DiscordAPI";
import { Emoji } from "../message/DiscordAPI";
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
    joinedAt: string;
    /** When the user started boosing the guild */
    premiumSince?: string | null;
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
