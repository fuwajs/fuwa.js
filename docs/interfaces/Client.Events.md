[fuwa.js](../README.md) / [Exports](../modules.md) / [Client](../modules/Client.md) / Events

# Interface: Events

[Client](../modules/Client.md).Events

## Table of contents

### Methods

- [invalid command](Client.Events.md#invalid command)
- [message](Client.Events.md#message)
- [new channel](Client.Events.md#new channel)
- [new guild](Client.Events.md#new guild)
- [reaction](Client.Events.md#reaction)
- [ready](Client.Events.md#ready)

## Methods

### invalid command

▸ **invalid command**(`req`, `res`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Request`](../classes/Request.Request-1.md) |
| `res` | [`Response`](../classes/Response.Response-1.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:74](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L74)

___

### message

▸ **message**(`req`, `res`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Request`](../classes/Request.Request-1.md) |
| `res` | [`Response`](../classes/Response.Response-1.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:72](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L72)

___

### new channel

▸ **new channel**(`guild`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | [`Guild`](../classes/discord_Guild.Guild.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:76](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L76)

___

### new guild

▸ **new guild**(`guild`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | [`Guild`](../classes/discord_Guild.Guild.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:75](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L75)

___

### reaction

▸ **reaction**(`reaction`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reaction` | [`Reaction`](../classes/discord_Reaction.Reaction.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:73](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L73)

___

### ready

▸ **ready**(`shardId?`): `any`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shardId?` | `number` | Shardid will be specified if the bot is sharded |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:71](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L71)
