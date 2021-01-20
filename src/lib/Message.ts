import Embed from './Embed';
import User from './User';
import Debug from './_Debug';
import { Message as MessageOptions } from './_DiscordAPI';
import undici from './_unicdi';
class Message {
    author_id: string;
    guild_id: string;
    channel_id: string;
    embeds: Embed[];
    id: string;
    timestamp: Date;
    content: string;
    constructor(
        data: MessageOptions,
        protected token: string,
        protected bot: User
    ) {
        this.id = data.id;
        this.timestamp = new Date(data.timestamp);
        this.guild_id = data.guild_id;
        this.author_id = data.author.id;
        this.channel_id = data.channel_id;
        this.content = data.content;
        this.embeds = data.embeds.map((v) => new Embed(v));
    }
    
    async edit(content: string | Embed) {
        let data: any = {};
        if (this.author_id !== this.bot.id)
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
    delete() {
        return undici.DELETE(
                `/channels/${this.channel_id}/messages/${this.id}`,
                this.token
            ).catch(console.error);
    }
}

export default Message;
