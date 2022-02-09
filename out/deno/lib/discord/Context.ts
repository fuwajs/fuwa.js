import http from '../structures/internet/http.ts';
import crypto from 'https://deno.land/std@0.85.0/node/crypto.ts';
import {
    InteractionForm,
    InteractionResponseTypes as ResponseTypes,
    ButtonComponent,
    ButtonStyles,
    ActionRow,
    BigInteraction,
} from '../../interfaces/index.ts';
import { Channel } from './Channel.ts';
import { User } from './User.ts';
import { Guild, Member } from './Guild.ts';
import { Button, ButtonParams } from './Button.ts';
import Globs from '../../util/Global.ts';
import { Message } from './Message.ts';
import { makeMessagePayload } from './index.ts';
import { File } from '../structures/index.ts';

export default class Context {
    constructor(protected data: BigInteraction) {}
    protected components = new Map<'buttons' | 'menus', ActionRow>();
    public author: User | null = this.data?.user ? new User(this.data.user) : null;
    public member: Member | null = this.data?.member ? new Member(this.data.member) : null;
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
    public resolve() {
        if (!this.data.data.resolved) return null;
        const { resolved } = this.data.data;
        function getResolvedWithIds<T>(data: { [key: string]: T }): ({ id: string } & T)[] {
            const keys = Object.keys(data);
            return keys.map(key => ({ id: key, ...data[key] }));
        }
        return {
            members: getResolvedWithIds(resolved.members).map(
                member =>
                    new Member({
                        user: { id: member.id, ...resolved.users[member.id] },
                        ...member,
                    })
            ),
            users: getResolvedWithIds(resolved.users).map(user => new User(user)),
            messages: getResolvedWithIds(resolved.messages).map(msg => new Message(msg)),
        };
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
    public async send(message: InteractionForm & { files?: File[] }): Promise<void> {
        const components = [...(message.components ?? []), ...[...this.components.values()]];
        const data = {
            ...message,
            components,
        };
        // clear components for next message
        this.components.clear();
        const form = await makeMessagePayload({
            files: message.files,
            type: ResponseTypes.ChannelMessageWithSource,
            data,
        } as any);
        await http
            .POST(`/interactions/${this.data.id}/${this.data.token}/callback`, form, {
                'Content-Type': 'multipart/form-data',
            })
            .catch(expected => {
                throw new Error(expected);
            });
        return;
    }
    public async loading() {}
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
                    type: ResponseTypes.UpdateMessage,
                    data,
                })
            )
            .then(raw => new Message(raw.data));
    }
}
