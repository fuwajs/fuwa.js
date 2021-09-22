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

[src/lib/Emitter.ts:28](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Emitter.ts#L28)

___

### OPevents

• `Private` **OPevents**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: (`data`: `any`) => `any`

#### Defined in

[src/lib/Emitter.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Emitter.ts#L26)

___

### WSEvents

• `Private` **WSEvents**: `Object`

#### Index signature

▪ [key: `string`]: () => `any`

#### Defined in

[src/lib/Emitter.ts:29](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Emitter.ts#L29)

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

[src/lib/Emitter.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Emitter.ts#L30)

___

### ws

• `Protected` `Optional` **ws**: `any`

#### Defined in

[src/lib/Emitter.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Emitter.ts#L25)

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

[src/lib/Emitter.ts:50](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Emitter.ts#L50)

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

[src/lib/Emitter.ts:87](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Emitter.ts#L87)

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

[src/lib/Emitter.ts:81](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Emitter.ts#L81)
