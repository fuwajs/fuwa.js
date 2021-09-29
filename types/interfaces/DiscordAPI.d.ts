import type { CommandOptionTypes } from './interactions';
import type { Member, User } from './member';
import type { ActivityType, Guild, UserStatus } from './guild';
import type { Emoji, Message, Reaction } from './message';
import type { Channel } from './channel';
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
export declare enum GatewayIntents {
    /**
     * - GUILD_CREATE
     * - GUILD_DELETE
     * - GUILD_ROLE_CREATE
     * - GUILD_ROLE_UPDATE
     * - GUILD_ROLE_DELETE
     * - CHANNEL_CREATE
     * - CHANNEL_UPDATE
     * - CHANNEL_DELETE
     * - CHANNEL_PINS_UPDATE
     * - THREAD_CREATE
     * - THREAD_UPDATE
     * - THREAD_DELETE
     * - THREAD_LIST_SYNC
     * - THREAD_MEMBER_UPDATE
     * - THREAD_MEMBERS_UPDATE
     * - STAGE_INSTANCE_CREATE
     * - STAGE_INSTANCE_UPDATE
     * - STAGE_INSTANCE_DELETE
     */
    Guilds = 1,
    /**
     * - GUILD_MEMBER_ADD
     * - GUILD_MEMBER_UPDATE
     * - GUILD_MEMBER_REMOVE
     */
    GuildMembers = 2,
    /**
     * - GUILD_BAN_ADD
     * - GUILD_BAN_REMOVE
     */
    GuildBans = 4,
    /**
     * - GUILD_EMOJIS_UPDATE
     */
    GuildEmojis = 8,
    /**
     * - GUILD_INTEGRATIONS_UPDATE
     * - INTEGRATION_CREATE
     * - INTEGRATION_UPDATE
     * - INTEGRATION_DELETE
     */
    GuildIntegrations = 16,
    /** Enables the following events:
     * - WEBHOOKS_UPDATE
     */
    GuildWebhooks = 32,
    /**
     * - INVITE_CREATE
     * - INVITE_DELETE
     */
    GuildInvites = 64,
    /**
     * - VOICE_STATE_UPDATE
     */
    GuildVoiceStates = 128,
    /**
     * - PRESENCE_UPDATE
     */
    GuildPresences = 256,
    /**
     * - MESSAGE_CREATE
     * - MESSAGE_UPDATE
     * - MESSAGE_DELETE
     */
    GuildMessages = 512,
    /**
     * - MESSAGE_REACTION_ADD
     * - MESSAGE_REACTION_REMOVE
     * - MESSAGE_REACTION_REMOVE_ALL
     * - MESSAGE_REACTION_REMOVE_EMOJI
     */
    GuildMessageReactions = 1024,
    /**
     * - TYPING_START
     */
    GuildMessageTyping = 2048,
    /**
     * - CHANNEL_CREATE
     * - MESSAGE_CREATE
     * - MESSAGE_UPDATE
     * - MESSAGE_DELETE
     * - CHANNEL_PINS_UPDATE
     */
    DirectMessages = 4096,
    /**
     * - MESSAGE_REACTION_ADD
     * - MESSAGE_REACTION_REMOVE
     * - MESSAGE_REACTION_REMOVE_ALL
     * - MESSAGE_REACTION_REMOVE_EMOJI
     */
    DirectMessageReactions = 8192,
    /**
     * - TYPING_START
     */
    DirectMessageTyping = 16384
}
/**
 * @link https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes
 */
