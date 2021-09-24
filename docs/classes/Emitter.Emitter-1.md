[fuwa.js](../README.md) / [Exports](../modules.md) / [Emitter](../modules/Emitter.md) / Emitter

# Class: Emitter

[Emitter](../modules/Emitter.md).Emitter

The baseclass for the Client class.

## Hierarchy

- **`Emitter`**

  ↳ [`Client`](Client.Client-1.md)

## Table of contents

### Constructors

- [constructor](Emitter.Emitter-1.md#constructor)

### Properties

- [APIEvents](Emitter.Emitter-1.md#apievents)
- [OPevents](Emitter.Emitter-1.md#opevents)
- [WSEvents](Emitter.Emitter-1.md#wsevents)
- [response](Emitter.Emitter-1.md#response)
- [ws](Emitter.Emitter-1.md#ws)

### Methods

- [connect](Emitter.Emitter-1.md#connect)
- [event](Emitter.Emitter-1.md#event)
- [op](Emitter.Emitter-1.md#op)

## Constructors

### constructor

• **new Emitter**()

## Properties

### APIEvents

• `Private` **APIEvents**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: (`data`: `any`) => `any`

#### Defined in

[src/lib/Emitter.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Emitter.ts#L24)

___

### OPevents

• `Private` **OPevents**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: (`data`: `any`) => `any`

#### Defined in

[src/lib/Emitter.ts:22](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Emitter.ts#L22)

___

### WSEvents

• `Private` **WSEvents**: `Object`

#### Index signature

▪ [key: `string`]: () => `any`

#### Defined in

[src/lib/Emitter.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Emitter.ts#L25)

___

### response

• `Protected` **response**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `events` | `Object` |
| `events.emit` | <T\>(`t`: `T`, `d`: [`GatewayEvents`](../interfaces/_DiscordAPI.GatewayEvents.md)[`T`]) => `void` |
| `op` | `Object` |
| `op.emit` | <T\>(`op`: `T`, `d`: [`DiscordAPIOP`](../interfaces/_DiscordAPI.DiscordAPIOP.md)[`T`][``"d"``]) => `void` |

#### Defined in

[src/lib/Emitter.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Emitter.ts#L26)

___

### ws

• `Protected` `Optional` **ws**: `any`

#### Defined in

[src/lib/Emitter.ts:21](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Emitter.ts#L21)

## Methods

### connect

▸ `Protected` **connect**(`url`, `query?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `query?` | [`QueryOptions`](../interfaces/Emitter.QueryOptions.md) |

#### Returns

`void`

#### Defined in

[src/lib/Emitter.ts:40](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Emitter.ts#L40)

___

### event

▸ `Protected` **event**<`T`\>(`e`, `cb`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`GatewayEvents`](../interfaces/_DiscordAPI.GatewayEvents.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `T` |
| `cb` | (`data`: [`GatewayEvents`](../interfaces/_DiscordAPI.GatewayEvents.md)[`T`][``"d"``]) => `void` |

#### Returns

`void`

#### Defined in

[src/lib/Emitter.ts:72](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Emitter.ts#L72)

___

### op

▸ `Protected` **op**<`T`\>(`op`, `cb`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`DiscordAPIOP`](../interfaces/_DiscordAPI.DiscordAPIOP.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | `T` |
| `cb` | (`data`: [`DiscordAPIOP`](../interfaces/_DiscordAPI.DiscordAPIOP.md)[`T`][``"d"``]) => `void` |

#### Returns

`void`

#### Defined in

[src/lib/Emitter.ts:66](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Emitter.ts#L66)
