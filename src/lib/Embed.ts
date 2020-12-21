/**
 * Embed Options
 * @interface
 */
export interface embed { 
    
    type? : string ; 
    title? : string; 
    description? : string ; 
    url? : string ; 
    timestamp? : Date; 
    color? : string  | number; 
    footer? : {
        text: string; 
        url :string ; 
        proxy_icon_url  : string;
    }; 
    image? : {
        url : string ; 
        proxy_url : string ; 
        height : Number; 
        width : Number ; 
    }; 
    thumbnail? : {
        url  : string ; 
        proxy_url : string ; 
        height  : Number ; 
        width :  Number ;
    }; 
    video?:{
        url  : string ; 
        proxy_url : string ; 
        height  : number ; 
        width :  number ;
    }; 
    provider? : {
        url  : string ; 
        name: string  ; 
    };
    author?: { 

        proxy_icon_url: string ; 
        url : string ; 
        name:  string ;
    }
    fields? : {name  : string ; value : string , inline :boolean  }[]
}
class Embed  { 
    protected type : string |null = "rich" ; 
    protected title : string | null = null; 
    protected description : string | null = null; 
    protected url : string | null= null; 
    protected timestamp : Date | null = null; 
    protected color : string | Number | null = null; 
    protected footer : {
        text : string; 
        icon_url :string  | null; 
        proxy_icon_url  : string | null;
    }| null = null; 
    protected image : {
        url : string ; 
        proxy_url : string | null; 
        height : Number | null; 
        width : Number | null; 
    } | null = null; 
    protected thumbnail : {
        url  : string ; 
        proxy_url : string|null ; 
        height  : Number |null; 
        width :  Number |null;
    } |null = null; 
    protected video :{
        url  : string ; 
        proxy_url : string| null ; 
        height  : Number |null; 
        width :  Number | null;
    } |null = null; 
    protected provider : {
        url  : string|null ; 
        name: string |null; 
    }| null = null;
    protected author: { 
        proxy_icon_url : string |null; 
        url: string |null; 
        name:  string|null;
    }|null = null;
    protected fields : Object[] |null = null;
   constructor(data:embed | null){
       if (data){ 
       this.type = data.type || "rich"; 
       this.title = data.title ? data.title :  null;
       this.description = data.description? data.description : null; 
       this.url = data.url ? data.url : null;
       this.timestamp = data.timestamp ? data.timestamp :  null; 
       this.color = data.color?  data.color : null; 
       this.footer = data.footer ? {text: data.footer.text , icon_url: data.footer.url ? data.footer.url: null , proxy_icon_url : data.footer.proxy_icon_url ? data.footer.proxy_icon_url : null} : null; 
       this.image = data.image ? {url :  data.image.url , height : data.image.height ? data.image.height : null  , width:  data.image.width ? data.image.width :null , proxy_url : data.image.proxy_url ? data.image.proxy_url : null } :null;
       this.thumbnail = data.thumbnail ? {url :  data.thumbnail.url, height : data.thumbnail.height ? data.thumbnail.height : null , width :  data.thumbnail.width ? data.thumbnail.width : null, proxy_url : data.thumbnail.proxy_url? data.thumbnail.proxy_url : null } : null; 
       this.video = data.video ? {url : data.video.url , height : data.video.height ? data.video.height : null , width :  data.video.width ? data.video.width :null , proxy_url : data.video.proxy_url ? data.video.proxy_url : null}  : null;
       this.author = data.author ? {  name :  data.author.name ? data.author.name : null , url : data.author.url  ? data.author.url : null, proxy_icon_url : data.author.proxy_icon_url ? data.author.proxy_icon_url : null}: null;
       this.provider = data.provider ? {url : data.provider.url?data.provider.url : null , name : data.provider.name ? data.provider.name : null}: null;
       this.fields = data.fields ? data.fields.map(c =>this.fields!.push({name : c.name , value : c.value , inline : c.inline ? true : false})) : null;
       }
    }

    /**
     * @param {string} description  Description For Embed 
     */
    setDescription(description : string ) { 
        this.description = description; 
        return this; 
    }
    /**
     * @param {string} imageUrl Url Of Image In Embed
     * @param  {proxy_url : string  , height : number , width : number } obj Extra Options For Embed  
     */
    setImage(imageUrl : string , obj? : {proxy_url? :string  , height ?:  number  , width ? :number}) { 
        this.image =  {url : imageUrl , proxy_url: obj && obj.proxy_url? obj.proxy_url : null  ,height : obj && obj.height ? obj.height : null, width :  obj && obj.width?obj.width:null }; 
        return this ;
    }
    setTitle (title : string ) { 
        this.title  = title;
        return this;
    }
    setFooter (footertext : string ,obj? : { url? : string , proxy_icon_url?: string}){ 
        this.footer = { text: footertext ,  icon_url: obj && obj.url? obj.url : null ,  proxy_icon_url :obj && obj.proxy_icon_url ? obj.proxy_icon_url:null};
        return this;
    }
    setAuthor(name : string ,obj? : {url?:string , proxy_icon_url ?: string } ) { 
        this.author = {name : name , url : obj && obj.url?obj.url:null, proxy_icon_url : obj &&  obj.proxy_icon_url ? obj.proxy_icon_url : null };
        return this;
    }
    setThumbnail (url : string , obj? : {proxy_url :  string , height : number , width :  number }){ 
        this.thumbnail = {url: url , proxy_url : obj &&  obj.proxy_url ? obj.proxy_url : null , height : obj &&  obj.height ? obj.height : null , width :   obj &&obj.width ?  obj.width : null }; 
        return this;
    }
    setColor(code : string) { 
        this.color = code ; 
        return this;
    }
    setTimestamp() { 
        this.timestamp = new Date()
        return this;
    }
    setUrl(url :  string) { 
        this.url = url;
        return this;
    }
    setType(type : "rich" | "image" | "video" |"gifv" | "article" |"link"){
        this.type = type;
        return this;
    }
    addFields(...fields : Object[]) { 
        this.fields = [...fields];
        return this;
    }
    setProvider(name : string , obj? : {url: string}) { 
        this.provider = {name : name , url: obj &&  obj.url ? obj.url :  null}; 
        return this;
    }
    setVideo(url : string  , obj? : {height :  number , width : number ,proxy_url: string }) { 
        this.video = {url :  url , height :  obj &&  obj.height ? obj.height : null ,  width : obj && obj.width ?  obj.width : null , proxy_url : obj &&obj.proxy_url ? obj.proxy_url : null} 
        return this;
    }
    
    
}


export default Embed;