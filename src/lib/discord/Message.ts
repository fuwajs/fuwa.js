/******************************************************************************
 * @file src/lib/discord/Message.ts
 * @fileoverview Exports a class 'implementation' of the Message Interface 
 * (IMessage)
 *****************************************************************************/

import Embed from './Embed';
import User from './User';
import Debug from '../_Debug';
import { Message as IMessage } from '../_DiscordAPI';
import http from '../_http';
// class Message implements IMessage {
class Message {
    author_id: string;
    guild_id: string;
    channel_id: string;
    embeds: Embed[];
    message_reference: Message;
    id: string;
    timestamp: Date;
    content: string;
    constructor(
        data: IMessage,
        protected token: string,
        protected bot: User
    ) {
        Object.assign(this, {
            ...data,
            timestamp: new Date(data?.timestamp),
            embeds: data?.embeds?.map(v => new Embed(v)),
            message_reference: new Message(data, token, bot)

        });
        if(data.message_reference) {
            http.GET(`/channels/${data.message_reference.channel_id}/messages/${data.message_reference.message_id}`)
                .then(msg => this.message_reference = new Message(msg, token, bot))
        } 
    }

    async edit(content: string | Embed): Promise<Message> {
        const data: any = {};
        if (this.author_id.toString() !== this.bot.id.toString())
            new Debug(true).error(
                'message edit',
                'Cannot edit a message you didn\'t send'
            );
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
        return new Message(await http.PATCH(
            `/channels/${this.channel_id}/messages/${this.id}`,
            this.token,
            JSON.stringify(data)
        ), this.token, this.bot);
    }

    delete(): Promise<any> {
        return http.DELETE(
            `/channels/${this.channel_id}/messages/${this.id}`,
            this.token
        ).catch(console.error);
    }
    /**
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     * @param emojis The emoji(s) to send
     */
    react(emojis: string[] | string, inOrder?: boolean) {
        if (typeof emojis === 'string') {
            return http.PUT(
                `/channels/${this.channel_id}/messages/${this.id}`
                + `/reactions/${emojis}/@me`,
                this.token,
            );
        }
        else if (inOrder) {
            return http.PUT(
                `/channels/${this.channel_id}/messages/${this.id}`
                + `/reactions/${encodeURI(emojis[0])}/@me`,
                this.token,
            ).then(() => this.react(emojis.slice(1), true));
        } else {
            const ret: Promise<Message>[] = [];
            emojis.forEach(async e => {
                ret.push(http.PUT(
                    `/channels/${this.channel_id}/messages/${this.id}`
                    + `/reactions/${encodeURI(e)}/@me`,
                    this.token,
                ));
            });
            return ret;
        }
    }
}

export default Message;
