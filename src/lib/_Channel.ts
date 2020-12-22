export interface channel  {
    id  : string , 
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

}
export class Channel { 
    private object  : channel;  
        constructor(data : channel) { 
            this.object = {...data};
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
            //this is not working dn't know why
            if (this.object.rate_limit_per_user){ 
                this.object.rateLimitPerUser = this.object.rate_limit_per_user; 
                delete this.object.rate_limit_per_user;
            }
            if (this.object.last_message_id) { 
                this.object.lastMessageId = this.object.last_message_id ; 
                delete this.object.last_message_id;
            }
            if (this.object.last_pin_timestamp) { 
                this.object.lastPinTimestamp = this.object.last_pin_timestamp ; 
                delete this.object.last_pin_timestamp ;
            }
        }

        getObj () { 
            return this.object;
        }
}