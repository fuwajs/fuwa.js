import User from './discord/User';
import Guild from './discord/Guild';
import http from './_http';
import { Message as IMessage, Reaction } from './_DiscordAPI';
import Cache from './_Cache';
import Message from './discord/Message';
import { token } from './_globals';
import { Channel } from './discord/Channel';

class Request {
    readonly author: User;
    guild: Guild;
    channel: Channel;
    readonly channel_id;
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

    constructor(msg: IMessage, protected cache: Cache) {
        this.author = new User(msg.author);
        this.rawData = msg;
        this.guild_id = msg.guild_id;
        this.channel_id = msg.channel_id;
        this.reactions = msg.reactions;
        this.message = new Message(msg);
    }
    /**
     * To use this function you must have the server list intent enabled, otherwise you will get an error
     * Go to https://discord.com/developers/applications/{YOUR_BOT_ID}/bot and enable
     * server members intents to use.
     * @param memberLimit
     * @returns {Guild}
     */
    async getGuild(memberLimit = 100) {
        let guild = {
            ...(await http.GET(`/guilds/${this.guild_id}`)),
            members: await http.GET(
                `/guilds/${this.guild_id}/members?limit=${memberLimit}`
            ),
            channels: await http.GET(`/guilds/${this.guild_id}/channels`),
        };
        const guildClass = new Guild(guild);
        this.cache.cache('guilds', guildClass);
        return (this.guild = guildClass);
    }
    async getChannel() {
        return (this.channel = new Channel(
            await http.GET(`/channel/${this.channel_id}`)
        ));
    }
}

export default Request;
