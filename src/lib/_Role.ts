export interface _Role {
    name: string;
    permissions?: string;
    color?: number;
    hoist?: boolean;
    mentionable?: boolean;
}

class Role {
    name: string;
    permissions: string;
    color: number;
    hoist: boolean = false;
    mentionable: boolean = false;
    constructor(data: _Role) {
        this.name = data.name;
        if (data.permissions) {
            this.permissions = data.permissions;
        } else {
            this.permissions = ' ';
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
