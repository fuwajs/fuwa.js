import { GuildMember } from '../guild';
import { Integration } from '../integrations';

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-member-object
 */
export interface Member {
    guilds: any;
    /** The user this guild member represents */
    user?: User;
    /** This users guild nickname */
    nick?: string | null;
    /** Array of role object ids */
    roles: string[];
    /** When the user joined the guild */
    joined_at: Date;
    /** When the user started boosing the guild */
    premium_since?: Date | null;
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


/** @see https://discord.com/developers/docs/resources/user#user-object-user-flags */

export enum UserFlags {
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

/* eslint-disable */
// export interface UserSettings {}
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
export enum PremiumTypes {
  None,
  NitroClassic,
  Nitro,
}

/** @see https://discord.com/developers/docs/resources/user#connection-object-visibility-types */
export enum VisibilityTypes {
  /** Invisible to everyone except the user themselves */
  None,
  /** Visible to everyone */
  Everyone,
}