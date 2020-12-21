import axios  from "axios" ; 
import {embed}  from "./Embed";

class Res {
   protected data : any = {}; 
   constructor(private req : any, private token  :  string ) {};

   /**
    * @param {string | Embed} content Can Send Both Embed And Message With Author Menntion
    * @param {Embed} embed Can Only Send Embed With Author Mention
    */
   async reply(content :string | embed , embed ? : embed ){
      if(typeof content === "string"){
         (this.data.content= "<@" + this.req.author.id + "> " + content ), (this.data. tts = false );

      //embed object
      }else if (typeof content === "object"){
         Object.keys(content).map(el =>{
            if(el === "color") { 
               content[el] === null && el !== "color" ? delete content[el] : 0;
                  if(typeof content.color === "string") { 
                     let colorcode: string = content.color ? 0 + "x" + content.color.split("#")[1]: '0';
                     colorcode !== '0' ? content.color= parseInt(colorcode): content.color = content.color;
                  };
               };
            (this.data.embed = content), (this.data.tts = false) , (this.data.content = "<@"+this.req.author.id + "> ");
         });
      };

      //optional second argument
      if (embed) {
         Object.keys(embed).map((el: any) => {
           embed[el] === null && el !== "color" ? delete embed[el] : 0;
               if (el == "color" && typeof embed.color === "string") {
                  let colorcode: string = embed.color? 0 + "x" + embed.color.split("#")[1]:"0";
                  if (colorcode !== "0") {
                     embed.color = parseInt(colorcode);
                  }
               }
            });
         (this.data.embed = embed), (this.data.tts = false);
      }

      //discord post req
      try { 
      let result = await axios(`https://discord.com/api/v8/channels/${this.req.channel_id}/messages`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               "Authorization": " Bot " + this.token,
            },
            data: this.data,
         }); 
         return result.data;
      }catch(e) { 
         return e.response.data;
      }
   };

    /**
    * @param {string | Embed} content Can Send Both Embed And Message
    * @param {Embed} embed Can Only Send Embed
    */
   async send(content : string | embed  , embed ? : embed ) { 
      if(typeof content === "string"){
         (this.data.content= content ), (this.data. tts = false );

      //embed object
      }else if (typeof content === "object"){
         Object.keys(content).map(el =>{
            if(el === "color") { 
               content[el] === null && el !== "color" ? delete content[el] : 0;
                  if(typeof content.color === "string") { 
                     let colorcode: string = content.color ? 0 + "x" + content.color.split("#")[1]: '0';
                     colorcode !== '0' ? content.color= parseInt(colorcode): content.color = content.color;
                  };
               };
            (this.data.embed = content), (this.data.tts = false);
         });
      };

      //optional
      if (embed) {
         Object.keys(embed).map((el: any) => {
           embed[el] === null && el !== "color" ? delete embed[el] : 0;
            if (el == "color" && typeof embed.color === "string") {
               let colorcode: string = embed.color? 0 + "x" + embed.color.split("#")[1]:"0";
                  if (colorcode !== "0") {
                     embed.color = parseInt(colorcode);
                  }
               }
            });
         (this.data.embed = embed), (this.data.tts = false);
      }

      //discord req
      try { 
      let result = await axios(`https://discord.com/api/v8/channels/${this.req.channel_id}/messages`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               "Authorization": " Bot " + this.token,
            },
            data: this.data,
         }); 
         return result.data;
      }catch(e) { 
         return e.response.data;
      }
   };
}
export default Res;

