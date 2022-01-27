import { Message as MessageData, MessageType } from '../../interfaces/message';
import { User } from './User';
import { Embed } from './Embed';
import { enumPropFinder } from '../../util';
import { Member } from './Guild';
import http from '../structures/internet/http';

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

    /** the actual content of the message send in x channel*/
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
    public delete() {
        return http.DELETE(`/channels/${this.channelId}/messages/${this.id}`);
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
        return this.data.mentions;
    }
}
