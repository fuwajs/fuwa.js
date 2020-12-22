import Channel from "./Channel";
class Req { 
    protected token  : string; 
    protected res :  Object; 
    protected channel : any; 
    constructor (token :  string , res : object) {
        this.token = token ; 
        this.res= res ;
        let channel = new Channel(this.token, this.res); 
        this.channel = { 
          get :channel.get.bind(channel), 
          find :  channel.find.bind(channel), 
          findFirst:  channel.findFirst.bind(channel)
        }
    }

}
export default Req;