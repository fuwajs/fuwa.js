[Fuwa.js](../README.md) / [Exports](../modules.md) / Plugin

# Class: Plugin

## Table of contents

### Constructors

- [constructor](Plugin.md#constructor)

### Properties

- [event](Plugin.md#event)
- [http](Plugin.md#http)

## Constructors

### constructor

• **new Plugin**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`PluginOptions`](../interfaces/PluginOptions.md) |

#### Defined in

[lib/structures/handlers/Plugin.ts:12](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/structures/handlers/Plugin.ts#L12)

## Properties

### event

• **event**: (`client`: [`Client`](Client.md), `data`: `any`) => `any`

#### Type declaration

▸ (`client`, `data`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `any` |

##### Returns

`any`

#### Defined in

[lib/structures/handlers/Plugin.ts:15](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/structures/handlers/Plugin.ts#L15)

___

### http

• **http**: (`client`: [`Client`](Client.md), `data`: `Response`) => `any`

#### Type declaration

▸ (`client`, `data`): `any`

##### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`Client`](Client.md) |
| `data` | `Response` |

##### Returns

`any`

#### Defined in

[lib/structures/handlers/Plugin.ts:16](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/structures/handlers/Plugin.ts#L16)
