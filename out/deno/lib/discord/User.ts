import { DISCORD_API } from '../../interfaces/index.ts';
import { User as UserData } from '../../interfaces/member/index.ts';
import { formatImageURL } from '../../util/index.ts';
import http from '../structures/internet/http.ts';

export class User {
    constructor(protected data: UserData) {}
    public get id() {
        return this.data.id;
    }
    public get name() {
        return this.data.username;
    }
    public get discriminator() {
        return this.data.discriminator;
    }
    public get isBot() {
        return this.data.bot ?? false;
    }
    public get isSystem() {
        return this.data.system ?? false;
    }
    public get avatar() {
        return `${DISCORD_API.cdn}/avatars/${this.id}/${formatImageURL(this.data.avatar, 512)}`;
    }
    public get banner(): string | null {
        return this.data.banner
            ? `${DISCORD_API.cdn}/banners/${this.id}/${formatImageURL(this.data.banner, 512)}`
            : null;
    }
    public get accentColor(): number | null {
        return this.data.accent_color ? this.data.accent_color : null;
    }
    public toString() {
        return `<@${this.id}>`;
    }
    static get(uid: string): Promise<User> {
        return http.GET(`/users/${uid}`).then(({ data }) => new User(data));
    }
}
export class BotUser extends User {
    constructor(data: UserData) {
        super(data);
    }
}
