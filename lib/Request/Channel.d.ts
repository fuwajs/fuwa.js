declare class Channel {
    private token;
    private res;
    constructor(token: string, res: any);
    protected get(channelId: string): Promise<void>;
    protected find(obj: {
        name?: string;
        type?: string;
        nsfw?: boolean;
        position?: number;
    }): Promise<void>;
    protected create(name: string, type?: string, obj?: {
        nsfw?: boolean;
        position?: number;
        userLimit: number;
        topic: string;
        permission?: {
            id: string;
            type: "role" | "member";
        };
        category: string;
    }): Promise<any>;
}
export default Channel;
