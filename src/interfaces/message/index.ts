import { GuildMemberWithUser } from "../DiscordAPI";
import type { Member, User } from "../member";
import type { MessageComponents} from "./componentTypes"

export interface Message {
    id: string;
    channel_id: string;
    guild_id?: string;
    author: Author;
    member?: Member;
    /** The actual contents of the message */
    content: string;
    timestamp: Date;
    edited_timestamp: Date | null;
    tts: boolean;
    mention_everyone: boolean;
    mentions: User[];
    mention_roles: string[];
    mention_channels?: ChannelMention[];
    attachments: Attachment[];
    embeds: Embed[];
    reactions: Reaction[];
    nonce: number | string;
    pinned: boolean;
    webhook_id?: string;
    type: MessageType;
    activity?: MessageActivity;
    application?: MessageApplication;
    message_reference?: MessageReference;
    flags?: number;
    stickers: Sticker[];
    referenced_message?: Message | null;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message-jsonform-params}
 */
export interface MessageForm {
    content: string;
    tts?: boolean;
    file: string;
    embeds: Embed[];
    payload_json?: string;
    allowed_mentions?: AllowedMention[];
    message_reference?: MessageReference;
    components?: MessageComponent[];
}



export interface ChannelMention {
    id: string;
    guild_id: string;
    type: number;
    name: string;
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message-jsonform-params}
 */
export interface MessageForm {
    content: string;
    tts?: boolean;
    file: string;
    embeds: Embed[];
    payload_json?: string;
    allowed_mentions?: AllowedMention[];
    message_reference?: MessageReference;
    components?: MessageComponent[];
}

type AllowedMentionType = 'roles' | 'users' | 'everyone';

interface AllowedMention {
    parse: AllowedMentionType[];
    roles: string[];
    users: string[];
    replied_user: boolean;
}

interface MessageComponent {
    type: ComponentType;
    style?: number;
}

export enum ComponentType {
    ActionRow = 1,
    Button = 2,
    SelectMenu = 3,
}

interface Sticker {
    id: string;
    pack_id: string;
    name: string;
    description: string;
    tags?: string;
    asset: string;
    preview_asset: string | null;
    format_type: StickerFormat;
}

enum StickerFormat {
    Png,
    Apng,
    Lottie,
}

export enum MessageType {
    Default,
    RecipientAdd,
    RecipientRemove,
    Call,
    ChannelNameChange,
    ChannelIconChange,
    ChannelPinnedMessage,
    GuildMemberJoin,
    UserPremiumGuildSubscription,
    UserPremiumGuildSubscriptionTier1,
    UserPremiumGuildSubscriptionTier2,
    UserPremiumGuildSubscriptionTier3,
    ChannelFollowAdd,
    GuildFollowAdd,
    GuildDiscorveryDisqualified,
    GuildDiscoveryRequalified,
    Reply,
    ApplicationCommand,
}
/** @see https://discord.com/developers/docs/resources/channel#message-object-message-activity-structure */
export interface MessageActivity {
    type: number;
    party_id?: string;
}

interface MessageApplication {
    id: string;
    cover_image?: string;
    description: string;
    icon: string | null;
    name: string;
}

/** @see https://discord.com/developers/docs/resources/channel#message-object-message-reference-structure */
export interface MessageReference {
  /** id of the originating message */
  messageId?: string;
  /**
   * id of the originating message's channel
   * Note: `channel_id` is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.
   */
  channelId?: string;
  /** id of the originating message's guild */
  guildId?: string;
  /** When sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true */
  failIfNotExists: boolean;
}



export interface Attachment {
    id: string;
    filename: string;
    content_type?: string;
    /** Size of the file **in bytes** */
    size: number;
    url: string;
    proxy_url: string;
    height: number | null;
    width: number | null;
}

export interface Embed {
    title?: string;
    type?: string;
    description?: string;
    url?: string;
    timestamp?: Date;
    color?: number;
    footer?: EmbedFooter;
    image?: EmbedImage;
    thumbnail?: EmbedThumbnail;
    video?: EmbedVideo;
    provider?: EmbedProvider;
    author?: EmbedAuthor;
    fields?: EmbedField[];
}

