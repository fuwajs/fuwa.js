[fuwa.js](../README.md) / [Exports](../modules.md) / [Emitter](../modules/Emitter.md) / default

# Class: default

[Emitter](../modules/Emitter.md).default

The baseclass for the Client class.

## Hierarchy

- **`default`**

  ↳ [`default`](Client.default.md)

## Table of contents

### Constructors

- [constructor](Emitter.default.md#constructor)

### Properties

- [APIEvents](Emitter.default.md#apievents)
- [OPevents](Emitter.default.md#opevents)
- [WSEvents](Emitter.default.md#wsevents)
- [response](Emitter.default.md#response)
- [ws](Emitter.default.md#ws)

### Methods

- [connect](Emitter.default.md#connect)
- [event](Emitter.default.md#event)
- [op](Emitter.default.md#op)

## Constructors

### constructor

• **new default**()

## Properties

### APIEvents

• `Private` **APIEvents**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: (`data`: `any`) => `any`

#### Defined in

[src/lib/Emitter.ts:28](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L28)

___

### OPevents

• `Private` **OPevents**: `Object` = `{}`

#### Index signature

▪ [key: `number`]: (`data`: `any`) => `any`

#### Defined in

[src/lib/Emitter.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L26)

___

### WSEvents

• `Private` **WSEvents**: `Object`

#### Index signature

▪ [key: `string`]: () => `any`

#### Defined in

[src/lib/Emitter.ts:29](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L29)

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

[src/lib/Emitter.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L30)

___

### ws

• `Protected` `Optional` **ws**: `any`

#### Defined in

[src/lib/Emitter.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L25)

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

[src/lib/Emitter.ts:50](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L50)

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

[src/lib/Emitter.ts:87](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L87)

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

[src/lib/Emitter.ts:81](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L81)
