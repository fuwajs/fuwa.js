import User from './User';
import Guild from './Guild';
import { Message as MessageOptions } from "./_DiscordAPI";
declare class Request {
    readonly author: User;
    readonly guild: Guild;
    readonly message: {
        content: string;
    };
    readonly rawData: MessageOptions;
    /**
     * An array of the arguments passed into your command
     */
    args: string[];
    constructor(msg: MessageOptions);
}
export default Request;
