/******************************************************************************
 * @file src/lib/discord/Channel.ts
 * @fileoverview Exports a class implementation of the Channel Interface 
 * (IChannel)
 *****************************************************************************/

import {
    Channel as IChannel,
    ChannelType,
    Overwrite as IOverwrite,
    User as IUser
} from '../_DiscordAPI'

export class Channel implements IChannel {
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

    constructor(json: IChannel, private token: string, private bot: IUser) {
        Object.assign(this, json);
    }
}