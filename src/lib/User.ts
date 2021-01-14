import Embed from './Embed';
import Colors from './Colors';
import { Channel, Message, User as UserOptions } from './_DiscordAPI';
import undici from './_unicdi';
export class User implements UserOptions {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean; // does the user have 2FA Enabled?
    locale?: string;
    verified?: boolean; // Is the user's email verfied?
    email?: string;
    flags?: number;
    premium_type?: number;
    public_flags?: number;

    constructor(data: UserOptions, private token: string) {
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

    /** 
     * Send a Direct Message to 'this' user. 
     * @param content The contents of the message. Can be a string or an Embed.
     */
    async dm(content: string | Embed): Promise<Message> {
        const data: any = {};
        data.recipient_id = this.id;
        if (typeof content === 'string') { // Just a normal message
            data.content = content;
            data.tts = false;
        } else if (content instanceof Embed) {
            if (!content.color) {
                content.color = Colors.rgb(
                    Math.random() * 255, Math.random() * 255, Math.random() * 255
                );
            }
            if (typeof content.color === 'string') {
                content.color = parseInt(
                    '0x' + (content?.color?.split('#')[1] || 'ffffff')
                );
            }
            data.embed = content;
            data.tts = false;
        } else {
            throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
        }
        const dm: Channel = await undici.POST(
            '/users/@me/channels',
            this.token,
            JSON.stringify({ recipient_id: this.id })
        );

        return undici.POST(
            `/channels/${dm.id}/messages`,
            this.token,
            JSON.stringify(data)
        );
    }
}

export default User;
