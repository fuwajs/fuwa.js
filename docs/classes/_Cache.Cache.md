[fuwa.js](../README.md) / [Exports](../modules.md) / [\_Cache](../modules/_Cache.md) / Cache

# Class: Cache

[_Cache](../modules/_Cache.md).Cache

## Table of contents

### Constructors

- [constructor](_Cache.Cache.md#constructor)

### Properties

- [data](_Cache.Cache.md#data)
- [options](_Cache.Cache.md#options)

### Methods

- [cache](_Cache.Cache.md#cache)

## Constructors

### constructor

• **new Cache**(`options`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | - |
| `options.cacheOptions?` | `Object` | - |
| `options.cacheOptions.channels` | `boolean` | - |
| `options.cacheOptions.guilds` | `boolean` | - |
| `options.cacheOptions.users` | `boolean` | - |
| `options.clearAfter?` | `number` \| ``false`` | Clear the cache after a certain amount of time (in ms) If this is false then the cache will never be cleared |
| `options.maxSize?` | `number` | Maximum amount of items to cache at once. Set this to 0 if you want an unlimited cache size |

#### Defined in

[src/lib/_Cache.ts:15](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Cache.ts#L15)

## Properties

### data

• **data**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `guilds` | `Map`<`string`, [`Guild`](../interfaces/_DiscordAPI.Guild.md)\> |

#### Defined in

[src/lib/_Cache.ts:12](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Cache.ts#L12)

___

### options

• `Protected` **options**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheOptions?` | `Object` | - |
| `cacheOptions.channels` | `boolean` | - |
| `cacheOptions.guilds` | `boolean` | - |
| `cacheOptions.users` | `boolean` | - |
| `clearAfter?` | `number` \| ``false`` | Clear the cache after a certain amount of time (in ms) If this is false then the cache will never be cleared |
| `maxSize?` | `number` | Maximum amount of items to cache at once. Set this to 0 if you want an unlimited cache size |

## Methods

### cache

▸ **cache**<`T`\>(`type`, `data`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"guilds"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `T` |
| `data` | `any` |

#### Returns

`void`

#### Defined in

[src/lib/_Cache.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Cache.ts#L26)
