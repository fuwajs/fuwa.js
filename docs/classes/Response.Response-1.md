[fuwa.js](../README.md) / [Exports](../modules.md) / [Response](../modules/Response.md) / Response

# Class: Response

[Response](../modules/Response.md).Response

## Table of contents

### Constructors

- [constructor](Response.Response-1.md#constructor)

### Properties

- [req](Response.Response-1.md#req)

### Methods

- [react](Response.Response-1.md#react)
- [reply](Response.Response-1.md#reply)
- [send](Response.Response-1.md#send)

## Constructors

### constructor

• **new Response**(`req`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Message`](../interfaces/_DiscordAPI.Message.md) |

#### Defined in

[src/lib/Response.ts:16](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Response.ts#L16)

## Properties

### req

• `Protected` **req**: [`Message`](../interfaces/_DiscordAPI.Message.md)

## Methods

### react

▸ **react**(`emojis`, `inOrder?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `emojis` | `string` \| `string`[] \| [`Emoji`](../interfaces/_DiscordAPI.Emoji.md) \| [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)[] | The emoji(s) to send |
| `inOrder?` | `boolean` | Should the emojis be sent in order. Note that this function is recursive with this option set. |

#### Returns

`void`

#### Defined in

[src/lib/Response.ts:75](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Response.ts#L75)

___

### reply

▸ **reply**(`content`): `Promise`<[`Message`](discord_Message.Message.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| [`Embed`](discord_Embed.Embed.md) | The message to send. Can be a message or an Embed |

#### Returns

`Promise`<[`Message`](discord_Message.Message.md)\>

#### Defined in

[src/lib/Response.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Response.ts#L20)

___

### send

▸ **send**(`content`): `Promise`<[`Message`](discord_Message.Message.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| [`Embed`](discord_Embed.Embed.md) | The content to send. The content can be a string or an Embed. |

#### Returns

`Promise`<[`Message`](discord_Message.Message.md)\>

#### Defined in

[src/lib/Response.ts:47](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Response.ts#L47)
