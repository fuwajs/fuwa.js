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
    Role as IRole,
    createRoleProps,
    PermissionFlags,
} from '../_DiscordAPI';
import Member from './Member';
import Role from './Role';
import http from '../_http';
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
    emojis: any[];
    voice_states: any[];
    members: Map<string, Member>;
    presences: any[];
    banner: null;
    channels: Map<string, IChannel>;
    max_video_channel_users: number;
    preferred_locale: string;
    rules_channel_id: null;

    roles: Map<string, Role>;
    lazy: boolean;
    application_id: string | null;
    mfa_level: number;
    explicit_content_filter: number;
    vanity_url_code: null;
    system_channel_id: string;
    threads: any[];
    default_message_notifications: number;
    premium_subscription_count: number;
    created_at: Date;
    constructor(data: IGuild, token: string) {
        Object.assign(this, {
            ...data,
            icon: `${discordCDN}/icons/${this.id}/${data.icon}.png`,
            roles: data.roles.map((r) => [r.id, new Role(r)]),
            members: new Map(
                data.members.map((m) => [m.user.id, new Member(m)])
            ),
            channels: new Map(data.channels.map((m) => [m.id, m])),
            created_at: new Date(data.joined_at),
        });
    }

    async createRole(data: createRoleProps) {
        return new Role(
            await http.POST(
                `/guilds/${this.id}/roles`,
                JSON.stringify({
                    ...data,
                    permissions: data.permissions.toString(),
                })
            )
        );
    }
    async changeRolePosition(role: Role | string, position: number) {
        const id = role instanceof Role ? role.id : role;
        return new Role(
            await http.POST(
                `/guilds/${this.id}/roles/`,
                JSON.stringify({ id, position })
            )
        );
    }
    async modifyRole(role: Role | string, data: createRoleProps) {
        const id = role instanceof Role ? role.id : role;
        return new Role(
            await http.PATCH(
                `/guilds/${this.id}/roles/${id}`,
                JSON.stringify({
                    ...data,
                    permissions: data.permissions.toString(),
                })
            )
        );
    }
}

export default Guild;