interface EmbedThumbnail {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

interface EmbedVideo {
    url?: string;
    height?: number;
    width?: number;
}

interface EmbedImage {
    url?: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

interface EmbedFooter {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

interface EmbedProvider {
    name?: string;
    url?: string;
}

interface EmbedAuthor {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

interface EmbedField {
    name: string;
    value: string;
    inline?: boolean;
}

export interface Author {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
}

/** @see https://discord.com/developers/docs/resources/channel#reaction-object */
export interface Reaction {
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    member?: Member;
    emoji: Emoji;
}

/**
 *  @see https://discord.com/developers/docs/resources/emoji#emoji-object-emoji-structure
 */
export interface Emoji {
    id: string | null;
    name: string | null;
    roles?: string[];
    user?: User;
    require_colons?: boolean;
    managed?: boolean;
    animated?: boolean;
    available?: boolean;
}

/** @see https://discord.com/developers/docs/resources/channel#create-message */

export interface CreateMessage {
    /** The message contents (up to 2000 characters) */
    content?: string;
    /** true if this is a TTS message */
    tts?: boolean;
    /** Embedded `rich` content (up to 6000 characters) */
    embeds?: Embed[];
    /** Allowed mentions for the message */
    allowedMentions?: AllowedMentions;
    /** Include to make your message a reply */
    messageReference?: MessageReference;
    /** The contents of the file being sent */
    file?: FileContent | FileContent[];
    /** The components you would like to have sent in this message */
    components?: MessageComponents;
}

/** https://discord.com/developers/docs/resources/channel#allowed-mentions-object */
export interface AllowedMentions {
  /** An array of allowed mention types to parse from the content. */
  parse?: AllowedMentionsTypes[];
  /** Array of role_ids to mention (Max size of 100) */
  roles?: string[];
  /** Array of user_ids to mention (Max size of 100) */
  users?: string[];
  /** For replies, whether to mention the author of the message being replied to (default false) */
  repliedUser?: boolean;
}

/** https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types */
export enum AllowedMentionsTypes {
  /** Controls role mentions */
  RoleMentions = "roles",
  /** Controls user mentions */
  UserMentions = "users",
  /** Controls @everyone and @here mentions */
  EveryoneMentions = "everyone",
}

export interface FileContent {
    /** The file blob */
    blob: Blob;
    /** The name of the file */
    name: string;
}

/** @see https://discord.com/developers/docs/resources/channel#edit-message-json-params */
export interface EditMessage {
  /** The new message contents (up to 2000 characters) */
  content?: string | null;
  /** Embedded `rich` content (up to 6000 characters) */
  embeds?: Embed[] | null;
  /** Edit the flags of the message (only `SUPRESS_EMBEDS` can currently be set/unset) */
  flags?: 4 | null;
  /** The contents of the file being sent/edited */
  file?: FileContent | FileContent[] | null;
  /** Allowed mentions for the message */
  allowedMentions?: AllowedMentions | null;
  /** Attached files to keep */
  attachments?: Attachment | null;
  /** The components you would like to have sent in this message */
  components?: MessageComponents;
}

/** @see https://discord.com/developers/docs/resources/channel#get-channel-messages-query-string-params */
export interface GetMessagesLimit {
  /** Max number of messages to return (1-100) default 50 */
  limit?: number;
}

/** @see https://discord.com/developers/docs/resources/channel#get-channel-messages-query-string-params */
export interface GetMessagesAround extends GetMessagesLimit {
  /** Get messages around this message id */
  around?: bigint;
}

/** @see https://discord.com/developers/docs/resources/channel#get-channel-messages-query-string-params */
export interface GetMessagesBefore extends GetMessagesLimit {
  /** Get messages before this message id */
  before?: bigint;
}

/** @see https://discord.com/developers/docs/resources/channel#get-channel-messages-query-string-params */
export interface GetMessagesAfter extends GetMessagesLimit {
  /** Get messages after this message id */
  after?: bigint;
}

/** @see https://discord.com/developers/docs/resources/channel#get-channel-messages-query-string-params */
export type GetMessages = GetMessagesLimit & GetMessagesAfter & GetMessagesBefore & GetMessagesAround;

/** https://discord.com/developers/docs/topics/gateway#message-delete */
export interface MessageDelete {
  /** The id of the message */
  id: string;
  /** The id of the channel */
  channelId: string;
  /** The id of the guild */
  guildId?: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#message-delete-bulk */
export interface MessageDeleteBulk {
  /** The ids of the messages */
  ids: string[];
  /** The id of the channel */
  channelId: string;
  /** The id of the guild */
  guildId?: string;
}

/** @see https://discord.com/developers/docs/resources/channel#message-object-message-flags */
export enum MessageFlags {
  /** This message has been published to subscribed channels (via Channel Following) */
  Crossposted = 1 << 0,
  /** This message originated from a message in another channel (via Channel Following) */
  IsCrosspost = 1 << 1,
  /** Do not include any embeds when serializing this message */
  SuppressEmbeds = 1 << 2,
  /** The source message for this crosspost has been deleted (via Channel Following) */
  SourceMessageDeleted = 1 << 3,
  /** This message came from the urgent message system */
  Urgent = 1 << 4,
  /** This message has an associated thread, with the same id as the message */
  HasThread = 1 << 5,
  /** This message is only visible to the user who invoked the Interaction */
  Empheral = 1 << 6,
  /** This message is an Interaction Response and the bot is "thinking" */
  Loading = 1 << 7,
}

/** @see https://discord.com/developers/docs/resources/channel#get-reactions-query-string-params */
export interface GetReactions {
  /** Get users after this user Id */
  after?: string;
  /** Max number of users to return (1-100) */
  limit?: number;
}

/** @see https://discord.com/developers/docs/topics/gateway#message-reaction-add */
export interface MessageReactionAdd {
  /** The id of the user */
  userId: string;
  /** The id of the channel */
  channelId: string;
  /** The id of the message */
  messageId: string;
  /** The id of the guild */
  guildId?: string;
  /** The member who reacted if this happened in a guild */
  member?: GuildMemberWithUser;
  /** The emoji used to react */
  emoji: Partial<Emoji>;
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove */
export type MessageReactionRemove = Omit<MessageReactionAdd, "member">;

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all */
export type MessageReactionRemoveAll = Pick<MessageReactionAdd, "channelId" | "messageId" | "guildId">;


/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji */
export type MessageReactionRemoveEmoji = Pick<MessageReactionAdd, "channelId" | "guildId" | "messageId" | "emoji">;

/** https://discord.com/developers/docs/resources/channel#message-object-message-sticker-structure */
export interface MessageSticker {
  /** Id of the sticker */
  id: string;
  /** Id of the pack the sticker is from */
  packId?: string;
  /** Name of the sticker */
  name: string;
  /** Description of the sticker */
  description: string;
  /** For guild stickers, a unicode emoji representing the sticker's expression. For Nitro stickers, a comma-separated list of related expressions */
  tags: string;
  /**
   * Sticker asset hash
   * Note: The URL for fetching sticker assets is currently private.
   * @deprecated the value of the asset field will an empty string.
   */
  asset: string;
  /** Type of sticker format */
  formatType: MessageStickerFormatTypes;
  /**  Whether or not the sticker is available */
  available?: boolean;
  /** Id of the guild that owns this sticker */
  guildId?: string;
  /** The user that uploaded the sticker */
  user?: User;
  /** A sticker's sort order within a pack */
  sortValue?: number;
}

/** @see https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types */
export enum MessageStickerFormatTypes {
  Png = 1,
  Apng,
  Lottie,
}

export interface MessageStickerItem {
    /** Id of the sticker */
    id: string;
    /** Name of the sticker */
    name: string;
    /** Type of sticker format */
    formatType: MessageStickerFormatTypes;
}

/** https://discord.com/developers/docs/resources/channel#message-object-message-types */
export enum MessageTypes {
  Default,
  RecipientAdd,
  RecipientRemove,
  Call,
  ChannelNameChange,
  ChannelIconChange,
  ChannelPinnedMessage,
  GuildMemberJoin,
  UserPremiumGuildSubscription,
  UserPremiumGuildSubscriptionTier1,
  UserPremiumGuildSubscriptionTier2,
  UserPremiumGuildSubscriptionTier3,
  ChannelFollowAdd,
  GuildDiscoveryDisqualified = 14,
  GuildDiscoveryRequalified,
  GuildDiscoveryGracePeriodInitialWarning,
  GuildDiscoveryGracePeriodFinalWarning,
  ThreadCreated,
  Reply = 19,
  ApplicationCommand,
  GuildInviteReminder = 22,
}
