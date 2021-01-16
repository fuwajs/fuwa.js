import Embed from './Embed';
import { Message } from './_DiscordAPI';
declare class Response {
    private req;
    private token;
    protected data: Message | any;
    constructor(req: Message, token: string);
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    reply(content: string | Embed): Promise<Message>;
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    send(content: string | Embed): Promise<any>;
    /**
     * @param emojis The emoji(s) to send
     * @returns Another Response so you can chain reactions
     */
    react(...emojis: string[]): this;
}
export default Response;
