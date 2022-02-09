import { Message } from './Message';
import { Channel as ChannelData, ChannelType } from '../../interfaces/channel';
import http from '../structures/internet/http';
import Globs from '../../util/Global';
import { enumPropFinder } from '../../util';
import { MessageReference } from '../../interfaces';
import { Embed } from '.';
import { Form } from '../structures/internet/FormData';
import { File } from '../structures/handlers/FileHandler';

export async function messageToForm(msg: MessageForm): Promise<Form> {
    const form = new Form();
    if (msg.files) {
        await Promise.all(
            msg.files.map((file, i) =>
                form.append(`files[${i}]`, file.data, {
                    // contentType: 'image/png',
                    headers: { filename: file.name },
                })
            )
        );
        delete msg.files;
        await form.append('payload_json', msg);
    } else {
        for (const key in msg) {
            await form.append(key, msg[key]);
        }
    }
    return form;
}
export async function makeMessagePayload(message: MessageForm) {
    return await messageToForm(
        (message = message.attachments
            ? { ...message, attachments: message.attachments.map((a, i) => ({ ...a, id: i })) }
            : message)
    );
}

export type MessageSearchTerms = {
    around?: string;
    after?: string;
    before?: string;
    amount?: number;
};

export interface MessageForm {
    content?: string;
    tts?: boolean;
    files?: File[];
    embeds?: Embed[];
    // allowed_mentions?: AllowedMention[];
    attachments?: { filename: string; description: string }[];
    message_reference?: MessageReference;
    // components?: MessageComponent[];
}

/**
 * The base Channel class to interact with discord's api.
 * @since 1.0.0
 */
export class Channel {
    constructor(protected data: ChannelData) {
        if (data) {
            const cache = Globs.cache;
            cache.set(`channels.${data.id}`, this);
        }
    }
    public type = enumPropFinder<typeof ChannelType>(this.data?.type, ChannelType);
    /**
     * Fetch Messages from a channel.
     * @param amount the amount of messages to fetch. defaults to 50.
     * @param data
     * @returns a map of messages from the channel.
     */
    public getMessages(amount = 50, data?: MessageSearchTerms): Promise<Message[]> {
        let params = ``;
        params += data?.after ? `&after=${data.after}` : '';
        params += data?.before ? `&before=${data.before}` : '';
        params += data?.around ? `&around=${data.around}` : '';
        return http
            .GET(`/channels/${this.id}/messages?limit=${amount}${params}`)
            .then(raw => raw.data.map(m => new Message(m)));
    }
    /** Returns the id of a channel. */
    public get id() {
        return this.data.id;
    }
    public toString() {
        return `<#${this.id}>`;
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
    /** Checks if the channel is nsfw or not.
     * @returns boolean */
    public get isNSFW() {
        return this.data.nsfw ?? false;
    }
    /** The position of the channel in the guild. */
    public get position() {
        return this.data.position;
    }
    /**
     * Checks if the channel is a of type 'DM'
     * @returns boolean
     */
    public get isDM() {
        return ((this.type as any) || '') === 'Dm';
    }
    /**
     * A function to send data to a channel.
     * Works with embeds and normal text messages.
     * @example
     * ```typescript
     * channel.send({content: "Leave a star on Fuwa.js!"})
     * ```
     */
    public async send(message: MessageForm): Promise<Message> {
        return http
            .POST(`/channels/${this.id}/messages`, await makeMessagePayload(message), {
                'Content-Type': 'multipart/form-data',
            })
            .then(raw => new Message(raw.data));
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
     * Allows the API to fetch all base channel information.
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
