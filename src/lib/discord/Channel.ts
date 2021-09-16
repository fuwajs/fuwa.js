/******************************************************************************
 * @file src/lib/discord/Channel.ts
 * @fileoverview Exports a class implementation of the Channel Interface
 * (IChannel)
 *****************************************************************************/

import http from '../_http';
import {
    Channel as IChannel,
    ChannelProps,
    ChannelTypes,
    Overwrite as IOverwrite,
    User as IUser,
} from '../_DiscordAPI';
import Message from './Message';
import Embed from './Embed';
import { InvalidMessageContent } from '../Errors';
import { sendMSG } from '../_util';

export default class Channel {
    id: string;
    type: ChannelTypes;
    guild_id?: string;
    position?: number;
    permission_overwrites?: IOverwrite[];
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: IUser[];
    icon?: string;
    owner_id?: string;
    application_id?: string;
    parent_id?: string;
    last_pin_timestamp?: Date;

    constructor(data: IChannel) {
        Object.assign(this, data);
    }
    async delete(reason?: string) {
        return await http.DELETE(`/channels/${this.id}`, {
            'X-Audit-Log-Reason': reason,
        });
    }
    async send(content: string | Embed) {
        return new Message(await sendMSG(content, this.id, false));
    }
    async getMessage(id: string) {
        return new Message(
            await http.GET(`/channels/${this.id}/messages/${id}`)
        );
    }
    async modify(data: ChannelProps, reason?: string) {
        return new Channel(
            await http.PATCH(`/channels/${this.id}`, JSON.stringify(data), {
                'X-Audit-Log-Reason': reason,
            })
        );
    }
    async prune(amt: number) {
        const msgs: Message[] = await http
            .GET(`/channels/${this.id}/messages?limit=${amt}`)
            .catch((e) => {
                console.error(e);
            });

        http.POST(
            `/channels/${this.id}/messages/bulk-delete`,
            JSON.stringify({ messages: msgs.map((m) => m.id) })
        ).catch((e) => {
            console.error(e);
        });
    }
}
