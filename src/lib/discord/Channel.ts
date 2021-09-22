/******************************************************************************
 * @file src/lib/discord/Channel.ts
 * @fileoverview Exports a class implementation of the Channel Interface
 * (IChannel)
 *****************************************************************************/

import http from '../_http';
import {
    Channel as IChannel,
    ChannelProps,
    ChannelType,
    Message as IMessage,
    Overwrite as IOverwrite,
    User as IUser,
} from '../_DiscordAPI';
import Message from './Message';
import Embed from './Embed';
import { InvalidMessageContent } from '../Errors';

export default class Channel {
    id: string;
    type: ChannelType;
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
        const data: any = {};
        if (typeof content === 'string') {
            // Just a normal message
            data.content = content;
            data.tts = false;
        } else if ((content as any) instanceof Embed) {
            data.embeds = [content];
            data.tts = false;
        } else {
            throw new InvalidMessageContent(
                `type ${typeof content} is not a valid content type`
            );
        }
        return new Message(
            await http.POST(
                `/channels/${this.id}/messages`,
                JSON.stringify(data)
            )
        );
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
    async getPins(): Promise<Message[]> {
        return (
            (await http.GET(`/channels/${this.id}/pins`)) as IMessage[]
        ).map((m) => new Message(m));
    }
    pinMessage(mid: string) {
        return http.PUT(`/channels/${this.id}/pins/${mid}`);
    }
    unpinMessage(mid: string) {
        return http.DELETE(`/channels/${this.id}/pins/${mid}`);
    }
}
