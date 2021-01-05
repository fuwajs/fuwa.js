"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Role {
    constructor(data) {
        this.hoist = false;
        this.mentionable = false;
        this.name = data.name;
        if (data.permissions) {
            this.permissions = data.permissions;
        }
        else {
            this.permissions = ' ';
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
