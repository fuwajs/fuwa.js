declare class Channel {
    private token;
    private res;
    channelsArray: Promise<any> | null;
    constructor(token: string, res: any);
    protected channels(): Promise<any>;
    get(channelid: string): Promise<any>;
    find(condition: any): Promise<any>;
    findFirst(condition: any): Promise<any>;
}
export default Channel;
