import { EmbedOptions } from './Embed';
declare class Res {
    private req;
    private token;
    protected data: any;
    constructor(req: any, token: string);
    /**
     * @param content Can Send Both Embed And Message With Author Menntion
     * @param embed Can Only Send Embed With Author Mention
     */
    reply(content: string | EmbedOptions, embed?: EmbedOptions): Promise<unknown>;
    /**
     * @param content Can Send Both Embed And Message
     * @param embed Can Only Send Embed
     */
    send(content: string | EmbedOptions, embed?: EmbedOptions): Promise<unknown>;
}
export default Res;
