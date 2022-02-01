import http from '../structures/internet/http';
import crypto from 'crypto';
import {
    Interaction,
    InteractionForm,
    InteractionResponseTypes as ResponseTypes,
    ButtonComponent,
    ButtonStyles,
    ActionRow,
} from '../../interfaces';
import { Channel } from './Channel';
import { User } from './User';
import { Guild, Member, Role } from './Guild';
import { Button, ButtonParams } from './Button';
import Globs from '../../util/Global';
import { Message } from './Message';

export default class Context {
    constructor(protected data: Interaction) {}
    protected components = new Map<'buttons' | 'menus', ActionRow>();
    public author: User | null = this.data?.user ? new User(this.data.user) : null;
    public member: Member | null = this.data?.member ? new Member(this.data.member) : null;
    public resolved: {
        users?: User;
        members?: Member;
        roles?: Role;
        channels?: Channel;
        messages?: Message;
    } | null = this.data.data.resolved
        ? {
              users: this.data.data.resolved.users ? new User(this.data.data.resolved.users) : undefined,
              roles:
                  this.data.data.resolved.roles && this.data.guild_id
                      ? new Role(this.data.data.resolved.roles, this.data.guild_id)
                      : undefined,
              channels: this.data.data.resolved.channels
                  ? new Channel(this.data.data.resolved.channels)
                  : undefined,
              messages: this.data.data.resolved.messages
                  ? new Message(this.data.data.resolved.messages)
                  : undefined,
              members: this.data.data.resolved.users
                  ? new Member(this.data.data.resolved.members)
                  : undefined,
          }
        : null;
    /**
     * The Context#button function
     * @param data ingest ButtonParams or null
     * @returns
     */
    public button(data?: ButtonParams): Button {
        let id;
        const {
            style,
            url,
            id: btnId,
            isDisabled,
            content,
        } = { isDisabled: false, style: 'Primary', ...(data ?? {}) };
        if (!url) id = btnId || crypto.randomBytes(16).toString('hex');
        const btn: ButtonComponent = {
            type: 2,
            style: ButtonStyles[style],
            url,
            disabled: isDisabled,
            label: content,
            custom_id: id,
        };
        this.components.set('buttons', {
            type: 1,
            components: [...((this.components.get('buttons') ?? {})?.components || []), btn] as any,
        });
        const self = this.components
            .get('buttons')
            .components.find(b => b.custom_id === id) as ButtonComponent;
        return new Button(this, self, id);
    }
    /**
     * Fetches raw channel data
     * @param force If it should force and get the most recent data (slower) or use the cached version
     */
    public getChannel(force = false): Promise<Channel> | null {
        const fallback = () =>
            http.GET(`/channels/${this.data.channel_id}`).then(res => new Channel(res.data));
        const cache = Globs.cache;
        return this.data.channel_id
            ? force
                ? fallback()
                : cache.get(`channels.${this.data.channel_id}`, fallback)
            : null;
    }

    /** Fetches raw guild data */
    getGuild(force = false): Promise<Guild> | null {
        const fallback = () => http.GET(`/guilds/${this.data.guild_id}`).then(res => new Guild(res.data));
        const cache = Globs.cache;

        return this.data.guild_id
            ? force
                ? fallback()
                : cache.get(`guilds.${this.data.guild_id}`, fallback)
            : null;
    }

    /** Sends a POST  */
    public async send(
        message: InteractionForm,
        type: keyof typeof ResponseTypes = 'ChannelMessageWithSource'
    ): Promise<void> {
        const components = [...(message.components ?? []), ...[...this.components.values()]];
        const data = {
            ...message,
            components,
        };
        // clear components for next message
        this.components.clear();
        await http
            .POST(
                `/interactions/${this.data.id}/${this.data.token}/callback`,
                JSON.stringify({
                    type: ResponseTypes[type],
                    data,
                })
            )
            .catch(expected => {
                throw new Error(expected);
            });

        return;
    }
    public async delete(): Promise<void> {
        await http.DELETE(`/webhooks/${Globs.appId}/${this.data.token}/messages/@original`);
        return;
    }
    /** Edit some message data*/
    public edit(message: InteractionForm): Promise<Message> {
        const components = [...(message.components ?? []), ...[...this.components.values()]];
        const data = {
            ...message,
            components,
        };
        // clear components for next message
        this.components.clear();
        return http
            .PATCH(
                `/webhooks/${Globs.appId}/${this.data.token}/messages/@original`,
                JSON.stringify({
                    data,
                })
            )
            .then(raw => new Message(raw.data));
    }
}
