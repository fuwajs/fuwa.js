export * from './extra';
import type { User } from '../member';
/**
 * @description Represents a guild or DM channel within Discord.
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-structure
 */
export interface Channel {
    id: string;
    type: ChannelType;
    guild_id?: string;
    position?: number;
    permission_overwrites?: Overwrite[];
    name?: string;
    topic?: string | null;
    nsfw?: boolean;
    last_message_id?: string | null;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: User[];
    icon?: string | null;
    owner_id?: string;
    application_id?: string;
    parent_id?: string | null;
    last_pin_timestamp?: Date | null;
    rtc_region?: string | null;
    video_quality_mode?: number;
    message_count?: number;
    member_count?: number;
    thread_metadata?: ThreadMetadata;
    member?: ThreadMember;
    default_auto_archive_duration?: number;
    permissions?: string;
    /** Default duration for newly created threads, in minutes, to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080 */
    defaultAutoArchiveDuration?: number;
}
/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export declare enum ChannelType {
    /**
     * @description a text channel within a server
     */
    Text = 0,
    /**
     * @description a direct message between user
     */
    Dm = 1,
    /**
     * @description a voice channel within a server
     */
    Voice = 2,
    /**
     * @description a direct message between multiple users
     */
    GroupDM = 3,
    /**
     * @description an organization category that contains up to 50 channels
     */
    Category = 4,
    /**
     * @description a channel that users can follow and crosspost into their own server
     */
    News = 5,
    /**
     * @description a channel in which game developers can sell their game on Discord
     */
    Store = 6,
    /**
     * @description a temporary sub-channel within a news channel
     */
    NewsThread = 7,
    /**
     * @description a temporary sub-channel within a text channel
     */
    PublicThread = 8,
    /**
     * @description a temporary sub-channel within a text channel that is only viewable by those invited and those with the ManageThreads permission
     */
    PrivateThread = 9,
    /**
     * @description a voice channel for hosting events with an audience
     */
    StageVoice = 10
}
/**
 * @description The thread metadata object contains a number of thread-specific channel that are not needed by other channel types.
 */
export interface ThreadMetadata {
    /**
     * @description whether the thread is archived
     */
    archived: boolean;
    /**
     * @description duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080
     */
    auto_archive_duration: number;
    /**
     * @description timestamp when the thread's archive status was last changed, used for calculating recent activity
     */
    archive_timestamp: Date;
    /**
     * @description wheter the thread is locked; when a thread is locked, only users with the manage threads permissions can unarchive it
     */
    locked: boolean;
    /**
     * @description whether non-moderators can add other non-moderators to a thread; only available on private threads
     */
    invitable?: boolean;
}
/**
 * @description A thread member is used to indicate whether a user has joined a thread or not.
 */
export interface ThreadMember {
    id?: string;
    user_id?: string;
    join_timestamp: Date;
    flags?: number;
}
export interface Overwrite {
    id: string;
    type: number;
    allow: string;
    deny: string;
}
export declare type ChannelProps = {
    name: string;
    type: ChannelType;
    position?: number;
    topic?: string;
    nsfw?: boolean;
    rate_limit_per_user?: number;
    /**
     * Only works for voice channels
     */
    bitrate?: number;
    /**
     * Only works for voice channels
     */
    user_limit?: number;
    permission_overwrites?: Overwrite[];
    /**
     * This is for channel categories
     */
    parent_id?: string;
    rtc_region?: string;
    /**
     * Video quality of a voice channel
     */
    video_quality_mode?: number;
    default_auto_archive_duration?: number;
};
//# sourceMappingURL=index.d.ts.map