/******************************************************************************
 * @file src/lib/discord/Response.ts
 * @fileoverview Exports the Response class which you can use to reply and
 * react to messages.
 *****************************************************************************/

import Embed from './discord/Embed';
import Message from './discord/Message';
import User from './discord/User';
import { Emoji } from './_DiscordAPI';
import { Message as IMessage, Role as IRole, RoleProps } from './_DiscordAPI';
import http from './_http';
import Role from './discord/Role';

class Response {
    constructor(protected req: IMessage) {}
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    async reply(content: string | Embed) {
        const data: any = {};
        if (typeof content === 'string') {
            // Just a normal message
            data.content = content;
            data.tts = false;
            data.message_reference = { message_id: this.req.id };
        } else if (content instanceof Embed) {
            data.embed = content;
            data.tts = false;
        } else {
            throw new TypeError(
                `Expected type 'string | Embed' instead found ${typeof content}`
            );
        }

        return new Message(
            await http.POST(
                `/channels/${this.req.channel_id}/messages`,
                JSON.stringify(data)
            )
        );
    }
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    async send(content: string | Embed) {
        const data: any = {};
        if (typeof content === 'string') {
            // Just a normal message
            data.content = content;
            data.tts = false;
        } else if (content instanceof Embed) {
            data.embed = content;
            data.tts = false;
        } else {
            throw new TypeError(
                `Expected type 'string | Embed' instead found ${typeof content}`
            );
        }

        return new Message(
            await http.POST(
                `/channels/${this.req.channel_id}/messages`,
                JSON.stringify(data)
            )
        );
    }

    /**
     * @param emojis The emoji(s) to send
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     */

    async react(
        emojis: string[] | string | Emoji | Emoji[],
        inOrder?: boolean
    ): Promise<any> {
        let isId = false;
        if (
            // prettier-ignore
            (emojis &&
                (Array.isArray(emojis) &&
                // @ts-ignore
                typeof emojis[0].id !== 'undefined')) ||
            // @ts-ignore
            typeof emojis?.id !== 'undefined'
        ) {
            isId = true;
            emojis = Array.isArray(emojis) ? emojis.map((e) => e.id) : emojis;
        }
        console.log(emojis);
        console.log(
            `\n\n/channels/${this.req.channel_id}/messages/${this.req.id}` +
                `/reactions/${emojis}/@me`
        );
        if (typeof emojis === 'string') {
            return http.PUT(
                `/channels/${this.req.channel_id}/messages/${this.req.id}` +
                    `/reactions/${emojis}/@me`
            );
        } else if (inOrder && Array.isArray(emojis)) {
            return http
                .PUT(
                    `/channels/${this.req.channel_id}/messages/${this.req.id}` +
                        `/reactions/${
                            isId ? emojis : encodeURI(emojis[0] as any)
                        }/@me`
                )
                .then(() => this.react((emojis as any).slice(1), true));
        } else if (Array.isArray(emojis)) {
            const ret: Promise<Message>[] = [];
            emojis.forEach(async (e) => {
                ret.push(
                    http.PUT(
                        `/channels/${this.req.channel_id}/messages/${this.req.id}` +
                            `/reactions/${isId ? emojis : encodeURI(e)}/@me`
                    )
                );
            });
            return ret;
        }
    }
}

export default Response;
