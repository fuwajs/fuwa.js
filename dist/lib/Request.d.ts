import User from './discord/User';
import Guild from './discord/Guild';
import { Message as IMessage, Reaction } from './_DiscordAPI';
import Cache from './_Cache';
import Message from './discord/Message';
import Channel from './discord/Channel';
declare class Request {
    protected cache: Cache;
    readonly author: User;
    guild: Guild;
    channel: Channel;
    readonly channel_id: any;
    readonly guild_id: any;
    /**
     * @deprecated This will be removed soon, please add feature requests if you still require this in your applications.
     */
    readonly rawData: IMessage;
    readonly message: Message;
    /**
     * An array of the arguments passed into your command
     */
    args: string[];
    readonly reactions: Reaction[];
    constructor(msg: IMessage, cache: Cache);
    /**
     * To use this function you must have the server list intent enabled, otherwise you will get an error
     * Go to https://discord.com/developers/applications/{YOUR_BOT_ID}/bot and enable
     * server members intents to use.
     * @param memberLimit
     * @returns {Guild}
     */
    getGuild(memberLimit?: number): Promise<Guild>;
    getChannel(): Promise<Channel>;
}
export default Request;
