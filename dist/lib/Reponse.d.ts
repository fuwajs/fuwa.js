import Embed from './Embed';
import Message from './Message';
interface ResponseMessage {
    /**
     * The contents of the message
     */
    content: string;
    /**
     * Should the message use TextToSpeech
     */
    tts: boolean;
    embed: Embed;
}
declare class Response {
    private req;
    private token;
    protected data: ResponseMessage;
    constructor(req: Message, token: string);
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    reply(content: string | Embed): Promise<unknown>;
    /**
     * @param content The content to send. The content can be a string or an
     * Embed.
     */
    send(content: string | Embed): Promise<unknown>;
}
export default Response;
