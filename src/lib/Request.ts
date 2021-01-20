import User from './User';
import http from './_unicdi';
import { Argument } from './Command';
import Guild from './Guild';
import { Message as MessageOptions, Guild as GuildOptions, Reaction } from "./_DiscordAPI";
import Cache from './_Cache';
import Message from './Message';

class Request {
    readonly author: User;
    readonly guild: Guild;
    readonly rawData: MessageOptions;
    readonly message: Message
    /** 
     * An array of the arguments passed into your command
     */
    args: string[];
    readonly reactions: Reaction[];

    constructor(msg: MessageOptions, token: string, cache: Cache, bot: User) {
        this.author = new User(msg.author, token);
        this.rawData = msg;
        this.reactions = msg.reactions;
        this.message = new Message(msg, token, bot);
        this.guild = new Guild(cache.data['guilds'].get(msg.guild_id), token);
    }
    // private async getGuild(guildID: string, token: string) {
    //     let guild = { 
    //         ...await http.GET(`/api/v8/guilds/${guildID}`, token), 
    //         members: await http.GET(`/api/v8/guilds/${guildID}/members?limit=1000`, token),
    //         channels: await http.GET(`/api/v8/guilds/${guildID}/channels`, token),
    //     };
    //     console.log(guild)
    //     this.guild = new Guild(guild);
    // }
}

export default Request;
