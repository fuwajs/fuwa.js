[fuwa.js](../README.md) / [Exports](../modules.md) / Guild

# Class: Guild

## Table of contents

### Constructors

- [constructor](Guild.md#constructor)

### Properties

- [channels](Guild.md#channels)
- [members](Guild.md#members)
- [roles](Guild.md#roles)

### Accessors

- [banner](Guild.md#banner)
- [createdAt](Guild.md#createdat)
- [desc](Guild.md#desc)
- [icon](Guild.md#icon)
- [id](Guild.md#id)
- [isLarge](Guild.md#islarge)
- [isOwner](Guild.md#isowner)
- [isUnavailable](Guild.md#isunavailable)
- [name](Guild.md#name)
- [nsfwLevel](Guild.md#nsfwlevel)
- [ownerId](Guild.md#ownerid)
- [size](Guild.md#size)
- [welcomeChannels](Guild.md#welcomechannels)

### Methods

- [addRole](Guild.md#addrole)
- [ban](Guild.md#ban)
- [kick](Guild.md#kick)
- [leave](Guild.md#leave)
- [unban](Guild.md#unban)
- [get](Guild.md#get)

## Constructors

### constructor

• **new Guild**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Guild` |

#### Defined in

[lib/discord/Guild.ts:12](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L12)

## Properties

### channels

• **channels**: `Map`<`string`, [`Channel`](Channel.md)\>

Returns total guild channels

#### Defined in

[lib/discord/Guild.ts:53](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L53)

___

### members

• **members**: `Map`<`string`, [`Member`](Member.md)\>

Returns total guild members

#### Defined in

[lib/discord/Guild.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L42)

___

### roles

• **roles**: `Map`<`string`, [`Role`](Role.md)\>

Fetches a list of guild roles and there ID's

**`returns`** Array<string>

#### Defined in

[lib/discord/Guild.ts:49](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L49)

## Accessors

### banner

• `get` **banner**(): `string`

banner for the guild

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:28](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L28)

___

### createdAt

• `get` **createdAt**(): `Date`

Returns total guild members

#### Returns

`Date`

#### Defined in

[lib/discord/Guild.ts:77](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L77)

___

### desc

• `get` **desc**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:60](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L60)

___

### icon

• `get` **icon**(): `string`

icon for the guild

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L24)

___

### id

• `get` **id**(): `string`

id of the guild

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L20)

___

### isLarge

• `get` **isLarge**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/discord/Guild.ts:84](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L84)

___

### isOwner

• `get` **isOwner**(): `boolean`

Checks if the user id passed has the same id as the guild owner.

#### Returns

`boolean`

boolean

#### Defined in

[lib/discord/Guild.ts:73](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L73)

___

### isUnavailable

• `get` **isUnavailable**(): `boolean`

Checks if the guild is available or not

#### Returns

`boolean`

boolean

#### Defined in

[lib/discord/Guild.ts:67](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L67)

___

### name

• `get` **name**(): `string`

Returns the name of the guild

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:32](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L32)

___

### nsfwLevel

• `get` **nsfwLevel**(): ``"Default"`` \| ``"Explicit"`` \| ``"Safe"`` \| ``"AgeRestricted"``

The NSFW level of the guild

#### Returns

``"Default"`` \| ``"Explicit"`` \| ``"Safe"`` \| ``"AgeRestricted"``

#### Defined in

[lib/discord/Guild.ts:81](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L81)

___

### ownerId

• `get` **ownerId**(): `string`

Returns the guild owner id

#### Returns

`string`

#### Defined in

[lib/discord/Guild.ts:57](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L57)

___

### size

• `get` **size**(): `number`

! WARNING: This does not *yet*  take into account sharding.
Returns in total guild size

#### Returns

`number`

#### Defined in

[lib/discord/Guild.ts:38](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L38)

___

### welcomeChannels

• `get` **welcomeChannels**(): `WelcomeScreen`

The Welcome screen channel id for the guild.

#### Returns

`WelcomeScreen`

#### Defined in

[lib/discord/Guild.ts:88](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L88)

## Methods

### addRole

▸ **addRole**(`data`): `Promise`<[`Role`](Role.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RoleCreateUpdate`](../modules.md#rolecreateupdate) |

#### Returns

`Promise`<[`Role`](Role.md)\>

#### Defined in

[lib/discord/Guild.ts:91](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L91)

___

### ban

▸ **ban**(`user`, `reason?`, `deleteMessageDays?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` \| [`User`](User.md) \| [`Member`](Member.md) |
| `reason?` | `string` |
| `deleteMessageDays?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Guild.ts:124](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L124)

___

### kick

▸ **kick**(`user`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` \| [`User`](User.md) \| [`Member`](Member.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Guild.ts:134](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L134)

___

### leave

▸ **leave**(): `Promise`<`void`\>

Allows the given application to leave the current requested guild.

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Guild.ts:109](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L109)

___

### unban

▸ **unban**(`user`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `string` \| [`User`](User.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Guild.ts:139](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L139)

___

### get

▸ `Static` **get**(`id`, `force?`): `Promise`<[`Guild`](Guild.md)\>

Allows the API to fetch all base Guild information.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | the ID of the guild. |
| `force` | `boolean` | `false` | by default we search the bot cache only, but if forced = true it will search the discord api if no guild is in the cache. |

#### Returns

`Promise`<[`Guild`](Guild.md)\>

fuwa.js#Guild

#### Defined in

[lib/discord/Guild.ts:119](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/discord/Guild.ts#L119)
