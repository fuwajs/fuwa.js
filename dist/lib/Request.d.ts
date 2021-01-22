import User from './User';
import Guild from './Guild';
import { Message as MessageOptions, Reaction } from "./_DiscordAPI";
import Cache from './_Cache';
import Message from './Message';
declare class Request {
    readonly author: User;
    readonly guild: Guild;
    readonly rawData: MessageOptions;
    readonly message: Message;
    /**
     * An array of the arguments passed into your command
     */
    args: string[];
    readonly reactions: Reaction[];
    constructor(msg: MessageOptions, token: string, cache: Cache, bot: User);
}
export default Request;
