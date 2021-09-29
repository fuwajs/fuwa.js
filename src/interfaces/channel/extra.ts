import type { Application, Channel, Guild, User } from "../index"

/** https://discord.com/developers/docs/resources/invite#invite-object */
export interface Invite {
    /** The invite code (unique Id) */
    code: string;
    /** The guild this invite is for */
    guild?: Partial<Guild>;
    /** The channel this invite is for */
    channel: Partial<Channel>;
    /** The user who created the invite */
    inviter?: User;
    /** The type of target for this voice channel invite */
    targetType?: TargetTypes;
    /** The target user for this invite */
    targetUser?: User;
    /** The embedded application to open for this voice channel embedded application invite */
    targetApplication?: Partial<Application>;
    /** Approximate count of online members (only present when target_user is set) */
    approximatePresenceCount?: number;
    /** Approximate count of total members */
    approximateMemberCount?: number;
    /** The expiration date of this invite, returned from the `GET /invites/<code>` endpoint when `with_expiration` is `true` */
    expiresAt?: string | null;
    /** Stage instance data if there is a public Stage instance in the Stage channel this invite is for */
    stageInstance?: InviteStageInstance;
}

export interface CreateChannelInvite {
    /** Duration of invite in seconds before expiry, or 0 for never. Between 0 and 604800 (7 days). Default: 86400 (24 hours) */
    maxAge?: number;
    /** Max number of users or 0 for unlimited. Between 0 and 100. Default: 0 */
    maxUses?: number;
    /** Whether this invite only grants temporary membership. Default: false */
    temporary?: boolean;
    /** If true, don't try to reuse simmilar invite (useful for creating many unique one time use invites). Default: false */
    unique?: boolean;
    /** The type of target for this voice channel invite */
    targetType?: InviteTargetTypes;
    /** The id of the user whose stream to display for this invite, required if `target_type` is 1, the user must be streaming in the channel */
    targetUserId?: string;
    /** The id of the embedded application to open for this invite, required if `target_type` is 2, the application must have the `EMBEDDED` flag */
    targetApplicationId?: string;
}

/** @see https://discord.com/developers/docs/resources/invite#invite-object-invite-target-types */
export enum InviteTargetTypes {
    Stream = 1,
    EmbeddedApplication,
}

/** @see https://discord.com/developers/docs/resources/invite#get-invite */
export interface GetInvite {
    /** Whether the invite should contain approximate member counts */
    withCounts?: boolean;
    /** Whether the invite should contain the expiration date */
    withExpiration?: boolean;
}
