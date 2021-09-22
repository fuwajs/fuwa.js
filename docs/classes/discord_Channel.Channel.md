[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Channel](../modules/discord_Channel.md) / Channel

# Class: Channel

[discord/Channel](../modules/discord_Channel.md).Channel

## Table of contents

### Constructors

- [constructor](discord_Channel.Channel.md#constructor)

### Properties

- [application_id](discord_Channel.Channel.md#application_id)
- [bitrate](discord_Channel.Channel.md#bitrate)
- [guild_id](discord_Channel.Channel.md#guild_id)
- [icon](discord_Channel.Channel.md#icon)
- [id](discord_Channel.Channel.md#id)
- [last_message_id](discord_Channel.Channel.md#last_message_id)
- [last_pin_timestamp](discord_Channel.Channel.md#last_pin_timestamp)
- [name](discord_Channel.Channel.md#name)
- [nsfw](discord_Channel.Channel.md#nsfw)
- [owner_id](discord_Channel.Channel.md#owner_id)
- [parent_id](discord_Channel.Channel.md#parent_id)
- [permission_overwrites](discord_Channel.Channel.md#permission_overwrites)
- [position](discord_Channel.Channel.md#position)
- [rate_limit_per_user](discord_Channel.Channel.md#rate_limit_per_user)
- [recipients](discord_Channel.Channel.md#recipients)
- [topic](discord_Channel.Channel.md#topic)
- [type](discord_Channel.Channel.md#type)
- [user_limit](discord_Channel.Channel.md#user_limit)

### Methods

- [delete](discord_Channel.Channel.md#delete)
- [getMessage](discord_Channel.Channel.md#getmessage)
- [getPins](discord_Channel.Channel.md#getpins)
- [modify](discord_Channel.Channel.md#modify)
- [pinMessage](discord_Channel.Channel.md#pinmessage)
- [prune](discord_Channel.Channel.md#prune)
- [send](discord_Channel.Channel.md#send)
- [unpinMessage](discord_Channel.Channel.md#unpinmessage)

## Constructors

### constructor

• **new Channel**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Channel`](../interfaces/_DiscordAPI.Channel.md) |

#### Defined in

[src/lib/discord/Channel.ts:40](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L40)

## Properties

### application\_id

• `Optional` **application\_id**: `string`

#### Defined in

[src/lib/discord/Channel.ts:36](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L36)

___

### bitrate

• `Optional` **bitrate**: `number`

#### Defined in

[src/lib/discord/Channel.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L30)

___

### guild\_id

• `Optional` **guild\_id**: `string`

#### Defined in

[src/lib/discord/Channel.ts:23](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L23)

___

### icon

• `Optional` **icon**: `string`

#### Defined in

[src/lib/discord/Channel.ts:34](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L34)

___

### id

• **id**: `string`

#### Defined in

[src/lib/discord/Channel.ts:21](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L21)

___

### last\_message\_id

• `Optional` **last\_message\_id**: `string`

#### Defined in

[src/lib/discord/Channel.ts:29](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L29)

___

### last\_pin\_timestamp

• `Optional` **last\_pin\_timestamp**: `Date`

#### Defined in

[src/lib/discord/Channel.ts:38](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L38)

___

### name

• `Optional` **name**: `string`

#### Defined in

[src/lib/discord/Channel.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L26)

___

### nsfw

• `Optional` **nsfw**: `boolean`

#### Defined in

[src/lib/discord/Channel.ts:28](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L28)

___

### owner\_id

• `Optional` **owner\_id**: `string`

#### Defined in

[src/lib/discord/Channel.ts:35](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L35)

___

### parent\_id

• `Optional` **parent\_id**: `string`

#### Defined in

[src/lib/discord/Channel.ts:37](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L37)

___

### permission\_overwrites

• `Optional` **permission\_overwrites**: [`Overwrite`](../interfaces/_DiscordAPI.Overwrite.md)[]

#### Defined in

[src/lib/discord/Channel.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L25)

___

### position

• `Optional` **position**: `number`

#### Defined in

[src/lib/discord/Channel.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L24)

___

### rate\_limit\_per\_user

• `Optional` **rate\_limit\_per\_user**: `number`

#### Defined in

[src/lib/discord/Channel.ts:32](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L32)

___

### recipients

• `Optional` **recipients**: [`User`](../interfaces/_DiscordAPI.User.md)[]

#### Defined in

[src/lib/discord/Channel.ts:33](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L33)

___

### topic

• `Optional` **topic**: `string`

#### Defined in

[src/lib/discord/Channel.ts:27](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L27)

___

### type

• **type**: [`ChannelTypes`](../enums/_DiscordAPI.ChannelTypes.md)

#### Defined in

[src/lib/discord/Channel.ts:22](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L22)

___

### user\_limit

• `Optional` **user\_limit**: `number`

#### Defined in

[src/lib/discord/Channel.ts:31](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L31)

## Methods

### delete

▸ **delete**(`reason?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Channel.ts:43](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L43)

___

### getMessage

▸ **getMessage**(`id`): `Promise`<[`Message`](discord_Message.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`<[`Message`](discord_Message.Message.md)\>

#### Defined in

[src/lib/discord/Channel.ts:69](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L69)

___

### getPins

▸ **getPins**(): `Promise`<[`Message`](discord_Message.Message.md)[]\>

#### Returns

`Promise`<[`Message`](discord_Message.Message.md)[]\>

#### Defined in

[src/lib/discord/Channel.ts:95](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L95)

___

### modify

▸ **modify**(`data`, `reason?`): `Promise`<[`Channel`](discord_Channel.Channel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ChannelProps`](../modules/_DiscordAPI.md#channelprops) |
| `reason?` | `string` |

#### Returns

`Promise`<[`Channel`](discord_Channel.Channel.md)\>

#### Defined in

[src/lib/discord/Channel.ts:74](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L74)

___

### pinMessage

▸ **pinMessage**(`mid`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mid` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Channel.ts:100](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L100)

___

### prune

▸ **prune**(`amt`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amt` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/lib/discord/Channel.ts:81](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L81)

___

### send

▸ **send**(`content`): `Promise`<[`Message`](discord_Message.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| [`Embed`](discord_Embed.Embed.md) |

#### Returns

`Promise`<[`Message`](discord_Message.Message.md)\>

#### Defined in

[src/lib/discord/Channel.ts:48](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L48)

___

### unpinMessage

▸ **unpinMessage**(`mid`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mid` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Channel.ts:103](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Channel.ts#L103)
