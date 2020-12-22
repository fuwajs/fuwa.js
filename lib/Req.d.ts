declare class Req {
    protected token: string;
    protected res: Object;
    protected channel: any;
    constructor(token: string, res: object);
}
export default Req;
