declare class Channel {
    private token;
    private res;
    channelsArray: Promise<any> | null;
    constructor(token: string, res: any);
    protected channels(): Promise<any>;
    get(channelid: string): Promise<any>;
    find(condition: any): Promise<any>;
    findFirst(condition: any): Promise<any>;
    createChannel(name: string, type?: string, obj?: {
        position?: number;
        nsfw?: boolean;
        topic?: string;
        permissionOverwrites?: {
            id: string;
            type: string;
            allow: string;
            deny: string;
        }[];
        categoryId?: string;
        userLimit?: number;
    }): Promise<any>;
}
export default Channel;
