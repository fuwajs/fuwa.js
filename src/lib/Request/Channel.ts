import {discordAPI}  from "../_Const";
import axios from "axios"; 

class Channel { 

constructor(private token : string  , private res : any){};
   
    //Gets Channel Through Id
    protected async get(obj  :{channelId  : string }) : Promise<void>{ 
        let channel = obj.channelId ;
        if (!channel) { 
            //Give Some Proper Error Message
            throw new Error("expected one argument got 0");
        }
        let guildid = this.res.guild_id;
        try  { 
            let result = await axios.get(discordAPI.api + "/guilds/" + guildid + "/channels" , {
                method :'GET' , 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": " Bot " + this.token,
                },
            });
                let guildsChannel = result.data.filter(channels => channels.id === channel); 
            return guildsChannel;
        }catch(e){ 
            return e.response.data;
       
        }
    }

    //Gets Channel Through Name
    protected async find(obj : {name ?: string , type ?:string , nsfw? : boolean , position ?: number , category : string  } ) : Promise<void>{
        if (!obj){
            //Give Some Proper Error Message
            throw new Error("expected one argument got 0");
        }
        let channels = {"text": 0 , "dm" : 1, "voice": 2 , "groupdm" : 3 , "category" : 4 , "news" : 5 , "store" : 6};
        obj.type && channels[obj.type] !== undefined ?    obj.type = channels[obj.type] : 0; 
        let guildid = this.res.guild_id; 
        try  { 
            let result = await axios.get(discordAPI.api + "/guilds/" + guildid + "/channels" , {
                method :'GET' , 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": " Bot " + this.token,
                }
            }); 
            if (Object.keys(obj).length ==  0) { 
                return result.data;
            }else {
                let c =  result.data.filter(channels => {
                    let guildChannels : any = obj.name ?  channels.name === obj.name: obj.type ?
                    channels.type === obj.type: obj.nsfw ? channels.nsfw === obj.nsfw: obj.position? channels.position == obj.position: obj.category ? channels.parent_id === obj.category : null;
                    return guildChannels;
                });
                let channel = c.includes(null) ? [] : c;
            return channel;
        }
        } catch(e){ 
            return e.response.data;
        } 
    }
    
    //Creates Channel
    protected async create( obj : {name  : string , type : string  , nsfw? : boolean , position ?: number  ,userLimit : number  , topic : string  , category : string}) { 
        if (!obj.name) { 
            //Give Some Proper Error Message
            throw new Error("expected one argument but got 0 ");
        }
        if (!obj.type) { 
            obj.type = "text";
        }
        let channels = {"text": 0 , "dm" : 1, "voice": 2 , "groupdm" : 3 , "category" : 4 , "news" : 5 , "store" : 6};
        let guildid = this.res.guild_id;
        let typeValue = channels[obj.type];
        let data :any=  {name : obj.name , type : typeValue };
        obj?.nsfw ? data.nsfw =  obj.nsfw :0 ;
        obj?.position ? data.position = obj.position : 0;      
        obj?.userLimit ? data.user_limit = obj.userLimit : 0; 
        obj?.topic  ? data.topic = obj.topic : 0 ;
        obj?.category ? data.parent_id =obj.category  : 0 ;
        //set permissions
        try { 
            let result = await axios(discordAPI.api + "/guilds/" + guildid +"/channels" , {method : "POST" , 
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": " Bot " + this.token,
                },
                data: data
            });
            return result.data;
        }catch(e) { 
            return e.response.data;
        }

    }
        
}



export default Channel;