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
    protected components = new Map<'buttons' | 'rows', ActionRow>();
    constructor(protected data: Interaction) {}
    /**
     * @param param0
     * @returns
     */
    button(data?: ButtonParams) {
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
    getChannel(): Promise<Channel> | null {
        return this.data.channel_id
            ? http.GET(`/channels/${this.data.channel_id}`).then(res => new Channel(res))
            : null;
    }
    public author: User | null = this.data.user ? new User(this.data.user) : null;
    public member: Member | null = this.data.member ? new Member(this.data.member) : null;
    getGuild(): Promise<Guild> | null {
        return this.data.guild_id
            ? http.GET(`/guilds/${this.data.guild_id}`).then(res => new Guild(res))
            : null;
    }
    async send(message: InteractionForm, type: keyof typeof ResponseTypes = 'ChannelMessageWithSource') {
        const components = [...(message.components ?? []), ...[...this.components.values()]];
        const data = {
            ...message,
            components,
        };
        // clear components for next message
        this.components.clear();
        await http.POST(
            `/interactions/${this.data.id}/${this.data.token}/callback`,
            JSON.stringify({
                type: ResponseTypes[type],
                data,
            })
        );

        return;
    }
}

export class Button {
    protected client = Globs.client as Client;
    constructor(protected ctx: Context, protected self: ButtonComponent, public id: string) {}

    setContent(content: string) {
        this.self.label = content;
        return this;
    }
    setUrl(url: string) {
        this.self.url = url;
        return this;
    }
    setStyle(style: keyof typeof ButtonStyles) {
        this.self.style = ButtonStyles[style];
        return this;
    }
    disable(disabled = true) {
        this.self.disabled = disabled;
        return this;
    }
    onClick(cb: (ctx: Context) => any) {
        this.client.interactionListeners.set(this.id, cb);
        return this;
    }
    exit() {
        return this.ctx;
    }
}
