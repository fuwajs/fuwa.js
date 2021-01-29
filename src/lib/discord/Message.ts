import Embed from './Embed';
import User from '../User';
import Debug from '../_Debug';
import { Message as DiscordMessage } from '../_DiscordAPI';
import undici from '../_unicdi';
class Message {
    author_id: string;
    guild_id: string;
    channel_id: string;
    embeds: Embed[];
    message_reference: Message;
    id: string;
    timestamp: Date;
    content: string;
    constructor(
        data: DiscordMessage,
        protected token: string,
        protected bot: User
    ) {
        Object.assign(this, {
            ...data,
            timestamp: new Date(data?.timestamp),
            embeds: data?.embeds?.map(v => new Embed(v)),
            message_reference: new Message(data, token, bot)

        });
    }

    async edit(content: string | Embed): Promise<Message> {
        const data: any = {};
        if (this.author_id.toString() !== this.bot.id.toString())
            new Debug(true).error(
                'message edit',
                'Cannot edit a message you didn\'t send'
            );
        if (typeof content === 'string') {
            // Just a normal message
            data.content = content;
            data.tts = false;
        } else if (content instanceof Embed) {
            data.embed = content;
            data.tts = false;
        } else {
            // throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
            return;
        }
        return new Message(await undici.PATCH(
            `/channels/${this.channel_id}/messages/${this.id}`,
            this.token,
            JSON.stringify(data)
        ), this.token, this.bot);
    }

    delete(): Promise<any> {
        return undici.DELETE(
            `/channels/${this.channel_id}/messages/${this.id}`,
            this.token
        ).catch(console.error);
    }

    /**
     * @param inOrder Should the emojis be sent in order. Note that this function
     * is recursive with this option set.
     * @param emojis The emoji(s) to send
     */
    react(emojis: string[] | string, inOrder?: boolean) {
        if (typeof emojis === 'string') {
            return undici.PUT(
                `/channels/${this.channel_id}/messages/${this.id}`
                + `/reactions/${emojis}/@me`,
                this.token,
            );
        }
        else if (inOrder) {
            return undici.PUT(
                `/channels/${this.channel_id}/messages/${this.id}`
                + `/reactions/${encodeURI(emojis[0])}/@me`,
                this.token,
            ).then(() => this.react(emojis.slice(1), true));
        } else {
            const ret: Promise<Message>[] = [];
            emojis.forEach(async e => {
                ret.push(undici.PUT(
                    `/channels/${this.channel_id}/messages/${this.id}`
                    + `/reactions/${encodeURI(e)}/@me`,
                    this.token,
                ));
            });
            return ret;
        }
    }
}

export default Message;
