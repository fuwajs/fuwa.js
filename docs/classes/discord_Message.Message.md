[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Message](../modules/discord_Message.md) / Message

# Class: Message

[discord/Message](../modules/discord_Message.md).Message

## Table of contents

### Constructors

- [constructor](discord_Message.Message.md#constructor)

### Properties

- [author](discord_Message.Message.md#author)
- [channel\_id](discord_Message.Message.md#channel_id)
- [content](discord_Message.Message.md#content)
- [embeds](discord_Message.Message.md#embeds)
- [guild\_id](discord_Message.Message.md#guild_id)
- [id](discord_Message.Message.md#id)
- [message\_reference](discord_Message.Message.md#message_reference)
- [timestamp](discord_Message.Message.md#timestamp)

### Methods

- [delete](discord_Message.Message.md#delete)
- [edit](discord_Message.Message.md#edit)
- [pin](discord_Message.Message.md#pin)
- [react](discord_Message.Message.md#react)
- [unpin](discord_Message.Message.md#unpin)

## Constructors

### constructor

• **new Message**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Message`](../interfaces/_DiscordAPI.Message.md) |

#### Defined in

[src/lib/discord/Message.ts:23](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L23)

## Properties

### author

• **author**: [`User`](discord_User.User.md)

#### Defined in

[src/lib/discord/Message.ts:15](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L15)

___

### channel\_id

• **channel\_id**: `string`

#### Defined in

[src/lib/discord/Message.ts:17](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L17)

___

### content

• **content**: `string`

#### Defined in

[src/lib/discord/Message.ts:22](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L22)

___

### embeds

• **embeds**: [`Embed`](discord_Embed.Embed.md)[]

#### Defined in

[src/lib/discord/Message.ts:18](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L18)

___

### guild\_id

• **guild\_id**: `string`

#### Defined in

[src/lib/discord/Message.ts:16](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L16)

___

### id

• **id**: `string`

#### Defined in

[src/lib/discord/Message.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L20)

___

### message\_reference

• **message\_reference**: [`Message`](discord_Message.Message.md)

#### Defined in

[src/lib/discord/Message.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L19)

___

### timestamp

• **timestamp**: `Date`

#### Defined in

[src/lib/discord/Message.ts:21](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L21)

## Methods

### delete

▸ **delete**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Message.ts:60](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L60)

___

### edit

▸ **edit**(`content`): `Promise`<[`Message`](discord_Message.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` \| [`Embed`](discord_Embed.Embed.md) |

#### Returns

`Promise`<[`Message`](discord_Message.Message.md)\>

#### Defined in

[src/lib/discord/Message.ts:38](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L38)

___

### pin

▸ **pin**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Message.ts:63](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L63)

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

[src/lib/discord/Message.ts:74](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L74)

___

### unpin

▸ **unpin**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Message.ts:66](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Message.ts#L66)
