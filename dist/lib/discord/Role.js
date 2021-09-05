"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Role {
    constructor(data) {
        Object.assign(this, Object.assign(Object.assign({}, data), { permissions: parseInt(data.permissions) }));
    }
}
exports.default = Role;
