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
    reply(content: string | Embed): Promise<Message> {
        if (typeof content === 'string') { // Just a normal message
            this.data.content = content;
            this.data.tts = false;
            this.data.message_reference = { message_id: this.req.id };
        } else if (content instanceof Embed) {
            this.data.embed = content;
            this.data.tts = false;
        } else {
            throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
        }

        return undici.POST(
            `/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        ).catch(console.error);
    }

    /**
     * @param content The content to send. The content can be a string or an 
     * Embed.
     */
    send(content: string | Embed): Promise<any> {
        if (typeof content === 'string') { // Just a normal message
            this.data.content = content;
            this.data.tts = false;
        } else if (content instanceof Embed) {
            this.data.embed = content;
            this.data.tts = false;
        } else {
            // throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            return;
        }
        return undici.POST(
            `/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        ).catch(console.error);
    }

    /**
     * @param emojis The emoji(s) to send
     */
    async react(...emojis: string[]) {
        emojis.forEach(async e => {
            await undici.PUT(
                `/channels/${this.req.channel_id}/messages/${this.req.id}`
                + `/reactions/${encodeURI(e)}/@me`,
                this.token,
                JSON.stringify(emojis.map(e => encodeURI(e)))
            );
        });
        return this;
    }

}
export default Response;