import { discordCDN } from '../../interfaces';
import { User as UserData } from '../../interfaces/member';
import { formatImageURL } from '../../util';

export class User {
    constructor(protected data: UserData) {}
    public id() {
        return this.data.id;
    }
    public name() {
        return this.data.username;
    }
    public discriminator() {
        return this.data.discriminator;
    }
    public get isBot() {
        return this.data.bot ?? false;
    }
    public get isSystem() {
        return this.data.system ?? false;
    }
    public get avatar() {
        return `${discordCDN}/avatars/${this.id}/${formatImageURL(this.data.avatar, 512)}`;
    }
    public get banner() {
        return `${discordCDN}/banners/${this.id}/${formatImageURL(this.data.banner, 512)}`;
    }
}
