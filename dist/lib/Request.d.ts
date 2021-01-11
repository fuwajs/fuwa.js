import User from './User';
import Guild from './Guild';
import { Message as MessageOptions } from "./_DiscordAPI";
declare class Request {
    author: User;
    guild: Guild;
    message: {
        content: string;
    };
    /**
     * An array of the arguments passed into your command
     */
    args: string[];
    constructor(msg: MessageOptions);
}
export default Request;
