import { Channel } from './index';

// TODO: add docs link
export interface ListActiveThreads {
    /** The active threads */
    threads: Channel[];
    /** A thread member object for each returned thread the current user has joined */
    members: ThreadMember[];
    /** Whether there are potentially additional threads that could be returned on subsequent call */
    hasMore: boolean;
}

// TODO: add docs link
export interface ListPublicArchivedThreads {
    // TODO: convert unix to ISO9601 timestamp
    /** Returns threads before this timestamp. UNIX or ISO8601 timestamp */
    before?: number | string;
    /** Optional maximum number of threads to return */
    limit?: number;
}

/** @see https://discord.com/developers/docs/resources/channel#modify-channel-json-params-thread */
export interface ModifyThread {
    /** 2-100 character thread name */
    name?: string;
    /** Whether the thread is archived */
    archived?: boolean;
    /** Duration in minutes to automatically archive the thread after recent activity */
    auto_archive_duration?: 60 | 1440 | 4320 | 10080;
    /** When a thread is locked, only users with `MANAGE_THREADS` can unarchive it */
    locked?: boolean;
    /** Amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the permission `MANAGE_MESSAGES`, `MANAGE_THREAD` or `MANAGE_CHANNEL` are unaffected */
    rate_limit_per_user?: number;
}

// TODO: add docs link
export interface StartThread {
    /** 2-100 character thread name */
    name: string;
    /** Duration in minutes to automatically archive the thread after recent activity */
    auto_archive_duration: 60 | 1440 | 4320 | 10080;
}
// TODO: add docs link
export interface ThreadListSync {
    /** The id of the guild */
    guild_id: string;
    /** The parent channel ids whose threads are being synced. If omitted, then threads were synced for the entire guild. This array may contain channelIds that have no active threads as well, so you know to clear that data */
    channel_ids?: string[];
    // TODO: check if need to omit
    /** All active threads in the given channels that the current user can access */
    threads: Channel[];
    /** All thread member objects from the synced threads for the current user, indicating which threads the current user has been added to */
    members: ThreadMember[];
}

export interface ThreadMemberBase {
    /** Any user-thread settings, currently only used for notifications */
    flags: number;
}

export interface ThreadMemberOnGuildCreate extends ThreadMemberBase {
    /** The time the current user last joined the thread */
    join_timestamp: string;
}

export interface ThreadMember extends ThreadMemberBase {
    /** The id of the thread */
    id?: string;
    /** The id of the user */
    user_id?: string;
    /** The time the current user last joined the thread */
    join_timestamp: string;
}

export interface ThreadMemberModified extends ThreadMemberBase {
    /** The id of the thread */
    id: number;
    /** The id of the user */
    user_id: number;
    /** The time the current user last joined the thread */
    join_timestamp: number;
}

export interface ThreadMembersUpdateBase {
    /** The approximate number of members in the thread, capped at 50 */
    member_count: number;
}

// TODO: add docs link
export interface ThreadMembersUpdate extends ThreadMembersUpdateBase {
    /** The id of the thread */
    id: string;
    /** The id of the guild */
    guild_id: string;
    /** The users who were added to the thread */
    added_members?: ThreadMember[];
    /** The id of the users who were removed from the thread */
    removed_member_ids?: string[];
}

export interface ThreadMembersUpdateModified extends ThreadMembersUpdateBase {
    /** The id of the thread */
    id: number;
    /** The id of the guild */
    guild_id: number;
    /** The users who were added to the thread */
    added_members?: ThreadMemberModified[];
    /** The id of the users who were removed from the thread */
    removed_member_ids?: number[];
}

export interface ThreadMetadata {
    /** Whether the thread is archived */
    archived: boolean;
    /** Duration in minutes to automatically archive the thread after recent activity */
    auto_archive_duration: 60 | 1440 | 4320 | 10080;
    // TODO(threads): channel struct should convert this to a unixx
    /** Timestamp when the thread's archive status was last changed, used for calculating recent activity */
    archive_timestamp: string;
    /** When a thread is locked, only users with `MANAGE_THREADS` can unarchive it */
    locked?: boolean;
}
