import type { CommandOptionTypes } from './interactions';
import type { Member, User } from './member';
import type { ActivityType, Guild, UserStatus } from './guild';
import type { Emoji, Message, Reaction } from './message';
import type { Channel } from './channel';
import { GatewayCodes, Role, UnavailableGuild } from './index';
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

export const discordAPI = {
    gateway: 'wss://gateway.discord.gg/',
    api: 'https://discord.com/api/v9/',
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

/** @see https://discord.com/developers/docs/topics/gateway#update-status */
export interface Presence {
    /** Unix time (in milliseconds) of when the client went idle, or null if the client is not idle */
    since: number;
    /** The user's activities */
    activities: {
        name: string;
        type: ActivityType;
    }[];
    /** The user's new status */
    status: UserStatus;
    /** Whether or not the client is afk */
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

/** @see https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure */
export interface GatewayPayload {
    /** opcode for the payload */
    op: number;
    /** Event data */
    d: unknown | null;
    /** Sequence number, used for resuming sessions and heartbeats */
    s: number | null;
    /** The event name for this payload */
    t:
        | 'READY'
        | 'RESUMED'
        | 'CHANNEL_CREATE'
        | 'CHANNEL_DELETE'
        | 'CHANNEL_PINS_UPDATE'
        | 'CHANNEL_UPDATE'
        | 'APPLICATION_COMMAND_CREATE'
        | 'APPLICATION_COMMAND_DELETE'
        | 'APPLICATION_COMMAND_UPDATE'
        | 'GUILD_BAN_ADD'
        | 'GUILD_BAN_REMOVE'
        | 'GUILD_CREATE'
        | 'GUILD_DELETE'
        | 'GUILD_EMOJIS_UPDATE'
        | 'GUILD_INTEGRATIONS_UPDATE'
        | 'GUILD_MEMBER_ADD'
        | 'GUILD_MEMBER_REMOVE'
        | 'GUILD_MEMBER_UPDATE'
        | 'GUILD_MEMBERS_CHUNK'
        | 'GUILD_ROLE_CREATE'
        | 'GUILD_ROLE_DELETE'
        | 'GUILD_ROLE_UPDATE'
        | 'GUILD_UPDATE'
        | 'INTERACTION_CREATE'
        | 'INVITE_CREATE'
        | 'INVITE_DELETE'
        | 'MESSAGE_CREATE'
        | 'MESSAGE_DELETE_BULK'
        | 'MESSAGE_DELETE'
        | 'MESSAGE_REACTION_ADD'
        | 'MESSAGE_REACTION_REMOVE_ALL'
        | 'MESSAGE_REACTION_REMOVE_EMOJI'
        | 'MESSAGE_REACTION_REMOVE'
        | 'MESSAGE_UPDATE'
        | 'PRESENCE_UPDATE'
        | 'TYPING_START'
        | 'USER_UPDATE'
        | 'VOICE_SERVER_UPDATE'
        | 'VOICE_STATE_UPDATE'
        | 'WEBHOOKS_UPDATE'
        | 'INTEGRATION_CREATE'
        | 'INTEGRATION_UPDATE'
        | 'INTEGRATION_DELETE'
        | 'STAGE_INSTANCE_CREATE'
        | 'STAGE_INSTANCE_UPDATE'
        | 'STAGE_INSTANCE_DELETE'
        | null;
}

/** @see https://discord.com/developers/docs/topics/gateway#connecting-gateway-url-params */
export interface GatewayURLParams {
  /** Gateway version to use */
  v: string;
  /** The encoding of received gateway packets */
  encoding: string;
  /** The (optional) compression of gateway packets */
  compress?: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#get-gateway-bot */
export interface GetGatewayBot {
  /** The WSS URL that can be used for connecting to the gateway */
  url: string;
  /** The recommended number of shards to use when connecting */
  shards: number;
  /** Information on the current session start limit */
  session_start_limit: SessionStartLimit;
}

/** https://discord.com/developers/docs/topics/gateway#session-start-limit-object */
export interface SessionStartLimit {
  /** The total number of session starts the current user is allowed */
  total: number;
  /** The remaining number of session starts the current user is allowed */
  remaining: number;
  /** The number of milliseconds after which the limit resets */
  reset_after: number;
  /** The number of identify requests allowed per 5 seconds */
  max_concurrency: number;
}

/** @see https://discord.com/developers/docs/topics/gateway#identify */
export interface Identify {
  /** Authentication token */
  token: string;
  /** Connection properties */
  properties: IdentifyConnectionProperties;
  /** Whether this connection supports compression of packets */
  compress?: boolean;
  /** Value between 50 and 250, total number of members where the gateway will stop sending offline members in the guild member list */
  largeThreshold?: number;
  /** Used for Guild Sharding */
  shard?: [shard_id: number, numberOfShards: number];
  /** Presence structure for initial presence information */
  presence?: Presence;
  /** The Gateway Intents you wish to receive */
  intents: number;
}

/** @see https://discord.com/developers/docs/topics/gateway#identify-identify-connection-properties */
export interface IdentifyConnectionProperties {
    /** Operating system */
    $os: string;
    /** Library name */
    $browser: string;
    /** Library name */
    $device: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#ready */
export interface Ready {
    /** Gateway version */
    v: number;
    /** Information about the user including email */
    user: User;
    /** The guilds the user is in */
    guilds: UnavailableGuild[];
    /** Used for resuming connections */
    session_id: string;
    /** The shard information associated with this session, if sent when identifying */
    shard?: [number, number];
    /** Contains id and flags */
    application: Partial<Application> & Pick<Application, 'id' | 'flags'>;
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
export enum TeamMembershipStates {
  Invited = 1,
  Accepted,
}

/** @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags */
export enum BitwisePermissionFlags {
  /** Allows creation of instant invites */
  CREATE_INSTANT_INVITE = 0x00000001,
  /** Allows kicking members */
  KICK_MEMBERS = 0x00000002,
  /** Allows banning members */
  BAN_MEMBERS = 0x00000004,
  /** Allows all permissions and bypasses channel permission overwrites */
  ADMINISTRATOR = 0x00000008,
  /** Allows management and editing of channels */
  MANAGE_CHANNELS = 0x00000010,
  /** Allows management and editing of the guild */
  MANAGE_GUILD = 0x00000020,
  /** Allows for the addition of reactions to messages */
  ADD_REACTIONS = 0x00000040,
  /** Allows for viewing of audit logs */
  VIEW_AUDIT_LOG = 0x00000080,
  /** Allows for using priority speaker in a voice channel */
  PRIORITY_SPEAKER = 0x00000100,
  /** Allows the user to go live */
  STREAM = 0x00000200,
  /** Allows guild members to view a channel, which includes reading messages in text channels */
  VIEW_CHANNEL = 0x00000400,
  /** Allows for sending messages in a channel */
  SEND_MESSAGES = 0x00000800,
  /** Allows for sending of /tts messages */
  SEND_TTS_MESSAGES = 0x00001000,
  /** Allows for deletion of other users messages */
  MANAGE_MESSAGES = 0x00002000,
  /** Links sent by users with this permission will be auto-embedded */
  EMBED_LINKS = 0x00004000,
  /** Allows for uploading images and files */
  ATTACH_FILES = 0x00008000,
  /** Allows for reading of message history */
  READ_MESSAGE_HISTORY = 0x00010000,
  /** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel */
  MENTION_EVERYONE = 0x00020000,
  /** Allows the usage of custom emojis from other servers */
  USE_EXTERNAL_EMOJIS = 0x00040000,
  /** Allows for viewing guild insights */
  VIEW_GUILD_INSIGHTS = 0x00080000,
  /** Allows for joining of a voice channel */
  CONNECT = 0x00100000,
  /** Allows for speaking in a voice channel */
  SPEAK = 0x00200000,
  /** Allows for muting members in a voice channel */
  MUTE_MEMBERS = 0x00400000,
  /** Allows for deafening of members in a voice channel */
  DEAFEN_MEMBERS = 0x00800000,
  /** Allows for moving of members between voice channels */
  MOVE_MEMBERS = 0x01000000,
  /** Allows for using voice-activity-detection in a voice channel */
  USE_VAD = 0x02000000,
  /** Allows for modification of own nickname */
  CHANGE_NICKNAME = 0x04000000,
  /** Allows for modification of other users nicknames */
  MANAGE_NICKNAMES = 0x08000000,
  /** Allows management and editing of roles */
  MANAGE_ROLES = 0x10000000,
  /** Allows management and editing of webhooks */
  MANAGE_WEBHOOKS = 0x20000000,
  /** Allows management and editing of emojis */
  MANAGE_EMOJIS = 0x40000000,
  /** Allows members to use slash commands in text channels */
  USE_SLASH_COMMANDS = 0x80000000,
  /** Allows for requesting to speak in stage channels. */
  REQUEST_TO_SPEAK = 0x0100000000,
  /** Allows for deleting and archiving threads, and viewing all private threads */
  MANAGE_THREADS = 0x0400000000,
  /** Allows for creating and participating in threads */
  USE_PUBLIC_THREADS = 0x0800000000,
  /** Allows for creating and participating in private threads */
  USE_PRIVATE_THREADS = 0x1000000000,
  /** Allows the usage of custom stickers from other servers */
  USE_EXTERNAL_STICKERS = 0x2000000000,
}

