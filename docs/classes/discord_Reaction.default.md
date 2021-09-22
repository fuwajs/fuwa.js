[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Reaction](../modules/discord_Reaction.md) / default

# Class: default

[discord/Reaction](../modules/discord_Reaction.md).default

## Implements

- [`Reaction`](../interfaces/_DiscordAPI.Reaction.md)

## Table of contents

### Constructors

- [constructor](discord_Reaction.default.md#constructor)

### Properties

- [channel_id](discord_Reaction.default.md#channel_id)
- [emoji](discord_Reaction.default.md#emoji)
- [guild_id](discord_Reaction.default.md#guild_id)
- [member](discord_Reaction.default.md#member)
- [message_id](discord_Reaction.default.md#message_id)
- [user_id](discord_Reaction.default.md#user_id)

### Methods

- [getMessage](discord_Reaction.default.md#getmessage)
- [getResponse](discord_Reaction.default.md#getresponse)

## Constructors

### constructor

• **new default**(`json`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | [`Reaction`](../interfaces/_DiscordAPI.Reaction.md) |

#### Defined in

[src/lib/discord/Reaction.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L20)

## Properties

### channel\_id

• **channel\_id**: `string`

#### Implementation of

[Reaction](../interfaces/_DiscordAPI.Reaction.md).[channel_id](../interfaces/_DiscordAPI.Reaction.md#channel_id)

#### Defined in

[src/lib/discord/Reaction.ts:14](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L14)

___

### emoji

• **emoji**: [`Emoji`](../interfaces/_DiscordAPI.Emoji.md)

#### Implementation of

[Reaction](../interfaces/_DiscordAPI.Reaction.md).[emoji](../interfaces/_DiscordAPI.Reaction.md#emoji)

#### Defined in

[src/lib/discord/Reaction.ts:18](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L18)

___

### guild\_id

• `Optional` **guild\_id**: `string`

#### Implementation of

[Reaction](../interfaces/_DiscordAPI.Reaction.md).[guild_id](../interfaces/_DiscordAPI.Reaction.md#guild_id)

#### Defined in

[src/lib/discord/Reaction.ts:16](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L16)

___

### member

• `Optional` **member**: [`Member`](../interfaces/_DiscordAPI.Member.md)

#### Implementation of

[Reaction](../interfaces/_DiscordAPI.Reaction.md).[member](../interfaces/_DiscordAPI.Reaction.md#member)

#### Defined in

[src/lib/discord/Reaction.ts:17](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L17)

___

### message\_id

• **message\_id**: `string`

#### Implementation of

[Reaction](../interfaces/_DiscordAPI.Reaction.md).[message_id](../interfaces/_DiscordAPI.Reaction.md#message_id)

#### Defined in

[src/lib/discord/Reaction.ts:15](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L15)

___

### user\_id

• **user\_id**: `string`

#### Implementation of

[Reaction](../interfaces/_DiscordAPI.Reaction.md).[user_id](../interfaces/_DiscordAPI.Reaction.md#user_id)

#### Defined in

[src/lib/discord/Reaction.ts:13](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L13)

## Methods

### getMessage

▸ **getMessage**(): `Promise`<[`default`](discord_Message.default.md)\>

Get the message the reaction was on

#### Returns

`Promise`<[`default`](discord_Message.default.md)\>

#### Defined in

[src/lib/discord/Reaction.ts:27](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L27)

___

### getResponse

▸ **getResponse**(): `Promise`<[`default`](Response.default.md)\>

#### Returns

`Promise`<[`default`](Response.default.md)\>

#### Defined in

[src/lib/discord/Reaction.ts:36](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Reaction.ts#L36)
