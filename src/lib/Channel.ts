import {discordAPI}  from "./_Const";
import axios from "axios";
import { Channel as _Channel} from "./_Channel";
class Channel { 
 channelsArray   : Promise<any> | null = null;  
constructor(private token : string  , private res : any){
    this.channelsArray = this.channels();
};
   
    //return array of channels in a guild from which we can work on then
    protected async channels() {
        let guild = this.res.guild_id ;
        try { 
            let result = await axios( `${discordAPI.api}/guilds/${guild}/channels` ,{method :"GET" , headers : {"Authorization" : "Bot "+ this.token}});
            let c = result.data.map(channel => new _Channel(channel).getObj());
            return c;
        }catch(e) { 
            return  null;
        }
    }   

    //returns a channel from id 
   async get(channelid : string){
        if (!channelid) { 
            //throw some error TODO
            return null
        }
        if (this.channelsArray) { 
            let channels  = await this.channelsArray;
            return channels.filter(channel => channel.id === channelid); 
        }
    }

    async find(condition: any ){
        if (!condition) { 
            //throw some error TODO
            return null
        }
        if (this.channelsArray) { 
            let channels  = await this.channelsArray;
            return channels.filter(condition); 
        }
    }
    async findFirst(condition: any ){
        if (!condition) { 
            //throw some error TODO
            return null
        }
        if (this.channelsArray) { 
            let channels  = await this.channelsArray;
            return channels.find(condition); 
        }
    }
}



export default Channel;