export declare enum GatewayCodes {
    Dispatch = 0,
    Heartbeat = 1,
    Identify = 2,
    StatusUpdate = 3,
    VoiceStateUpdate = 4,
    VoiceGuildPing = 5,
    Resume = 6,
    Reconnect = 7,
    RequestGuildMembers = 8,
    InvalidSession = 9,
    Hello = 10,
    HeartbeatAck = 11
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
    HELLO: {
        op: 0;
        t: null;
        d: {
            heartbeat_interval: number;
        };
    };
    READY: {
        op: 0;
        t: 'READY';
        d: Ready;
    };
    RESUMED: {
        op: 0;
        t: 'RESUMED';
        d: any;
    };
    INVALID_SESSION: {
        op: 9;
        d: false;
    };
    GUILD_CREATE: {
        op: 0;
        t: 'GUILD_CREATE';
        d: Guild;
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
export interface Presence {
    since: number;
    activities: {
        name: string;
        type: ActivityType;
    }[];
    status: UserStatus;
    afk?: boolean;
}
export interface DiscordAPIOP {
    [GatewayCodes.Heartbeat]: {
        op?: GatewayCodes.Heartbeat;
        t?: null;
        d: number | null;
        s: number;
    };
    [GatewayCodes.Identify]: {
        op?: GatewayCodes.Identify;
        t?: null;
        d: {
            token: string;
            intents: number;
            properties: {
                $os: string;
                $browser: string;
                $device: string;
            };
            shard?: [number, number];
            presence?: Presence;
        };
        s: number;
    };
    [GatewayCodes.StatusUpdate]: {
        op?: GatewayCodes.StatusUpdate;
        t?: null;
        d: Presence;
    };
    [GatewayCodes.VoiceStateUpdate]: {
        op?: GatewayCodes.VoiceStateUpdate;
        t?: null;
        d: {
            guild_id: string;
            channel_id: string;
            self_mute: boolean;
            self_deaf: boolean;
        };
    };
    [GatewayCodes.Resume]: {
        op?: GatewayCodes.Resume;
        t?: null;
        d: {
            token: string;
            session_id: string;
            seq: 1337;
        };
    };
    [GatewayCodes.RequestGuildMembers]: {
        op?: GatewayCodes.RequestGuildMembers;
        t?: null;
        d: {
            guild_id: number;
            query: string;
            limit: number;
        };
    };
    [GatewayCodes.InvalidSession]: {
        op?: GatewayCodes.InvalidSession;
        t?: null;
        d: false;
    };
    [GatewayCodes.Hello]: {
        op?: GatewayCodes.Hello;
        t?: null;
        d: {
            heartbeat_interval: number;
        };
    };
}
export interface Ready {
    v: number;
    user_settings: UserSettings;
    user: User;
    session_id: string;
    relationships: any[];
    private_channels: any[];
    presences: any[];
    shard?: [number, number];
    guilds: Guild[];
    guild_join_requests: any[];
    geo_ordered_rtc_regions: string[];
    application: Application;
}
export interface ResolvedData {
    users?: Map<string, User>;
    members?: Map<string, Member>;
    roles?: Map<string, Role>;
    channels?: Map<string, Channel>;
    messages?: Map<string, Message>;
}
export interface CommandOptions {
    name: string;
    type: CommandOptionTypes;
    value?: CommandOptionTypes;
}
export interface SelectOption {
    label: string;
    value: string;
    description?: string;
    emoji?: Emoji;
    default?: boolean;
}
export interface Application {
    id: string;
    flags: number;
}
export interface UserSettings {
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
export declare type RoleProps = {
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
export interface Ban {
    reason?: string;
    user: User;
}
/** @see https://discord.com/developers/docs/topics/teams#data-models-team-object */
export interface Team {
    /** A hash of the image of the team's icon */
    icon: string | null;
    /** The unique id of the team */
    id: string;
    /** The members of the team */
    members: TeamMember[];
    /** The name of the team */
    name: string;
    /** The user id of the current team owner */
    owner_user_id: string;
}
/** @see https://discord.com/developers/docs/topics/teams#data-models-team-members-object */
export interface TeamMember {
    /** The user's membership state on the team */
    member_ship_state: TeamMembershipStates;
    /** Will always be `["*"]` */
    permissions: ["*"];
    /** The id of the parent team of which they are a member */
    team_id: string;
    /** The avatar, discriminator, id, and username of the user */
    user: Partial<User> & Pick<User, "avatar" | "discriminator" | "id" | "username">;
}
/** @see https://discord.com/developers/docs/topics/teams#data-models-membership-state-enum */
export declare enum TeamMembershipStates {
    Invited = 1,
    Accepted = 2
}
//# sourceMappingURL=DiscordAPI.d.ts.map