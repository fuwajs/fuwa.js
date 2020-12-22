import axios from "axios";
import {discordAPI}  from "./_Const";
let channelType = {"text": 0 , "dm" : 1, "voice": 2 , "groupdm" : 3 , "category" : 4 , "news" : 5 , "store" : 6};


export interface permissions { 
    id : string, 
    type :  string , 
    allow :  string [] |  string ,
    deny : string[] |  string 
}
/**
 * @interface channel
 */
export interface channel  {
    /**
     * @description  id  of channel
     */
    id  : string , 
    /**
     * @description type of channel from text |  voice | dm | unknown | 
     * @default  type text
     */
    type :  string , 
    position? :  number | null ,
    name? : string  | null ,
    topic? : string | null , 
    nsfw? :  boolean |  null, 
    permission_overwrites? : Object[] | null, 
    icon? : string | null, 
    owner_id?: string  | null, 
    application_id? :string | null , 
    parent_id? : string | null,
    bitrate? :  number| null,
    user_limit? : number | null ,
    permissionOverwrite? : Object[] | null,
    userLimit?: number | null, 
    applicationId? : string | null,
    ownerId?: string  | null, 
    guild_id ?: string |null,
    guildId ?: string | null , 
    parentId? : string | null,
    rate_limit_per_user?: number |null, 
    rateLimitPerUser ?:  number |null,
    last_pin_timestamp? : string | null
    last_message_id? : string | null,
    lastMessageId?:  string | null , 
    lastPinTimestamp?: string | null,
    edit : Function , 
    delete : Function
}
export class Channel { 
    private object  : channel;  
    private token  : string ;
        constructor(data : channel , token : string ) { 
            this.object = {...data };
            if (this.object.permission_overwrites){
                this.object.permissionOverwrite = this.object.permission_overwrites;
                delete this.object.permission_overwrites;  
            }  
            if (this.object.user_limit) { 
                this.object.userLimit = this.object.user_limit;
                delete this.object.user_limit;
            }
            if (this.object.application_id) { 
                this.object.applicationId = this.object.application_id; 
                delete this.object.application_id;
            }
            if (this.object.owner_id) { 
                this.object.ownerId = this.object.owner_id; 
                delete this.object.owner_id;
            }
            if (this.object.guild_id) { 
                this.object.guildId = this.object.guild_id; 
                delete this.object.guild_id
            }
            if (this.object.parent_id) { 
                this.object.parentId = this.object.parent_id; 
                delete  this.object.parent_id
            }
            if (this.object.rate_limit_per_user !== undefined){ 
                this.object.rateLimitPerUser = this.object.rate_limit_per_user; 
                delete this.object.rate_limit_per_user;
            }
            if (this.object.last_message_id !== undefined) { 
                this.object.lastMessageId = this.object.last_message_id ; 
                delete this.object.last_message_id;
            }
            if (this.object.last_pin_timestamp) { 
                this.object.lastPinTimestamp = this.object.last_pin_timestamp ; 
                delete this.object.last_pin_timestamp ;
            }
            this.token = token;

            Object.defineProperty(this.object , "edit" ,  { enumerable : false , writable : true });
            this.object.edit = async(name  : string , type   : "text" | "news" = "text" , obj ? :{position ?: number ,  category? : string , nsfw? :  boolean , userLimit? : number ,  permissions ?:{id : string , type : string , allow : string[],deny : string[] }[]}) => {
                let data : any= {name : name , type : channelType[type] !== undefined? channelType[type]: "text"}; 
                obj?.position ? data.position = obj.position : 0 ;
                obj?.nsfw ?  data.nsfw  = obj.nsfw : 0;
                obj?.permissions ?  data.permission_overwrites = obj.permissions : 0; 
                obj?.userLimit ?  data.user_limit = obj.userLimit : 0;
                obj?.category  ? data.parent_id = obj.category : 0;
                console.log(data);
                try { 
                let c = await axios(discordAPI.api +  "/channels/" + this.object.id , { method :"PATCH" , headers : {"Authorization" : "Bot " + this.token } , data : data}); 
                let channel =new Channel(c.data , this.token);
                return channel;
                }catch(e) { 
                    return e.response.data.errors.parent_id._errors;
                }
            }
            Object.defineProperty(this.object , "delete" ,{enumerable : false , writable : true } ) ; 
            this.object.delete = async () => {
               try {
                let result = await axios(discordAPI.api +"/channels/" +this.object.id , {method :"DELETE" , headers : {"Authorization" : "Bot " + this.token}}); 
                let channel = new Channel( result.data , this.token);
                return channel;
                }catch(e) { 
                return e.response.data
               }
           } 
        }



        getObj () { 
            return this.object;
        }

}