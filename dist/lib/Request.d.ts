import User from './discord/User';
import Guild from './discord/Guild';
import { Message as IMessage, Reaction } from './_DiscordAPI';
import Cache from './_Cache';
import Message from './discord/Message';
declare class Request {
    readonly author: User;
    guild: Guild;
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
    constructor(msg: IMessage, cache: Cache, bot: User);
    getGuild(memberLimit?: number): Promise<Guild>;
}
export default Request;
