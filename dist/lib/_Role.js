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
        this.permissionsNew = data === null || data === void 0 ? void 0 : data.permissions_new;
        this.permissions = data === null || data === void 0 ? void 0 : data.permissions;
        this.color = data === null || data === void 0 ? void 0 : data.color;
        this.hoist = data === null || data === void 0 ? void 0 : data.hoist;
        this.mentionable = data === null || data === void 0 ? void 0 : data.mentionable;
    }
    get roles() {
        return this;
    }
}
exports.default = Role;
