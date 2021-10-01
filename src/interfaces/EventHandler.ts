import type {
    ApplicationCommandCreateUpdateDelete,
    BigInteraction,
    Channel,
    Emoji,
    GatewayPayload,
    Guild,
    GuildMember,
    InviteCreate,
    InviteDelete,
    Member,
    Message,
    MessageReactionAdd,
    MessageReactionRemove,
    MessageReactionRemoveAll,
    PresenceUpdate,
    Role,
    StageInstance,
    ThreadMemberModified,
    ThreadMembersUpdateModified,
    User,
    VoiceServerUpdate,
    VoiceState,
} from '.';
import { IntegrationCreateUpdate, IntegrationDelete } from './integrations';
import { Collection } from '../util/Collection';
import { Thread } from '../util/transformers/channelToThread';

export type EventHandlersDefinitions = {
    /** Sent when a new Slash Command is created, relevant to the current user. */
    "new application command": [data: ApplicationCommandCreateUpdateDelete];
    /** Sent when a Slash Command relevant to the current user is updated. */
    "application command update": [data: ApplicationCommandCreateUpdateDelete];
    /** Sent when a Slash Command relevant to the current user is deleted. */
    "application command removed": [data: ApplicationCommandCreateUpdateDelete];
    /** Sent when properties about the user change. */
    "bot update": [user: User];
    /** Sent when a new guild channel is created, relevant to the current user. */
    "new channel": [channel: Channel];
    /** Sent when a channel is updated. This is not sent when the field `last_message_id` is altered. To keep track of the `last_message_id` changes, you must listen for `MESSAGE_CREATE` events. */
    "channel update": [channel: Channel, oldChannel: Channel];
    /** Sent when a channel relevant to the current user is deleted. */
    "channel removed": [channel: Channel];
    /** Sent when a message pin is updated */
    "channel pins update": [channel: Channel, guild?: Guild, lastPinTimestamp?: string | null];
    debug: [args: string | DebugArg, data?: string];
    /** Sent before every event.  awaits the execution of this event before main event gets sent. */
    'dispatch requirements': [data: GatewayPayload, shard_id: number];
    /** Sent when a user is banned from a guild. */
    'ban': [guild: Guild, user: User, member?: Member];
    /** Sent when a user is unbanned from a guild. */
    'ban remove': [guild: Guild, user: User, member?: Member];
    /**
     * This event can be sent in three different scenarios:
     * 1. When a user is initially connecting, to lazily load and backfill information for all unavailable guilds sent in the `READY` event. Guilds that are unavailable due to an outage will send a `GUILD_DELETE` event.
     * 2. When a Guild becomes available again to the client.
     * 3. When the current user joins a new Guild.
     *
     * This event does not get sent on startup
     */
    'new guild': [guild: Guild];
    /** This event does get sent on start when shards are loading the guilds */
    'guild loaded': [guild: Guild];
    /** When a guild goes available this event will be ran. */
    'guild online': [guild: Guild];
    /** When a guild goes unavailable this event will be ran. */
    'guild offline': [guild: Guild];
    /** Sent when a guilds integration gets updated */
    'guild integrations update': [guild: Guild];
    /** Sent when a guild is updated. */
    'guild update': [guild: Guild, changes: GuildUpdateChange[]];
    /** Sent when a guild becomes or was already unavailable due to an outage, or when the user leaves or is removed from a guild. If the `unavailable` field is not set, the user was removed from the guild. */
    'guild removed': [guild: Guild];
    /** Sent when a guild's emojis have been updated. */
    'emojis Update': [
        guild: Guild,
        emojis: Collection<number, Emoji>,
        oldEmojis: Collection<number, Emoji>
    ];
    /** Sent when a new user joins a guild. */
    'new member': [guild: Guild, member: Member];
    /** Sent when a user is removed from a guild (leave/kick/ban). */
    'member removed': [guild: Guild, user: User, member?: Member];
    /** Sent when a guild member is updated. This will also fire when the user object of a guild member changes. */
    'member update': [guild: Guild, member: Member, oldMember?: Member];
    /** Sent when a user uses a Slash Command (type 2) or clicks a button (type 3). */
    'new interaction': [data: BigInteraction, member?: Member];
    /** Sent when a user uses a Slash Command in a guild (type 2) or clicks a button (type 3). */
    'new guild interaction': [data: BigInteraction, member: Member];
    /** Sent when a user uses a Slash Command in a dm (type 2) or clicks a button (type 3). */
    'new DM interaction': [data: Omit<BigInteraction, 'member'>];
    /** Sent when a lurker joins/leaves/moves stage channels. */
    'lurker voice state update': [member: Member, voiceState: VoiceState];
    /** Sent when a message is created. */
    message: [message: Message];
    /** Sent when a message is deleted. */
    'message removed': [partial: { id: string; channel: Channel }, message?: Message];
    /** Sent when a message is updated. */
    'message update': [message: Message, oldMessage: Message];
    /** Sent when a user updates its nickname */
    'nickname update': [guild: Guild, member: Member, nickname: string, oldNickname?: string];
    /** A user's presence is their current state on a guild. This event is sent when a user's presence or info, such as name or avatar, is updated. */
    'presence update': [presence: PresenceUpdate, oldPresence?: PresenceUpdate];
    /** Sent before every event execution.  will not await its execution. */
    raw: [data: GatewayPayload];
    /** Sent when all shards went ready. */
    ready: [];
    /** Sent when a user adds a reaction to a message. */
    "add reaction": [data: MessageReactionAdd, message?: Message];
    /** Sent when a user removes a reaction from a message. */
    'remove reaction ': [data: MessageReactionRemove, message?: Message];
    /** Sent when a user explicitly removes all reactions from a message. */
    'all reactions removed': [payload: MessageReactionRemoveAll, message?: Message];
    /** Sent when a bot removes all instances of a given emoji from the reactions of a message. */
    'remove reaction emoji': [emoji: Partial<Emoji>, messageId: number, channel_id: number, guild_id?: number];
    /** Sent when a guild role is created. */
    'new role': [guild: Guild, role: Role];
    /** Sent when a guild role is deleted. */
    'role removed': [guild: Guild, role: Role];
    /** Sent when a guild role is updated. */
    'role update': [guild: Guild, role: Role, old: Role];
    'role added to member': [guild: Guild, member: Member, role_id: number];
    'role removed from member': [guild: Guild, member: Member, role_id: number];
    'shard ready': [shardId: number];
    /** Sent when a shard failed to load. */
    'shard could not load': [shard_id: number, unavailableGuild_ids: Set<number>];
    /** Sent when a Stage instance is created (i.e. the Stage is now "live"). */
    'new stage instance': [instance: StageInstance];
    /** Sent when a Stage instance has been deleted (i.e. the Stage has been closed). */
    'stage instance removed': [instance: StageInstance];
    /** Sent when a Stage instance has been updated. */
    'stage instance update': [instance: StageInstance];
    /** Sent when a thread is created */
    'new thread': [thread: Thread];
    /** Sent when a thread is updated */
    'thread update': [thread: Thread, oldThread: Thread];
    /** Sent when the bot gains access to threads */
    'thread list sync': [threads: Collection<number, Thread>, members: ThreadMemberModified[], guild_id: number];
    /** Sent when the current users thread member is updated */
    'thread member update': [threadMember: ThreadMemberModified, thread: Thread];
    /** Sent when anyone is added to or removed from a thread */
    'thread members update': [update: ThreadMembersUpdateModified];
    /** Sent when a thread is deleted */
    'thread removed ': [thread: Thread];
    /** Sent when a user starts typing in a channel. */
    'typing': [data: TypingStart];
    /** Sent when a user joins a voice channel */
    'voice channel join': [member: Member, channel_id: number];
    /** Sent when a user leaves a voice channel. Does not get sent when user switches the voice channel */
    'voice channel leave': [member: Member, channel_id: number];
    /** Sent when a user switches the voice channel */
    'voice channel switch': [member: Member, channel_id: number, oldChannel_id: number];
    /** Sent when a voice server is updated with information for making the bot connect to a voice channel. */
    'voice server update': [payload: VoiceServerUpdate, guild: Guild];
    /** Sent when someone joins/leaves/moves voice channels. */
    'voice state update': [member: Member, voiceState: VoiceState];
    /** Sent when a guild channel's webhook is created, updated, or deleted. */
    'webhooks update': [channelId: number, guild_id: number];
    /** Sent when a member has passed the guild's Membership Screening requirements */
    'membership screening passed': [guild: Guild, member: Member];
    /** Sent when an integration is created on a server such as twitch, youtube etc.. */
    'new integration': [data: IntegrationCreateUpdate];
    /** Sent when an integration is updated. */
    'integration update': [data: IntegrationCreateUpdate];
    /** Sent when an integration is deleted. */
    'integration removed': [data: IntegrationDelete];
    /** Sent when a new invite to a channel is created. */
    'new invite': [data: InviteCreate];
    /** Sent when an invite is deleted. */
    'invite removed': [data: InviteDelete];
};

export type EventHandlers = {
    [E in keyof EventHandlersDefinitions]?: (...args: EventHandlersDefinitions[E]) => unknown;
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

/** @see https://discord.com/developers/docs/topics/gateway#typing-start */
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
