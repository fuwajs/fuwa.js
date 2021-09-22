[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Guild](../modules/discord_Guild.md) / default

# Class: default

[discord/Guild](../modules/discord_Guild.md).default

## Table of contents

### Constructors

- [constructor](discord_Guild.default.md#constructor)

### Properties

- [afk_channel_id](discord_Guild.default.md#afk_channel_id)
- [afk_timeout](discord_Guild.default.md#afk_timeout)
- [application_id](discord_Guild.default.md#application_id)
- [banner](discord_Guild.default.md#banner)
- [bans](discord_Guild.default.md#bans)
- [channels](discord_Guild.default.md#channels)
- [created_at](discord_Guild.default.md#created_at)
- [default_message_notifications](discord_Guild.default.md#default_message_notifications)
- [description](discord_Guild.default.md#description)
- [discovery_splash](discord_Guild.default.md#discovery_splash)
- [emojis](discord_Guild.default.md#emojis)
- [explicit_content_filter](discord_Guild.default.md#explicit_content_filter)
- [features](discord_Guild.default.md#features)
- [guild_hashes](discord_Guild.default.md#guild_hashes)
- [icon](discord_Guild.default.md#icon)
- [icon_hash](discord_Guild.default.md#icon_hash)
- [id](discord_Guild.default.md#id)
- [large](discord_Guild.default.md#large)
- [lazy](discord_Guild.default.md#lazy)
- [max_members](discord_Guild.default.md#max_members)
- [max_video_channel_users](discord_Guild.default.md#max_video_channel_users)
- [members](discord_Guild.default.md#members)
- [mfa_level](discord_Guild.default.md#mfa_level)
- [name](discord_Guild.default.md#name)
- [owner](discord_Guild.default.md#owner)
- [owner_id](discord_Guild.default.md#owner_id)
- [permissions](discord_Guild.default.md#permissions)
- [preferred_locale](discord_Guild.default.md#preferred_locale)
- [premium_subscription_count](discord_Guild.default.md#premium_subscription_count)
- [premium_tier](discord_Guild.default.md#premium_tier)
- [presences](discord_Guild.default.md#presences)
- [public_updates_channel_id](discord_Guild.default.md#public_updates_channel_id)
- [region](discord_Guild.default.md#region)
- [roles](discord_Guild.default.md#roles)
- [rules_channel_id](discord_Guild.default.md#rules_channel_id)
- [splash](discord_Guild.default.md#splash)
- [system_channel_flags](discord_Guild.default.md#system_channel_flags)
- [system_channel_id](discord_Guild.default.md#system_channel_id)
- [threads](discord_Guild.default.md#threads)
- [unavailable](discord_Guild.default.md#unavailable)
- [vanity_url_code](discord_Guild.default.md#vanity_url_code)
- [verification_level](discord_Guild.default.md#verification_level)
- [voice_states](discord_Guild.default.md#voice_states)
- [widget_channel_id](discord_Guild.default.md#widget_channel_id)
- [widget_enabled](discord_Guild.default.md#widget_enabled)

### Methods

- [ban](discord_Guild.default.md#ban)
- [createChannel](discord_Guild.default.md#createchannel)
- [createEmoji](discord_Guild.default.md#createemoji)
- [createRole](discord_Guild.default.md#createrole)
- [deleteChannel](discord_Guild.default.md#deletechannel)
- [deleteEmoji](discord_Guild.default.md#deleteemoji)
- [deleteInvite](discord_Guild.default.md#deleteinvite)
- [getBan](discord_Guild.default.md#getban)
- [getBans](discord_Guild.default.md#getbans)
- [getEmoji](discord_Guild.default.md#getemoji)
- [getEmojis](discord_Guild.default.md#getemojis)
- [getInvite](discord_Guild.default.md#getinvite)
- [getInvites](discord_Guild.default.md#getinvites)
- [getMember](discord_Guild.default.md#getmember)
- [getMembersByNickname](discord_Guild.default.md#getmembersbynickname)
- [leave](discord_Guild.default.md#leave)
- [modifyEmoji](discord_Guild.default.md#modifyemoji)
- [modifyRole](discord_Guild.default.md#modifyrole)
- [modifyRolePosition](discord_Guild.default.md#modifyroleposition)
- [prune](discord_Guild.default.md#prune)
- [unban](discord_Guild.default.md#unban)

## Constructors

### constructor

• **new default**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Guild`](../interfaces/_DiscordAPI.Guild.md) |

#### Defined in

[src/lib/discord/Guild.ts:69](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L69)

## Properties

### afk\_channel\_id

• **afk\_channel\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:34](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L34)

___

### afk\_timeout

• **afk\_timeout**: `number`

#### Defined in

[src/lib/discord/Guild.ts:35](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L35)

___

### application\_id

• **application\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:60](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L60)

___

### banner

• **banner**: `string`

#### Defined in

[src/lib/discord/Guild.ts:51](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L51)

___

### bans

• **bans**: [`Ban`](../interfaces/_DiscordAPI.Ban.md)[]

#### Defined in

[src/lib/discord/Guild.ts:59](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L59)

___

### channels

• **channels**: `Map`<`string`, [`Channel`](../interfaces/_DiscordAPI.Channel.md)\>

#### Defined in

[src/lib/discord/Guild.ts:52](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L52)

___

### created\_at

• **created\_at**: `Date`

#### Defined in

[src/lib/discord/Guild.ts:68](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L68)

___

### default\_message\_notifications

• **default\_message\_notifications**: `number`

#### Defined in

[src/lib/discord/Guild.ts:66](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L66)

___

### description

• **description**: `string`

#### Defined in

[src/lib/discord/Guild.ts:39](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L39)

___

### discovery\_splash

• **discovery\_splash**: `string`

#### Defined in

[src/lib/discord/Guild.ts:29](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L29)

___

### emojis

• `Optional` **emojis**: `Map`<`string`, [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Defined in

[src/lib/discord/Guild.ts:56](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L56)

___

### explicit\_content\_filter

• **explicit\_content\_filter**: `number`

#### Defined in

[src/lib/discord/Guild.ts:62](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L62)

___

### features

• **features**: `any`[]

#### Defined in

[src/lib/discord/Guild.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L42)

___

### guild\_hashes

• **guild\_hashes**: [`GuildHashes`](../interfaces/_DiscordAPI.GuildHashes.md)

#### Defined in

[src/lib/discord/Guild.ts:45](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L45)

___

### icon

• **icon**: `string`

#### Defined in

[src/lib/discord/Guild.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L26)

___

### icon\_hash

• `Optional` **icon\_hash**: `string`

#### Defined in

[src/lib/discord/Guild.ts:27](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L27)

___

### id

• **id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L24)

___

### large

• **large**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:41](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L41)

___

### lazy

• **lazy**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:58](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L58)

___

### max\_members

• **max\_members**: `number`

#### Defined in

[src/lib/discord/Guild.ts:44](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L44)

___

### max\_video\_channel\_users

• **max\_video\_channel\_users**: `number`

#### Defined in

[src/lib/discord/Guild.ts:53](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L53)

___

### members

• **members**: `Map`<`string`, [`default`](discord_Member.default.md)\>

#### Defined in

[src/lib/discord/Guild.ts:49](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L49)

___

### mfa\_level

• **mfa\_level**: `number`

#### Defined in

[src/lib/discord/Guild.ts:61](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L61)

___

### name

• **name**: `string`

#### Defined in

[src/lib/discord/Guild.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L25)

___

### owner

• `Optional` **owner**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L30)

___

### owner\_id

• **owner\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:31](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L31)

___

### permissions

• `Optional` **permissions**: `string`

#### Defined in

[src/lib/discord/Guild.ts:32](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L32)

___

### preferred\_locale

• **preferred\_locale**: `string`

#### Defined in

[src/lib/discord/Guild.ts:54](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L54)

___

### premium\_subscription\_count

• **premium\_subscription\_count**: `number`

#### Defined in

[src/lib/discord/Guild.ts:67](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L67)

___

### premium\_tier

• **premium\_tier**: `number`

#### Defined in

[src/lib/discord/Guild.ts:47](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L47)

___

### presences

• **presences**: `any`[]

#### Defined in

[src/lib/discord/Guild.ts:50](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L50)

___

### public\_updates\_channel\_id

• **public\_updates\_channel\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:40](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L40)

___

### region

• **region**: `string`

#### Defined in

[src/lib/discord/Guild.ts:33](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L33)

___

### roles

• **roles**: `Map`<`string`, [`default`](discord_Role.default.md)\>

#### Defined in

[src/lib/discord/Guild.ts:57](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L57)

___

### rules\_channel\_id

• **rules\_channel\_id**: ``null``

#### Defined in

[src/lib/discord/Guild.ts:55](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L55)

___

### splash

• **splash**: `string`

#### Defined in

[src/lib/discord/Guild.ts:28](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L28)

___

### system\_channel\_flags

• **system\_channel\_flags**: `number`

#### Defined in

[src/lib/discord/Guild.ts:46](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L46)

___

### system\_channel\_id

• **system\_channel\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:64](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L64)

___

### threads

• **threads**: `any`[]

#### Defined in

[src/lib/discord/Guild.ts:65](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L65)

___

### unavailable

• **unavailable**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:43](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L43)

___

### vanity\_url\_code

• **vanity\_url\_code**: ``null``

#### Defined in

[src/lib/discord/Guild.ts:63](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L63)

___

### verification\_level

• **verification\_level**: `number`

#### Defined in

[src/lib/discord/Guild.ts:38](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L38)

___

### voice\_states

• **voice\_states**: `any`[]

#### Defined in

[src/lib/discord/Guild.ts:48](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L48)

___

### widget\_channel\_id

• `Optional` **widget\_channel\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:37](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L37)

___

### widget\_enabled

• `Optional` **widget\_enabled**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:36](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L36)

## Methods

### ban

▸ **ban**(`member`, `reason?`, `delete_messages_since?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `member` | `string` \| [`default`](discord_Member.default.md) |
| `reason?` | `string` |
| `delete_messages_since?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:196](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L196)

___

### createChannel

▸ **createChannel**(`data`, `reason?`): `Promise`<[`default`](discord_Channel.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Channel`](../interfaces/_DiscordAPI.Channel.md) |
| `reason?` | `string` |

#### Returns

`Promise`<[`default`](discord_Channel.default.md)\>

#### Defined in

[src/lib/discord/Guild.ts:164](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L164)

___

### createEmoji

▸ **createEmoji**(`data`): `Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.image` | `string` \| { `data`: `Buffer` ; `mimetype`: ``"png"`` \| ``"jpg"`` \| ``"gif"``  } |
| `data.name` | `string` |
| `data.roles?` | `string`[] \| [`default`](discord_Role.default.md)[] |

#### Returns

`Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Defined in

[src/lib/discord/Guild.ts:179](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L179)

___

### createRole

▸ **createRole**(`data`): `Promise`<[`default`](discord_Role.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RoleProps`](../modules/_DiscordAPI.md#roleprops) |

#### Returns

`Promise`<[`default`](discord_Role.default.md)\>

#### Defined in

[src/lib/discord/Guild.ts:173](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L173)

___

### deleteChannel

▸ **deleteChannel**(`channel`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` \| [`default`](discord_Channel.default.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:156](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L156)

___

### deleteEmoji

▸ **deleteEmoji**(`emoji`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emoji` | `string` \| [`Emoji`](../interfaces/_DiscordAPI.Emoji.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:160](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L160)

___

### deleteInvite

▸ **deleteInvite**(`invite`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `invite` | `string` \| [`Invite`](../interfaces/_DiscordAPI.Invite.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:152](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L152)

___

### getBan

▸ **getBan**(`uid`): `Promise`<[`Ban`](../interfaces/_DiscordAPI.Ban.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`<[`Ban`](../interfaces/_DiscordAPI.Ban.md)\>

#### Defined in

[src/lib/discord/Guild.ts:143](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L143)

___

### getBans

▸ **getBans**(): `Promise`<[`Ban`](../interfaces/_DiscordAPI.Ban.md)[]\>

#### Returns

`Promise`<[`Ban`](../interfaces/_DiscordAPI.Ban.md)[]\>

#### Defined in

[src/lib/discord/Guild.ts:140](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L140)

___

### getEmoji

▸ **getEmoji**(`id`): `Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Defined in

[src/lib/discord/Guild.ts:137](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L137)

___

### getEmojis

▸ **getEmojis**(): `Promise`<`Map`<`string`, [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>\>

#### Returns

`Promise`<`Map`<`string`, [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>\>

#### Defined in

[src/lib/discord/Guild.ts:132](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L132)

___

### getInvite

▸ **getInvite**(`id`): `Promise`<[`Invite`](../interfaces/_DiscordAPI.Invite.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`Invite`](../interfaces/_DiscordAPI.Invite.md)\>

#### Defined in

[src/lib/discord/Guild.ts:149](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L149)

___

### getInvites

▸ **getInvites**(): `Promise`<[`Invite`](../interfaces/_DiscordAPI.Invite.md)[]\>

#### Returns

`Promise`<[`Invite`](../interfaces/_DiscordAPI.Invite.md)[]\>

#### Defined in

[src/lib/discord/Guild.ts:146](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L146)

___

### getMember

▸ **getMember**(`uid`): `Promise`<[`default`](discord_Member.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`<[`default`](discord_Member.default.md)\>

#### Defined in

[src/lib/discord/Guild.ts:122](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L122)

___

### getMembersByNickname

▸ **getMembersByNickname**(`nickname`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `nickname` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:125](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L125)

___

### leave

▸ **leave**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:81](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L81)

___

### modifyEmoji

▸ **modifyEmoji**(`emoji`, `data`): `Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emoji` | `string` \| [`Emoji`](../interfaces/_DiscordAPI.Emoji.md) |
| `data` | `Object` |
| `data.name` | `string` |
| `data.roles?` | `string`[] \| [`default`](discord_Role.default.md)[] |

#### Returns

`Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Defined in

[src/lib/discord/Guild.ts:107](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L107)

___

### modifyRole

▸ **modifyRole**(`role`, `data`): `Promise`<[`default`](discord_Role.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `string` \| [`default`](discord_Role.default.md) |
| `data` | [`RoleProps`](../modules/_DiscordAPI.md#roleprops) |

#### Returns

`Promise`<[`default`](discord_Role.default.md)\>

#### Defined in

[src/lib/discord/Guild.ts:94](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L94)

___

### modifyRolePosition

▸ **modifyRolePosition**(`role`, `position`): `Promise`<[`default`](discord_Role.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `string` \| [`default`](discord_Role.default.md) |
| `position` | `number` |

#### Returns

`Promise`<[`default`](discord_Role.default.md)\>

#### Defined in

[src/lib/discord/Guild.ts:84](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L84)

___

### prune

▸ **prune**(`days`, `reason?`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `days` | `number` |
| `reason?` | `string` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/lib/discord/Guild.ts:216](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L216)

___

### unban

▸ **unban**(`member`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `member` | `string` \| [`default`](discord_Member.default.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:211](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Guild.ts#L211)
