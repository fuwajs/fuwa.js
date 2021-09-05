import { Role as IRole, RoleProps } from '../_DiscordAPI';
import http from '../_http';
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

    constructor(data: IRole, protected gid: string) {
        Object.assign(this, {
            ...data,
            permissions: parseInt(data.permissions),
        });
    }
    /**
     *
     * @param gid guild id
     * @param data
     * @returns
     */
    async modify(data: RoleProps) {
        return new Role(
            await http.PATCH(
                `/guilds/${this.gid}/roles/${this.id}`,
                JSON.stringify({
                    ...data,
                    permissions: data.permissions?.toString(),
                })
            ),
            this.gid
        );
    }
    setPosition(position: number) {
        return http.PATCH(
            `/guilds/${this.gid}/roles`,
            JSON.stringify({ position, id: this.id })
        );
    }
    delete() {
        return http.DELETE(`/guilds/${this.gid}/roles/${this.id}`);
    }
}
