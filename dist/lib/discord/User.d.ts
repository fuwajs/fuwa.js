/******************************************************************************
 * @file src/lib/discord/User.ts
 * @fileoverview Exports a class implementation of the User Interface
 * (IUser)
 *****************************************************************************/
import Embed from './Embed';
import { Message as IMessage, User as IUser } from '../_DiscordAPI';
export declare class User implements IUser {
    protected token: string;
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    locale?: string;
    verified?: boolean;
    email?: string;
    flags?: number;
    premium_type?: number;
    public_flags?: number;
    constructor(data: IUser, token: string);
    /**
     * Send a Direct Message to 'this' user.
     * @param content The contents of the message. Can be a string or an Embed.
     */
    dm(content: string | Embed): Promise<IMessage>;
}
export default User;
