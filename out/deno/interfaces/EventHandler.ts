/**
 * The eventHandler for fuwa.js
 * @module EventHandler
 */

import type {
    ApplicationCommandCreateUpdateDelete,
    Channel,
    Emoji,
    GatewayPayload,
    Guild,
    GuildMember,
    InviteCreate,
    InviteDelete,
    Message,
    MessageReactionAdd,
    MessageReactionRemove,
    MessageReactionRemoveAll,
    MessageUpdateDelete,
    PresenceUpdate,
    StageInstance,
    ThreadMemberModified,
    ThreadMembersUpdateModified,
    VoiceServerUpdate,
    VoiceState,
    GatewayEvents,
} from './index.ts';
import { IntegrationCreateUpdate, IntegrationDelete } from './integrations/index.ts';
import { Thread } from '../util/transformers/channelToThread.ts';
import {
    Context,
    Guild as GuildHandler,
    Message as MessageHandler,
    Role as RoleHandler,
    User as UserHandler,
    Member as MemberHandler,
} from '../index.ts';
import { UnavailableGuild } from './guild/extention.ts';

export type EventHandlersDefinitions = {
    /** Sent when a new Slash Command is created, relevant to the current user. */
    'new application command': (data: ApplicationCommandCreateUpdateDelete) => any;
    /** Sent when a Slash Command relevant to the current user is updated. */
    'application command update': (data: ApplicationCommandCreateUpdateDelete) => any;
    /** Sent when a Slash Command relevant to the current user is deleted. */
    'application command removed': (data: ApplicationCommandCreateUpdateDelete) => any;
    /** Sent when properties about the user change. */
    'user update': (user: UserHandler) => any;
    /** Sent when a new guild channel is created, relevant to the current user. */
    'new channel': (channel: Channel) => any;
    /** Sent when a channel is updated. This is not sent when the field `last_message_id` is altered. To keep track of the `last_message_id` changes, you must listen for `MESSAGE_CREATE` events. */
    'channel update': (channel: Channel, oldChannel: Channel) => any;
    /** Sent when a channel relevant to the current user is deleted. */
    'channel removed': (channel: Channel) => any;
    /** Sent when a message pin is updated */
    'channel pins update': (channel: Channel, guild?: GuildHandler, lastPinTimestamp?: string | null) => any;
    debug: (args: string | DebugArg, data?: string) => any;
    /** Sent before every event.  awaits the execution of this event before main event gets sent. */
    'dispatch requirements': (data: GatewayPayload, shard_id: number) => any;
    /** Sent when a user is banned from a guild. */
    ban: (data: { guildId; user: UserHandler }) => any;
    /** Sent when a user is unbanned from a guild. */
    'ban removed': (data: { guildId; user: UserHandler }) => any;
    /**
     * This event can be sent in three different scenarios:
     * 1. When a user is initially connecting, to lazily load and backfill information for all unavailable guilds sent in the `READY` event. Guilds that are unavailable due to an outage will send a `GUILD_DELETE` event.
     * 2. When a Guild becomes available again to the client.
     * 3. When the current user joins a new Guild.
     *
     * This event does not get sent on startup
     */
    'new guild': (guild: GuildHandler) => any;
    /** This event does get sent on start when shards are loading the guilds */
    'guild loaded': (guild: GuildHandler) => any;
    /** When a guild goes available this event will be ran. */
    /** Sent when a guilds integration gets updated */
    'guild integrations update': (guild: Guild) => any;
    /** Sent when a guild is updated. */
    'guild update': (guild: GuildHandler) => any;
    /** Sent when a guild becomes or was already unavailable due to an outage, or when the user leaves or is removed from a guild. If the `unavailable` field is not set, the user was removed from the guild. */
    'guild removed': (guild: UnavailableGuild) => any;
    /** Sent when a guild's emojis have been updated. */
    'emojis update': (data: { guildId; emojis: Emoji[] }) => any;
    /** Sent when a new user joins a guild. */
    'new member': (guild: GuildHandler, member: MemberHandler) => any;
    /** Sent when a user is removed from a guild (leave/kick/ban). */
    'member removed': (guild: GuildHandler, user: UserHandler, member?: MemberHandler) => any;
    /** Sent when a guild member is updated. This will also fire when the user object of a guild member changes. */
    'member update': (data: { guildId: string; member: MemberHandler }) => any;
    /** Sent when a user uses a Slash Command (type 2) or clicks a button (type 3). */
    'new interaction': (data: Context) => any;
    /** Sent when a user uses a Slash Command in a guild (type 2) or clicks a button (type 3). */
    'new guild interaction': (data: Context) => any;
    /** Sent when a user uses a Slash Command in a dm (type 2) or clicks a button (type 3). */
    'new dm interaction': (data: Context) => any;
    /** Sent when a lurker joins/leaves/moves stage channels. */
    'lurker voice state update': (member: MemberHandler, voiceState: VoiceState) => any;
    /**
     * @deprecated Please use 'new message'
     *
     * Sent when a message is created.
     * */
    message: (message: MessageHandler) => any;
    /** Sent when a message is created. */
    'new message': (message: MessageHandler) => any;
    /** Sent when a message is deleted. */
    'message removed': (data: MessageUpdateDelete) => any;
    /** Sent when a message is updated. */
    'message update': (data: MessageUpdateDelete) => any;
    /** Sent when a user updates its nickname */
    'nickname update': (
        guild: GuildHandler,
        member: MemberHandler,
        nickname: string,
        oldNickname?: string
    ) => any;
    /** A user's presence is their current state on a guild. This event is sent when a user's presence or info, such as name or avatar, is updated. */
    'presence update': (presence: PresenceUpdate, oldPresence?: PresenceUpdate) => any;
    /** Sent before every event execution.  will not await its execution. */
    raw: (data: GatewayPayload) => any;
    /** Sent when all shards went ready. */
    ready: (shard?: number) => any;
    /** Sent when a user adds a reaction to a message. */
    'new message reaction': (data: MessageReactionAdd, message?: Message) => any;
    /** Sent when a user removes a reaction from a message. */
    'message reaction removed': (data: MessageReactionRemove, message?: Message) => any;
    /** Sent when a user explicitly removes all reactions from a message. */
    'all message reaction removed': (payload: MessageReactionRemoveAll, message?: Message) => any;
    /** Sent when a bot removes all instances of a given emoji from the reactions of a message. */
    'message reaction removed emoji': (
        emoji: Partial<Emoji>,
        messageId: number,
        channel_id: number,
        guild_id?: number
    ) => any;
    /** Sent when a guild role is created. */
    'new role': (data: { guildId: string; role: RoleHandler }) => any;
    /** Sent when a guild role is deleted. */
    'role removed': (data: { guildId: string; roleId: string }) => any;
    /** Sent when a guild role is updated. */
    'role update': (data: { guildId: string; role: RoleHandler }) => any;
    'shard ready': (shardId: number) => any;
    /** Sent when a shard failed to load. */
    // 'shard could not load': (shard_id: number, unavailableGuild_ids: Set<number>) => any;
    /** Sent when a Stage instance is created (i.e. the Stage is now "live"). */
    'new stage instance': (instance: StageInstance) => any;
    /** Sent when a Stage instance has been deleted (i.e. the Stage has been closed). */
    'stage instance removed': (instance: StageInstance) => any;
    /** Sent when a Stage instance has been updated. */
    'stage instance update': (instance: StageInstance) => any;
    /** Sent when a thread is created */
    'new thread': (thread: Thread) => any;
    /** Sent when a thread is updated */
    'thread update': (thread: Thread, oldThread: Thread) => any;
    /** Sent when the bot gains access to threads */
    'thread list sync': (
        // threads: Collection<number, Thread>,
        members: ThreadMemberModified[],
        guild_id: number
    ) => any;
    /** Sent when the current users thread member is updated */
    'thread member update': (threadMember: ThreadMemberModified, thread: Thread) => any;
    /** Sent when anyone is added to or removed from a thread */
    'thread members update': (update: ThreadMembersUpdateModified) => any;
    /** Sent when a thread is deleted */
    'thread removed': (thread: Thread) => any;
    /** Sent when a user starts typing in a channel. */
    typing: (data: TypingStart) => any;
    /** Sent when a user joins a voice channel */
    'voice channel join': (member: MemberHandler, channel_id: number) => any;
    /** Sent when a user leaves a voice channel. Does not get sent when user switches the voice channel */
    'voice channel leave': (member: MemberHandler, channel_id: number) => any;
    /** Sent when a user switches the voice channel */
    'voice channel switch': (member: MemberHandler, channel_id: number, oldChannel_id: number) => any;
    /** Sent when a voice server is updated with information for making the bot connect to a voice channel. */
    'voice server update': (payload: VoiceServerUpdate, guild: GuildHandler) => any;
    /** Sent when someone joins/leaves/moves voice channels. */
    'voice state update': (member: MemberHandler, voiceState: VoiceState) => any;
    /** Sent when a guild channel's webhook is created, updated, or deleted. */
    'webhooks update': (channelId: number, guild_id: number) => any;
    /** Sent when a member has passed the guild's Membership Screening requirements */
    'membership screening passed': (guild: GuildHandler, member: MemberHandler) => any;
    /** Sent when an integration is created on a server such as twitch, youtube etc.. */
    'new integration': (data: IntegrationCreateUpdate) => any;
    /** Sent when an integration is updated. */
    'integration update': (data: IntegrationCreateUpdate) => any;
    /** Sent when an integration is deleted. */
    'integration removed': (data: IntegrationDelete) => any;
    /** Sent when a new invite to a channel is created. */
    'new invite': (data: InviteCreate) => any;
    /** Sent when an invite is deleted. */
    'invite removed': (data: InviteDelete) => any;

    /** Sent when fuwa emits and error */
    error: (err: { name: string; description: string }) => any;
};

