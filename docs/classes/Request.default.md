[fuwa.js](../README.md) / [Exports](../modules.md) / [Request](../modules/Request.md) / default

# Class: default

[Request](../modules/Request.md).default

## Table of contents

### Constructors

- [constructor](Request.default.md#constructor)

### Properties

- [args](Request.default.md#args)
- [author](Request.default.md#author)
- [cache](Request.default.md#cache)
- [channel](Request.default.md#channel)
- [channel_id](Request.default.md#channel_id)
- [guild](Request.default.md#guild)
- [guild_id](Request.default.md#guild_id)
- [mentions](Request.default.md#mentions)
- [message](Request.default.md#message)
- [rawData](Request.default.md#rawdata)
- [reactions](Request.default.md#reactions)

### Methods

- [getChannel](Request.default.md#getchannel)
- [getGuild](Request.default.md#getguild)

## Constructors

### constructor

• **new default**(`msg`, `cache`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](../interfaces/_DiscordAPI.Message.md) |
| `cache` | [`default`](_Cache.default.md) |

#### Defined in

[src/lib/Request.ts:27](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L27)

## Properties

### args

• **args**: `string`[]

An array of the arguments passed into your command

#### Defined in

[src/lib/Request.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L24)

___

### author

• `Readonly` **author**: [`User`](discord_User.User.md)

#### Defined in

[src/lib/Request.ts:10](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L10)

___

### cache

• `Protected` **cache**: [`default`](_Cache.default.md)

___

### channel

• **channel**: [`default`](discord_Channel.default.md)

#### Defined in

[src/lib/Request.ts:12](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L12)

___

### channel\_id

• `Readonly` **channel\_id**: `any`

#### Defined in

[src/lib/Request.ts:13](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L13)

___

### guild

• **guild**: [`default`](discord_Guild.default.md)

#### Defined in

[src/lib/Request.ts:11](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L11)

___

### guild\_id

• `Readonly` **guild\_id**: `any`

#### Defined in

[src/lib/Request.ts:14](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L14)

___

### mentions

• `Readonly` **mentions**: [`User`](discord_User.User.md)[]

#### Defined in

[src/lib/Request.ts:15](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L15)

___

### message

• `Readonly` **message**: [`default`](discord_Message.default.md)

#### Defined in

[src/lib/Request.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L20)

___

### rawData

• `Readonly` **rawData**: [`Message`](../interfaces/_DiscordAPI.Message.md)

**`deprecated`** This will be removed soon, please add feature requests if you still require this in your applications.

#### Defined in

[src/lib/Request.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L19)

___

### reactions

• `Readonly` **reactions**: [`Reaction`](../interfaces/_DiscordAPI.Reaction.md)[]

#### Defined in

[src/lib/Request.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L25)

## Methods

### getChannel

▸ **getChannel**(): `Promise`<[`default`](discord_Channel.default.md)\>

#### Returns

`Promise`<[`default`](discord_Channel.default.md)\>

#### Defined in

[src/lib/Request.ts:55](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L55)

___

### getGuild

▸ **getGuild**(`memberLimit?`): `Promise`<[`default`](discord_Guild.default.md)\>

To use this function you must have the server list intent enabled, otherwise you will get an error
Go to https://discord.com/developers/applications/{YOUR_BOT_ID}/bot and enable
server members intents to use.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `memberLimit` | `number` | `100` |

#### Returns

`Promise`<[`default`](discord_Guild.default.md)\>

#### Defined in

[src/lib/Request.ts:43](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Request.ts#L43)
