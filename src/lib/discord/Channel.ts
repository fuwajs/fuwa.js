import { MessageForm, Message } from '../../interfaces/message';
import { Channel as ChannelData, ChannelType } from '../../interfaces/channel';
import http from '../structures/ws/http';
export class Channel {
    constructor(protected data: ChannelData) {}
    public get id() {
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
    public type = Object.keys(ChannelType).find(
        k => this.data.type === ChannelType[k]
    ) as keyof typeof ChannelType;
    public send(...messages: MessageForm[]): Promise<Message[]> {
        return Promise.all(
            messages.map(msg => http.POST(`/channels/${this.id}/messages`, JSON.stringify(msg)))
        );
    }
    public get perms() {
        return this.data.permissions;
    }
    public get parentId() {
        return this.data.parent_id;
    }
    getPins(): Promise<Message[]> {
        return http.GET(`/channels/${this.id}/pins`);
    }
    /**
     * ! WARNING: This method is not recommend to be used
     * @see https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
     * This makes the bot appear to be typing
     */
    async startTyping() {
        await http.POST(`/channels/${this.id}/typing`);
        return;
    }
}
