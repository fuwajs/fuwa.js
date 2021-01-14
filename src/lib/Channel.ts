import undici from './_unicdi';
import {
    Channel as DiscordChannel,
    ChannelType,
    Overwrite,
    User
} from './_DiscordAPI';

class Channel implements DiscordChannel {
    id: string;
    type: ChannelType;
    guild_id?: string;
    position?: number;
    permission_overwrites?: Overwrite[];
    name?: string;
    topic?: string | null;
    nsfw?: boolean;
    last_message_id?: string;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: User[];
    icon?: string | null;
    owner_id?: string;
    application_id?: string;
    parent_id?: string | null;
    last_pin_timestamp?: Date | null;

    constructor(opts?: DiscordChannel) {
        if(opts) {
            Object.assign(this, opts);
            // this.id = opts?.id;
            // this.type = opts?.type;
            // this.guild_id = opts?.guild_id;
            // this.position = opts?.position;
            // this.permission_overwrites = opts.permission_overwrites;
            // this.name = opts.name;
            // this.topic = 
            // this.nsfw = 
            // this.last_message_id =
            // this.bitrate = 
            // this.user_limit =
            // this.rate_limit_per_user =
            // this.recipients =
            // this.icon =
            // this.owner_id
            // this.application_id =
            // this.parent_id
            // this.last_pin_timestamp
        }
        
    }
}

export default Channel;
