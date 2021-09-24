[fuwa.js](../README.md) / [Exports](../modules.md) / [Client](../modules/Client.md) / clientOptions

# Interface: clientOptions

[Client](../modules/Client.md).clientOptions

## Table of contents

### Properties

- [applicationId](Client.clientOptions.md#applicationid)
- [builtinCommands](Client.clientOptions.md#builtincommands)
- [cache](Client.clientOptions.md#cache)
- [cachingSettings](Client.clientOptions.md#cachingsettings)
- [debug](Client.clientOptions.md#debug)
- [intents](Client.clientOptions.md#intents)
- [owners](Client.clientOptions.md#owners)
- [shards](Client.clientOptions.md#shards)
- [useMentionPrefix](Client.clientOptions.md#usementionprefix)

### Methods

- [parser](Client.clientOptions.md#parser)

## Properties

### applicationId

• `Optional` **applicationId**: `string`

#### Defined in

[src/lib/Client.ts:91](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L91)

___

### builtinCommands

• `Optional` **builtinCommands**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `help?` | ``false`` \| { `embedColor?`: `string` \| `number`  } |

#### Defined in

[src/lib/Client.ts:100](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L100)

___

### cache

• `Optional` **cache**: ``true``

If the bot should cache guilds/channels/users or not.
It's suggested to keep this on for smaller bots
but for larger ones turn this off,
caching increases the speed of sending messages, but takes up memory.
meaning caching on = faster guild replies
caching off = more memory for other tasks

#### Defined in

[src/lib/Client.ts:129](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L129)

___

### cachingSettings

• `Optional` **cachingSettings**: `Object`

Settings for caching

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheOptions?` | `Object` | - |
| `cacheOptions.channels` | `boolean` | - |
| `cacheOptions.guilds` | `boolean` | - |
| `cacheOptions.users` | `boolean` | - |
| `clearAfter?` | `number` \| ``false`` | Clear the cache after a certain amount of time (in ms) If this is false then the cache will never be cleared |
| `maxSize?` | `number` | Maximum amount of items to cache at once. Set this to 0 if you want an unlimited cache size |

#### Defined in

[src/lib/Client.ts:133](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L133)

___

### debug

• `Optional` **debug**: `boolean`

To turn on the debug mode, not recommed to turn this on unless your debugging
the library.

#### Defined in

[src/lib/Client.ts:89](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L89)

___

### intents

• **intents**: `number`

**`see`** GatewayIntents

#### Defined in

[src/lib/Client.ts:111](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L111)

___

### owners

• `Optional` **owners**: `string` \| `string`[]

The owners' discord ID

#### Defined in

[src/lib/Client.ts:84](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L84)

___

### shards

• `Optional` **shards**: `number`

#### Defined in

[src/lib/Client.ts:90](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L90)

___

### useMentionPrefix

• `Optional` **useMentionPrefix**: `boolean`

If this is turned on (true) When someone mentions your bot it will behave
as a prefix.

#### Defined in

[src/lib/Client.ts:96](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L96)

## Methods

### parser

▸ **parser**(`prefix`, `msg`, `options`): ``false`` \| [{ `cb`: [`CommandCallback`](../modules/Command.md#commandcallback) ; `options`: [`commandOptions`](Command.commandOptions.md)  }[], `string`[]]

The

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `msg` | [`Message`](_DiscordAPI.Message.md) |
| `options` | [`clientOptions`](Client.clientOptions.md) |

#### Returns

``false`` \| [{ `cb`: [`CommandCallback`](../modules/Command.md#commandcallback) ; `options`: [`commandOptions`](Command.commandOptions.md)  }[], `string`[]]

#### Defined in

[src/lib/Client.ts:115](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L115)
