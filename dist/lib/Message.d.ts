import Embed from './Embed';
import User from './User';
import { Message as MessageOptions } from './_DiscordAPI';
declare class Message {
    protected token: string;
    protected bot: User;
    author_id: string;
    guild_id: string;
    channel_id: string;
    embeds: Embed[];
    id: string;
    content: string;
    constructor(data: MessageOptions, // NO PROMISE BRO ????????? how to use promise in constructor?
    token: string, bot: User);
    edit(content: string | Embed): Promise<Message>;
    delete(): Promise<any>;
}
export default Message;
