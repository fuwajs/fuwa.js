import User from './User';
import { Role, Member as MemberOptions } from './_DiscordAPI';

class Member {
    deaf: boolean;
    hoisted_role: string;
    joined_at: Date;
    roles: Role[];
    user: User;
    constructor(data: MemberOptions, token: string) {
        this.deaf = data.deaf;
        this.hoisted_role = data.hoisted_role;
        this.roles = data.roles;
        this.user = new User(data.user, token);
    }

}

export default Member;
