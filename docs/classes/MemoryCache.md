[Fuwa.js](../README.md) / [Exports](../modules.md) / MemoryCache

# Class: MemoryCache

## Implements

- [`Cache`](../interfaces/Cache.md)

## Table of contents

### Constructors

- [constructor](MemoryCache.md#constructor)

### Methods

- [clear](MemoryCache.md#clear)
- [get](MemoryCache.md#get)
- [set](MemoryCache.md#set)

## Constructors

### constructor

• **new MemoryCache**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`MemoryCacheOptions`](../interfaces/MemoryCacheOptions.md) |

#### Defined in

[lib/structures/handlers/Cache.ts:42](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/structures/handlers/Cache.ts#L42)

## Methods

### clear

▸ **clear**(): `void`

Cache#clear
Clears your entire cache for that collection.

#### Returns

`void`

#### Implementation of

[Cache](../interfaces/Cache.md).[clear](../interfaces/Cache.md#clear)

#### Defined in

[lib/structures/handlers/Cache.ts:65](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/structures/handlers/Cache.ts#L65)

___

### get

▸ **get**<`T`\>(`key`, `fallback`): `Promise`<`T`\>

Cache#get

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `fallback` | () => `Promise`<`T`\> |

#### Returns

`Promise`<`T`\>

Stored Cache.

#### Implementation of

[Cache](../interfaces/Cache.md).[get](../interfaces/Cache.md#get)

#### Defined in

[lib/structures/handlers/Cache.ts:52](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/structures/handlers/Cache.ts#L52)

___

### set

▸ **set**(`key`, `data`): `void`

Cache#set

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `data` | `any` |

#### Returns

`void`

Stored Cache.

#### Implementation of

[Cache](../interfaces/Cache.md).[set](../interfaces/Cache.md#set)

#### Defined in

[lib/structures/handlers/Cache.ts:62](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/structures/handlers/Cache.ts#L62)
