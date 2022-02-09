[fuwa.js](../README.md) / [Exports](../modules.md) / Role

# Class: Role

## Table of contents

### Constructors

- [constructor](Role.md#constructor)

### Accessors

- [color](Role.md#color)
- [hoist](Role.md#hoist)
- [icon](Role.md#icon)
- [id](Role.md#id)
- [isManaged](Role.md#ismanaged)
- [mentionable](Role.md#mentionable)
- [name](Role.md#name)
- [permissions](Role.md#permissions)
- [position](Role.md#position)

### Methods

- [delete](Role.md#delete)
- [edit](Role.md#edit)

## Constructors

### constructor

• **new Role**(`data`, `guildId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Role` |
| `guildId` | `string` |

#### Defined in

[lib/discord/Guild.ts:186](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L186)

## Accessors

### color

• `get` **color**(): `number`

#### Returns

`number`

#### Defined in

[lib/discord/Guild.ts:194](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L194)

___

### hoist

• `get` **hoist**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/discord/Guild.ts:197](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L197)

___

### icon

• `get` **icon**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:203](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L203)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:188](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L188)

___

### isManaged

• `get` **isManaged**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/discord/Guild.ts:238](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L238)

___

### mentionable

• `get` **mentionable**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/discord/Guild.ts:200](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L200)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:191](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L191)

___

### permissions

• `get` **permissions**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `AddReactions` | `boolean` |
| `Administrator` | `boolean` |
| `AttachFiles` | `boolean` |
| `BanMembers` | `boolean` |
| `ChangeNickname` | `boolean` |
| `Connect` | `boolean` |
| `CreateInstantInvite` | `boolean` |
| `DeafenMembers` | `boolean` |
| `EmbedLinks` | `boolean` |
| `KickMembers` | `boolean` |
| `ManageChannels` | `boolean` |
| `ManageEmojisAndStickers` | `boolean` |
| `ManageGuild` | `boolean` |
| `ManageMessages` | `boolean` |
| `ManageNicknames` | `boolean` |
| `ManageRoles` | `boolean` |
| `ManageThreads` | `boolean` |
| `ManageWebhooks` | `boolean` |
| `MentionEveryone` | `boolean` |
| `MoveMembers` | `boolean` |
| `MuteMembers` | `boolean` |
| `PrioritySpeaker` | `boolean` |
| `ReadMessageHistory` | `boolean` |
| `RequestToSpeak` | `boolean` |
| `SendMessages` | `boolean` |
| `SendTTSMessages` | `boolean` |
| `Speak` | `boolean` |
| `Stream` | `boolean` |
| `UseApplicationCommands` | `boolean` |
| `UseExternalStickers` | `boolean` |
| `UsePrivateThreads` | `boolean` |
| `UsePublicThreads` | `boolean` |
| `UseVAD` | `boolean` |
| `ViewAuditLog` | `boolean` |
| `ViewChannel` | `boolean` |
| `ViewGuildInsights` | `boolean` |

#### Defined in

[lib/discord/Guild.ts:225](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L225)

___

### position

• `get` **position**(): `number`

#### Returns

`number`

#### Defined in

[lib/discord/Guild.ts:208](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L208)

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Guild.ts:234](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L234)

___

### edit

▸ **edit**(`data`): `Promise`<[`Role`](Role.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RoleCreateUpdate`](../modules.md#rolecreateupdate) |

#### Returns

`Promise`<[`Role`](Role.md)\>

#### Defined in

[lib/discord/Guild.ts:211](https://github.com/Fuwajs/Fuwa.js/blob/6d44e08/src/lib/discord/Guild.ts#L211)
