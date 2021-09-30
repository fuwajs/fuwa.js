/// <reference types="node" />
import type { Author, GuildMemberWithUser, Member, User } from '../member';
import type { MessageComponents } from './componentTypes';
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
declare type AllowedMentionType = 'roles' | 'users' | 'everyone';
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
export declare enum ComponentType {
    ActionRow = 1,
    Button = 2,
    SelectMenu = 3
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
declare enum StickerFormat {
    Png = 0,
    Apng = 1,
    Lottie = 2
}
export declare enum MessageType {
    Default = 0,
    RecipientAdd = 1,
    RecipientRemove = 2,
    Call = 3,
    ChannelNameChange = 4,
    ChannelIconChange = 5,
    ChannelPinnedMessage = 6,
    GuildMemberJoin = 7,
    UserPremiumGuildSubscription = 8,
    UserPremiumGuildSubscriptionTier1 = 9,
    UserPremiumGuildSubscriptionTier2 = 10,
    UserPremiumGuildSubscriptionTier3 = 11,
    ChannelFollowAdd = 12,
    GuildFollowAdd = 13,
    GuildDiscorveryDisqualified = 14,
    GuildDiscoveryRequalified = 15,
    Reply = 16,
    ApplicationCommand = 17
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
/** @see https://discord.com/developers/docs/resources/channel#create-message */
export interface CreateMessage {
    /** The message contents (up to 2000 characters) */
    content?: string;
    /** true if this is a TTS message */
    tts?: boolean;
    /** Embedded `rich` content (up to 6000 characters) */
    embeds?: Embed[];
    /** Allowed mentions for the message */
    allowed_mentions?: AllowedMentions;
    /** Include to make your message a reply */
    message_reference?: MessageReference;
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
    replied_user?: boolean;
}
/** https://discord.com/developers/docs/resources/channel#allowed-mentions-object-allowed-mention-types */
export declare enum AllowedMentionsTypes {
    /** Controls role mentions */
    RoleMentions = "roles",
    /** Controls user mentions */
    UserMentions = "users",
    /** Controls @everyone and @here mentions */
    EveryoneMentions = "everyone"
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
export declare type GetMessages = GetMessagesLimit & GetMessagesAfter & GetMessagesBefore & GetMessagesAround;
/** https://discord.com/developers/docs/topics/gateway#message-delete */
export interface MessageDelete {
    /** The id of the message */
    id: string;
    /** The id of the channel */
    channel_id: string;
    /** The id of the guild */
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
export declare enum MessageFlags {
    /** This message has been published to subscribed channels (via Channel Following) */
    Crossposted = 1,
    /** This message originated from a message in another channel (via Channel Following) */
    IsCrosspost = 2,
    /** Do not include any embeds when serializing this message */
    SuppressEmbeds = 4,
    /** The source message for this crosspost has been deleted (via Channel Following) */
    SourceMessageDeleted = 8,
    /** This message came from the urgent message system */
    Urgent = 16,
    /** This message has an associated thread, with the same id as the message */
    HasThread = 32,
    /** This message is only visible to the user who invoked the Interaction */
    Empheral = 64,
    /** This message is an Interaction Response and the bot is "thinking" */
    Loading = 128
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
export declare type MessageReactionRemove = Omit<MessageReactionAdd, 'member'>;
/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-all */
export declare type MessageReactionRemoveAll = Pick<MessageReactionAdd, 'channel_id' | 'message_id' | 'guild_id'>;
/** https://discord.com/developers/docs/topics/gateway#message-reaction-remove-emoji */
export declare type MessageReactionRemoveEmoji = Pick<MessageReactionAdd, 'channel_id' | 'guild_id' | 'message_id' | 'emoji'>;
/** https://discord.com/developers/docs/resources/channel#message-object-message-sticker-structure */
export interface MessageSticker {
    /** Id of the sticker */
    id: string;
    /** Id of the pack the sticker is from */
    pack_id?: string;
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
    format_type: MessageStickerFormatTypes;
    /**  Whether or not the sticker is available */
    available?: boolean;
    /** Id of the guild that owns this sticker */
    guild_id?: string;
    /** The user that uploaded the sticker */
    user?: User;
    /** A sticker's sort order within a pack */
    sort_value?: number;
}
/** @see https://discord.com/developers/docs/resources/channel#message-object-message-sticker-format-types */
export declare enum MessageStickerFormatTypes {
    Png = 1,
    Apng = 2,
    Lottie = 3
}
export interface MessageStickerItem {
    /** Id of the sticker */
    id: string;
    /** Name of the sticker */
    name: string;
    /** Type of sticker format */
    format_type: MessageStickerFormatTypes;
}
/** https://discord.com/developers/docs/resources/channel#message-object-message-types */
export declare enum MessageTypes {
    Default = 0,
    RecipientAdd = 1,
    RecipientRemove = 2,
    Call = 3,
    ChannelNameChange = 4,
    ChannelIconChange = 5,
    ChannelPinnedMessage = 6,
    GuildMemberJoin = 7,
    UserPremiumGuildSubscription = 8,
    UserPremiumGuildSubscriptionTier1 = 9,
    UserPremiumGuildSubscriptionTier2 = 10,
    UserPremiumGuildSubscriptionTier3 = 11,
    ChannelFollowAdd = 12,
    GuildDiscoveryDisqualified = 14,
    GuildDiscoveryRequalified = 15,
    GuildDiscoveryGracePeriodInitialWarning = 16,
    GuildDiscoveryGracePeriodFinalWarning = 17,
    ThreadCreated = 18,
    Reply = 19,
    ApplicationCommand = 20,
    GuildInviteReminder = 22
}
export {};
//# sourceMappingURL=index.d.ts.map