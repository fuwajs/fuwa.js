import { Role as _Role } from './_DiscordAPI';
declare class Role {
    name: string;
    permissions: string;
    color: number;
    hoist: boolean;
    mentionable: boolean;
    managed: boolean;
    position: number;
    id: string;
    permissionsNew: string;
    constructor(data: _Role);
    get roles(): this;
}
export default Role;
