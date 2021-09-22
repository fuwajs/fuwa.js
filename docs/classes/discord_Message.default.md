[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Message](../modules/discord_Message.md) / default

# Class: default

[discord/Message](../modules/discord_Message.md).default

## Table of contents

### Constructors

- [constructor](discord_Message.default.md#constructor)

### Properties

- [author](discord_Message.default.md#author)
- [channel_id](discord_Message.default.md#channel_id)
- [content](discord_Message.default.md#content)
- [embeds](discord_Message.default.md#embeds)
- [guild_id](discord_Message.default.md#guild_id)
- [id](discord_Message.default.md#id)
- [message_reference](discord_Message.default.md#message_reference)
- [timestamp](discord_Message.default.md#timestamp)

### Methods

- [delete](discord_Message.default.md#delete)
- [edit](discord_Message.default.md#edit)
- [pin](discord_Message.default.md#pin)
- [react](discord_Message.default.md#react)
- [unpin](discord_Message.default.md#unpin)

## Constructors

### constructor

• **new default**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Message`](../interfaces/_DiscordAPI.Message.md) |

#### Defined in

[src/lib/discord/Message.ts:23](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L23)

## Properties

### author

• **author**: [`User`](discord_User.User.md)

#### Defined in

[src/lib/discord/Message.ts:15](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L15)

___

### channel\_id

• **channel\_id**: `string`

#### Defined in

[src/lib/discord/Message.ts:17](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L17)

___

### content

• **content**: `string`

#### Defined in

[src/lib/discord/Message.ts:22](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L22)

___

### embeds

• **embeds**: [`default`](discord_Embed.default.md)[]

#### Defined in

[src/lib/discord/Message.ts:18](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L18)

___

### guild\_id

• **guild\_id**: `string`

#### Defined in

[src/lib/discord/Message.ts:16](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L16)

___

### id

• **id**: `string`

#### Defined in

[src/lib/discord/Message.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L20)

___

### message\_reference

• **message\_reference**: [`default`](discord_Message.default.md)

#### Defined in

[src/lib/discord/Message.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L19)

___

### timestamp

• **timestamp**: `Date`

#### Defined in

[src/lib/discord/Message.ts:21](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L21)

## Methods

### delete

▸ **delete**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Message.ts:66](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L66)

___

### edit

▸ **edit**(`content`): `Promise`<[`default`](discord_Message.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| [`default`](discord_Embed.default.md) |

#### Returns

`Promise`<[`default`](discord_Message.default.md)\>

#### Defined in

[src/lib/discord/Message.ts:38](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L38)

___

### pin

▸ **pin**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Message.ts:71](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L71)

___

### react

▸ **react**(`emojis`, `inOrder?`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emojis` | `string` \| `string`[] \| [`Emoji`](../interfaces/_DiscordAPI.Emoji.md) \| [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)[] | The emoji(s) to send |
| `inOrder?` | `boolean` | Should the emojis be sent in order. Note that this function is recursive with this option set. |

#### Returns

`any`

#### Defined in

[src/lib/discord/Message.ts:82](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L82)

___

### unpin

▸ **unpin**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Message.ts:74](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Message.ts#L74)
