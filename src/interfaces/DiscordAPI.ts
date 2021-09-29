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
export enum GatewayIntents {
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
    Guilds = 1 << 0,
    /**
     * - GUILD_MEMBER_ADD
     * - GUILD_MEMBER_UPDATE
     * - GUILD_MEMBER_REMOVE
     */
    GuildMembers = 1 << 1,
    /**
     * - GUILD_BAN_ADD
     * - GUILD_BAN_REMOVE
     */
    GuildBans = 1 << 2,
    /**
     * - GUILD_EMOJIS_UPDATE
     */
    GuildEmojis = 1 << 3,
    /**
     * - GUILD_INTEGRATIONS_UPDATE
     * - INTEGRATION_CREATE
     * - INTEGRATION_UPDATE
     * - INTEGRATION_DELETE
     */
    GuildIntegrations = 1 << 4,
    /** Enables the following events:
     * - WEBHOOKS_UPDATE
     */
    GuildWebhooks = 1 << 5,
    /**
     * - INVITE_CREATE
     * - INVITE_DELETE
     */
    GuildInvites = 1 << 6,
    /**
     * - VOICE_STATE_UPDATE
     */
    GuildVoiceStates = 1 << 7,
    /**
     * - PRESENCE_UPDATE
     */
    GuildPresences = 1 << 8,
    /**
     * - MESSAGE_CREATE
     * - MESSAGE_UPDATE
     * - MESSAGE_DELETE
     */
    GuildMessages = 1 << 9,
    /**
     * - MESSAGE_REACTION_ADD
     * - MESSAGE_REACTION_REMOVE
     * - MESSAGE_REACTION_REMOVE_ALL
     * - MESSAGE_REACTION_REMOVE_EMOJI
     */
    GuildMessageReactions = 1 << 10,
    /**
     * - TYPING_START
     */
    GuildMessageTyping = 1 << 11,
    /**
     * - CHANNEL_CREATE
     * - MESSAGE_CREATE
     * - MESSAGE_UPDATE
     * - MESSAGE_DELETE
     * - CHANNEL_PINS_UPDATE
     */
    DirectMessages = 1 << 12,
    /**
     * - MESSAGE_REACTION_ADD
     * - MESSAGE_REACTION_REMOVE
     * - MESSAGE_REACTION_REMOVE_ALL
     * - MESSAGE_REACTION_REMOVE_EMOJI
     */
    DirectMessageReactions = 1 << 13,
    /**
     * - TYPING_START
     */
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
    api: 'https://discord.com/api/v8/',
    discord: 'https://discord.com',
};

export const discordCDN = 'https://cdn.discordapp.com';

/**
 * @see https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
 * TODO: Add more events
 */
export interface GatewayEvents {
    HELLO: {
        op: 0;
        t: null;
        d: { heartbeat_interval: number };
    };
    READY: {
        op: 0;
        t: 'READY';
        d: Ready;
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
            presence?: Presence; //! FIX THIS ASAP
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

/* eslint-disable */
export interface UserSettings {}

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
