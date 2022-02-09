import { Message as MessageData, MessageType } from '../../interfaces/message/index.ts';
import { User } from './User.ts';
import { Embed } from './Embed.ts';
import { enumPropFinder } from '../../util/index.ts';
import { Member } from './Guild.ts';
import http from '../structures/internet/http.ts';
import { Attachment } from './index.ts';

export class Message {
    constructor(protected data: MessageData) {}

    /** Id of the message */
    get id() {
        return this.data.id;
    }

    /** Time of message creation. */
    get createdAt() {
        return new Date(this.data.timestamp);
    }
    public get attachments() {
        return this.data.attachments.map(data => new Attachment(data));
    }

    /** the actual content of the message */
    get content() {
        return this.data.content;
    }
    public toString() {
        return this.content;
    }
    /** If the message is replying to another message.*/
    get messageReference(): Message | null {
        return this.data.message_reference ? new Message(this.data.message_reference as any) : null;
    }
    get editedAt() {
        return this.data.edited_timestamp ? new Date(this.data.edited_timestamp) : null;
    }
    /** If the message is pinned in a channel. */
    get isPinned() {
        return this.data.pinned ?? false;
    }
    /** the author id of the message */
    get author() {
        return new User(this.data.author);
    }
    /** The guild id of where the message was sent. */
    public get guildId(): string | null {
        return this.data.guild_id ?? null;
    }
    public get channelId() {
        return this.data.channel_id ?? null;
    }
    public async delete() {
        await http.DELETE(`/channels/${this.channelId}/messages/${this.id}`);
        return;
    }
    public get isTTS() {
        return this.data.tts;
    }
    public embeds = this.data?.embeds ? this.data.embeds.map(e => new Embed(e)) : [];
    public type = enumPropFinder<typeof MessageType>(this.data?.type, MessageType);

    public get reactions() {
        return this.data.reactions;
    }
    public get member(): Member | null {
        return this.data.member ? new Member(this.data.member as any) : null;
    }
    public get mentions() {
        return this.data.mentions.map(({ member, ...user }) => new Member({ user, ...member } as any));
    }
}
