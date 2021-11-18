export * from './componentTypes';
import { MessageInteraction, ThreadMember } from '..';
import { GuildMember } from '../guild';
import type { Author, GuildMemberWithUser, Member, User } from '../member';
import type { MessageComponents } from './componentTypes';
import { Channel } from '../channel';

/** @see https://discord.com/developers/docs/resources/channel#message-object */
export interface Message {
    /** id of the message */
    id: string;
    /** id of the channel the message was sent in */
    channel_id: string;
    /** id of the guild the message was sent in */
    guild_id?: string;
    /**
     * The author of this message (not guaranteed to be a valid user)
     * Note: The author object follows the structure of the user object, but is only a valid user in the case where the message is generated by a user or bot user. If the message is generated by a webhook, the author object corresponds to the webhook's id, username, and avatar. You can tell if a message is generated by a webhook by checking for the webhook_id on the message object.
     */
    author: Author;
    /**
     * Member properties for this message's author
     * Note: The member object exists in `MESSAGE_CREATE` and `MESSAGE_UPDATE` events from text-based guild channels. This allows bots to obtain real-time member data without requiring bots to store member state in memory.
     */
    member?: Member;
    /** The actual contents of the message */
    content: string;
    /** When this message was sent */
    timestamp: number;
    /** When this message was edited (or null if never) */
    edited_timestamp: number | null;
    /** Whether this was a TTS message */
    tts: boolean;
    /** Whether this message mentions everyone */
    mention_everyone: boolean;
    /**
     * Users specifically mentioned in the message
     * Note: The user objects in the mentions array will only have the partial member field present in `MESSAGE_CREATE` and `MESSAGE_UPDATE` events from text-based guild channels.
     */
    mentions: (User & { member?: Partial<GuildMember> })[];
    /** Roles specifically mentioned in this message */
    mention_roles: string[];
    /**
     * Channels specifically mentioned in this message
     * Note: Not all channel mentions in a message will appear in `mention_channels`. Only textual channels that are visible to everyone in a lurkable guild will ever be included. Only crossposted messages (via Channel Following) currently include `mention_channels` at all. If no mentions in the message meet these requirements, this field will not be sent.
     */
    mention_channels?: ChannelMention[];
    /** Any attached files */
    attachments: Attachment[];
    /** Any embedded content */
    embeds: Embed[];
    /** Reactions to the message or embed */
    reactions: Reaction[];
    /** Used for validating a message was sent */
    nonce: number | string;
    /** Whether this message is pinned */
    pinned: boolean;
    /** If the message is generated by a webhook, this is the webhook's id */
    webhook_id?: string;
    /** Type of message */
    type: MessageType;
    /** Sent with Rich Presence-related chat embeds */
    activity?: Partial<MessageActivity>;
    /** If the message is a response to an Interaction, this is the id of the interaction's application */
    application?: MessageApplication;
    /** Data showing the source of a crossposted channel follow add, pin or reply message */
    message_reference?: Omit<MessageReference, 'failIfNotExists'>;
    /** Message flags combined as a bitfield */
    flags?: number;
    /**
     * The stickers sent with the message (bots currently can only receive messages with stickers, not send)
     * @deprecated
     */
    stickers: Sticker[];
    /**
     * The message associated with the `message_reference`
     * Note: This field is only returned for messages with a `type` of `19` (REPLY). If the message is a reply but the `referenced_message` field is not present, the backend did not attempt to fetch the message that was being replied to, so its state is unknown. If the field exists but is null, the referenced message was deleted.
     */
    referenced_message?: Message | null;
    /** Sent if the message is a response to an Interaction */
    interaction?: MessageInteraction;
    /** The thread that was started from this message, includes thread member object */
    thread?: Omit<Channel, 'member'> & { member: ThreadMember };
    /** The components related to this message */
    components?: MessageComponents;
    /** Sent if the message contains stickers */
    sticker_items?: MessageStickerItem[];
}

/**
 * @see {@link https://discord.com/developers/docs/resources/channel#create-message-jsonform-params}
 */
export interface MessageForm {
    content?: string;
    tts?: boolean;
    file?: string;
    embeds?: Embed[];
    payload_json?: string;
    allowed_mentions?: AllowedMention[];
    attachments?: Partial<Attachment>[];
    message_reference?: MessageReference;
    components?: MessageComponent[];
}

