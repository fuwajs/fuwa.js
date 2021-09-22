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

    constructor(data: IMember) {
        Object.assign(this, {
            ...data,
            user: new User(data.user),
            joined_at: new Date(data.joined_at),
        });
        this.user = new User(data.user);
    }
}

export default Member;
