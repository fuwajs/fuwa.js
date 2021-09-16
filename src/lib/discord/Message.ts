/******************************************************************************
 * @file src/lib/discord/Message.ts
 * @fileoverview Exports a class 'implementation' of the Message Interface
 * (IMessage)
 *****************************************************************************/

import Embed from './Embed';
import User from './User';
import { log } from '../_logger';
import { Emoji, Message as IMessage } from '../_DiscordAPI';
import http from '../_http';
import { bot } from '../_globals';
import { sendMSG, reactMSG } from '../_util';
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
            embeds: data?.embeds?.map((v) => new Embed(v)),
        });
        // ! This can get recursive
        if (data.message_reference) {
            http.GET(
                `/channels/${data.message_reference.channel_id}/messages/${data.message_reference.message_id}`
            ).then((msg) => (this.message_reference = new Message(msg)));
        }
    }
    async reply(content: string | Embed) {
        return new Message(await sendMSG(content, this.channel_id, this.id));
    }
    async edit(content: string | Embed): Promise<Message> {
        const data: any = {};
        if (this.author.id.toString() !== bot.id.toString()) {
            log.error(
                'message edit',
                "Cannot edit a message you didn't send"
            );
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
            await http.PATCH(
                `/channels/${this.channel_id}/messages/${this.id}`,
                JSON.stringify(data)
            )
        );
    }

    delete(): Promise<any> {
        return http
            .DELETE(`/channels/${this.channel_id}/messages/${this.id}`)
            .catch(console.error);
    }
    /**
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     * @param emojis The emoji(s) to send
     */
    react(emojis: string | string[] | Emoji | Emoji[], inOrder?: boolean) {
        reactMSG(emojis, this.channel_id, this.id, inOrder);
    }
}

export default Message;
