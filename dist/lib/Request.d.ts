import User from './User';
import Guild from './discord/Guild';
import { Message as IMessage, Reaction } from "./_DiscordAPI";
import Cache from './_Cache';
import Message from './discord/Message';
declare class Request {
    readonly author: User;
    readonly guild: Guild;
    readonly rawData: IMessage;
    readonly message: Message;
    /**
     * An array of the arguments passed into your command
     */
    args: string[];
    readonly reactions: Reaction[];
    constructor(msg: IMessage, token: string, cache: Cache, bot: User);
}
export default Request;
