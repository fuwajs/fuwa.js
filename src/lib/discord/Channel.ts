import { Channel as DiscordChannel, ChannelType, Overwrite, User } from '../_DiscordAPI'

export class Channel implements DiscordChannel {
    id: string;
    type: ChannelType;
    guild_id?: string;
    position?: number;
    permission_overwrites?: Overwrite[];
    name?: string;
    topic?: string;
    nsfw?: boolean;
    last_message_id?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: User[];
    icon?: string;
    owner_id?: string;
    application_id?: string;
    parent_id?: string;
    last_pin_timestamp?: Date;

    constructor(json: DiscordChannel, private token: string, private bot: User) {
        Object.assign(this, json);
    }

}