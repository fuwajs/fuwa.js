/******************************************************************************
 * @file src/lib/discord/User.ts
 * @fileoverview Exports a class implementation of the User Interface
 * (IUser)
 *****************************************************************************/

import Embed from './Embed';
import {
    Channel,
    discordCDN,
    Message as IMessage,
    PremiumTypes,
    User as IUser,
    UserFlags,
} from '../_DiscordAPI';
import http from '../_http';
import { getAvatarUrl, sendMSG } from '../_util';
import Message from './Message';

export class User implements IUser {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    bot?: boolean;
    banner?: string;
    system?: boolean;
    mfa_enabled?: boolean; // does the user have 2FA Enabled?
    locale?: string;
    verified?: boolean; // Is the user's email verfied?
    email?: string;
    accent_color?: number;
    flags?: UserFlags;
    premium_type?: PremiumTypes;
    public_flags?: UserFlags;

    constructor(data: IUser) {
        Object.assign(this, {
            ...data,
            avatar: data.avatar
                ? getAvatarUrl({ uid: data.id, avatar: data.avatar })
                : null,
            banner: data.banner
                ? getAvatarUrl({
                      uid: data.id,
                      avatar: data.banner,
                      isBanner: true,
                  })
                : null,
        });
    }

    /**
     * Send a Direct Message to 'this' user.
     * @param content The contents of the message. Can be a string or an Embed.
     */
    async dm(content: string | Embed): Promise<[Channel, Message]> {
        const dm: Channel = await http
            .POST(
                '/users/@me/channels',
                JSON.stringify({ recipient_id: this.id })
            )
            .catch(console.error);
        const msg = new Message(
            await sendMSG(content, dm.id, false, { recipient_id: this.id })
        );

        return [dm, msg];
    }
}

export default User;
