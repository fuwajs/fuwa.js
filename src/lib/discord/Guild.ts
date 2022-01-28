import { Channel as ChannelHandler } from './Channel';
import { DISCORD_API } from '../../interfaces/DiscordAPI';
import { Guild as GuildData, GuildMember as MemberData } from '../../interfaces/guild';
import { arrayToMap, formatImageURL } from '../../util';
import { User } from './User';
import http from '../structures/internet/http';
import Globs from '../../util/Global';

export class Guild {
    constructor(protected data: GuildData) {
        // for some reason we keep getting undefined in our cache
        if (data) {
            const cache = Globs.cache;
            cache.set(`guilds.${data.id}`, this);
        }
    }
    /** id of the guild */
    public get id() {
        return this.data.id;
    }
    /** icon for the guild */
    public get icon() {
        return `${DISCORD_API.cdn}/icons/${this.id}/${formatImageURL(this.data.icon, 512)}`;
    }
    /** banner for the guild */
    public get banner() {
        return `${DISCORD_API.cdn}/banners/${this.id}/${formatImageURL(this.data.banner, 512)}`;
    }
    /** Returns the name of the guild */
    public get name() {
        return this.data.name;
    }
    /** ! WARNING: This does not *yet*  take into account sharding.
     * Returns in total guild size
     */
    public get size() {
        return this.data.member_count ?? this.data.approximate_member_count ?? null;
    }
    /** Returns total guild members */
    public members: Map<string, Member> | null = this.data?.members
        ? new Map(this.data.members.map(m => [m.user.id, new Member(m)]) ?? [])
        : null;
    /** Returns total guild channels */

    public channels = this.data?.channels ? arrayToMap('id', this.data.channels) : null;
    /** Returns the guild owner id */
    public get ownerId() {
        return this.data.owner_id;
    }
    public get desc() {
        return this.data.description;
    }
    /**
     * Checks if the guild is available or not
     * @returns boolean
     */
    public get isUnavailable() {
        return this.data.unavailable ?? false;
    }
    /**
     * Fetches a list of guild roles and there ID's
     * @returns Array<string>
     */
    public get roles() {
        return arrayToMap('id', this.data.roles);
    }
    /** Checks if the user id passed has the same id as the guild owner.
     * @returns boolean
     */
    public get isOwner() {
        return this.data.owner ?? false;
    }
    /** Returns total guild members */
    public get createdAt() {
        return new Date(this.data.joined_at);
    }
    /** The NSFW level of the guild */
    public get nsfwLevel() {
        return this.data.nsfw_level;
    }
    public get isLarge() {
        return this.data.large;
    }
    /** The Welcome screen channel id for the guild. */
    public get welcomeChannels() {
        return this.data.welcome_screen;
    }
    /**Allows the given application to leave the current requested guild. */
    public async leave(): Promise<void> {
        await http.DELETE(`/users/@me/guilds/${this.id}`);
        return;
    }
    /**
     * Allows the API to fetch all base Guild information.
     * @param id the ID of the guild.
     * @param force by default we search the bot cache only, but if forced = true it will search the discord api if no guild is in the cache.
     * @returns fuwa.js#Guild
     */
    public static get(id: string, force = false): Promise<Guild> {
        const fallback = () => http.GET(`/guilds/${id}`).then(({ data }) => new Guild(data));
        const cache = Globs.cache;
        return force ? fallback() : cache.get(`guilds.${id}`, fallback);
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
