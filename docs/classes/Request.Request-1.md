[fuwa.js](../README.md) / [Exports](../modules.md) / [Request](../modules/Request.md) / Request

# Class: Request

[Request](../modules/Request.md).Request

## Table of contents

### Constructors

- [constructor](Request.Request-1.md#constructor)

### Properties

- [args](Request.Request-1.md#args)
- [author](Request.Request-1.md#author)
- [cache](Request.Request-1.md#cache)
- [channel](Request.Request-1.md#channel)
- [channel_id](Request.Request-1.md#channel_id)
- [guild](Request.Request-1.md#guild)
- [guild_id](Request.Request-1.md#guild_id)
- [mentions](Request.Request-1.md#mentions)
- [message](Request.Request-1.md#message)
- [rawData](Request.Request-1.md#rawdata)
- [reactions](Request.Request-1.md#reactions)

### Methods

- [getChannel](Request.Request-1.md#getchannel)
- [getGuild](Request.Request-1.md#getguild)

## Constructors

### constructor

• **new Request**(`msg`, `cache`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](../interfaces/_DiscordAPI.Message.md) |
| `cache` | [`Cache`](_Cache.Cache.md) |

#### Defined in

[src/lib/Request.ts:27](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L27)

## Properties

### args

• **args**: `string`[]

An array of the arguments passed into your command

#### Defined in

[src/lib/Request.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L24)

___

### author

• `Readonly` **author**: [`User`](discord_User.User.md)

#### Defined in

[src/lib/Request.ts:10](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L10)

___

### cache

• `Protected` **cache**: [`Cache`](_Cache.Cache.md)

___

### channel

• **channel**: [`Channel`](discord_Channel.Channel.md)

#### Defined in

[src/lib/Request.ts:12](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L12)

___

### channel\_id

• `Readonly` **channel\_id**: `any`

#### Defined in

[src/lib/Request.ts:13](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L13)

___

### guild

• **guild**: [`Guild`](discord_Guild.Guild.md)

#### Defined in

[src/lib/Request.ts:11](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L11)

___

### guild\_id

• `Readonly` **guild\_id**: `any`

#### Defined in

[src/lib/Request.ts:14](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L14)

___

### mentions

• `Readonly` **mentions**: [`User`](discord_User.User.md)[]

#### Defined in

[src/lib/Request.ts:15](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L15)

___

### message

• `Readonly` **message**: [`Message`](discord_Message.Message.md)

#### Defined in

[src/lib/Request.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L20)

___

### rawData

• `Readonly` **rawData**: [`Message`](../interfaces/_DiscordAPI.Message.md)

**`deprecated`** This will be removed soon, please add feature requests if you still require this in your applications.

#### Defined in

[src/lib/Request.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L19)

___

### reactions

• `Readonly` **reactions**: [`Reaction`](../interfaces/_DiscordAPI.Reaction.md)[]

#### Defined in

[src/lib/Request.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L25)

## Methods

### getChannel

▸ **getChannel**(): `Promise`<[`Channel`](discord_Channel.Channel.md)\>

#### Returns

`Promise`<[`Channel`](discord_Channel.Channel.md)\>

#### Defined in

[src/lib/Request.ts:55](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L55)

___

### getGuild

▸ **getGuild**(`memberLimit?`): `Promise`<[`Guild`](discord_Guild.Guild.md)\>

To use this function you must have the server list intent enabled, otherwise you will get an error
Go to https://discord.com/developers/applications/{YOUR_BOT_ID}/bot and enable
server members intents to use.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `memberLimit` | `number` | `100` |

#### Returns

`Promise`<[`Guild`](discord_Guild.Guild.md)\>

#### Defined in

[src/lib/Request.ts:43](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Request.ts#L43)
