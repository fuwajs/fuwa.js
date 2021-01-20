import User from './User';
import { Role, Member as MemberOptions } from './_DiscordAPI';
declare class Member {
    deaf: boolean;
    hoisted_role: string;
    joined_at: Date;
    roles: Role[];
    user: User;
    constructor(data: MemberOptions, token: string);
}
export default Member;
