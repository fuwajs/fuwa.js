import User from './User';
import Guild from './Guild';
import { Message as MessageOptions, Guild as GuildOptions } from "./_DiscordAPI";

type Author = {
    id: string
}

type Req = MessageOptions;
class Request {
    author: User;
    guild: Guild;
    message: {
        content: string
    };
    /** 
     * An array of the arguments passed into your command
     */
    args: string[];
    constructor(msg: MessageOptions) {
        this.author = new User(msg.author);
        this.message = { content: msg.content };
        this.guild = new Guild();
    }
}

export default Request;
