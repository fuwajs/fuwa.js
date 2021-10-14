import { Channel as ChannelData, ChannelType } from '../../interfaces/channel';
export class Channel {
    constructor(protected data: ChannelData) {}

    get id() {
        return this.data.id;
    }
    /**
     * This property is only for **voice channels**
     */
    public get userLimit() {
        return this.data.user_limit;
    }
    get name() {
        return this.data.name;
    }
    public get subject() {
        return this.data.topic ?? '';
    }
    public get isNSFW() {
        return this.data.nsfw ?? false;
    }
    public get position() {
        return this.data.position;
    }
    public get type(): keyof typeof ChannelType {
        return Object.keys(ChannelType).find(k => this.type === ChannelType[k]) as keyof typeof ChannelType;
    }
    public get perms() {
        return this.data.permissions;
    }
    public get parentId() {
        return this.data.parent_id;
    }
}
