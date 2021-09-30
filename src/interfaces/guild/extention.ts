import { SnakeCasedPropertiesDeep } from "../../util/util";
import {
    Channel,
    ChannelTypes,
    Emoji,
    Guild,
    GuildFeatures,
    Overwrite,
    PermissionStrings,
    Role,
    User,
} from '..';

/** @see https://discord.com/developers/docs/resources/guild#begin-guild-prune */
export interface BeginGuildPrune {
    /** Number of days to prune (1 or more), default: 7 */
    days?: number;
    /** Whether 'pruned' is returned, discouraged for large guilds, default: true */
    compute_prune_count?: boolean;
    /** Role(s) ro include, default: none */
    include_roles?: string[];
}

/** @see https://discord.com/developers/docs/resources/guild#create-guild */
export interface CreateGuild {
    /** Name of the guild (2-100 characters) */
    name: string;
    /** Base64 128x128 image for the guild icon */
    icon?: string;
    /** Verification level */
    verificationLevel?: DiscordVerificationLevels;
    /** Default message notification level */
    defaultMessageNotifications?: DefaultMessageNotificationLevels;
    /** Explicit content filter level */
    explicitContentFilter?: ExplicitContentFilterLevels;
    /** New guild roles (first role is the everyone role) */
    roles?: Role[];
    /** New guild's channels */
    channels?: Partial<Channel>[];
    /** Id for afk channel */
    afkChannelId?: string;
    /** Afk timeout in seconds */
    afkTimeout?: number;
    /** The id of the channel where guild notices such as welcome messages and boost events are posted */
    systemChannelId?: string;
    /** System channel flags */
    systemChannelFlags?: SystemChannelFlags;
}

/** @see https://discord.com/developers/docs/resources/guild#create-guild-ban */
export interface CreateGuildBan {
    /** Number of days to delete messages for (0-7) */
    deleteMessageDays?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
    /** Reason for the ban */
    reason?: string;
}

export interface FuwaCreateGuildChannel {
    /** Channel name (2-100 characters) */
    name: string;
    /** The type of channel */
    type?: ChannelTypes;
    /** Channel topic (0-1024 characters) */
    topic?: string;
    /** The bitrate (in bits) of the voice channel (voice only) */
    bitrate?: number;
    /** The user limit of the voice channel (voice only) */
    user_limit?: number;
    /** Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `manage_messages` or `manage_channel`, are unaffected */
    rate_limit_per_user?: number;
    /** Sorting position of the channel */
    position?: number;
    /** The channel's permission overwrites */
    permission_overwrites?: Overwrite[];
    /** Id of the parent category for a channel */
    parent_id?: bigint;
    /** Whether the channel is nsfw */
    nsfw?: boolean;
}

/** @see https://discord.com/developers/docs/resources/guild#create-guild-channel */
export interface CreateGuildChannel
    extends SnakeCasedPropertiesDeep<Omit<FuwaCreateGuildChannel, 'permissionOverwrites'>> {
    // deno-lint-ignore camelcase
    permission_overwrites: Overwrite[];
}

export interface FuwaCreateGuildRole {
    /** Name of the role, default: "new role" */
    name?: string;
    /** Bitwise value of the enabled/disabled permissions, default: everyone permissions in guild */
    permissions?: PermissionStrings[];
    /** RGB color value, default: 0 */
    color?: number;
    /** Whether the role should be displayed separately in the sidebar, default: false */
    hoist?: boolean;
    /** Whether the role should be mentionable, default: false */
    mentionable?: boolean;
}

/** @see https://discord.com/developers/docs/resources/guild#create-guild-role */
export interface CreateGuildRole extends Omit<FuwaCreateGuildRole, 'permissions'> {
    permissions?: string;
}

/** @see https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level */
export enum DefaultMessageNotificationLevels {
    /** Members will receive notifications for all messages by default */
    all_messages,
    /** Members will receive notifications only for messages that @mention them by default */
    only_mentions,
}

/** @see https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level */
export enum ExplicitContentFilterLevels {
    /** Media content will not be scanned */
    Disabled,
    /** Media content sent by members without roles will be scanned */
    MembersWithoutRoles,
    /** Media content sent by all members will be scanned */
    AllMembers,
}

