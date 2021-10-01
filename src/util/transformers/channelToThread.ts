import { ChannelTypes } from '../../interfaces';
// import { ThreadMemberModified } from '../../interfaces';
// import { Collection } from '../Collection';
// import { createNewProp } from '../util';

// export const threadToggles = {
//     /** Whether this thread is archived. */
//     archived: 1n,
//     /** Whether this thread is locked. */
//     locked: 2n,
// };

// const baseThread: Partial<FuwaThread> = {
//     get archived() {
//         return Boolean(this.bitfield! & threadToggles.archived);
//     },
//     get locked() {
//         return Boolean(this.bitfield! & threadToggles.locked);
//     },
//     get is_private() {
//         return this.type === ChannelTypes.GuildPrivateThread;
//     },
//     get is_public() {
//         return !this.is_private;
//     },
//     // TODO Make Cache
//     // get guild_id() {
//     //     return Cache.channels.get(this.parent_id!)!.guildId;
//     // },
//     toJSON() {
//         return {
//             id: this.id?.toString(),
//             type: this.type,
//             parent_id: this.parent_id?.toString(),
//             member_count: this.member_count,
//             message_count: this.message_count,
//             archive_timestamp: new Date(this.archive_timestamp!).toISOString(),
//             auto_archive_duration: this.auto_archive_duration,
//             archived: this.archived,
//             locked: this.locked,
//         } as unknown as Thread;
//     },
// };

// export function channelToThread(channel: Channel) {
//     let bitfield = 0n;

//     if (channel.thread_metadata?.archived) bitfield |= threadToggles.archived;
//     if (channel.thread_metadata?.locked) bitfield |= threadToggles.locked;

//     return Object.create(baseThread, {
//         id: createNewProp(Number(channel.id)),
//         type: createNewProp(channel.type),
//         parentId: createNewProp(Number(channel.parent_id!)),
//         memberCount: createNewProp(channel.member_count),
//         messageCount: createNewProp(channel.message_count),
//         archive_timestamp: createNewProp(
//             channel.thread_metadata?.archive_timestamp
//                 ? Date.parse(channel.thread_metadata.archive_timestamp)
//                 : undefined
//         ),
//         auto_archive_duration: createNewProp(channel.thread_metadata?.auto_archive_duration || 0),
//         bitfield: createNewProp(bitfield),
//         owner_id: createNewProp(Number(channel.owner_id!)),
//         bot_is_member: createNewProp(Boolean(channel.member)),
//         members: createNewProp(new Collection<bigint, Omit<ThreadMemberModified, 'id'>>()),
//     }) as FuwaThread;
// }

/**
 * TODO move to types folder later
 */
export interface Thread {
    id: string;
    type: ChannelTypes.GuildNewsThread | ChannelTypes.GuildPublicThread | ChannelTypes.GuildPrivateThread;
    parent_id: string;
    member_count: number;
    message_count: number;
    archiveTimestamp: string;
    auto_archive_duration: number;
    archived: boolean;
    locked: boolean;
    owner_id: string;
    bot_is_member: boolean;
}

// export interface FuwaThread {
//     id: bigint;
//     type: ChannelTypes.GuildNewsThread | ChannelTypes.GuildPublicThread | ChannelTypes.GuildPrivateThread;
//     parent_id: bigint;
//     member_count: number;
//     message_count: number;
//     archive_timestamp: number;
//     auto_archive_duration: number;
//     archived: boolean;
//     locked: boolean;
//     bitfield: bigint;
//     owner_id: bigint;
//     is_private: boolean;
//     is_public: boolean;
//     bot_is_member: boolean;
//     guild_id: bigint;
//     members: Collection<bigint, Omit<ThreadMemberModified, 'id'>>;
//     toJSON(): Thread;
// }
