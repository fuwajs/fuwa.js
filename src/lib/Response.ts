import Embed from './Embed';
import { Message } from './_DiscordAPI';
import undici from './_unicdi';

class Response {
    protected data: any = {};
    constructor(private req: Message, private token: string) { }
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    async reply(content: string | Embed): Promise<unknown> {
        if (typeof content === 'string') { // Just a normal message
            this.data.content = content;
            this.data.tts = false;
        } else if (content instanceof Embed) {
            if (!content['color']) {
                delete content['color'];
                throw new TypeError(`content: ${content} is missing member 'color'`);
            }
            if (typeof content.color === 'string') {
                content.color = parseInt(
                    '0x' + (content.color.split('#')[1] || 'ffffff')
                );
            }
            this.data.embed = content;
            this.data.tts = false;
        } else {
            throw new TypeError(`Expected type 'string | EmbedOptions' instead found ${typeof content}`);
        }

        return await undici.POST(
            `/api/v8/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        );
    }

    /**
     * @param content The content to send. The content can be a string or an 
     * Embed.
     */
    async send(content: string | Embed): Promise<unknown> {
        if (typeof content === 'string') { // Just a normal message
            this.data.content = content;
            this.data.tts = false;
        } else if (content instanceof Embed) {
            if (!content['color']) {
                delete content['color'];
                throw new TypeError(`content: ${content} is missing member 'color'`);
            }
            if (typeof content.color === 'string') {
                content.color = parseInt(
                    '0x' + (content.color.split('#')[1] || 'ffffff')
                );
            }
            this.data.embed = content;
            this.data.tts = false;
        } else {
            throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
        }
        return await undici.OTHER(
            'POST',
            `/api/v8/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        );
    }
}
export default Response;
