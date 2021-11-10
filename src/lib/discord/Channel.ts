import { MessageForm } from '../../interfaces/message';
import { Message } from './Message';
import { Channel as ChannelData, ChannelType } from '../../interfaces/channel';
import http from '../structures/ws/http';

export type MessageSearchTerms = {
    around?: string;
    after?: string;
    before?: string;
    amount?: number;
};
export class Channel {
    constructor(protected data: ChannelData) {}
    getMessages(amount = 50, data?: MessageSearchTerms): Promise<Message[]> {
        let params = ``;
        params += data?.after ? `&after=${data.after}` : '';
        params += data?.before ? `&before=${data.before}` : '';
        params += data?.around ? `&around=${data.around}` : '';
        return http
            .GET(`/channels/${this.id}/messages?limit=${amount}${params}`)
            .then(raw => raw.map(m => new Message(m)));
    }
    /** Returns the channel id */
    public get id() {
        return this.data.id;
    }
    /**
     * This property is only for **voice channels**
     */
    public get userLimit() {
        return this.data.user_limit;
    }
    /** Returns the name of the channel */
    public get name() {
        return this.data.name;
    }
    public get subject() {
        return this.data.topic ?? '';
    }
    /** Checks if the channel is nsfw or not. Returns boolean */
    public get isNSFW() {
        return this.data.nsfw ?? false;
    }
    public get position() {
        return this.data.position;
    }
    public get isDM() {
        return ((this.type as any) || '') === 'Dm';
    }
    public type = Object.keys(ChannelType).find(
        k => this.data.type === ChannelType[k]
    ) as keyof typeof ChannelType;

    /**
     * A function to send data to a channel.
     * Works with embeds and normal text messages
     * @example channel.send({content: "fuwa.js rocks!"})
     */
    public send(...messages: MessageForm[]): Promise<Message[]> {
        return Promise.all(
            messages.map(msg =>
                http.POST(`/channels/${this.id}/messages`, JSON.stringify(msg)).then(raw => new Message(raw))
            )
        );
    }
    /** Returns the channel permissions */
    public get perms() {
        return this.data.permissions;
    }
    /** If a channel is in a category, it will have a parent id. This function will return that id*/
    public get parentId() {
        return this.data.parent_id ?? null;
    }
    /** Returns the id of a pined message */
    public getPins(): Promise<Message[]> {
        return http.GET(`/channels/${this.id}/pins`).then(raw => raw.map(msg => new Message(msg)));
    }
    /**
     * ! WARNING: This method is not recommend to be used
     * @see https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
     * This makes the bot appear to be typing
     */
    public async startTyping() {
        await http.POST(`/channels/${this.id}/typing`);
        return;
    }
}
