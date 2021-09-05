/******************************************************************************
 * @file src/lib/discord/Reaction.ts
 * @fileoverview Exports a class implementation of the Reaction Interface
 * (IReaction)
 *****************************************************************************/

import Response from '../Response';
import User from './User';
import { Reaction as IReaction, Member, Emoji } from '../_DiscordAPI';
import http from '../_http';
import Message from './Message';
export default class Reaction implements IReaction {
    user_id: string;
    channel_id: string;
    message_id: string;
    guild_id?: string;
    member?: Member;
    emoji: Emoji;

    constructor(json: IReaction, protected bot: User) {
        Object.assign(this, json);
    }

    /**
     * Get the message the reaction was on
     */
    async getMessage(): Promise<Message> {
        const json = await http.GET(
            `/channels/${this.channel_id}
            /messages/${this.message_id}`
        );

        return new Message(json, this.bot);
    }

    async getResponse(): Promise<Response> {
        return new Response(
            await http.GET(
                `/channels/${this.channel_id}
                /messages/${this.message_id}`
            ),
            this.bot
        );
    }
}
