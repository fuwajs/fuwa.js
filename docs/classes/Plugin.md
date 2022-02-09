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

[lib/structures/handlers/Plugin.ts:11](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Plugin.ts#L11)

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

[lib/structures/handlers/Plugin.ts:14](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Plugin.ts#L14)

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

[lib/structures/handlers/Plugin.ts:15](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Plugin.ts#L15)
