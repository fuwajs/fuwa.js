import { DISCORD_API, PermissionFlags } from '../../interfaces';
import { Role as RoleData } from '../../interfaces/guild';
import { enumEqualityTester, formatImageURL } from '../../util';

export class Role {
    constructor(protected data: RoleData) {}

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
        return this.data.icon ? `${DISCORD_API}/${formatImageURL(this.data.icon, 512)}` : null;
    }
    public get position() {
        return this.data.position;
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
    public get isManaged() {
        return this.data.managed;
    }
}