/** @see https://discord.com/developers/docs/resources/guild#get-guild */
export interface GetGuildQuery {
    /** When true, will return approximate member and presence counts for the guild */
    with_counts?: boolean;
}

/** @see https://discord.com/developers/docs/resources/guild#get-guild-prune-count */
export interface GetGuildPruneCountQuery {
    /** Number of days to count prune for (1 or more), default: 7 */
    days?: number;
    /** Role(s) to include, default: none */
    include_roles: string | string[];
}

/** @see https://discord.com/developers/docs/resources/guild#get-guild-widget-image-query-string-params */
export interface GetGuildWidgetImageQuery {
    /** Style of the widget returned, default: shield */
    style?: GetGuildWidgetImageStyleOptions;
}

/** @see https://discord.com/developers/docs/resources/guild#get-guild-widget-image-widget-style-options */
export enum GetGuildWidgetImageStyleOptions {
    /** Shield style widget with Discord icon and guild members online count */
    Shield = 'shield',
    /** Large image with guild icon, name and online count. "POWERED BY DISCORD" as the footer of the widget */
    Banner1 = 'banner1',
    /** Smaller widget style with guild icon, name and online count. Split on the right with Discord logo */
    Banner2 = 'banner2',
    /** Large image with guild icon, name and online count. In the footer, Discord logo on the left and "Chat Now" on the right */
    Banner3 = 'banner3',
    /** Large Discord logo at the top of the widget. Guild icon, name and online count in the middle portion of the widget and a "JOIN MY SERVER" button at the bottom */
    Banner4 = 'banner4',
}

/** @see https://discord.com/developers/docs/topics/gateway#guild-ban-add */
export interface GuildBanAddRemove {
    /** id of the guild */
    guild_id: string;
    /** The banned user */
    user: User;
}

/** @see https://discord.com/developers/docs/topics/gateway#guild-ban-remove */
export interface GuildBanRemove {
    /** id of the guild */
    guild_id: string;
    /** The unbanned user */
    user: User;
}

// TODO: add resource link
export enum GuildNsfwLevel {
    Default,
    Explicit,
    Safe,
    AgeRestricted,
}

/** https://discord.com/developers/docs/resources/guild#guild-preview-object */
export interface GuildPreview {
    /** Guild id */
    id: string;
    /** Guild name (2-100 characters) */
    name: string;
    /** Icon hash */
    icon: string | null;
    /** Splash hash */
    splash: string | null;
    /** Discovery splash hash */
    discovery_splash: string | null;
    /** Custom guild emojis */
    emojis: Emoji[];
    /** Enabled guild features */
    features: GuildFeatures[];
    /** Approximate number of members in this guild */
    approximate_member_count: number;
    /** Approximate number of online members in this guild */
    approximate_presence_count: number;
    /** The description for the guild, if the guild is discoverable */
    description: string | null;
}

