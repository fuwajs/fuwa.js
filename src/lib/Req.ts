import Channel from "./Request/Channel";
class Req { 
    protected token  : string; 
    protected res :  Object; 
    protected channel : Channel; 
    constructor (token :  string , res : object) { 
        this.token = token ; 
        this.res= res ; 
        this.channel = new Channel(this.token , this.res ); 
    } 

}
export default Req;