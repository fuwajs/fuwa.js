[fuwa.js](../README.md) / [Exports](../modules.md) / [Client](../modules/Client.md) / Events

# Interface: Events

[Client](../modules/Client.md).Events

## Table of contents

### Methods

- [invalid%20command](Client.Events.md#invalid command)
- [message](Client.Events.md#message)
- [new%20channel](Client.Events.md#new channel)
- [new%20guild](Client.Events.md#new guild)
- [reaction](Client.Events.md#reaction)
- [ready](Client.Events.md#ready)

## Methods

### invalid command

▸ **invalid command**(`req`, `res`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`default`](../classes/Request.default.md) |
| `res` | [`default`](../classes/Response.default.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:68](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L68)

___

### message

▸ **message**(`req`, `res`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`default`](../classes/Request.default.md) |
| `res` | [`default`](../classes/Response.default.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:66](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L66)

___

### new channel

▸ **new channel**(`guild`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | [`default`](../classes/discord_Guild.default.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:70](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L70)

___

### new guild

▸ **new guild**(`guild`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `guild` | [`default`](../classes/discord_Guild.default.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:69](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L69)

___

### reaction

▸ **reaction**(`reaction`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reaction` | [`default`](../classes/discord_Reaction.default.md) |

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:67](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L67)

___

### ready

▸ **ready**(): `any`

#### Returns

`any`

#### Defined in

[src/lib/Client.ts:65](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L65)
