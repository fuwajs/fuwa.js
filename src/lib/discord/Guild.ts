import { discordCDN } from '../../interfaces/DiscordAPI';
import { Guild as GuildData, GuildMember as MemberData } from '../../interfaces/guild';
import { formatImageURL } from '../../util';
discordCDN;
import { User } from './User';

export class Guild {
    constructor(protected data: GuildData) {}
    /** id of the guild */
    public get id() {
        return this.data.id;
    }
    public get icon() {
        return `${discordCDN}/icons/${this.id}/${formatImageURL(this.data.icon, 512)}`;
    }
    public get banner() {
        return `${discordCDN}/banners/${this.id}/${formatImageURL(this.data.banner, 512)}`;
    }
    public get name() {
        return this.data.name;
    }
    public get desc() {
        return this.data.description;
    }
    public get isUnavailable() {
        return this.data.unavailable ?? false;
    }
    public get roles() {
        return this.data.roles;
    }
    public get isOwner() {
        return this.data.owner ?? false;
    }
    public get createdAt() {
        return new Date(this.data.joined_at);
    }
    public get nsfwLevel() {
        return this.data.nsfw_level;
    }
    public get large() {
        return this.data.large;
    }
    public get welcomeChannels() {
        return this.data.welcome_screen;
    }
}

export class Member {
    constructor(protected data: MemberData) {}
    public get user(): User | null {
        return this.data.user ? new User(this.data.user) : null;
    }
    public get joinedAt() {
        return new Date(this.data.joined_at);
    }
    public get nickname() {
        return this.data.nick ?? null;
    }
    public get isMuted() {
        return this.data.mute;
    }
    public get isDeafened() {
        return this.data.deaf;
    }
    public get isPending() {
        return this.data.pending ?? false;
    }
    public get roleIds() {
        return this.data.roles;
    }
    public get guildId() {
        return (this.data as any).guild_id ?? null;
    }
}