export interface ChannelMention {
    id: string;
    guild_id: string;
    type: number;
    name: string;
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
    GuildDiscoveryDisqualified,
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
    message_id?: string;
    /**
     * id of the originating message's channel
     * Note: `channel_id` is optional when creating a reply, but will always be present when receiving an event/response that includes this data model.
     */
    channel_id?: string;
    /** id of the originating message's guild */
    guild_id?: string;
    /** When sending, whether to error if the referenced message doesn't exist instead of sending as a normal (non-reply) message, default true */
    fail_if_not_exists: boolean;
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

/** https://discord.com/developers/docs/resources/channel#allowed-mentions-object */
export interface AllowedMentions {
    /** An array of allowed mention types to parse from the content. */
    parse?: AllowedMentionsTypes[];
    /** Array of role_ids to mention (Max size of 100) */
    roles?: string[];
    /** Array of user_ids to mention (Max size of 100) */
    users?: string[];
    /** For replies, whether to mention the author of the message being replied to (default false) */
    replied_user?: boolean;
}

/** https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types */
export enum AllowedMentionsTypes {
    /** Controls role mentions */
    RoleMentions = 'roles',
    /** Controls user mentions */
    UserMentions = 'users',
    /** Controls @everyone and @here mentions */
    EveryoneMentions = 'everyone',
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
    /** Edit the flags of the message (only `SUPPRESS_EMBEDS` can currently be set/unset) */
    flags?: 4 | null;
    /** The contents of the file being sent/edited */
    file?: FileContent | FileContent[] | null;
    /** Allowed mentions for the message */
    allowed_mentions?: AllowedMentions | null;
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
    channel_id: string;
    /** The id of the guild */
    guild_id?: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#message-update */
export interface MessageUpdate {
    /** the id of the message*/
    id: string;
    /**	id of channel to listen to updates of */
    channel_id: string;
    /** the id of the guild */
    guild_id?: string;
}

/** @see https://discord.com/developers/docs/topics/gateway#message-delete-bulk */
export interface MessageDeleteBulk {
    /** The ids of the messages */
    ids: string[];
    /** The id of the channel */
    channel_id: string;
    /** The id of the guild */
    guild_id?: string;
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
    user_id: string;
    /** The id of the channel */
    channel_id: string;
    /** The id of the message */
    message_id: string;
    /** The id of the guild */
    guild_id?: string;
    /** The member who reacted if this happened in a guild */
    member?: GuildMemberWithUser;
    /** The emoji used to react */
    emoji: Partial<Emoji>;
}

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove */
export type MessageReactionRemove = Omit<MessageReactionAdd, 'member'>;

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all */
export type MessageReactionRemoveAll = Pick<MessageReactionAdd, 'channel_id' | 'message_id' | 'guild_id'>;

/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji */
export type MessageReactionRemoveEmoji = Pick<
    MessageReactionAdd,
    'channel_id' | 'guild_id' | 'message_id' | 'emoji'
>;

/** @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-structure */
export interface Sticker {
    /** Id of the sticker */
    id: string;
    /** Id of the pack the sticker is from */
    pack_id?: string;
    /** Name of the sticker */
    name: string;
    /** Description of the sticker */
    description: string | null;
    /** For guild stickers, a unicode emoji representing the sticker's expression. For Nitro stickers, a comma-separated list of related expressions */
    tags: string;
    /**
     * Sticker asset hash
     * Note: The URL for fetching sticker assets is currently private.
     * @deprecated the value of the asset field will an empty string.
     */
    asset: string;
    type: StickerType;
    /** Type of sticker format */
    format_type: StickerFormatType;
    /**  Whether or not the sticker is available */
    available?: boolean;
    /** Id of the guild that owns this sticker */
    guild_id?: string;
    /** The user that uploaded the sticker */
    user?: User;
    /** A sticker's sort order within a pack */
    sort_value?: number;
}

/**
 * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
 */
export enum StickerType {
    /** @description an official sticker in a pack, part of Nitro or in a removed purchasble pack */
    Standard = 1,
    /** @description a sticker uploaded to a Boosted guild for the guild's members */
    Guild,
}

/** @see https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types */
export enum StickerFormatType {
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
    format_type: StickerFormatType;
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
