import type { CommandOptionTypes } from './interactions';
import type { Member, User } from './member';
import type { ActivityType, Guild, UserStatus } from './guild';
import type { Message, Reaction } from './message';
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
/** @see https://discord.com/developers/docs/topics/gateway#payloads-gateway-payload-structure */
export interface GatewayPayload {
    /** opcode for the payload */
    op: number;
    /** Event data */
    d: unknown | null;
    /** Sequence number, used for resuming sessions and heartbeats */
    s: number | null;
    /** The event name for this payload */
    t: 'READY' | 'RESUMED' | 'CHANNEL_CREATE' | 'CHANNEL_DELETE' | 'CHANNEL_PINS_UPDATE' | 'CHANNEL_UPDATE' | 'APPLICATION_COMMAND_CREATE' | 'APPLICATION_COMMAND_DELETE' | 'APPLICATION_COMMAND_UPDATE' | 'GUILD_BAN_ADD' | 'GUILD_BAN_REMOVE' | 'GUILD_CREATE' | 'GUILD_DELETE' | 'GUILD_EMOJIS_UPDATE' | 'GUILD_INTEGRATIONS_UPDATE' | 'GUILD_MEMBER_ADD' | 'GUILD_MEMBER_REMOVE' | 'GUILD_MEMBER_UPDATE' | 'GUILD_MEMBERS_CHUNK' | 'GUILD_ROLE_CREATE' | 'GUILD_ROLE_DELETE' | 'GUILD_ROLE_UPDATE' | 'GUILD_UPDATE' | 'INTERACTION_CREATE' | 'INVITE_CREATE' | 'INVITE_DELETE' | 'MESSAGE_CREATE' | 'MESSAGE_DELETE_BULK' | 'MESSAGE_DELETE' | 'MESSAGE_REACTION_ADD' | 'MESSAGE_REACTION_REMOVE_ALL' | 'MESSAGE_REACTION_REMOVE_EMOJI' | 'MESSAGE_REACTION_REMOVE' | 'MESSAGE_UPDATE' | 'PRESENCE_UPDATE' | 'TYPING_START' | 'USER_UPDATE' | 'VOICE_SERVER_UPDATE' | 'VOICE_STATE_UPDATE' | 'WEBHOOKS_UPDATE' | 'INTEGRATION_CREATE' | 'INTEGRATION_UPDATE' | 'INTEGRATION_DELETE' | 'STAGE_INSTANCE_CREATE' | 'STAGE_INSTANCE_UPDATE' | 'STAGE_INSTANCE_DELETE' | null;
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
export interface UserSettings {
}
export interface Channels {
    omitted: boolean;
    hash: string;
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
/** @see https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags */
export declare enum BitwisePermissionFlags {
    /** Allows creation of instant invites */
    CREATE_INSTANT_INVITE = 1,
    /** Allows kicking members */
    KICK_MEMBERS = 2,
    /** Allows banning members */
    BAN_MEMBERS = 4,
    /** Allows all permissions and bypasses channel permission overwrites */
    ADMINISTRATOR = 8,
    /** Allows management and editing of channels */
    MANAGE_CHANNELS = 16,
    /** Allows management and editing of the guild */
    MANAGE_GUILD = 32,
    /** Allows for the addition of reactions to messages */
    ADD_REACTIONS = 64,
    /** Allows for viewing of audit logs */
    VIEW_AUDIT_LOG = 128,
    /** Allows for using priority speaker in a voice channel */
    PRIORITY_SPEAKER = 256,
    /** Allows the user to go live */
    STREAM = 512,
    /** Allows guild members to view a channel, which includes reading messages in text channels */
    VIEW_CHANNEL = 1024,
    /** Allows for sending messages in a channel */
    SEND_MESSAGES = 2048,
    /** Allows for sending of /tts messages */
    SEND_TTS_MESSAGES = 4096,
    /** Allows for deletion of other users messages */
    MANAGE_MESSAGES = 8192,
    /** Links sent by users with this permission will be auto-embedded */
    EMBED_LINKS = 16384,
    /** Allows for uploading images and files */
    ATTACH_FILES = 32768,
    /** Allows for reading of message history */
    READ_MESSAGE_HISTORY = 65536,
    /** Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users in a channel */
    MENTION_EVERYONE = 131072,
    /** Allows the usage of custom emojis from other servers */
    USE_EXTERNAL_EMOJIS = 262144,
    /** Allows for viewing guild insights */
    VIEW_GUILD_INSIGHTS = 524288,
    /** Allows for joining of a voice channel */
    CONNECT = 1048576,
    /** Allows for speaking in a voice channel */
    SPEAK = 2097152,
    /** Allows for muting members in a voice channel */
    MUTE_MEMBERS = 4194304,
    /** Allows for deafening of members in a voice channel */
    DEAFEN_MEMBERS = 8388608,
    /** Allows for moving of members between voice channels */
    MOVE_MEMBERS = 16777216,
    /** Allows for using voice-activity-detection in a voice channel */
    USE_VAD = 33554432,
    /** Allows for modification of own nickname */
    CHANGE_NICKNAME = 67108864,
    /** Allows for modification of other users nicknames */
    MANAGE_NICKNAMES = 134217728,
    /** Allows management and editing of roles */
    MANAGE_ROLES = 268435456,
    /** Allows management and editing of webhooks */
    MANAGE_WEBHOOKS = 536870912,
    /** Allows management and editing of emojis */
    MANAGE_EMOJIS = 1073741824,
    /** Allows members to use slash commands in text channels */
    USE_SLASH_COMMANDS = 2147483648,
    /** Allows for requesting to speak in stage channels. */
    REQUEST_TO_SPEAK = 4294967296,
    /** Allows for deleting and archiving threads, and viewing all private threads */
    MANAGE_THREADS = 17179869184,
    /** Allows for creating and participating in threads */
    USE_PUBLIC_THREADS = 34359738368,
    /** Allows for creating and participating in private threads */
    USE_PRIVATE_THREADS = 68719476736,
    /** Allows the usage of custom stickers from other servers */
    USE_EXTERNAL_STICKERS = 137438953472
}
export declare type PermissionStrings = keyof typeof BitwisePermissionFlags;
//# sourceMappingURL=DiscordAPI.d.ts.map