import User from './User';
import { Member as IMember } from './_DiscordAPI';
declare class Member implements IMember {
    deaf: boolean;
    hoisted_role: string;
    joined_at: Date;
    roles: string[];
    user: User;
    nick: string;
    premium_since?: Date;
    mute: boolean;
    pending?: boolean;
    constructor(data: IMember, token: string);
}
export default Member;
