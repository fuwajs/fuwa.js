import { SnakeCasedPropertiesDeep } from '../../util/index.ts';
import type {
    AllowedMentions,
    Application,
    Attachment,
    AuditLogEvents,
    Channel,
    Embed,
    FileContent,
    Guild,
    GuildMember,
    Member,
    Overwrite,
    Role,
    User,
} from '../index.ts';
import { Integration } from '../integrations/index.ts';
import { MessageComponents } from '../message/componentTypes.ts';

/** https://discord.com/developers/docs/resources/invite#invite-object */
export interface Invite {
    /** The invite code (unique Id) */
    code: string;
    /** The guild this invite is for */
    guild?: Partial<Guild>;
    /** The channel this invite is for */
    channel: Partial<Channel>;
    /** The user who created the invite */
    inviter?: User;
    /** The type of target for this voice channel invite */
    target_type?: InviteTargetTypes;
    /** The target user for this invite */
    target_user?: User;
    /** The embedded application to open for this voice channel embedded application invite */
    target_application?: Partial<Application>;
    /** Approximate count of online members (only present when target_user is set) */
    approximate_presence_count?: number;
    /** Approximate count of total members */
    approximate_member_count?: number;
    /** The expiration date of this invite, returned from the `GET /invites/<code>` endpoint when `with_expiration` is `true` */
    expires_at?: string | null;
    /** Stage instance data if there is a public Stage instance in the Stage channel this invite is for */
    state_instance?: InviteStageInstance;
}

export interface CreateChannelInvite {
    /** Duration of invite in seconds before expiry, or 0 for never. Between 0 and 604800 (7 days). Default: 86400 (24 hours) */
    max_age?: number;
    /** Max number of users or 0 for unlimited. Between 0 and 100. Default: 0 */
    max_uses?: number;
    /** Whether this invite only grants temporary membership. Default: false */
    temporary?: boolean;
    /** If true, don't try to reuse similar invite (useful for creating many unique one time use invites). Default: false */
    unique?: boolean;
    /** The type of target for this voice channel invite */
    target_type?: InviteTargetTypes;
    /** The id of the user whose stream to display for this invite, required if `target_type` is 1, the user must be streaming in the channel */
    target_user_id?: string;
    /** The id of the embedded application to open for this invite, required if `target_type` is 2, the application must have the `EMBEDDED` flag */
    target_application_id?: string;
}

/** @see https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types */
export enum InviteTargetTypes {
    Stream = 1,
    EmbeddedApplication,
}

/** @see https://discord.com/developers/docs/resources/invite#get-invite */
export interface GetInvite {
    /** Whether the invite should contain approximate member counts */
    with_counts?: boolean;
    /** Whether the invite should contain the expiration date */
    wit_expiration?: boolean;
}

/** @see https://discord.com/developers/docs/resources/stage-instance#auto-closing-stage-instance-structure */
export interface StageInstance {
    /** The id of this Stage instance */
    id: string;
    /** The guild id of the associated Stage channel */
    guild_id: string;
    /** The id of the associated Stage channel */
    channel_id: string;
    /** The topic of the Stage instance (1-120 characters) */
    topic: string;
    /** The privacy level of the Stage instance */
    privacy_level: number;
    /** Whether or not Stage discovery is disabled */
    discoverable_disabled: boolean;
}

export enum VideoQualityModes {
    /** Discord chooses the quality for optimal performance */
    Auto = 1,
    /** 720p */
    Full,
}

export interface InviteStageInstance {
    /** The members speaking in the Stage */
    members: Partial<GuildMember>[];
    /** The number of users in the Stage */
    participant_count: number;
    /** The number of users speaking in the Stage */
    speaker_count: number;
    /** The topic of the Stage instance (1-120 characters) */
    topic: string;
}

