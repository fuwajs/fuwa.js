/******************************************************************************
 * @file src/lib/discord/Message.ts
 * @fileoverview Exports a class 'implementation' of the Message Interface
 * (IMessage)
 *****************************************************************************/

import Embed from './Embed';
import User from './User';
import Debug from '../_Debug';
import { Emoji, Message as IMessage } from '../_DiscordAPI';
import http from '../_http';
import { bot } from '../_globals';
// class Message implements IMessage {
class Message {
    author: User;
    guild_id: string;
    channel_id: string;
    embeds: Embed[];
    message_reference: Message;
    id: string;
    timestamp: Date;
    content: string;
    constructor(data: IMessage) {
        Object.assign(this, {
            ...data,
            author: new User(data.author),
            timestamp: new Date(data?.timestamp),
            embeds: data?.embeds?.map(v => new Embed(v)),
        });
        // ! This can get recursive
        if (data.message_reference) {
            http.GET(
                `/channels/${data.message_reference.channel_id}/messages/${data.message_reference.message_id}`
            ).then(msg => (this.message_reference = new Message(msg)));
        }
    }

    async edit(content: string | Embed): Promise<Message> {
        const data: any = {};
        if (this.author.id.toString() !== bot.id.toString()) {
            new Debug(true).error('message edit', "Cannot edit a message you didn't send");
            return;
        }
        if (typeof content === 'string') {
            // Just a normal message
            data.content = content;
            data.tts = false;
        } else if (content instanceof Embed) {
            data.embed = content;
            data.tts = false;
        } else {
            // throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            return;
        }
        return new Message(
            await http.PATCH(`/channels/${this.channel_id}/messages/${this.id}`, JSON.stringify(data))
        );
    }

    delete(): Promise<any> {
        return http.DELETE(`/channels/${this.channel_id}/messages/${this.id}`).catch(console.error);
    }
    pin() {
        return http.PUT(`/channels/${this.channel_id}/pins/${this.id}`);
    }
    unpin() {
        return http.DELETE(`/channels/${this.channel_id}/pins/${this.id}`);
    }
    /**
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     * @param emojis The emoji(s) to send
     */
    react(emojis: string[] | string | Emoji | Emoji[], inOrder?: boolean) {
        let isId = false;
        // @ts-ignore
        if (typeof emojis.id !== 'undefined') {
            isId = true;
            emojis = Array.isArray(emojis) ? emojis.map(e => e.id) : emojis;
        }
        if (typeof emojis === 'string') {
            return http.PUT(`/channels/${this.channel_id}/messages/${this.id}` + `/reactions/${emojis}/@me`);
        } else if (inOrder && Array.isArray(emojis)) {
            return http
                .PUT(
                    `/channels/${this.channel_id}/messages/${this.id}` +
                        `/reactions/${isId ? emojis : encodeURI(emojis[0] as any)}/@me`
                )
                .then(() => this.react((emojis as any).slice(1), true));
        } else {
            const ret: Promise<Message>[] = [];
            (emojis as any).forEach(async e => {
                ret.push(
                    http.PUT(
                        `/channels/${this.channel_id}/messages/${this.id}` +
                            `/reactions/${isId ? emojis : encodeURI(e)}/@me`
                    )
                );
            });
            return ret;
        }
    }
}

export default Message;
