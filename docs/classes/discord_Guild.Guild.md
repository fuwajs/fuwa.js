[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Guild](../modules/discord_Guild.md) / Guild

# Class: Guild

[discord/Guild](../modules/discord_Guild.md).Guild

## Table of contents

### Constructors

- [constructor](discord_Guild.Guild.md#constructor)

### Properties

- [afk\_channel\_id](discord_Guild.Guild.md#afk_channel_id)
- [afk\_timeout](discord_Guild.Guild.md#afk_timeout)
- [application\_id](discord_Guild.Guild.md#application_id)
- [banner](discord_Guild.Guild.md#banner)
- [bans](discord_Guild.Guild.md#bans)
- [channels](discord_Guild.Guild.md#channels)
- [created\_at](discord_Guild.Guild.md#created_at)
- [default\_message\_notifications](discord_Guild.Guild.md#default_message_notifications)
- [description](discord_Guild.Guild.md#description)
- [discovery\_splash](discord_Guild.Guild.md#discovery_splash)
- [emojis](discord_Guild.Guild.md#emojis)
- [explicit\_content\_filter](discord_Guild.Guild.md#explicit_content_filter)
- [features](discord_Guild.Guild.md#features)
- [guild\_hashes](discord_Guild.Guild.md#guild_hashes)
- [icon](discord_Guild.Guild.md#icon)
- [icon\_hash](discord_Guild.Guild.md#icon_hash)
- [id](discord_Guild.Guild.md#id)
- [large](discord_Guild.Guild.md#large)
- [lazy](discord_Guild.Guild.md#lazy)
- [max\_members](discord_Guild.Guild.md#max_members)
- [max\_video\_channel\_users](discord_Guild.Guild.md#max_video_channel_users)
- [members](discord_Guild.Guild.md#members)
- [mfa\_level](discord_Guild.Guild.md#mfa_level)
- [name](discord_Guild.Guild.md#name)
- [owner](discord_Guild.Guild.md#owner)
- [owner\_id](discord_Guild.Guild.md#owner_id)
- [permissions](discord_Guild.Guild.md#permissions)
- [preferred\_locale](discord_Guild.Guild.md#preferred_locale)
- [premium\_subscription\_count](discord_Guild.Guild.md#premium_subscription_count)
- [premium\_tier](discord_Guild.Guild.md#premium_tier)
- [presences](discord_Guild.Guild.md#presences)
- [public\_updates\_channel\_id](discord_Guild.Guild.md#public_updates_channel_id)
- [region](discord_Guild.Guild.md#region)
- [roles](discord_Guild.Guild.md#roles)
- [rules\_channel\_id](discord_Guild.Guild.md#rules_channel_id)
- [splash](discord_Guild.Guild.md#splash)
- [system\_channel\_flags](discord_Guild.Guild.md#system_channel_flags)
- [system\_channel\_id](discord_Guild.Guild.md#system_channel_id)
- [threads](discord_Guild.Guild.md#threads)
- [unavailable](discord_Guild.Guild.md#unavailable)
- [vanity\_url\_code](discord_Guild.Guild.md#vanity_url_code)
- [verification\_level](discord_Guild.Guild.md#verification_level)
- [voice\_states](discord_Guild.Guild.md#voice_states)
- [widget\_channel\_id](discord_Guild.Guild.md#widget_channel_id)
- [widget\_enabled](discord_Guild.Guild.md#widget_enabled)

### Methods

- [ban](discord_Guild.Guild.md#ban)
- [createChannel](discord_Guild.Guild.md#createchannel)
- [createEmoji](discord_Guild.Guild.md#createemoji)
- [createRole](discord_Guild.Guild.md#createrole)
- [deleteChannel](discord_Guild.Guild.md#deletechannel)
- [deleteEmoji](discord_Guild.Guild.md#deleteemoji)
- [deleteInvite](discord_Guild.Guild.md#deleteinvite)
- [getBan](discord_Guild.Guild.md#getban)
- [getBans](discord_Guild.Guild.md#getbans)
- [getEmoji](discord_Guild.Guild.md#getemoji)
- [getEmojis](discord_Guild.Guild.md#getemojis)
- [getInvite](discord_Guild.Guild.md#getinvite)
- [getInvites](discord_Guild.Guild.md#getinvites)
- [getMember](discord_Guild.Guild.md#getmember)
- [getMembersByNickname](discord_Guild.Guild.md#getmembersbynickname)
- [leave](discord_Guild.Guild.md#leave)
- [modifyEmoji](discord_Guild.Guild.md#modifyemoji)
- [modifyRole](discord_Guild.Guild.md#modifyrole)
- [modifyRolePosition](discord_Guild.Guild.md#modifyroleposition)
- [prune](discord_Guild.Guild.md#prune)
- [unban](discord_Guild.Guild.md#unban)

## Constructors

### constructor

• **new Guild**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Guild`](../interfaces/_DiscordAPI.Guild.md) |

#### Defined in

[src/lib/discord/Guild.ts:68](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L68)

## Properties

### afk\_channel\_id

• **afk\_channel\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:33](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L33)

___

### afk\_timeout

• **afk\_timeout**: `number`

#### Defined in

[src/lib/discord/Guild.ts:34](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L34)

___

### application\_id

• **application\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:59](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L59)

___

### banner

• **banner**: `string`

#### Defined in

[src/lib/discord/Guild.ts:50](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L50)

___

### bans

• **bans**: [`Ban`](../interfaces/_DiscordAPI.Ban.md)[]

#### Defined in

[src/lib/discord/Guild.ts:58](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L58)

___

### channels

• **channels**: `Map`<`string`, [`Channel`](../interfaces/_DiscordAPI.Channel.md)\>

#### Defined in

[src/lib/discord/Guild.ts:51](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L51)

___

### created\_at

• **created\_at**: `Date`

#### Defined in

[src/lib/discord/Guild.ts:67](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L67)

___

### default\_message\_notifications

• **default\_message\_notifications**: `number`

#### Defined in

[src/lib/discord/Guild.ts:65](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L65)

___

### description

• **description**: `string`

#### Defined in

[src/lib/discord/Guild.ts:38](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L38)

___

### discovery\_splash

• **discovery\_splash**: `string`

#### Defined in

[src/lib/discord/Guild.ts:28](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L28)

___

### emojis

• `Optional` **emojis**: `Map`<`string`, [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Defined in

[src/lib/discord/Guild.ts:55](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L55)

___

### explicit\_content\_filter

• **explicit\_content\_filter**: `number`

#### Defined in

[src/lib/discord/Guild.ts:61](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L61)

___

### features

• **features**: `any`[]

#### Defined in

[src/lib/discord/Guild.ts:41](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L41)

___

### guild\_hashes

• **guild\_hashes**: [`GuildHashes`](../interfaces/_DiscordAPI.GuildHashes.md)

#### Defined in

[src/lib/discord/Guild.ts:44](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L44)

___

### icon

• **icon**: `string`

#### Defined in

[src/lib/discord/Guild.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L25)

___

### icon\_hash

• `Optional` **icon\_hash**: `string`

#### Defined in

[src/lib/discord/Guild.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L26)

___

### id

• **id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:23](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L23)

___

### large

• **large**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:40](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L40)

___

### lazy

• **lazy**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:57](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L57)

___

### max\_members

• **max\_members**: `number`

#### Defined in

[src/lib/discord/Guild.ts:43](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L43)

___

### max\_video\_channel\_users

• **max\_video\_channel\_users**: `number`

#### Defined in

[src/lib/discord/Guild.ts:52](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L52)

___

### members

• **members**: `Map`<`string`, [`Member`](discord_Member.Member.md)\>

#### Defined in

[src/lib/discord/Guild.ts:48](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L48)

___

### mfa\_level

• **mfa\_level**: `number`

#### Defined in

[src/lib/discord/Guild.ts:60](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L60)

___

### name

• **name**: `string`

#### Defined in

[src/lib/discord/Guild.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L24)

___

### owner

• `Optional` **owner**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:29](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L29)

___

### owner\_id

• **owner\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L30)

___

### permissions

• `Optional` **permissions**: `string`

#### Defined in

[src/lib/discord/Guild.ts:31](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L31)

___

### preferred\_locale

• **preferred\_locale**: `string`

#### Defined in

[src/lib/discord/Guild.ts:53](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L53)

___

### premium\_subscription\_count

• **premium\_subscription\_count**: `number`

#### Defined in

[src/lib/discord/Guild.ts:66](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L66)

___

### premium\_tier

• **premium\_tier**: `number`

#### Defined in

[src/lib/discord/Guild.ts:46](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L46)

___

### presences

• **presences**: `any`[]

#### Defined in

[src/lib/discord/Guild.ts:49](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L49)

___

### public\_updates\_channel\_id

• **public\_updates\_channel\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:39](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L39)

___

### region

• **region**: `string`

#### Defined in

[src/lib/discord/Guild.ts:32](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L32)

___

### roles

• **roles**: `Map`<`string`, [`Role`](discord_Role.Role.md)\>

#### Defined in

[src/lib/discord/Guild.ts:56](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L56)

___

### rules\_channel\_id

• **rules\_channel\_id**: ``null``

#### Defined in

[src/lib/discord/Guild.ts:54](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L54)

___

### splash

• **splash**: `string`

#### Defined in

[src/lib/discord/Guild.ts:27](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L27)

___

### system\_channel\_flags

• **system\_channel\_flags**: `number`

#### Defined in

[src/lib/discord/Guild.ts:45](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L45)

___

### system\_channel\_id

• **system\_channel\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:63](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L63)

___

### threads

• **threads**: `any`[]

#### Defined in

[src/lib/discord/Guild.ts:64](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L64)

___

### unavailable

• **unavailable**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L42)

___

### vanity\_url\_code

• **vanity\_url\_code**: ``null``

#### Defined in

[src/lib/discord/Guild.ts:62](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L62)

___

### verification\_level

• **verification\_level**: `number`

#### Defined in

[src/lib/discord/Guild.ts:37](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L37)

___

### voice\_states

• **voice\_states**: `any`[]

#### Defined in

[src/lib/discord/Guild.ts:47](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L47)

___

### widget\_channel\_id

• `Optional` **widget\_channel\_id**: `string`

#### Defined in

[src/lib/discord/Guild.ts:36](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L36)

___

### widget\_enabled

• `Optional` **widget\_enabled**: `boolean`

#### Defined in

[src/lib/discord/Guild.ts:35](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L35)

## Methods

### ban

▸ **ban**(`member`, `reason?`, `delete_messages_since?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `member` | `string` \| [`Member`](discord_Member.Member.md) |
| `reason?` | `string` |
| `delete_messages_since?` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:170](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L170)

___

### createChannel

▸ **createChannel**(`data`, `reason?`): `Promise`<[`Channel`](discord_Channel.Channel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Channel`](../interfaces/_DiscordAPI.Channel.md) |
| `reason?` | `string` |

#### Returns

`Promise`<[`Channel`](discord_Channel.Channel.md)\>

#### Defined in

[src/lib/discord/Guild.ts:145](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L145)

___

### createEmoji

▸ **createEmoji**(`data`): `Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `data.image` | `string` \| { `data`: `Buffer` ; `mimetype`: ``"png"`` \| ``"jpg"`` \| ``"gif"``  } |
| `data.name` | `string` |
| `data.roles?` | `string`[] \| [`Role`](discord_Role.Role.md)[] |

#### Returns

`Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Defined in

[src/lib/discord/Guild.ts:155](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L155)

___

### createRole

▸ **createRole**(`data`): `Promise`<[`Role`](discord_Role.Role.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RoleProps`](../modules/_DiscordAPI.md#roleprops) |

#### Returns

`Promise`<[`Role`](discord_Role.Role.md)\>

#### Defined in

[src/lib/discord/Guild.ts:152](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L152)

___

### deleteChannel

▸ **deleteChannel**(`channel`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `string` \| [`Channel`](discord_Channel.Channel.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:137](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L137)

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

[src/lib/discord/Guild.ts:141](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L141)

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

[src/lib/discord/Guild.ts:133](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L133)

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

[src/lib/discord/Guild.ts:124](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L124)

___

### getBans

▸ **getBans**(): `Promise`<[`Ban`](../interfaces/_DiscordAPI.Ban.md)[]\>

#### Returns

`Promise`<[`Ban`](../interfaces/_DiscordAPI.Ban.md)[]\>

#### Defined in

[src/lib/discord/Guild.ts:121](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L121)

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

[src/lib/discord/Guild.ts:118](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L118)

___

### getEmojis

▸ **getEmojis**(): `Promise`<`Map`<`string`, [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>\>

#### Returns

`Promise`<`Map`<`string`, [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>\>

#### Defined in

[src/lib/discord/Guild.ts:115](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L115)

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

[src/lib/discord/Guild.ts:130](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L130)

___

### getInvites

▸ **getInvites**(): `Promise`<[`Invite`](../interfaces/_DiscordAPI.Invite.md)[]\>

#### Returns

`Promise`<[`Invite`](../interfaces/_DiscordAPI.Invite.md)[]\>

#### Defined in

[src/lib/discord/Guild.ts:127](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L127)

___

### getMember

▸ **getMember**(`uid`): `Promise`<[`Member`](discord_Member.Member.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`<[`Member`](discord_Member.Member.md)\>

#### Defined in

[src/lib/discord/Guild.ts:107](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L107)

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

[src/lib/discord/Guild.ts:110](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L110)

___

### leave

▸ **leave**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:78](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L78)

___

### modifyEmoji

▸ **modifyEmoji**(`emoji`, `data`): `Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emoji` | `string` \| [`Emoji`](../interfaces/_DiscordAPI.Emoji.md) |
| `data` | `Object` |
| `data.name` | `string` |
| `data.roles?` | `string`[] \| [`Role`](discord_Role.Role.md)[] |

#### Returns

`Promise`<[`Emoji`](../interfaces/_DiscordAPI.Emoji.md)\>

#### Defined in

[src/lib/discord/Guild.ts:101](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L101)

___

### modifyRole

▸ **modifyRole**(`role`, `data`): `Promise`<[`Role`](discord_Role.Role.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `string` \| [`Role`](discord_Role.Role.md) |
| `data` | [`RoleProps`](../modules/_DiscordAPI.md#roleprops) |

#### Returns

`Promise`<[`Role`](discord_Role.Role.md)\>

#### Defined in

[src/lib/discord/Guild.ts:88](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L88)

___

### modifyRolePosition

▸ **modifyRolePosition**(`role`, `position`): `Promise`<[`Role`](discord_Role.Role.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `role` | `string` \| [`Role`](discord_Role.Role.md) |
| `position` | `number` |

#### Returns

`Promise`<[`Role`](discord_Role.Role.md)\>

#### Defined in

[src/lib/discord/Guild.ts:81](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L81)

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

[src/lib/discord/Guild.ts:186](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L186)

___

### unban

▸ **unban**(`member`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `member` | `string` \| [`Member`](discord_Member.Member.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Guild.ts:181](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Guild.ts#L181)
