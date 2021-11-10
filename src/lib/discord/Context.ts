import http from './../structures/ws/http';
import crypto from 'crypto';
import Globs from '../../util/Global';
import {
    Interaction,
    InteractionForm,
    InteractionResponseTypes as ResponseTypes,
    ButtonComponent,
    ButtonStyles,
    ActionRow,
} from '../../interfaces';
import type { Client } from '../structures/handlers/Client';
import { Channel } from './Channel';
import { User } from './User';
import { Guild, Member } from './Guild';
import { Message } from './Message';

export interface ButtonParams {
    content?: string;
    id?: string;
    /**
     * @default Primary
     */
    style?: keyof typeof ButtonStyles;
    url?: string;
    isDisabled?: boolean;
}
export class Context {
    protected components = new Map<'buttons' | 'menus', ActionRow>();
    constructor(protected data: Interaction) {}
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
        const button = new Button(this, self, id);
        return button;
    }
    /** Fetches raw channel data */
    public getChannel(): Promise<Channel> | null {
        return this.data.channel_id
            ? http.GET(`/channels/${this.data.channel_id}`).then(res => new Channel(res))
            : null;
    }
    public author: User = this.data.user ? new User(this.data.user) : null;
    public member: Member = this.data.member ? new Member(this.data.member) : null;
    /** Fetches raw guild data */
    getGuild(): Promise<Guild> | null {
        return this.data.guild_id
            ? http.GET(`/guilds/${this.data.guild_id}`).then(res => new Guild(res))
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
            .then(raw => new Message(raw));

        return;
    }
}

export class Button {
    protected client = Globs.client as Client;
    constructor(protected ctx: Context, protected self: ButtonComponent, public id: string) {}

    public setContent(content: string): this {
        this.self.label = content;
        return this;
    }
    public setUrl(url: string): this {
        this.self.url = url;
        return this;
    }
    public setStyle(style: keyof typeof ButtonStyles): this {
        this.self.style = ButtonStyles[style];
        return this;
    }
    public disable(disabled = true): this {
        this.self.disabled = disabled;
        return this;
    }
    public onClick(cb: (ctx: Context) => any): this {
        this.client._interactionListeners.set(this.id, cb);
        return this;
    }
    public exit(): Context {
        return this.ctx;
    }
}
