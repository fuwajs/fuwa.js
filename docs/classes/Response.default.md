[fuwa.js](../README.md) / [Exports](../modules.md) / [Response](../modules/Response.md) / default

# Class: default

[Response](../modules/Response.md).default

## Table of contents

### Constructors

- [constructor](Response.default.md#constructor)

### Properties

- [req](Response.default.md#req)

### Methods

- [react](Response.default.md#react)
- [reply](Response.default.md#reply)
- [send](Response.default.md#send)

## Constructors

### constructor

• **new default**(`req`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Message`](../interfaces/_DiscordAPI.Message.md) |

#### Defined in

[src/lib/Response.ts:16](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Response.ts#L16)

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

[src/lib/Response.ts:75](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Response.ts#L75)

___

### reply

▸ **reply**(`content`): `Promise`<[`default`](discord_Message.default.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| [`default`](discord_Embed.default.md) | The message to send. Can be a message or an Embed |

#### Returns

`Promise`<[`default`](discord_Message.default.md)\>

#### Defined in

[src/lib/Response.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Response.ts#L20)

___

### send

▸ **send**(`content`): `Promise`<[`default`](discord_Message.default.md)\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` \| [`default`](discord_Embed.default.md) | The content to send. The content can be a string or an Embed. |

#### Returns

`Promise`<[`default`](discord_Message.default.md)\>

#### Defined in

[src/lib/Response.ts:47](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Response.ts#L47)
