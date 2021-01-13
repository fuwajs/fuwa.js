import Colors from './Colors';
import Embed from './Embed';
import { Message } from './_DiscordAPI';
import undici from './_unicdi';

class Response {
    protected data: Message | any = {};
    constructor(private req: Message, private token: string) { }
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    async reply(content: string | Embed): Promise<unknown> {
        if (typeof content === 'string') { // Just a normal message
            this.data.content = content;
            this.data.tts = false;
            this.data.message_reference = { message_id: this.req.id };
        } else if (content instanceof Embed) {
            if (!content.color) {
                content.color = Colors.rgb(
                    Math.random() * 255, Math.random() * 255, Math.random() * 255
                );
            }
            if (typeof content.color === 'string') {
                content.color = parseInt(
                    '0x' + (content?.color?.split('#')[1] || 'ffffff')
                );
            }
            this.data.embed = content;
            this.data.tts = false;
        } else {
            throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
        }

        return await undici.POST(
            `/api/v8/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        ).catch(e => { console.error(e); } );
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
            if (!content.color) {
                content.color = Colors.rgb(
                    Math.random() * 255, Math.random() * 255, Math.random() * 255
                );
            }
            if (typeof content.color === 'string') {
                content.color = parseInt(
                    '0x' + (content.color.split('#')[1] || 'ffffff')
                );
            }
            this.data.embed = content;
            this.data.tts = false;
        } else {
            // throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            return;
        }
        return await undici.POST(
            `/api/v8/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        ).catch(e => { console.error(e); });
    }

    async react(emoji: string): Promise<any> {
        return undici.PUT(
            `/channels/${this.req.channel_id}/messages/${this.req.id}`
            + `/reactions/${encodeURI(emoji)}/@me`,
            this.token,
            encodeURI(emoji)
        ).catch(e => { console.error(e); });
    }

}
export default Response;