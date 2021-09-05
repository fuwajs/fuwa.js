import { Role as IRole } from '../_DiscordAPI';
export default class Role {
    position: number;
    permissions_new?: string;
    permissions: number;
    name: string;
    mentionable: boolean;
    managed: boolean;
    id: string;
    hoist: boolean;
    color: number;
    constructor(data: IRole);
}
