import { permissions as _Permissions } from "./_Channel";
declare class Channel {
    private token;
    private res;
    protected channelsArray: Promise<any> | null;
    constructor(token: string, res: any);
    protected channels(): Promise<void | null>;
    get(channelid: string): Promise<void | null>;
    find(condition: any): Promise<void | null>;
    findFirst(condition: any): Promise<any>;
    createChannel(name: string, type?: string, obj?: {
        position?: number;
        nsfw?: boolean;
        topic?: string;
        permissionOverwrites?: _Permissions;
        categoryId?: string;
        userLimit?: number;
    }): Promise<import("./_Channel").channel | null>;
}
export default Channel;
