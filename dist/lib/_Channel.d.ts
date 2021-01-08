import { Channel as _Channel } from './_DiscordAPI';
import { Overwrites as _Overwrites } from './_DiscordAPI';
declare class Channel {
    id: string;
    type: number;
    guildId?: string;
    position?: number;
    name?: string;
    topic?: string;
    nsfw?: boolean;
    lastMessageId?: string;
    bitrate?: number;
    rateLimitPerUser?: number;
    parentId?: string;
    permissionOverwrites: _Overwrites[];
    userLimit?: number;
    constructor(data: _Channel);
    get channel(): this;
}
export default Channel;
