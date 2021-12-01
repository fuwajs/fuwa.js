import { Message } from './Message';
import { Channel as ChannelData, ChannelType } from '../../interfaces/channel';
import http, { FileHandler } from '../structures/internet/http';
import Globs from '../../util/Global';
import { enumPropFinder } from '../../util';
import { MessageReference } from '../../interfaces';
import { Attachment, Embed } from '.';

export type MessageSearchTerms = {
    around?: string;
    after?: string;
    before?: string;
    amount?: number;
};

export interface MessageForm {
    content?: string;
    tts?: boolean;
    files?: { name: string; data: Buffer }[];
    embeds?: Embed[];
    payload_json?: string;
    // allowed_mentions?: AllowedMention[];
    attachments?: { filename: string; description: string }[];
    message_reference?: MessageReference;
    // components?: MessageComponent[];
}
export class Channel {
    constructor(protected data: ChannelData) {
        if (data) {
            const cache = Globs.cache;
            cache.set(`channels.${data.id}`, this);
        }
    }
    public type = enumPropFinder<typeof ChannelType>(this.data?.type, ChannelType);
    getMessages(amount = 50, data?: MessageSearchTerms): Promise<Message[]> {
        let params = ``;
        params += data?.after ? `&after=${data.after}` : '';
        params += data?.before ? `&before=${data.before}` : '';
        params += data?.around ? `&around=${data.around}` : '';
        return http
            .GET(`/channels/${this.id}/messages?limit=${amount}${params}`)
            .then(raw => raw.data.map(m => new Message(m)));
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
    /**
     * A function to send data to a channel.
     * Works with embeds and normal text messages
     * @example channel.send({content: "fuwa.js rocks!"})
     */
    public send(...messages: MessageForm[]): Promise<Message[]> {
        return Promise.all(
            messages
                .map(msg =>
                    msg.files
                        ? {
                              ...msg,
                              __files__: new FileHandler(
                                  msg.files.map(a => ({ filename: a.name, buffer: a.data }))
                              ),
                          }
                        : msg
                )
                .map(msg =>
                    msg.attachments
                        ? { ...msg, attachments: msg.attachments.map((a, i) => ({ ...a, id: i })) }
                        : msg
                )
                .map(msg =>
                    http
                        .POST(`/channels/${this.id}/messages`, JSON.stringify(msg), {
                            'Content-Type': 'multipart/form-data',
                        })
                        .then(raw => new Message(raw.data))
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
        return http.GET(`/channels/${this.id}/pins`).then(raw => raw.data.map(msg => new Message(msg)));
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
    /**
     * Allows the bot to fetch all base channel information.
     * @param id the ID of the channel.
     * @param force by default we search the bot cache only, but if forced = true it will search the discord api if no channel is in the cache.
     * @returns fuwa.js#Channel
     */
    public static get(id: string, force = false): Promise<Channel> {
        const fallback = () => http.GET(`/channels/${id}`).then(({ data }) => new Channel(data));
        const cache = Globs.cache;
        return force ? fallback() : cache.get(`channels.${id}`, fallback);
    }
}
