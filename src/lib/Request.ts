import User from './discord/User';
import Guild from './discord/Guild';
import http from './_http';
import { Message as IMessage, Reaction } from './_DiscordAPI';
import Cache from './_Cache';
import Message from './discord/Message';
import { token } from './_globals';

class Request {
    readonly author: User;
    guild: Guild;
    readonly guild_id;
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

    constructor(msg: IMessage, cache: Cache, bot: User) {
        this.author = new User(msg.author);
        this.rawData = msg;
        this.guild_id = msg.guild_id;
        this.reactions = msg.reactions;
        this.message = new Message(msg, bot);
    }

    async getGuild(memberLimit = 100) {
        let guild = {
            ...(await http.GET(`/guilds/${this.guild_id}`, token)),
            members: await http.GET(
                `/guilds/${this.guild_id}/members?limit=${memberLimit}`
            ),
            channels: await http.GET(`/guilds/${this.guild_id}/channels`),
        };
        console.log(guild.members);
        return (this.guild = new Guild(guild, token));
    }
}

export default Request;
