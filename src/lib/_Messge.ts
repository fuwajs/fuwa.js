import { Embed } from "./Embed";

export interface file  { 
content :  string ; 
}

export interface allowedMention { 
mentions : "users" | "roles" | "everyone"; 
check? : boolean;
}

export class Message { 
content :  string ;
private nonce : number | string ;
tts  :  boolean; 
file : file; 
embed :Embed;  
allowedMentions: 

}