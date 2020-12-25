import {uncidiGet , uncidiOther} from "./unicdi";
import { Channel as _Channel ,  permissions as _Permissions} from "./_Channel";

let channelType = {"text": 0 , "dm" : 1, "voice": 2 , "groupdm" : 3 , "category" : 4 , "news" : 5 , "store" : 6};

class Channel { 
protected channelsArray   : Promise<any> | null = null;
constructor(private token : string  , private res : any){
    this.channelsArray = this.channels();
};
   

protected async channels() : Promise<void | null> {
	let path = `/api/v8/guilds/${this.res.guild_id}/channels` ;
	let channels :any = await uncidiGet( path , this.token);
	let sortedChannels = channels.map(channel => new _Channel(channel , this.token).getObj()) 
	return sortedChannels;
}   



async get(channelid : string): Promise<void | null>{
if (!channelid) { 
	return null     //-> THROW ERROR
}
if (this.channelsArray) { 
	let channels  = await this.channelsArray;
	let c = channels.filter(channel => channel.id === channelid); 
	return c.length == 1 ? c[0] : c; 
	}
}
		

async find(condition: any ) : Promise<void | null>{
	if (!condition) { 
		return null     //-> THROW ERROR
	}
if (this.channelsArray) { 
	let channels  = await this.channelsArray;
	let c = channels.filter(condition); 
	return c.length == 1  ? c[0] : c;  
	}
}
  
async findFirst(condition: any ){
	if (!condition) { 
		return null   //-> THROW ERROR
	}
if (this.channelsArray) { 
	let channels  = await this.channelsArray;
	let  c =  channels.find(condition);
	return c && c.length == 1 ? c[0] : c; 
	}
}
    
async createChannel(name :  string , type : string = "text" ,  obj ? :{position? :number , nsfw? : boolean , topic?: string , permissionOverwrites? :_Permissions ,categoryId? : string , userLimit?: number}) {
	if(!name) { 
		return null   //-> THROW ERROR
	}
	if (channelType[type] === undefined) { 
		return null //-> THROW ERROR
	}
	let guild = this.res.guild_id ;
	let data : any= {name : name , type : channelType[type] };
	obj?.nsfw ? data.nsfw =  obj.nsfw :0 ;
	obj?.position ? data.position = obj.position : 0;      
	obj?.userLimit ? data.user_limit = obj.userLimit : 0; 
	obj?.topic  ? data.topic = obj.topic : 0 ;
	obj?.categoryId ? data.parent_id =obj.categoryId  : 0 ;
	obj?.permissionOverwrites ? data.permission_overwrites = obj.permissionOverwrites : 0;
	let d = JSON.stringify(data);  
	let channel :any= await uncidiOther( "POST", `/api/v8/guilds/${guild}/channels` , this.token ,d);
	let sortedChannel = new _Channel(channel , this.token).getObj(); 
	return sortedChannel;
}
}



export default Channel;