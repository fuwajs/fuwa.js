[fuwa.js](../README.md) / [Exports](../modules.md) / Client

# Class: Client

The base Client to access and configure your discord bot.
The client should be imported from fuwa.js and extended either as a variable or class.

**`example`**
```typescript
import { Client } from "fuwa.js"
const bot = new Client({})
// or
class bot extends Client {}
```
Both will work in javascript or typescript.

## Hierarchy

- `WebSocket`

  ↳ **`Client`**

## Table of contents

### Constructors

- [constructor](Client.md#constructor)

### Properties

- [\_interactionListeners](Client.md#_interactionlisteners)
- [applicationId](Client.md#applicationid)
- [bot](Client.md#bot)
- [botStatus](Client.md#botstatus)
- [cache](Client.md#cache)
- [commands](Client.md#commands)
- [events](Client.md#events)
- [mountingCommands](Client.md#mountingcommands)
- [once](Client.md#once)
- [plugins](Client.md#plugins)
- [shardCount](Client.md#shardcount)
- [ws](Client.md#ws)

### Methods

- [command](Client.md#command)
- [getChannel](Client.md#getchannel)
- [getGuild](Client.md#getguild)
- [getMountedCommands](Client.md#getmountedcommands)
- [getUser](Client.md#getuser)
- [login](Client.md#login)
- [logout](Client.md#logout)
- [mountCommand](Client.md#mountcommand)
- [on](Client.md#on)
- [setStatus](Client.md#setstatus)
- [spawnShard](Client.md#spawnshard)
- [unmountCommand](Client.md#unmountcommand)

## Constructors

### constructor

• **new Client**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ClientOptions`](../interfaces/ClientOptions.md) |

#### Overrides

WebSocket.constructor

#### Defined in

[lib/structures/handlers/Client.ts:161](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L161)

## Properties

### \_interactionListeners

• **\_interactionListeners**: `Map`<`string`, `CommandCallback`<`any`\>\>

Interaction listeners for buttons

#### Defined in

[lib/structures/handlers/Client.ts:139](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L139)

___

### applicationId

• **applicationId**: `string`

Your bot ID

#### Defined in

[lib/structures/handlers/Client.ts:144](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L144)

___

### bot

• **bot**: [`BotUser`](BotUser.md) = `null`

#### Defined in

[lib/structures/handlers/Client.ts:137](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L137)

___

### botStatus

• **botStatus**: ``"READY"`` \| ``"LOADING"`` = `'LOADING'`

#### Defined in

[lib/structures/handlers/Client.ts:154](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L154)

___

### cache

• **cache**: [`Cache`](../interfaces/Cache.md)

#### Defined in

[lib/structures/handlers/Client.ts:147](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L147)

___

### commands

• **commands**: `Map`<`string`, [`Command`](Command.md)<`any`\>\>

A Map of commands

#### Defined in

[lib/structures/handlers/Client.ts:135](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L135)

___

### events

• **events**: `Map`<keyof `EventHandlersDefinitions`, (...`args`: `any`[]) => `any`\>

A Map of fuwa#client events

#### Defined in

[lib/structures/handlers/Client.ts:133](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L133)

___

### mountingCommands

• **mountingCommands**: [`Command`](Command.md)<`any`\>[]

Commands that will be mounted before the ready event

#### Defined in

[lib/structures/handlers/Client.ts:141](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L141)

___

### once

• **once**: <T\>(`event`: `T`, `callback`: `EventHandlers`[`T`]) => [`Client`](Client.md)

#### Type declaration

▸ <`T`\>(`event`, `callback`): [`Client`](Client.md)

Alias for on

##### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends keyof `EventHandlersDefinitions` | The event name |

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `callback` | `EventHandlers`[`T`] |

##### Returns

[`Client`](Client.md)

#### Defined in

[lib/structures/handlers/Client.ts:207](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L207)

___

### plugins

• **plugins**: [`Plugin`](Plugin.md)[]

#### Defined in

[lib/structures/handlers/Client.ts:136](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L136)

___

### shardCount

• **shardCount**: `number`

#### Defined in

[lib/structures/handlers/Client.ts:142](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L142)

___

### ws

• **ws**: `any`

#### Inherited from

WebSocket.ws

#### Defined in

[lib/structures/internet/WebSocket.ts:15](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/internet/WebSocket.ts#L15)

## Methods

### command

▸ **command**<`T`\>(`name`, `data`, `cb?`): [`Client`](Client.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `CommandCallback`<`T`\> \| { `args?`: [`Argument`](Argument.md)<`any`, `any`, `any`\>[] ; `desc?`: `string` ; `guild?`: `string` ; `type?`: ``"User"`` \| ``"ChatInput"`` \| ``"Message"``  } |
| `cb?` | `CommandCallback`<`T`\> |

#### Returns

[`Client`](Client.md)

#### Defined in

[lib/structures/handlers/Client.ts:455](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L455)

___

### getChannel

▸ **getChannel**(`cid`, `force?`): `Promise`<[`Channel`](Channel.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `cid` | `string` | `undefined` |
| `force` | `boolean` | `false` |

#### Returns

`Promise`<[`Channel`](Channel.md)\>

#### Defined in

[lib/structures/handlers/Client.ts:270](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L270)

___

### getGuild

▸ **getGuild**(`gid`, `withSize?`, `force?`): `Promise`<[`Guild`](Guild.md)\>

Allows easy access to the fuwa.js#Guild information.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `gid` | `string` | `undefined` | Id of the guild you want to fetch |
| `withSize` | `boolean` | `false` | If you want the guild to contain the approximant member count of the guild (and presences), warning this may slow down the request so only use if needed |
| `force` | `boolean` | `false` | - |

#### Returns

`Promise`<[`Guild`](Guild.md)\>

A Guild, or null if the guild was not found

#### Defined in

[lib/structures/handlers/Client.ts:256](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L256)

___

### getMountedCommands

▸ **getMountedCommands**(`guildId?`): `Promise`<`ApplicationCommand`[]\>

Returns all mounted commands and there discord data.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guildId?` | `string` | the id of the guild your application command is registered in. |

#### Returns

`Promise`<`ApplicationCommand`[]\>

#### Defined in

[lib/structures/handlers/Client.ts:279](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L279)

___

### getUser

▸ **getUser**<`T`\>(`uid`): `Promise`<`T` extends ``"@me"`` ? [`BotUser`](BotUser.md) : [`User`](User.md)\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `T` |

#### Returns

`Promise`<`T` extends ``"@me"`` ? [`BotUser`](BotUser.md) : [`User`](User.md)\>

#### Defined in

[lib/structures/handlers/Client.ts:262](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L262)

___

### login

▸ **login**(`token?`): `Promise`<`void`\>

Connects the websocket client to discords api.

**`see`** https://discord.com/developers/applications

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token?` | `string` \| `Buffer` | Your discord bot token. |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/structures/handlers/Client.ts:394](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L394)

___

### logout

▸ **logout**<`T`\>(`end?`): `T` extends ``true`` ? `void` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `end?` | `T` |

#### Returns

`T` extends ``true`` ? `void` : `never`

#### Defined in

[lib/structures/handlers/Client.ts:404](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L404)

___

### mountCommand

▸ **mountCommand**<`T`\>(`cmd`): `Promise`<[`Client`](Client.md)\>

Mounts a command at runtime

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmd` | [`Command`](Command.md)<`T`\> | The slash command to mount to the client. |

#### Returns

`Promise`<[`Client`](Client.md)\>

#### Defined in

[lib/structures/handlers/Client.ts:212](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L212)

___

### on

▸ **on**<`T`\>(`event`, `callback`): [`Client`](Client.md)

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends keyof `EventHandlersDefinitions` | The event name |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `callback` | `EventHandlers`[`T`] |

#### Returns

[`Client`](Client.md)

#### Defined in

[lib/structures/handlers/Client.ts:200](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L200)

___

### setStatus

▸ **setStatus**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `StatusUpate` |

#### Returns

`void`

#### Defined in

[lib/structures/handlers/Client.ts:412](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L412)

___

### spawnShard

▸ **spawnShard**(`shardId`, `data`): `Promise`<`void`\>

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `shardId` | `number` | the shard(s) spawned from websocket |
| `data` | `Identify` | discord raw api json |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/structures/handlers/Client.ts:447](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L447)

___

### unmountCommand

▸ **unmountCommand**(`cmd`, `guildId?`): `Promise`<`Response`\>

Deletes a command from the discord api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmd` | `string` \| [`Command`](Command.md)<`any`\> | command id |
| `guildId?` | `string` | only needed if your command is a guild command and your id is a string |

#### Returns

`Promise`<`Response`\>

#### Defined in

[lib/structures/handlers/Client.ts:234](https://github.com/Fuwajs/Fuwa.js/blob/c87c3be/src/lib/structures/handlers/Client.ts#L234)
