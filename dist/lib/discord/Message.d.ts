import Embed from './Embed';
import User from '../User';
import { Message as DiscordMessage } from '../_DiscordAPI';
declare class Message {
    protected token: string;
    protected bot: User;
    author_id: string;
    guild_id: string;
    channel_id: string;
    embeds: Embed[];
    id: string;
    timestamp: Date;
    content: string;
    constructor(data: DiscordMessage, token: string, bot: User);
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