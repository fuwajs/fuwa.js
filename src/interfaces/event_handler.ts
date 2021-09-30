import type {ApplicationCommandCreateUpdateDelete, BigInteraction, Channel, Emoji, GatewayPayload, Guild, GuildMember, InviteCreate, InviteDelete, Member, Message, MessageReactionAdd, MessageReactionRemove, MessageReactionRemoveAll, PresenceUpdate, Role, StageInstance, ThreadMemberModified, ThreadMembersUpdateModified, User, VoiceServerUpdate, VoiceState } from "."
import  { IntegrationCreateUpdate, IntegrationDelete } from "./integrations";
import { Collection} from "../util/Collection"
import { Thread } from "../util/transformers/channel_to_thread";


export type EventHandlersDefinitions = {
    /** Sent when a new Slash Command is created, relevant to the current user. */
    applicationCommandCreate: [data: ApplicationCommandCreateUpdateDelete];
    /** Sent when a Slash Command relevant to the current user is updated. */
    applicationCommandUpdate: [data: ApplicationCommandCreateUpdateDelete];
    /** Sent when a Slash Command relevant to the current user is deleted. */
    applicationCommandDelete: [data: ApplicationCommandCreateUpdateDelete];
    /** Sent when properties about the user change. */
    botUpdate: [user: User];
    /** Sent when a new guild channel is created, relevant to the current user. */
    channelCreate: [channel: Channel];
    /** Sent when a channel is updated. This is not sent when the field `last_message_id` is altered. To keep track of the `last_message_id` changes, you must listen for `MESSAGE_CREATE` events. */
    channelUpdate: [channel: Channel, oldChannel: Channel];
    /** Sent when a channel relevant to the current user is deleted. */
    channelDelete: [channel: Channel];
    /** Sent when a message pin is updated */
    channelPinsUpdate: [
        channel: Channel,
        guild?: Guild,
        lastPinTimestamp?: string | null
    ];
    debug: [args: string | DebugArg, data?: string];
    /** Sent before every event.  awaits the execution of this event before main event gets sent. */
    dispatchRequirements: [data:GatewayPayload, shardId: number];
    /** Sent when a user is banned from a guild. */
    guildBanAdd: [guild: Guild, user: User, member?: Member];
    /** Sent when a user is unbanned from a guild. */
    guildBanRemove: [guild: Guild, user: User, member?: Member];
    /**
     * This event can be sent in three different scenarios:
     * 1. When a user is initially connecting, to lazily load and backfill information for all unavailable guilds sent in the `READY` event. Guilds that are unavailable due to an outage will send a `GUILD_DELETE` event.
     * 2. When a Guild becomes available again to the client.
     * 3. When the current user joins a new Guild.
     *
     * This event does not get sent on startup
     */
    guildCreate: [guild: Guild];
    /** This event does get sent on start when shards are loading the guilds */
    guildLoaded: [guild: Guild];
    /** When a guild goes available this event will be ran. */
    guildAvailable: [guild: Guild];
    /** When a guild goes unavailable this event will be ran. */
    guildUnavailable: [guild: Guild];
    /** Sent when a guilds integration gets updated */
    guildIntegrationsUpdate: [guild: Guild];
    /** Sent when a guild is updated. */
    guildUpdate: [guild: Guild, changes: GuildUpdateChange[]];
    /** Sent when a guild becomes or was already unavailable due to an outage, or when the user leaves or is removed from a guild. If the `unavailable` field is not set, the user was removed from the guild. */
    guildDelete: [guild: Guild];
    /** Sent when a guild's emojis have been updated. */
    guildEmojisUpdate: [
        guild: Guild,
        emojis: Collection<bigint, Emoji>,
        oldEmojis: Collection<bigint, Emoji>
    ];
    /** Sent when a new user joins a guild. */
    guildMemberAdd: [guild: Guild, member: Member];
    /** Sent when a user is removed from a guild (leave/kick/ban). */
    guildMemberRemove: [guild: Guild, user: User, member?: Member];
    /** Sent when a guild member is updated. This will also fire when the user object of a guild member changes. */
    guildMemberUpdate: [guild: Guild, member: Member, oldMember?: Member];
    /** Sent when a user uses a Slash Command (type 2) or clicks a button (type 3). */
    interactionCreate: [data: BigInteraction, member?: Member];
    /** Sent when a user uses a Slash Command in a guild (type 2) or clicks a button (type 3). */
    interactionGuildCreate: [data: BigInteraction, member: Member];
    /** Sent when a user uses a Slash Command in a dm (type 2) or clicks a button (type 3). */
    interactionDMCreate: [data: Omit<BigInteraction, 'member'>];
    /** Sent when a lurker joins/leaves/moves stage channels. */
    lurkerVoiceStateUpdate: [member: Member, voiceState: VoiceState];
    /** Sent when a message is created. */
    messageCreate: [message: Message];
    /** Sent when a message is deleted. */
    messageDelete: [partial: { id: string; channel: Channel }, message?: Message];
    /** Sent when a message is updated. */
    messageUpdate: [message: Message, oldMessage: Message];
    /** Sent when a user updates its nickname */
    nicknameUpdate: [
        guild: Guild,
        member: Member,
        nickname: string,
        oldNickname?: string
    ];
    /** A user's presence is their current state on a guild. This event is sent when a user's presence or info, such as name or avatar, is updated. */
    presenceUpdate: [presence: PresenceUpdate, oldPresence?: PresenceUpdate];
    /** Sent before every event execution.  will not await its execution. */
    raw: [data: GatewayPayload];
    /** Sent when all shards went ready. */
    ready: [];
    /** Sent when a user adds a reaction to a message. */
    reactionAdd: [data: MessageReactionAdd, message?: Message];
    /** Sent when a user removes a reaction from a message. */
    reactionRemove: [data: MessageReactionRemove, message?: Message];
    /** Sent when a user explicitly removes all reactions from a message. */
    reactionRemoveAll: [payload: MessageReactionRemoveAll, message?: Message];
    /** Sent when a bot removes all instances of a given emoji from the reactions of a message. */
    reactionRemoveEmoji: [emoji: Partial<Emoji>, messageId: bigint, channelId: bigint, guildId?: bigint];
    /** Sent when a guild role is created. */
    roleCreate: [guild: Guild, role: Role];
    /** Sent when a guild role is deleted. */
    roleDelete: [guild: Guild, role: Role];
    /** Sent when a guild role is updated. */
    roleUpdate: [guild: Guild, role: Role, old: Role];
    roleGained: [guild: Guild, member: Member, roleId: bigint];
    roleLost: [guild: Guild, member: Member, roleId: bigint];
    shardReady: [shardId: number];
    /** Sent when a shard failed to load. */
    shardFailedToLoad: [shardId: number, unavailableGuildIds: Set<bigint>];
    /** Sent when a Stage instance is created (i.e. the Stage is now "live"). */
    stageInstanceCreate: [instance: StageInstance];
    /** Sent when a Stage instance has been deleted (i.e. the Stage has been closed). */
    stageInstanceDelete: [instance: StageInstance];
    /** Sent when a Stage instance has been updated. */
    stageInstanceUpdate: [instance: StageInstance];
    /** Sent when a thread is created */
    threadCreate: [thread: Thread];
    /** Sent when a thread is updated */
    threadUpdate: [thread: Thread, oldThread: Thread];
    /** Sent when the bot gains access to threads */
    threadListSync: [
        threads: Collection<bigint, Thread>,
        members: ThreadMemberModified[],
        guildId: bigint
    ];
    /** Sent when the current users thread member is updated */
    threadMemberUpdate: [threadMember: ThreadMemberModified, thread: Thread];
    /** Sent when anyone is added to or removed from a thread */
    threadMembersUpdate: [update: ThreadMembersUpdateModified];
    /** Sent when a thread is deleted */
    threadDelete: [thread: Thread];
    /** Sent when a user starts typing in a channel. */
    typingStart: [data: TypingStart];
    /** Sent when a user joins a voice channel */
    voiceChannelJoin: [member: Member, channelId: bigint];
    /** Sent when a user leaves a voice channel. Does not get sent when user switches the voice channel */
    voiceChannelLeave: [member: Member, channelId: bigint];
    /** Sent when a user switches the voice channel */
    voiceChannelSwitch: [member: Member, channelId: bigint, oldChannelId: bigint];
    /** Sent when a voice server is updated with information for making the bot connect to a voice channel. */
    voiceServerUpdate: [payload: VoiceServerUpdate, guild: Guild];
    /** Sent when someone joins/leaves/moves voice channels. */
    voiceStateUpdate: [member: Member, voiceState: VoiceState];
    /** Sent when a guild channel's webhook is created, updated, or deleted. */
    webhooksUpdate: [channelId: bigint, guildId: bigint];
    /** Sent when a member has passed the guild's Membership Screening requirements */
    membershipScreeningPassed: [guild: Guild, member: Member];
    /** Sent when an integration is created on a server such as twitch, youtube etc.. */
    integrationCreate: [data: IntegrationCreateUpdate];
    /** Sent when an integration is updated. */
    integrationUpdate: [data: IntegrationCreateUpdate];
    /** Sent when an integration is deleted. */
    integrationDelete: [data: IntegrationDelete];
    /** Sent when a new invite to a channel is created. */
    inviteCreate: [data: InviteCreate];
    /** Sent when an invite is deleted. */
    inviteDelete: [data: InviteDelete];
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
  channelId: string;
  /** id of the guild */
  guildId?: string;
  /** id of the user */
  userId: string;
  /** Unix time (in seconds) of when the user started typing */
  timestamp: number;
  /** The member who started typing if this happened in a guild */
  member?: GuildMember;
}