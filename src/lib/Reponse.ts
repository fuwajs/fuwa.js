import { EmbedOptions } from './Embed';
import undici from './_unicdi';
class Response {
    protected data: unknown = {};
    constructor(private req: Request, private token: string) { }
    /**
     * @param content The message to send. Can be a message or an Embed
     */
    async reply(content: string | EmbedOptions): Promise<unknown> {
        if (typeof content === 'string') {
            this.data.content = '<@' + this.req.author.id + '> ' + content;
            this.data.tts = false;
        } else if (typeof content === 'object') {
            Object.keys(content).map((el) => {
                if (el === 'color') {
                    content[el] === null && el !== 'color'
                        ? delete content[el]
                        : 0;
                    if (typeof content.color === 'string') {
                        const colorcode: string = content.color
                            ? 0 + 'x' + content.color.split('#')[1]
                            : '0';
                        if (colorcode !== '0') content.color = parseInt(colorcode);
                    }
                }

                this.data.embed = content;
                this.data.tts = false;
                this.data.content = '<@' + this.req.author.id + '> ';
            });
        }

        return await undici.OTHER(
            'POST',
            `/api/v8/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        );
    }

    /**
     * @param content The content to send. The content can be a string or an 
     * Embed.
     */
    async send(content: string | EmbedOptions): Promise<unknown> {
        if (typeof content === 'string') { // Just a normal message
            this.data.content = content;
            this.data.tts = false;
        } else if (typeof content === 'object') {
            if (content['color'] === null) {
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
        return await undici.OTHER(
            'POST',
            `/api/v8/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        );
    }

}
export default Response;
