import { Role as IRole, RoleProps } from '../_DiscordAPI';
export default class Role {
    protected gid: string;
    position: number;
    permissions_new?: string;
    permissions: number;
    name: string;
    mentionable: boolean;
    managed: boolean;
    id: string;
    hoist: boolean;
    color: number;
    constructor(data: IRole, gid: string);
    /**
     *
     * @param gid guild id
     * @param data
     * @returns
     */
    modify(data: RoleProps): Promise<Role>;
    setPosition(position: number): Promise<any>;
    delete(): Promise<any>;
}