/** @see https://discord.com/developers/docs/topics/gateway#guild-role-create */
export interface GuildRoleCreate {
    /** id of the guild */
    guild_id: string;
    /** id of the role */
    roleId: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#guild-role-delete */
export interface GuildRoleDelete {
    /** id of the guild */
    guild_id: string;
    /** id of the role */
    roleId: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#guild-role-update */
export interface GuildRoleUpdate {
    /** The id of the guild */
    guild_id: string;
    /** The role updated */
    role: Role;
}

/** @see https://discord.com/developers/docs/resources/guild#guild-widget-object-guild-widget-structure */
export interface GuildWidget {
    /** Whether the widget is enabled */
    enabled: boolean;
    /** The widget channel id */
    channel_id: string | null;
}

export interface FuwaGuildWidgetDetails {
    id: string;
    name: string;
    instant_invite: string;
    channels: {
        id: string;
        name: string;
        position: number;
    }[];
    members: {
        id: string;
        username: string;
        discriminator: string;
        avatar?: string | null;
        status: string;
        avatar_url: string;
    }[];
    presenceCount: number;
}

/** @see https://discord.com/developers/docs/resources/guild#get-guild-widget-example-get-guild-widget */
export type GuildWidgetDetails = SnakeCasedPropertiesDeep<FuwaGuildWidgetDetails>;

/** @see https://discord.com/developers/docs/resources/guild#guild-object-mfa-level */
export enum MfaLevels {
    /** Guild has no MFA/2FA requirement for moderation actions */
    None,
    /** Guild has a 2FA requirement for moderation actions */
    Elevated,
}

/** @see https://discord.com/developers/docs/resources/guild#guild-object-verification-level */
export enum VerificationLevels {
    /** Unrestricted */
    None,
    /** Must have verified email on account */
    Low,
    /** Must be registered on Discord for longer than 5 minutes */
    Medium,
    /** Must be a member of the server for longer than 10 minutes */
    High,
    /** Must have a verified phone number */
    VeryHigh,
}

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
    afk_channel_id?: number | null;
    /** Afk timeout in seconds */
    afk_timeout?: number;
    /** Base64 1024x1024 png/jpeg/gif image for the guild icon (can be animated gif when the server has the `ANIMATED_ICON` feature) */
    icon?: string | null;
    /** User id to transfer guild ownership to (must be owner) */
    owner_id?: number;
    /** Base64 16:9 png/jpeg image for the guild splash (when the server has `INVITE_SPLASH` feature) */
    splash?: string | null;
    /** Base64 16:9 png/jpeg image for the guild discovery spash (when the server has the `DISCOVERABLE` feature) */
    discovery_splash?: string | null;
    /** Base64 16:9 png/jpeg image for the guild banner (when the server has BANNER feature) */
    banner?: string | null;
    /** The id of the channel where guild notices such as welcome messages and boost events are posted */
    system_channel_id?: number | null;
    /** System channel flags */
    system_channel_flags?: SystemChannelFlags;
    /** The id of the channel where Community guilds display rules and/or guidelines */
    rules_channel_id?: number | null;
    /** The id of the channel where admins and moderators of Community guilds receive notices from Discord */
    public_updates_channel_id?: number | null;
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
export enum PremiumTiers {
    /** Guild has not unlocked any Server Boost perks */
    None,
    /** Guild has unlocked Server Boost level 1 perks */
    Tier1,
    /** Guild has unlocked Server Boost level 2 perks */
    Tier2,
    /** Guild has unlocked Server Boost level 3 perks */
    Tier3,
}

/** @see https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags */
export enum SystemChannelFlags {
    /** Suppress member join notifications */
    SuppressJoinNotifications = 1 << 0,
    /** Suppress server boost notifications */
    SuppressPremiumSubscriptions = 1 << 1,
    /** Suppress server setup tips */
    SuppressGuildReminderNotifications = 1 << 2,
}

/** https://discord.com/developers/docs/resources/guild#unavailable-guild-object */
export type UnavailableGuild = Pick<Guild, 'id' | 'unavailable'>;

/** @see https://discord.com/developers/docs/resources/guild#update-user-voice-state */
export interface UpdateOthersVoiceState {
    /** The id of the channel the user is currently in */
    channel_id: string;
    /** Toggles the user's suppress state */
    suppress?: boolean;
}

/** @see https://discord.com/developers/docs/resources/guild#update-current-user-voice-state */
export interface UpdateSelfVoiceState {
    /** The id of the channel the user is currently in */
    channel_id: string;
    /** Toggles the user's suppress state */
    suppress?: boolean;
    /** Sets the user's request to speak */
    request_to_speak_timestamp?: string | null;
}

/** @see https://discord.com/developers/docs/resources/guild#guild-object-verification-level */
export enum DiscordVerificationLevels {
    /** Unrestricted */
    None,
    /** Must have verified email on account */
    Low,
    /** Must be registered on Discord for longer than 5 minutes */
    Medium,
    /** Must be a member of the server for longer than 10 minutes */
    High,
    /** Must have a verified phone number */
    VeryHigh,
}

/** @see https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-structure */
export interface WelcomeScreen {
    /** The server description shown in the welcome screen */
    description: string | null;
    /** The channels shown in the welcome screen, up to 5 */
    welcome_channels: WelcomeScreenChannel[];
}

/** @see https://discord.com/developers/docs/resources/guild#welcome-screen-object-welcome-screen-channel-structure */
export interface WelcomeScreenChannel {
    /** The channel's id */
    channel_id: number;
    /** The descriptino schown for the channel */
    description: string;
    /** The emoji id, if the emoji is custom */
    emoji_id: number | null;
    /** The emoji name if custom, the unicode character if standard, or `null` if no emoji is set */
    emoji_name: string | null;
}
