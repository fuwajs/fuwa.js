import Response from '../Response';
import User from '../User';
import { Reaction as DiscordReaction, Member, Emoji } from '../_DiscordAPI';
import Message from './Message';
export default class Reaction {
    protected token: string;
    protected bot: User;
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    member?: Member;
    emoji: Emoji;
    constructor(json: DiscordReaction, token: string, bot: User);
    /**
     * Get the message the reaction was on
     */
    getMessage(): Promise<Message>;
    getResponse(): Promise<Response>;
}
