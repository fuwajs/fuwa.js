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
import { reactMSG, sendMSG } from './_util';

class Response {
    constructor(protected req: IMessage) {}
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    async reply(content: string | Embed) {
        return new Message(await sendMSG(content, this.req.channel_id, true));
    }
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    async send(content: string | Embed) {
        return new Message(await sendMSG(content, this.req.channel_id, false));
    }

    /**
     * @param emojis The emoji(s) to send
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     */
    react(emojis: string | string[] | Emoji | Emoji[], inOrder?: boolean) {
        reactMSG(emojis, this.req.channel_id, this.req.id, inOrder);
    }
}
export default Response;
