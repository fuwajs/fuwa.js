import { GuildFeatures } from "..";

/** @see https://discord.com/developers/docs/resources/guild#modify-guild */
export interface ModifyGuild {
    /** Guild name */
    name?: string;
    /** Verification level */
    verification_level?: VerificationLevels | null;
    /** Default message notification filter level */
    default_message_notifications?: DefaultMessageNotificationLevels | null;
    /** Explicit content filter level */
    explicit_content_filter?: ExplicitContentFilterLevels | null;
    /** Id for afk channel */
    afk_channel_id?: bigint | null;
    /** Afk timeout in seconds */
    afk_timeout?: number;
    /** Base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the `ANIMATED_ICON` feature) */
    icon?: string | null;
    /** User id to transfer guild ownership to (must be owner) */
    owner_id?: bigint;
    /** Base64 16:9 png/jpeg image for the guild splash (when the server has `INVITE_SPLASH` feature) */
    splash?: string | null;
    /** Base64 16:9 png/jpeg image for the guild discovery spash (when the server has the `DISCOVERABLE` feature) */
    discovery_splash?: string | null;
    /** Base64 16:9 png/jpeg image for the guild banner (when the server has BANNER feature) */
    banner?: string | null;
    /** The id of the channel where guild notices such as welcome messages and boost events are posted */
    system_channel_id?: bigint | null;
    /** System channel flags */
    system_channel_flags?: SystemChannelFlags;
    /** The id of the channel where Community guilds display rules and/or guidelines */
    rules_channel_id?: bigint | null;
    /** The id of the channel where admins and moderators of Community guilds receive notices from Discord */
    public_updates_channel_id?: bigint | null;
    /** The preferred locale of a Community guild used in server discovery and notices from Discord; defaults to "en-US" */
    preferred_locale?: string | null;
    /** Enabled guild features */
    features?: GuildFeatures[];
}

/** @see https://discord.com/developers/docs/resources/guild#modify-guild-member */
export interface ModifyGuildMember {
    /** Value to set users nickname to. Requires the `MANAGE_NICKNAMES` permission */
    nick?: string | null;
    /** Array of role ids the member is assigned. Requires the `MANAGE_ROLES` permission */
    roles?: number[] | null;
    /** Whether the user is muted in voice channels. Will throw a 400 if the user is not in a voice channel. Requires the `MUTE_MEMBERS` permission */
    mute?: boolean | null;
    /** Whether the user is deafened in voice channels. Will throw a 400 if the user is not in a voice channel. Requires the `MOVE_MEMBERS` permission */
    deaf?: boolean | null;
    /** Id of channel to move user to (if they are connected to voice). Requires the `MOVE_MEMBERS` permission */
    channelId?: number | null;
}

/** @see https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions */
export interface ModifyGuildChannelPositions {
  /** Channel id */
  id: string;
  /** Sorting position of the channel */
  position: number | null;
  /** Syncs the permission overwrites with the new parent, if moving to a new category */
  lock_positions?: boolean | null;
  /** The new parent ID for the channel that is moved */
  parent_id?: string | null;
}

export interface FuwaModifyGuildRole {
    /** Name of the role */
    name?: string | null;
    /** Bitwise value of the enabled/disabled permissions */
    permissions?: PermissionStrings[] | null;
    /** RGB color value */
    color?: number | null;
    /** Whether the role should be displayed seperately in the sidebar */
    hoist?: boolean | null;
    /** Whether the role should be mentionable */
    mentionable?: boolean | null;
}

/** @see https://discord.com/developers/docs/resources/guild#modify-guild-role */
export interface ModifyGuildRole extends Omit<FuwaModifyGuildRole, 'permissions'> {
    permissions?: string | null;
}

/** @see https://discord.com/developers/docs/resources/guild#modify-guild-role-positions */
export interface ModifyGuildRolePositions {
  /** Role id */
  id: string;
  /** Sorting position of the role */
  position?: number | null;
}

/** @see https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen */
export interface ModifyGuildWelcomeScreen {
  /** Whether the welcome screen is enabled */
  enabled?: boolean | null;
  /** Channels linked in the welcome screen and their display options */
  welcome_screen?: WelcomeScreenChannel[] | null;
  /** The server description to show in the welcome screen */
  description?: string | null;
}

/** @see https://discord.com/developers/docs/resources/guild#guild-object-premium-tier */
export enum DiscordPremiumTiers {
  /** Guild has not unlocked any Server Boost perks */
  None,
  /** Guild has unlocked Server Boost level 1 perks */
  Tier1,
  /** Guild has unlocked Server Boost level 2 perks */
  Tier2,
  /** Guild has unlocked Server Boost level 3 perks */
  Tier3,
}