/** @see https://discord.com/developers/docs/resources/invite#invite-metadata-object */
export interface InviteMetadata extends Invite {
    /** Number of times this invite has been used */
    uses: number;
    /** Max number of times this invite can be used */
    max_uses: number;
    /** Duration (in seconds) after which the invite expires */
    max_age: number;
    /** Whether this invite only grants temporary membership */
    temporary: boolean;
    /** When this invite was created */
    created_at: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#invite-delete */
export interface InviteDelete {
    /** The channel of the invite */
    channel_id: string;
    /** The guild of the invite */
    guild_id?: string;
    /** The unique invite code */
    code: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#invite-create */
export interface InviteCreate {
    /** The channel the invite is for */
    channel_id: string;
    /** The unique invite code */
    code: string;
    /** The time at which the invite was created */
    created_at: string;
    /** The guild of the invite */
    guild_id?: string;
    /** The user that created the invite */
    inviter?: User;
    /** How long the invite is valid for (in seconds) */
    max_age: number;
    /** The maximum number of times the invite can be used */
    max_uses: number;
    /** The type of target for this voice channel invite */
    target_type: InviteTargetTypes;
    /** The target user for this invite */
    target_user?: Partial<User>;
    /** The embedded application to open for this voice channel embedded application invite */
    target_application?: Partial<Application>;
    /** Whether or not the invite is temporary (invited users will be kicked on disconnect unless they're assigned a role) */
    temporary: boolean;
    /** How many times the invite has been used (always will be 0) */
    uses: number;
}

export enum InviteTargets {
    Stream = 1,
    EmbeddedApplication,
}

export interface InviteStage {
    members: Member[];
    participant_count: number;
    speaker_count: number;
    topic: string;
}

/** @see https://discord.com/developers/docs/resources/audit-log#audit-log-object */
export interface AuditLog {
    /** List of webhooks found in the audit log */
    webhooks: Webhook[];
    /** List of users found in the audit log */
    users: User[];
    /** List of audit log entries */
    auditLog_entries: AuditLogEntry[];
    /** List of partial integration objects */
    integrations: Partial<Integration>[];
}

/** @see https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure */
export type AuditLogChange =
    | {
          newValue: string;
          oldValue: string;
          key:
              | 'name'
              | 'description'
              | 'discovery_splash_hash'
              | 'banner_hash'
              | 'preferred_locale'
              | 'rules_channel_id'
              | 'public_updates_channel_id'
              | 'icon_hash'
              | 'splash_hash'
              | 'owner_id'
              | 'region'
              | 'afk_channel_id'
              | 'vanity_url_code'
              | 'widget_channel_id'
              | 'system_channel_id'
              | 'topic'
              | 'application_id'
              | 'permissions'
              | 'allow'
              | 'deny'
              | 'code'
              | 'channel_id'
              | 'inviter_id'
              | 'nick'
              | 'avatar_hash'
              | 'id';
      }
    | {
          newValue: number;
          oldValue: number;
          key:
              | 'afk_timeout'
              | 'mfa_level'
              | 'verification_level'
              | 'explicit_content_filter'
              | 'default_message_notifications'
              | 'prune_delete_days'
              | 'position'
              | 'bitrate'
              | 'rate_limit_per_user'
              | 'color'
              | 'max_uses'
              | 'uses'
              | 'max_age'
              | 'expire_behavior'
              | 'expire_grace_period'
              | 'user_limit'
              | 'privacy_level';
      }
    | {
          newValue: Partial<Role>;
          oldValue: Partial<Role>;
          key: '$add' | '$remove';
      }
    | {
          newValue: boolean;
          oldValue: boolean;
          key:
              | 'widget_enabled'
              | 'nsfw'
              | 'hoist'
              | 'mentionable'
              | 'temporary'
              | 'deaf'
              | 'mute'
              | 'enable_emoticons';
      }
    | {
          newValue: Overwrite[];
          oldValue: Overwrite[];
          key: 'permission_overwrites';
      }
    | {
          newValue: string | number;
          oldValue: string | number;
          key: 'type';
      };

/** @see https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure */
export interface AuditLogEntry {
    /** id of the affected entity (webhook, user, role, etc.) */
    target_id: string | null;
    /** Changes made to the `target_id` */
    changes?: AuditLogChange[];
    /** The user who made the changes */
    userId: string | null;
    /** id of the entry */
    id: string;
    /** Type of action that occurred */
    action_type: AuditLogEvents;
    /** Additional info for certain action types */
    options?: OptionalAuditEntryInfo;
    /** The reason for the change (0-512 characters) */
    reason?: string;
}

/** @see https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-events */
export enum DiscordAuditLogEvents {
    GuildUpdate = 1,
    ChannelCreate = 10,
    ChannelUpdate,
    ChannelDelete,
    ChannelOverwriteCreate,
    ChannelOverwriteUpdate,
    ChannelOverwriteDelete,
    MemberKick = 20,
    MemberPrune,
    MemberBanAdd,
    MemberBanRemove,
    MemberUpdate,
    MemberRoleUpdate,
    MemberMove,
    MemberDisconnect,
    BotAdd,
    RoleCreate = 30,
    RoleUpdate,
    RoleDelete,
    InviteCreate = 40,
    InviteUpdate,
    InviteDelete,
    WebhookCreate = 50,
    WebhookUpdate,
    WebhookDelete,
    EmojiCreate = 60,
    EmojiUpdate,
    EmojiDelete,
    MessageDelete = 72,
    MessageBulkDelete,
    MessagePin,
    MessageUnpin,
    IntegrationCreate = 80,
    IntegrationUpdate,
    IntegrationDelete,
    StageInstanceCreate,
    StageInstanceUpdate,
    StageInstanceDelete,
}

/** @see https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log-query-string-parameters */
export interface GetGuildAuditLog {
    /** Filter the log for actions made by a user */
    user_id?: string;
    /** The type of audit log event */
    action_type?: DiscordAuditLogEvents;
    /** Filter the log before a certain entry id */
    before?: string;
    /** How many entries are returned (default 50, minimum 1, maximum 100) */
    limit?: number;
}

/** @see https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info */
export interface OptionalAuditEntryInfo {
    /** Number of days after which inactive members were kicked */
    delete_member_days: string;
    /** Number of members removed by the prune */
    members_removed: string;
    /** Channel in which the entities were targeted */
    channel_id: string;
    /** id of the message that was targeted, types: MESSAGE_PIN & MESSAGE_UNPIN & STAGE_INSTANCE_CREATE & STAGE_INSTANCE_UPDATE & STAGE_INSTANCE_DELETE */
    message_id: string;
    /** Number of entities that were targeted */
    count: string;
    /** id of the overwritten entity */
    id: string;
    /** type of overwritten entity - "0", for "role", or "1" for "member" */
    type: string;
    /** Name of the role if type is "0" (not present if type is "1") */
    role_name: string;
}

/** @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-structure */
export type Webhook = IncomingWebhook | ApplicationWebhook;

export interface IncomingWebhook {
    /** The id of the webhook */
    id: string;
    /** The type of the webhook */
    type: WebhookTypes;
    /** The guild id this webhook is for */
    guild_id?: string;
    /** The channel id this webhook is for */
    channel_id: string;
    /** The user this webhook was created by (not returned when getting a webhook with its token) */
    user?: User;
    /** The default name of the webhook */
    name: string | null;
    /** The default user avatar hash of the webhook */
    avatar: string | null;
    /** The secure token of the webhook (returned for Incoming Webhooks) */
    token?: string;
    /** The bot/OAuth2 application that created this webhook */
    application_id: string | null;
    /** The guild of the channel that this webhook is following (returned for Channel Follower Webhooks) */
    source_guild?: Partial<Guild>;
    /** The channel that this webhook is following (returned for Channel Follower Webhooks) */
    source_channel?: Partial<Channel>;
    /** The url used for executing the webhook (returned by the webhooks OAuth2 flow) */
    url?: string;
}

export interface ApplicationWebhook extends Omit<IncomingWebhook, 'type' | 'guild_id' | 'channel_id'> {
    type: WebhookTypes.Application;
    guild_id?: string | null;
    channel_id?: string | null;
}

/** @see https://discord.com/developers/docs/resources/webhook#webhook-object-webhook-types */
export enum WebhookTypes {
    /** Incoming Webhooks can post messages to channels with a generated token */
    Incoming = 1,
    /** Channel Follower Webhooks are internal webhooks used with Channel Following to post new messages into channels */
    ChannelFollower,
    /** Application webhooks are webhooks used with Interactions */
    Application,
}

export interface CreateWebhook {
    /** Name of the webhook (1-80 characters) */
    name: string;
    /** Image for the default webhook avatar */
    avatar?: string | null;
}

/** https://discord.com/developers/docs/resources/webhook#edit-webhook-message-jsonform-params */
export interface EditWebhookMessage {
    /** The message contents (up to 2000 characters) */
    content?: string | null;
    /** Embedded `rich` content */
    embeds?: Embed[] | null;
    /** The contents of the file being sent/edited */
    file?: FileContent | FileContent[] | null;
    /** Allowed mentions for the message */
    allowed_mentions?: AllowedMentions | null;
    /** Attached files to keep */
    attachments?: Attachment | null;
    /** The components you would like to have sent in this message */
    components?: MessageComponents;
}

/** @see https://discord.com/developers/docs/resources/webhook#execute-webhook */
export interface ExecuteWebhook {
    /** Waits for server confirmation of message send before response, and returns the created message body (defaults to `false`; when `false` a message that is not saved does not return an error) */
    wait?: boolean;
    /** Send a message to the specified thread within a webhook's channel. The thread will automatically be unarchived. */
    thread_id?: bigint;
    /** The message contents (up to 2000 characters) */
    content?: string;
    /** Override the default username of the webhook */
    username?: string;
    /** Override the default avatar of the webhook */
    avatar_url?: string;
    /** True if this is a TTS message */
    tts?: boolean;
    /** The contents of the file being sent */
    file?: FileContent | FileContent[];
    /** Embedded `rich` content */
    embeds?: Embed[];
    /** Allowed mentions for the message */
    allowed_mentions?: AllowedMentions;
}

export type DiscordExecuteWebhook = SnakeCasedPropertiesDeep<Omit<ExecuteWebhook, 'wait'>>;

/** @see https://discord.com/developers/docs/resources/webhook#modify-webhook-json-params */
export interface ModifyWebhook {
    /** The default name of the webhook */
    name?: string;
    /** Image for the default webhook avatar */
    avatar?: string | null;
    /** The new channel id this webhook should be moved to */
    channel_id?: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#webhooks-update-webhook-update-event-fields */
export interface WebhookUpdate {
    /** id of the guild */
    guild_id: string;
    /** id of the channel */
    channel_id: string;
}
