[fuwa.js](../README.md) / [Exports](../modules.md) / [\_DiscordAPI](../modules/_DiscordAPI.md) / ThreadMetadata

# Interface: ThreadMetadata

[_DiscordAPI](../modules/_DiscordAPI.md).ThreadMetadata

**`description`** The thread metadata object contains a number of thread-specific channel that are not needed by other channel types.

## Table of contents

### Properties

- [archive\_timestamp](_DiscordAPI.ThreadMetadata.md#archive_timestamp)
- [archived](_DiscordAPI.ThreadMetadata.md#archived)
- [auto\_archive\_duration](_DiscordAPI.ThreadMetadata.md#auto_archive_duration)
- [invitable](_DiscordAPI.ThreadMetadata.md#invitable)
- [locked](_DiscordAPI.ThreadMetadata.md#locked)

## Properties

### archive\_timestamp

• **archive\_timestamp**: `Date`

**`description`** timestamp when the thread's archive status was last changed, used for calculating recent activity

#### Defined in

[src/lib/_DiscordAPI.ts:871](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L871)

___

### archived

• **archived**: `boolean`

**`description`** whether the thread is archived

#### Defined in

[src/lib/_DiscordAPI.ts:863](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L863)

___

### auto\_archive\_duration

• **auto\_archive\_duration**: `number`

**`description`** duration in minutes to automatically archive the thread after recent activity, can be set to: 60, 1440, 4320, 10080

#### Defined in

[src/lib/_DiscordAPI.ts:867](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L867)

___

### invitable

• `Optional` **invitable**: `boolean`

**`description`** whether non-moderators can add other non-moderators to a thread; only available on private threads

#### Defined in

[src/lib/_DiscordAPI.ts:879](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L879)

___

### locked

• **locked**: `boolean`

**`description`** wheter the thread is locked; when a thread is locked, only users with the manage threads permissions can unarchive it

#### Defined in

[src/lib/_DiscordAPI.ts:875](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L875)
