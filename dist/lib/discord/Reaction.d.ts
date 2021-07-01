/******************************************************************************
 * @file src/lib/discord/Reaction.ts
 * @fileoverview Exports a class implementation of the Reaction Interface
 * (IReaction)
 *****************************************************************************/
import Response from '../Response';
import User from './User';
import { Reaction as IReaction, Member, Emoji } from '../_DiscordAPI';
import Message from './Message';
export default class Reaction implements IReaction {
    protected token: string;
    protected bot: User;
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    member?: Member;
    emoji: Emoji;
    constructor(json: IReaction, token: string, bot: User);
    /**
     * Get the message the reaction was on
     */
    getMessage(): Promise<Message>;
    getResponse(): Promise<Response>;
}
