import { Role as RoleData } from '../../interfaces/guild'

export class Role {
    constructor(protected data: RoleData) {
    }
    
    public get id() {
        return this.data.id;
    }
    public get name() {
        return this.data.name;
    }
    public get color() {
        return this.data.color;
    }
    public get hoist() {
        return this.data.hoist;
    }
    public get mentionable() {
        return this.data.mentionable;
    }
    public get position() {
        return this.data.position;
    }
    public get permissions() {
        return this.data.permissions;
    }
    public get managed() {
        return this.data.managed;
    }
}