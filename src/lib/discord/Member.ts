/******************************************************************************
 * @file src/lib/discord/Member.ts
 * @fileoverview Exports a class implementation of the Member Interface 
 * (IMember)
 *****************************************************************************/

import User from './User';
import { Member as IMember } from '../_DiscordAPI';

class Member implements IMember {
    deaf: boolean;
    hoisted_role: string;
    joined_at: Date;
    roles: string[];
    user: User;
    nick: string;
    premium_since?: Date;
    mute: boolean;
    pending?: boolean;
    
    constructor(data: IMember, token: string) {
        this.deaf = data.deaf;
        this.roles = data.roles;
        this.user = new User(data.user, token);
    }

}

export default Member;