export type EventHandlers = {
    [E in keyof EventHandlersDefinitions]?: EventHandlersDefinitions[E];
};

export type EventHandlerConverter = {
    [E in keyof GatewayEvents]?: keyof EventHandlers;
};

export const GatewayEventsConverter: EventHandlerConverter = {
    USER_UPDATE: 'user update',
    GUILD_ROLE_DELETE: 'role removed',
    GUILD_ROLE_UPDATE: 'role update',
    GUILD_ROLE_CREATE: 'new role',
    READY: 'ready',
    TYPING_START: 'typing',
    INVITE_DELETE: 'invite removed',
    INVITE_CREATE: 'new invite',
    GUILD_MEMBER_ADD: 'new member',
    GUILD_MEMBER_UPDATE: 'member update',
    GUILD_MEMBER_REMOVE: 'member removed',
    GUILD_UPDATE: 'guild update',
    GUILD_BAN_ADD: 'ban',
    GUILD_BAN_REMOVE: 'ban removed',
    GUILD_CREATE: 'guild loaded',
    GUILD_DELETE: 'guild removed',
    GUILD_INTEGRATIONS_UPDATE: 'guild integrations update',
    INTEGRATION_CREATE: 'new integration',
    INTEGRATION_DELETE: 'integration removed',
    INTEGRATION_UPDATE: 'integration update',
    GUILD_EMOJIS_UPDATE: 'emojis update',
    MESSAGE_CREATE: 'new message',
    INTERACTION_CREATE: 'new interaction',
    MESSAGE_DELETE: 'message removed',
    MESSAGE_UPDATE: 'message update',
    STAGE_INSTANCE_CREATE: 'new stage instance',
    STAGE_INSTANCE_DELETE: 'stage instance removed',
    STAGE_INSTANCE_UPDATE: 'stage instance update',
    PRESENCE_UPDATE: 'presence update',
    MESSAGE_REACTION_ADD: 'new message reaction',
    MESSAGE_REACTION_REMOVE_ALL: 'all message reaction removed',
    MESSAGE_REACTION_REMOVE: 'message reaction removed',
    MESSAGE_REACTION_REMOVE_EMOJI: 'message reaction removed emoji',
    THREAD_CREATE: 'new thread',
    THREAD_DELETE: 'thread removed',
    THREAD_LIST_SYNC: 'thread list sync',
    THREAD_MEMBERS_UPDATE: 'thread members update',
    THREAD_MEMBER_UPDATE: 'thread member update',
    THREAD_UPDATE: 'thread update',
    VOICE_SERVER_UPDATE: 'voice server update',
    VOICE_STATE_UPDATE: 'voice state update',
    WEBHOOKS_UPDATE: 'webhooks update',
    CHANNEL_CREATE: 'new channel',
    CHANNEL_DELETE: 'channel removed',
    CHANNEL_UPDATE: 'channel update',
    CHANNEL_PINS_UPDATE: 'channel pins update',
};

