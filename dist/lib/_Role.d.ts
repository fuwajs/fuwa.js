export interface _Role {
    name: string;
    permissions?: string;
    color?: number;
    hoist?: boolean;
    mentionable?: boolean;
}
declare class Role {
    name: string;
    permissions: string;
    color: number;
    hoist: boolean;
    mentionable: boolean;
    constructor(data: _Role);
    get roles(): this;
}
export default Role;
