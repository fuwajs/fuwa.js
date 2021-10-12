import { discordCDN } from '../../interfaces/DiscordAPI';
import { Guild as GuildData } from '../../interfaces/guild';
import { formatImageURL } from '../../util';
discordCDN;

export class Guild {
    constructor(protected data: GuildData) {}
    /** id of the guild */
    get id() {
        return this.data.id;
    }
    get icon() {
        return `${discordCDN}/icons/${this.id}/${formatImageURL(this.data.icon, 512)}`;
    }
    get banner() {
        return formatImageURL(this.data.banner, 512);
    }
    get name() {
        return this.data.name;
    }
    get desc() {
        return this.data.description;
    }
    get isUnavailable() {
        return this.data.unavailable ?? false;
    }
    get roles() {
        return this.data.roles;
    }
    get isOwner() {
        return this.data.owner ?? false;
    }
    get createdAt() {
        return new Date(this.data.joined_at);
    }
    get nsfwLevel() {
        return this.data.nsfw_level;
    }
    get large() {
        return this.data.large;
    }
    get welcomeChannels() {
        return this.data.welcome_screen;
    }
}
