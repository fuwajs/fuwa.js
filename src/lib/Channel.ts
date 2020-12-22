import {discordAPI}  from "./_Const";
import axios from "axios";
import { Channel as _Channel} from "./_Channel";
let channelType = {"text": 0 , "dm" : 1, "voice": 2 , "groupdm" : 3 , "category" : 4 , "news" : 5 , "store" : 6};
class Channel { 
 channelsArray   : Promise<any> | null = null;  
constructor(private token : string  , private res : any){
    this.channelsArray = this.channels();
};
   
    //return array of channels in a guild from which we can work on then
    protected async channels() {
        let guild = this.res.guild_id ;
        try { 
            let result = await axios( `${discordAPI.api}/guilds/${guild}/channels` ,{method :"GET" , headers : {"Authorization" : "Bot "+ this.token }});
            let c = result.data.map(channel => new _Channel(channel , this.token).getObj());
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
            let c = channels.filter(channel => channel.id === channelid); 

            return c.length == 1 ? c[0] : c; 
        }
    }
    //finds a channel 
    async find(condition: any ){
        if (!condition) { 
            //throw some error TODO
            return null
        }
        if (this.channelsArray) { 
            let channels  = await this.channelsArray;
            let c = channels.filter(condition); 
            return c.length == 1  ? c[0] : c;  
        }
    }
    //finds a channel  
    async findFirst(condition: any ){
        if (!condition) { 
            //throw some error TODO
            return null
        }
        if (this.channelsArray) { 
            let channels  = await this.channelsArray;
            let  c =  channels.find(condition);
            return c && c.length == 1 ? c[0] : c; 
        }
    }

    async createChannel(name :  string , type : string = "text" ,  obj ? :{position? :number , nsfw? : boolean , topic?: string , permissionOverwrites? : {id : string  , type :  string  , allow :  string , deny : string}[] ,categoryId? : string , userLimit?: number }){
        if(!name) { 
            //throw some error TODO
            return null
        }
        if (channelType[type] === undefined) { 
            //throw some error
            return null
        }
        let guild = this.res.guild_id ;
        let data : any= {name : name , type : channelType[type] };
        obj?.nsfw ? data.nsfw =  obj.nsfw :0 ;
        obj?.position ? data.position = obj.position : 0;      
        obj?.userLimit ? data.user_limit = obj.userLimit : 0; 
        obj?.topic  ? data.topic = obj.topic : 0 ;
        obj?.categoryId ? data.parent_id =obj.categoryId  : 0 ;
        obj?.permissionOverwrites ? data.permission_overwrites = obj.permissionOverwrites : 0;
        try { 
            let result = await axios(discordAPI.api + "/guilds/" + guild  + "/channels" , {method : "POST" , headers :  {"Authorization" : "Bot " + this.token} , data: data});
            let c = new _Channel(result.data , this.token).getObj();
            return c;
        }catch(e){ 
            return e.response.data;
        }
    }
}



export default Channel;