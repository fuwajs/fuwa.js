import Embed from './Embed';
import Message from './Message';
import User from './User';
import { Message as MessageOptions } from './_DiscordAPI';
declare class Response {
    protected req: MessageOptions;
    protected token: string;
    protected bot: User;
    protected data: MessageOptions | any;
    constructor(req: MessageOptions, token: string, bot: User);
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    reply(content: string | Embed): Promise<MessageOptions>;
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    send(content: string | Embed): Promise<Message>;
    /**
     * @param emojis The emoji(s) to send
     */
    react(...emojis: string[]): Promise<this>;
}
export default Response;
