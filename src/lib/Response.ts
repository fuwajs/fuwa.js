import Embed from './discord/Embed';
import Message from './discord/Message';
import User from './User';
import { Message as MessageOptions } from './_DiscordAPI';
import undici from './_unicdi';

class Response {
    protected data: MessageOptions | any = {};
    constructor(protected req: MessageOptions, protected token: string, protected bot: User) { }
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    reply(content: string | Embed): Promise<MessageOptions> {
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
    async send(content: string | Embed): Promise<Message> {
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
        return new Message(await undici.POST(
            `/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        ), this.token, this.bot);

    }

    /**
     * @param emojis The emoji(s) to send
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     */
    async react(emojis: string[] | string, inOrder?: boolean) {
        if (typeof emojis === 'string') {
            return undici.PUT(
                `/channels/${this.req.channel_id}/messages/${this.req.id}`
                + `/reactions/${emojis}/@me`,
                this.token,
            );
        }
        else if (inOrder) {
            return undici.PUT(
                `/channels/${this.req.channel_id}/messages/${this.req.id}`
                + `/reactions/${encodeURI(emojis[0])}/@me`,
                this.token,
            ).then(_ => this.react(emojis.slice(1), true));
        } else {
            const ret = [];
            emojis.forEach(async e => {
                ret.push(undici.PUT(
                    `/channels/${this.req.channel_id}/messages/${this.req.id}`
                    + `/reactions/${encodeURI(e)}/@me`,
                    this.token,
                ));
            });
            return ret;
        }
    }

}
export default Response;