import User from './User';
import { Member as MemberOptions } from './_DiscordAPI';

class Member {
    deaf: boolean;
    hoisted_role: string;
    joined_at: Date;
    roles: string[];
    user: User;
    constructor(data: MemberOptions, token: string) {
        this.deaf = data.deaf;
        this.roles = data.roles;
        this.user = new User(data.user, token);
    }

}

export default Member;
