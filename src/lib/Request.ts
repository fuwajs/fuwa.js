import User from './User';
import http from './_unicdi';
import Guild from './Guild';
import { Message as MessageOptions, Guild as GuildOptions } from "./_DiscordAPI";

type Author = {
    id: string
}

type Req = MessageOptions;
class Request {
    readonly author: User;
    guild: Guild;
    readonly message: {
        content: string
    };
    readonly rawData: MessageOptions;
    /** 
     * An array of the arguments passed into your command
     */
    args: string[];
    constructor(msg: MessageOptions, token: string, cache: any) {
      
        this.author = new User(msg.author);
        this.message = { content: msg.content };
        this.rawData = msg;
        // this.getGuild(msg.guild_id, token);
        this.guild = new Guild(cache.guilds.get(msg.guild_id));
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
