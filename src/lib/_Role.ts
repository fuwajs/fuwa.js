import { Role as _Role } from './_DiscordAPI';

class Role {
    name: string;
    permissions: string;
    color: number;
    hoist: boolean = false;
    mentionable: boolean = false;
    managed: boolean = false;
    position: number
    id: string; 
    permissionsNew: string;
    constructor(data: _Role) {
        this.name = data.name;
        this.id = data.id;
        this.position = data.position;
        if (data.permissions_new) { 
            this.permissionsNew = data.permissions_new;
        }
        if (data.permissions) {
            this.permissions = data.permissions;
        } 
        if (data.color) {
            this.color = data.color;
        } else {
            this.color = 0;
        }
        if (data.hoist) {
            this.hoist = true;
        }
        if (data.mentionable) {
            this.mentionable = true;
        }
    }
    get roles() {
        return this;
    }
}

export default Role;
