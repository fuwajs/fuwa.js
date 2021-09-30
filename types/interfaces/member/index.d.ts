import { GuildMember } from '../guild';
import { Integration } from '../integrations';
/**
 * @see https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface Member {
    user?: User;
    nick: string | null;
    roles: string[];
    joined_at: Date;
    premium_since?: Date | null;
    deaf: boolean;
    mute: boolean;
    pending?: boolean;
}
/** @see https://discord.com/developers/docs/resources/user#user-object-user-flags */
export declare enum UserFlags {
    None = 0,
    DiscordEmployee = 1,
    PartneredServerOwner = 2,
    HypesquadEvents = 4,
    BugHunterLevelOne = 8,
    HouseBravery = 64,
    HouseBrilliance = 128,
    HouseBalance = 256,
    EarlySupporter = 512,
    TeamUser = 1024,
    BugHunterLevelTwo = 16384,
    VerifiedBot = 65536,
    EarlyVerifiedBotDev = 131072,
    DiscordMod = 262144
}
/** https://discord.com/developers/docs/resources/user#user-object */
export interface User {
    /** The user's id */
    id: string;
    /** The user's username, not unique across the platform */
    username: string;
    /** The user's 4-digit discord-tag */
    discriminator: string;
    /** The user's avatar hash */
    avatar: string | null;
    /** Whether the user belongs to an OAuth2 application */
    bot?: boolean;
    /** Whether the user is an Official Discord System user (part of the urgent message system) */
    system?: boolean;
    /** Whether the user has two factor enabled on their account */
    mfa_enabled?: boolean;
    /** The user's chosen language option */
    locale?: string;
    /** Whether the email on this account has been verified */
    verified?: boolean;
    /** The user's email */
    email?: string | null;
    /** The flags on a user's account */
    flags?: UserFlags;
    /** The type of Nitro subscription on a user's account */
    premium_type?: PremiumTypes;
    /** The public flags on a user's account */
    public_flags?: UserFlags;
}
export interface Author {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
}
/** https://discord.com/developers/docs/resources/guild#guild-member-object */
export declare type GuildMemberWithUser = Omit<GuildMember, 'user'> & {
    user: User;
};
/** https://discord.com/developers/docs/resources/user#connection-objecthttps://discord.com/developers/docs/resources/user#user-object-premium-types */
export interface Connection {
    /** id of the connection account */
    id: string;
    /** The username of the connection account */
    name: string;
    /** The service of the connection (twitch, youtube) */
    type: string;
    /** Whether the connection is revoked */
    revoked?: boolean;
    /** An array of partial server integrations */
    integrations?: Integration[];
    /** Whether the connection is verified */
    verified: boolean;
    /** Whether friend sync is enabled for this connection */
    friend_sync: boolean;
    /** Whether activities related to this connection will be shown in presence updates */
    show_activity: boolean;
    /** Visibility of this connection */
    visibility: VisibilityTypes;
}
/** @see https://discord.com/developers/docs/resources/user#create-dm */
export interface CreateDM {
    /** The recipient to open a DM channel with */
    recipient_id: string;
}
/** @see https://discord.com/developers/docs/resources/user#create-group-dm */
export interface CreateGroupDM {
    /** Access tokens of users that have granted your app the `gdm.join` scope */
    access_tokens: string[];
    /** A dictionary of user ids to their respective nicknames */
    nicks: Record<string, string>;
}
/** @see https://discord.com/developers/docs/resources/user#modify-current-user */
export interface ModifyCurrentUser {
    /** User's username, if changed may cause the user's discriminator to be randomized. */
    username?: string;
    /** If passed, modifies the user's avatar */
    avatar?: string;
}
/** @see https://discord.com/developers/docs/resources/user#user-object-premium-types */
export declare enum PremiumTypes {
    None = 0,
    NitroClassic = 1,
    Nitro = 2
}
/** @see https://discord.com/developers/docs/resources/user#connection-object-visibility-types */
export declare enum VisibilityTypes {
    /** Invisible to everyone except the user themselves */
    None = 0,
    /** Visible to everyone */
    Everyone = 1
}
//# sourceMappingURL=index.d.ts.map