export type GatewayEventsArgsType = {
    [Name in keyof EventHandlers]?: (data: any) => Parameters<EventHandlers[Name]>;
};

export const GatewayEventArgConverter: GatewayEventsArgsType = {
    'guild loaded': data => [new GuildHandler(data)],
    'guild update': data => [new GuildHandler(data)],
    'emojis update': ({ guild_id: guildId, emojis }) => [{ guildId, emojis }],
    'new guild': data => [new GuildHandler(data)],
    ban: ({ guild_id: guildId, user }) => [{ guildId, user: new UserHandler(user) }],
    'ban removed': ({ guild_id: guildId, user }) => [{ guildId, user: new UserHandler(user) }],
    ready: () => [],
    'new interaction': data => [new Context(data)],
    'new guild interaction': data => [new Context(data)],
    'new dm interaction': data => [new Context(data)],
    'new message': data => [new MessageHandler(data)],
    'new role': ({ guild_id: guildId, role }) => [{ guildId, role: new RoleHandler(role, guildId) }],
    'role update': ({ guild_id: guildId, role }) => [{ guildId, role: new RoleHandler(role, guildId) }],
    'role removed': ({ guild_id: guildId, role_id: roleId }) => [{ guildId, roleId }],
    'member update': ({ guild_id: guildId, ...data }) => [{ guildId, member: new MemberHandler(data) }],
};

