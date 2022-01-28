import { Member, User } from '.';
import { DISCORD_API, PermissionFlags } from '../../interfaces';
import { Role as RoleData } from '../../interfaces/guild';
import { formatImageURL } from '../../util';
import http from '../structures/internet/http';

export type RoleCreateUpdate = {
    name?: string;
    permissions?: (keyof typeof PermissionFlags)[];
    color?: number | string;
    icon?: string;
    unicodeEmoji?: string;
    mentionable?: boolean;
};
export class Role {
    constructor(protected data: RoleData, protected guildId) {}

    public get id() {
        return this.data.id;
    }
    public get name() {
        return this.data.name;
    }
    public get color(): number | null {
        return this.data.color !== 0 ? this.data.color : null;
    }
    public get hoist() {
        return this.data.hoist;
    }
    public get mentionable() {
        return this.data.mentionable;
    }
    public get icon() {
        return this.data.icon
            ? `${DISCORD_API}/role-icons/${this.id}/${formatImageURL(this.data.icon, 512, 'png')}`
            : null;
    }
    public get position() {
        return this.data.position;
    }
    public async edit(data: RoleCreateUpdate) {
        const payload = {
            ...data,
            permissions: data.permissions
                ? data.permissions.map(a => PermissionFlags[a]).reduce((a, b) => a | b)
                : null,
            unicode_emoji: data.unicodeEmoji,
            color: typeof data.color === 'string' ? parseInt(data.color.replace('#', '')) : data.color,
        };
        return new Role(
            (await http.PATCH(`/guilds/${this.guildId}/roles/${this.id}`, JSON.stringify(payload))).data,
            this.guildId
        );
    }
    public get permissions() {
        const perms = parseInt(this.data.permissions);
        const payload: { [key in keyof typeof PermissionFlags]: boolean } = {} as any;
        Object.keys(PermissionFlags).forEach(key => {
            const val = PermissionFlags[key];
            payload[key] = (perms & val) === val;
        });
        return payload;
    }
    public async delete() {
        await http.DELETE(`/guilds/${this.guildId}/roles/${this.id}`);
        return;
    }
    public get isManaged() {
        return this.data.managed;
    }
}
