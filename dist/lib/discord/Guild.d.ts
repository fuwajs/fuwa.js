/******************************************************************************
 * @file src/lib/discord/Guild.ts
 * @fileoverview Exports a class 'implementation' of the Guild Interface
 * (IGuild)
 *****************************************************************************/
/// <reference types="node" />
import { Guild as IGuild, GuildHashes, Channel as IChannel, RoleProps, Ban, Invite, Emoji } from '../_DiscordAPI';
import Member from './Member';
import Role from './Role';
import { Channel } from './Channel';
declare class Guild {
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
    constructor(data: IGuild);
    modifyRolePosition(role: Role | string, position: number): Promise<Role>;
    modifyRole(role: Role | string, data: RoleProps): Promise<Role>;
    modifyEmoji(emoji: Emoji | string, data: {
        name: string;
        roles?: string[] | Role[];
    }): Promise<Emoji>;
    getMember(uid: string): Promise<Member>;
    getMembersByNickname(nickname: string): Promise<any>;
    getEmojis(): Promise<Map<string, Emoji>>;
    getEmoji(id: string): Promise<Emoji>;
    getBans(): Promise<Ban[]>;
    getBan(uid: string): Promise<Ban>;
    getinvites(): Promise<Invite[]>;
    getInvite(id: string): Promise<Invite>;
    deleteInvite(invite: Invite | string): Promise<any>;
    deleteEmoji(emoji: Emoji | string): Promise<any>;
    createChannel(data: IChannel, reason?: string): Promise<Channel>;
    createRole(data: RoleProps): Promise<Role>;
    createEmoji(data: {
        name: string;
        image: {
            data: Buffer;
            mimetype: string;
        } | string;
        roles: Role[] | string[];
    }): Promise<Emoji>;
    ban(member: Member | string, reason?: string, delete_messages_since?: number): Promise<any>;
    unban(member: Member | string): Promise<any>;
}
export default Guild;
