import { Channel as ChannelHandler } from './Channel';
import { DISCORD_API } from '../../interfaces/DiscordAPI';
import { Guild as GuildData, GuildMember as MemberData, GuildNsfwLevel } from '../../interfaces/guild';
import { HTTPResponseCodes, PermissionFlags, Role as RoleData } from '../../interfaces';
import { enumPropFinder, formatImageURL } from '../../util';
import { User } from './User';
import http from '../structures/internet/http';
import Globs from '../../util/Global';
import { APIError } from '../../util/Errors';

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
    /**! WARNING: This does not *yet*  take into account sharding.
     * Returns in total guild size
     */
    public get size() {
        return this.data.member_count ?? this.data.approximate_member_count ?? null;
    }
    /** Returns total guild members */
    public members: Map<string, Member> | null = this.data?.members
        ? new Map(this.data.members.map(data => [data.user.id, new Member(data)]) ?? [])
        : null;
    /**
     * Fetches a list of guild roles and there ID's
     * @returns Array<string>
     */
    public roles: Map<string, Role> | null = this.data?.roles
        ? new Map(this.data.roles.map(data => [data.id, new Role(data, this.id)]) ?? [])
        : null;
    /** Returns total guild channels */
    public channels: Map<string, ChannelHandler> | null = this.data?.channels
        ? new Map(this.data.channels.map(data => [data.id, new ChannelHandler(data)]) ?? [])
        : null;
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
        return enumPropFinder<typeof GuildNsfwLevel>(this.data.nsfw_level, GuildNsfwLevel);
    }
    public get isLarge() {
        return this.data.large;
    }
    /** The Welcome screen channel id for the guild. */
    public get welcomeChannels() {
        return this.data.welcome_screen;
    }
    public addRole(data: RoleCreateUpdate) {
        const payload = {
            ...data,
            permissions: data.permissions
                ? data.permissions.map(a => PermissionFlags[a]).reduce((a, b) => a | b)
                : null,
            unicode_emoji: data.unicodeEmoji,
            color: typeof data.color === 'string' ? parseInt(data.color.replace('#', '')) : data.color,
        };
        return http.POST(`/guilds/${this.id}/roles`, JSON.stringify(payload)).then(({ data, status }) => {
            if (status === HTTPResponseCodes.Forbidden) {
                throw new APIError(data.message);
            } else {
                return new Role(data, this.id);
            }
        });
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
    public async ban(user: User | Member | string, reason?: string, deleteMessageDays?: number) {
        const id = user instanceof User ? user.id : user instanceof Member ? user.user.id : user;

        await http.PUT(
            `/guilds/${this.id}/bans/${id}`,
            JSON.stringify({ reason, delete_message_days: deleteMessageDays }),
            reason ? { 'X-Audit-Log-Reason': reason } : {}
        );
        return;
    }
    public async kick(user: User | Member | string) {
        const id = user instanceof User ? user.id : user instanceof Member ? user.user.id : user;
        await http.DELETE(`/guilds/${this.id}/members/${id}`);
        return;
    }
    public async unban(user: User | string) {
        const id = user instanceof User ? user.id : user;

        await http.DELETE(`/guilds/${this.id}/bans/${id}`);
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

export type RoleCreateUpdate = {
    name?: string;
    permissions?: (keyof typeof PermissionFlags)[];
    color?: number | string;
    icon?: string;
    unicodeEmoji?: string;
    mentionable?: boolean;
};
export class Role {
    constructor(protected data: RoleData, protected guildId: string) {}

    public get id() {
        return this.data.id;
    }
    public get name() {
        return this.data.name;
    }
    public get color(): number | null {
        return this.data.color !== 0 ? this.data.color : null;
    }
    public get hoist() {
        return this.data.hoist;
    }
    public get mentionable() {
        return this.data.mentionable;
    }
    public get icon() {
        return this.data.icon
            ? `${DISCORD_API}/role-icons/${this.id}/${formatImageURL(this.data.icon, 512, 'png')}`
            : null;
    }
    public get position() {
        return this.data.position;
    }
    public async edit(data: RoleCreateUpdate) {
        const payload = {
            ...data,
            permissions: data.permissions
                ? data.permissions.map(a => PermissionFlags[a]).reduce((a, b) => a | b)
                : null,
            unicode_emoji: data.unicodeEmoji,
            color: typeof data.color === 'string' ? parseInt(data.color.replace('#', '')) : data.color,
        };
        return new Role(
            (await http.PATCH(`/guilds/${this.guildId}/roles/${this.id}`, JSON.stringify(payload))).data,
            this.guildId
        );
    }
    public get permissions() {
        const perms = parseInt(this.data.permissions);
        const payload: { [key in keyof typeof PermissionFlags]: boolean } = {} as any;
        Object.keys(PermissionFlags).forEach(key => {
            const val = PermissionFlags[key];
            payload[key] = (perms & val) === val;
        });
        return payload;
    }
    public async delete() {
        await http.DELETE(`/guilds/${this.guildId}/roles/${this.id}`);
        return;
    }
    public get isManaged() {
        return this.data.managed;
    }
}
