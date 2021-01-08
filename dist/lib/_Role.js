"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Role Class
 */
class Role {
    constructor(data) {
        this.hoist = false;
        this.mentionable = false;
        this.managed = false;
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
        }
        else {
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
exports.default = Role;
