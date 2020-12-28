import { EmbedOptions } from './Embed';
import { uncidiOther } from './unicdi';
class Res {
    protected data: any = {};
    constructor(private req: any, private token: string) {}
    /**
     * @param {string | Embed} content Can Send Both Embed And Message With Author Menntion
     * @param {Embed} embed Can Only Send Embed With Author Mention
     */
    async reply(content: string | EmbedOptions, embed?: EmbedOptions) {
        if (typeof content === 'string') {
            (this.data.content = '<@' + this.req.author.id + '> ' + content),
                (this.data.tts = false);
        } else if (typeof content === 'object') {
            Object.keys(content).map((el) => {
                if (el === 'color') {
                    content[el] === null && el !== 'color'
                        ? delete content[el]
                        : 0;
                    if (typeof content.color === 'string') {
                        let colorcode: string = content.color
                            ? 0 + 'x' + content.color.split('#')[1]
                            : '0';
                        colorcode !== '0'
                            ? (content.color = parseInt(colorcode))
                            : (content.color = content.color);
                    }
                }
                (this.data.embed = content),
                    (this.data.tts = false),
                    (this.data.content = '<@' + this.req.author.id + '> ');
            });
        }

        if (embed) {
            Object.keys(embed).map((el: any) => {
                embed[el] === null && el !== 'color' ? delete embed[el] : 0;
                if (el === 'color' && typeof embed.color === 'string') {
                    let colorcode: string = embed.color
                        ? 0 + 'x' + embed.color.split('#')[1]
                        : '0';
                    if (colorcode !== '0') {
                        embed.color = parseInt(colorcode);
                    }
                }
            });
            (this.data.embed = embed), (this.data.tts = false);
        }

        let result = await uncidiOther(
            'POST',
            `/api/v8/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        );
        return result;
    }

    /**
     * @param {string | Embed} content Can Send Both Embed And Message
     * @param {Embed} embed Can Only Send Embed
     */

    async send(content: string | EmbedOptions, embed?: EmbedOptions) {
        if (typeof content === 'string') {
            (this.data.content = content), (this.data.tts = false);
        } else if (typeof content === 'object') {
            Object.keys(content).map((el) => {
                if (el === 'color') {
                    content[el] === null && el !== 'color'
                        ? delete content[el]
                        : 0;
                    if (typeof content.color === 'string') {
                        let colorcode: string = content.color
                            ? 0 + 'x' + content.color.split('#')[1]
                            : '0';
                        colorcode !== '0'
                            ? (content.color = parseInt(colorcode))
                            : (content.color = content.color);
                    }
                }
                (this.data.embed = content), (this.data.tts = false);
            });
        }

        if (embed) {
            Object.keys(embed).map((el: any) => {
                embed[el] === null && el !== 'color' ? delete embed[el] : 0;
                if (el == 'color' && typeof embed.color === 'string') {
                    let colorcode: string = embed.color
                        ? 0 + 'x' + embed.color.split('#')[1]
                        : '0';
                    if (colorcode !== '0') {
                        embed.color = parseInt(colorcode);
                    }
                }
            });
            (this.data.embed = embed), (this.data.tts = false);
        }

        let result = await uncidiOther(
            'POST',
            `/api/v8/channels/${this.req.channel_id}/messages`,
            this.token,
            JSON.stringify(this.data)
        );
        return result;
    }
}
export default Res;
