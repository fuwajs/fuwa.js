[fuwa.js](../README.md) / [Exports](../modules.md) / Cache

# Interface: Cache

## Implemented by

- [`MemoryCache`](../classes/MemoryCache.md)

## Table of contents

### Methods

- [clear](Cache.md#clear)
- [get](Cache.md#get)
- [set](Cache.md#set)

## Methods

### clear

▸ **clear**(): `void`

Cache#clear
Clears your entire cache for that collection.

#### Returns

`void`

#### Defined in

[lib/structures/handlers/Cache.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Cache.ts#L30)

___

### get

▸ **get**<`T`\>(`key`, `fallback`): `Promise`<`T`\>

Cache#get

**`since`** 1.0.0

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key used to store/find the data in your cache. Case sensitive. |
| `fallback` | () => `Promise`<`T`\> | The fallback for if the request object was not found. |

#### Returns

`Promise`<`T`\>

Stored Cache.

#### Defined in

[lib/structures/handlers/Cache.ts:17](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Cache.ts#L17)

___

### set

▸ **set**(`key`, `data`, `overwrites?`): `void`

Cache#set

**`since`** 1.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | the key used to store/find the data in your cache. Case sensitive. |
| `data` | `any` | The data you wish to store in the cache. This can be any data type. |
| `overwrites?` | [`CacheOverwrites`](CacheOverwrites.md) | - |

#### Returns

`void`

Stored Cache.

#### Defined in

[lib/structures/handlers/Cache.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Cache.ts#L25)
