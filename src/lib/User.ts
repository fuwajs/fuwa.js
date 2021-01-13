import { User as UserOptions } from './_DiscordAPI';
export class User implements UserOptions {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean; // is 2FA Enabled?
    locale?: string;
    verified?: boolean; // Is the user's email verfied?
    email?: string;
    flags?: number;
    premium_type?: number;
    public_flags?: number;

    constructor(data: UserOptions) {
        this.id = data.id;
        this.username = data.username;
        this.discriminator = data.discriminator;
        this.bot = data.bot;
        this.avatar = `https://cdn.discordapp.com/avatars/${this.id}/${data.avatar}.png`;
        this.verified = data.verified;
        this.mfa_enabled = data.mfa_enabled;
        this.flags = data.flags;
        this.email = data.email;
    }
}

export default User;
