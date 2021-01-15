import User from './User';
import Guild from './Guild';
import { Message as MessageOptions, Reaction } from "./_DiscordAPI";
import Cache from './_Cache';
declare class Request {
    readonly author: User;
    guild: Guild;
    readonly message: {
        content: string;
    };
    readonly rawData: MessageOptions;
    /**
     * An array of the arguments passed into your command
     */
    args: string[];
    readonly reactions: Reaction[];
    constructor(msg: MessageOptions, token: string, cache: Cache);
}
export default Request;
