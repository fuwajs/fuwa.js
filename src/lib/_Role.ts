import { Role as _Role } from './_DiscordAPI';

/**
 * Role Class
 */
class Role {
    name: string;
    permissions: string;
    color: number;
    hoist = false;
    mentionable = false;
    managed = false;
    position: number;
    id: string;
    permissionsNew: string;
    constructor(data: _Role) {
        this.name = data.name;
        this.id = data.id;
        this.position = data.position;
        this.permissionsNew = data?.permissions_new;
        this.permissions = data?.permissions;
        this.color = data?.color;
        this.hoist = data?.hoist;
        this.mentionable = data?.mentionable;
    }
    get roles(): this {
        return this;
    }
}

export default Role;
