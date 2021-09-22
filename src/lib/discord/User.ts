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

export function getAvatarUrl(props: {
    uid: string;
    avatar: string;
    isBanner?: boolean;
}): string {
    let url = `${discordCDN}/${props.isBanner ?? false ? 'banners' : 'avatars'}/${
        props.uid
    }/`;
    // means its a gif
    if (props.avatar.startsWith('a_')) {
        url += `${props.avatar}.gif`;
    } else {
        url += `${props.avatar}.png`;
    }
    return url;
}
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
    async dm(content: string | Embed): Promise<IMessage> {
        const data: any = {};
        data.recipient_id = this.id;
        if (typeof content === 'string') {
            // Just a normal message
            data.content = content;
            data.tts = false;
        } else if (content instanceof Embed) {
            data.embed = content;
            data.tts = false;
        } else {
            throw new TypeError(
                `Expected type 'string | Embed' instead found ${typeof content}`
            );
        }
        const dm: Channel = await http
            .POST('/users/@me/channels', JSON.stringify({ recipient_id: this.id }))
            .catch(console.error);

        return http
            .POST(`/channels/${dm.id}/messages`, JSON.stringify(data))
            .catch(console.error);
    }
}

export default User;
