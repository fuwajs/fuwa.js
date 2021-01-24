import Response from '../Response';
import User from '../User';
import {
    Reaction as DiscordReaction,
    Member,
    Emoji
} from '../_DiscordAPI';
import undici from '../_unicdi';
import Message from './Message';

export default class Reaction {
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    member?: Member;
    emoji: Emoji;

    constructor(json: DiscordReaction, protected token: string, protected bot: User) {
        Object.assign(this, json);
    }

    /**
     * Get the message the reaction was on
     */
    async getMessage(): Promise<Message> {
        const json = await undici.GET(
            `/channels/${this.channel_id}
            /messages/${this.message_id}`
        );

        return new Message(json, this.token, this.bot);
    }

    async getResponse(): Promise<Response> {
        return new Response(
            await undici.GET(
                `/channels/${this.channel_id}
                /messages/${this.message_id}`
            ),
            this.token,
            this.bot
        );
    }

}