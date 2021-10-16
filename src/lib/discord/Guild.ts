import { Channel as ChannelHandler } from './Channel';
import { discordCDN } from '../../interfaces/DiscordAPI';
import { Guild as GuildData, GuildMember as MemberData } from '../../interfaces/guild';
import { formatImageURL } from '../../util';
discordCDN;
import { User } from './User';
import http from '../structures/ws/http';

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
    public get size() {
        return this.data.member_count ?? this.data.approximate_member_count ?? null;
    }
    public members: Map<string, Member> | null = this.data.members
        ? new Map(this.data.members.map(m => [m.user.id, new Member(m)]) ?? [])
        : null;
    public channels = this.data.channels
        ? new Map(this.data.channels.map(c => [c.id, new ChannelHandler(c)]))
        : null;
    public get ownerId() {
        return this.data.owner_id;
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
    public get isLarge() {
        return this.data.large;
    }
    public get welcomeChannels() {
        return this.data.welcome_screen;
    }
    public async leave(): Promise<void> {
        await http.DELETE(`/users/@me/guilds/${this.id}`);
        return;
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
