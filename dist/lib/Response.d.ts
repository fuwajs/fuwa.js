/******************************************************************************
 * @file src/lib/discord/Response.ts
 * @fileoverview Exports the Response class which you can use to reply and
 * react to messages.
 *****************************************************************************/
import Embed from './discord/Embed';
import Message from './discord/Message';
import { Message as IMessage, createRoleProps } from './_DiscordAPI';
import Role from './discord/Role';
declare class Response {
    protected req: IMessage;
    constructor(req: IMessage);
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    reply(content: string | Embed): Promise<Message>;
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    send(content: string | Embed): Promise<Message>;
    /**
     * @param emojis The emoji(s) to send
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     */
    react(emojis: string[] | string, inOrder?: boolean): any;
    createRole(data: createRoleProps): Promise<Role>;
}
export default Response;
