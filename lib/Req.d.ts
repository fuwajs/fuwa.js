import Channel from "./Request/Channel";
declare class Req {
    protected token: string;
    protected res: Object;
    protected channel: Channel;
    constructor(token: string, res: object);
}
export default Req;
