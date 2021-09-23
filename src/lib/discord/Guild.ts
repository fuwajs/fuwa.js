/******************************************************************************
 * @file src/lib/discord/Guild.ts
 * @fileoverview Exports a class 'implementation' of the Guild Interface
 * (IGuild)
 *****************************************************************************/

import {
    Guild as IGuild,
    discordCDN,
    GuildHashes,
    Channel as IChannel,
    RoleProps,
    Ban,
    Invite,
    Emoji,
} from '../_DiscordAPI';
import Member from './Member';
import Role from './Role';
import http from '../_http';
import Channel from './Channel';
// class Guild implements IGuild {
class Guild {
    id: string;
    name: string;
    icon: string | null;
    icon_hash?: string | null;
    splash: string | null;
    discovery_splash: string | null;
    owner?: boolean;
    owner_id: string;
    permissions?: string;
    region: string;
    afk_channel_id: string | null;
    afk_timeout: number;
    widget_enabled?: boolean;
    widget_channel_id?: string;
    verification_level: number;
    description: string;
    public_updates_channel_id: string | null;
    large: boolean;
    features: any[];
    unavailable: boolean;
    max_members: number;
    guild_hashes: GuildHashes;
    system_channel_flags: number;
    premium_tier: number;
    voice_states: any[];
    members: Map<string, Member>;
    presences: any[];
    banner: string;
    channels: Map<string, IChannel>;
    max_video_channel_users: number;
    preferred_locale: string;
    rules_channel_id: null;
    emojis?: Map<string, Emoji>;
    roles: Map<string, Role>;
    lazy: boolean;
    bans: Ban[];
    application_id: string | null;
    mfa_level: number;
    explicit_content_filter: number;
    vanity_url_code: null;
    system_channel_id: string;
    threads: any[];
    default_message_notifications: number;
    premium_subscription_count: number;
    created_at: Date;
    constructor(data: IGuild) {
        Object.assign(this, {
            ...data,
            icon: `${discordCDN}/icons/${data.id}/${data.icon}.png`,
            roles: new Map(data.roles.map(r => [r.id, new Role(r, data.id)])),
            members: new Map(data.members.map(m => [m.user.id, new Member(m)])),
            channels: new Map(data.channels.map(m => [m.id, new Channel(m)])),
            created_at: new Date(data.joined_at),
        });
    }
    leave() {
        return http.DELETE(`/users/@me/guilds/${this.id}`);
    }
    async modifyRolePosition(role: Role | string, position: number) {
        const id = role instanceof Role ? role.id : role;
        return new Role(
            await http.POST(`/guilds/${this.id}/roles/`, JSON.stringify({ id, position })),
            this.id
        );
    }
    async modifyRole(role: Role | string, data: RoleProps) {
        const id = role instanceof Role ? role.id : role;
        return new Role(
            await http.PATCH(
                `/guilds/${this.id}/roles/${id}`,
                JSON.stringify({
                    ...data,
                    permissions: data.permissions?.toString(),
                })
            ),
            this.id
        );
    }
    modifyEmoji(emoji: Emoji | string, data: { name: string; roles?: string[] | Role[] }): Promise<Emoji> {
        let roles;
        if (data.roles) roles = data.roles && data.roles.map(r => (typeof r === 'string' ? r : r.id));
        const id = typeof emoji === 'string' ? emoji : emoji.id;
        return http.PATCH(`/guilds/${this.id}/emojis/${id}`, JSON.stringify({ name: data.name, roles }));
    }
    async getMember(uid: string) {
        return new Member(await http.GET(`/guilds/${this.id}/members/${uid}`));
    }
    async getMembersByNickname(nickname: string) {
        return (await http.GET(`/guilds/${this.id}/members/search?query=${nickname}`)).map(
            member => new Member(member)
        );
    }
    async getEmojis(): Promise<Map<string, Emoji>> {
        return (this.emojis = new Map((await http.GET(`/guilds/${this.id}/emojis`)).map(m => [m.id, m])));
    }
    getEmoji(id: string): Promise<Emoji> {
        return http.GET(`/guilds/${this.id}/emojis/${id}`);
    }
    async getBans(): Promise<Ban[]> {
        return (this.bans = await http.GET(`/guilds/${this.id}/bans`));
    }
    getBan(uid: string): Promise<Ban> {
        return http.GET(`/guilds/${this.id}/bans/${uid}`);
    }
    getInvites(): Promise<Invite[]> {
        return http.GET(`/guilds/${this.id}/invites`);
    }
    getInvite(id: string): Promise<Invite> {
        return http.GET(`/invites/${id}/`);
    }
    deleteInvite(invite: Invite | string) {
        const code = typeof invite === 'string' ? invite : invite.code;
        return http.DELETE(`/invites/${code}`);
    }
    deleteChannel(channel: Channel | string) {
        const id = typeof channel === 'string' ? channel : channel.id;
        return http.DELETE(`/channels/${id}`);
    }
    deleteEmoji(emoji: Emoji | string) {
        const id = typeof emoji === 'string' ? emoji : emoji.id;
        return http.DELETE(`/guilds/${this.id}/emojis/${id}`);
    }
    async createChannel(data: IChannel, reason?: string) {
        return new Channel(
            await http.POST(`/guilds/${this.id}/channels`, JSON.stringify(data), {
                'X-Audit-Log-Reason': reason,
            })
        );
    }
    async createRole(data: RoleProps) {
        return new Role(await http.POST(`/guilds/${this.id}/roles`, JSON.stringify(data)), this.id);
    }
    createEmoji(data: {
        name: string;
        image: { data: Buffer; mimetype: 'png' | 'jpg' | 'gif' } | string;
        roles?: Role[] | string[];
    }): Promise<Emoji> {
        const roles = data.roles.map(r => (typeof r === 'string' ? r : r.id));
        const imageURL =
            typeof data.image === 'string'
                ? data.image
                : `data:image/${data.image.mimetype};${data.image.data.toString('base64')}`;
        return http.POST(
            `/guilds/${this.id}/emojis`,
            JSON.stringify({ name: data.name, roles, image: imageURL })
        );
    }
    ban(member: Member | string, reason?: string, delete_messages_since?: number) {
        const id = member instanceof Member ? member.user.id : member;
        return http.PUT(
            `/guilds/${this.id}/bans/${id}`,
            JSON.stringify({
                reason,
                delete_message_days: delete_messages_since,
            }),
            { 'X-Audit-Log-Reason': reason }
        );
    }
    unban(member: Member | string) {
        const id = member instanceof Member ? member.user.id : member;
        return http.DELETE(`/guilds/${this.id}/bans/${id}`);
    }

    prune(days: number, reason?: string): Promise<{ pruned: number }> {
        return http.POST(`/guilds/${this.id}/prune`, JSON.stringify({ days }), {
            'X-Audit-Log-Reason': reason,
        }) as Promise<any>;
    }
}

export default Guild;
