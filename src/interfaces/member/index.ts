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

enum UserFlags {
    None = 0,
    DiscordEmployee = 1 << 0,
    PartneredServerOwner = 1 << 1,
    HypesquadEvents = 1 << 2,
    BugHunterLevelOne = 1 << 3,
    HouseBravery = 1 << 6,
    HouseBrilliance = 1 << 7,
    HouseBalance = 1 << 8,
    EarlySupporter = 1 << 9,
    TeamUser = 1 << 10,
    BugHunterLevelTwo = 1 << 14,
    VerifiedBot = 1 << 16,
    EarlyVerifiedBotDev = 1 << 17,
    DiscordMod = 1 << 18,
}

export { UserFlags };

export interface User extends Author {
    bot?: boolean;
    system?: boolean;
    /** IS 2FA Enabled */
    mfa_enabled?: boolean;
    locale?: string;
    /** Is the user's email verfied? */
    verified?: boolean;
    email?: string;
    accent_color?: number;
    banner?: string;
    flags?: number;
    premium_type?: PremiumTypes;
    public_flags?: UserFlags;
}

export interface Author {
    id: string;
    username: string;
    discriminator: string;
    avatar: string;
}

/* eslint-disable */
// export interface UserSettings {}

export enum PremiumTypes {
    None,
    NitroClassic,
    Nitro,
}

/** @see https://discord.com/developers/docs/resources/guild#guild-member-object */
export interface GuildMember {
    /** The user this guild member represents */
    user?: User;
    /** This users guild nickname */
    nick?: string | null;
    /** Array of role object ids */
    roles: string[];
    /** When the user joined the guild */
    joinedAt: string;
    /** When the user started boosing the guild */
    premiumSince?: string | null;
    /** Whether the user is deafened in voice channels */
    deaf: boolean;
    /** Whether the user is muted in voice channels */
    mute: boolean;
    /** Whether the user has not yet passed the guild's Membership Screening requirements */
    pending?: boolean;
}

// We use these types much since user always exists unless its a `CREATE_MESSAGE` or `MESSAGE_UPDATE` event

/** https://discord.com/developers/docs/resources/guild#guild-member-object */
export type GuildMemberWithUser = Omit<GuildMember, 'user'> & { user: User };