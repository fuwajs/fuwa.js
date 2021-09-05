/******************************************************************************
 * @file src/lib/discord/Message.ts
 * @fileoverview Exports a class 'implementation' of the Message Interface
 * (IMessage)
 *****************************************************************************/
import Embed from './Embed';
import User from './User';
import { Message as IMessage } from '../_DiscordAPI';
declare class Message {
    author: User;
    guild_id: string;
    channel_id: string;
    embeds: Embed[];
    message_reference: Message;
    id: string;
    timestamp: Date;
    content: string;
    constructor(data: IMessage);
    edit(content: string | Embed): Promise<Message>;
    delete(): Promise<any>;
    /**
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     * @param emojis The emoji(s) to send
     */
    react(emojis: string[] | string, inOrder?: boolean): any;
}
export default Message;