export interface DebugArg {
    /** Red is for errors or urgent issues. Yellow is for warnings/alerts. Green is for actions being taken. Blue is for  */
    type?:
        | 'gatewayIdentify'
        | 'error'
        | 'globallyRateLimited'
        | 'requestCreate'
        | 'requestSuccess'
        | 'requestFetch'
        | 'requestFetched'
        | 'requestMembersProcessing'
        | 'gatewayHeartbeat'
        | 'gatewayHeartbeatStopped'
        | 'shardCreate'
        | 'gatewayInvalidSession'
        | 'gatewayReconnect'
        | 'gatewayResume'
        | 'gatewayResumed'
        | 'wsClose'
        | 'wsError'
        | 'wsReconnect'
        | 'missingShard'
        | 'loop';
    data: unknown;
}
export interface GuildUpdateChange {
    key: keyof Guild;
    old_value?: unknown;
    value?: unknown;
}

/** @link https://discord.com/developers/docs/topics/gateway#typing-start */
export interface TypingStart {
    /** id of the channel */
    channel_id: string;
    /** id of the guild */
    guild_id?: string;
    /** id of the user */
    user_id: string;
    /** Unix time (in seconds) of when the user started typing */
    timestamp: number;
    /** The member who started typing if this happened in a guild */
    member?: GuildMember;
}
