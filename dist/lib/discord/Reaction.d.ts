/******************************************************************************
 * @file src/lib/discord/Reaction.ts
 * @fileoverview Exports a class implementation of the Reaction Interface
 * (IReaction)
 *****************************************************************************/
import Response from '../Response';
import { Reaction as IReaction, Member, Emoji } from '../_DiscordAPI';
import Message from './Message';
export default class Reaction implements IReaction {
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    member?: Member;
    emoji: Emoji;
    constructor(json: IReaction);
    /**
     * Get the message the reaction was on
     */
    getMessage(): Promise<Message>;
    getResponse(): Promise<Response>;
}
