import { embed } from "./Embed";
declare class Res {
    private req;
    private token;
    protected data: any;
    constructor(req: any, token: string);
    /**
    * @param {string | Embed} content Can Send Both Embed And Message With Author Menntion
    * @param {Embed} embed Can Only Send Embed With Author Mention
    */
    reply(content: string | embed, embed?: embed): Promise<unknown>;
    /**
    * @param {string | Embed} content Can Send Both Embed And Message
    * @param {Embed} embed Can Only Send Embed
    */
    send(content: string | embed, embed?: embed): Promise<unknown>;
}
export default Res;
