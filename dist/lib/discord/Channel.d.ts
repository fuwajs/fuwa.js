/******************************************************************************
 * @file src/lib/discord/Channel.ts
 * @fileoverview Exports a class implementation of the Channel Interface
 * (IChannel)
 *****************************************************************************/
import { Channel as IChannel, ChannelType, Overwrite as IOverwrite, User as IUser } from '../_DiscordAPI';
import Message from './Message';
import Embed from './Embed';
export declare class Channel {
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
    constructor(data: IChannel);
    delete(reason?: string): Promise<any>;
    send(content: string | Embed): Promise<Message>;
    getMessage(id: string): Promise<Message>;
    modify(data: IChannel, reason?: string): Promise<Channel>;
}
