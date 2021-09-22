[fuwa.js](../README.md) / [Exports](../modules.md) / [Client](../modules/Client.md) / default

# Class: default

[Client](../modules/Client.md).default

## Hierarchy

- [`default`](Emitter.default.md)

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](Client.default.md#constructor)

### Properties

- [applicationId](Client.default.md#applicationid)
- [bot](Client.default.md#bot)
- [cache](Client.default.md#cache)
- [commands](Client.default.md#commands)
- [debug](Client.default.md#debug)
- [events](Client.default.md#events)
- [loop](Client.default.md#loop)
- [middleware](Client.default.md#middleware)
- [options](Client.default.md#options)
- [parser](Client.default.md#parser)
- [prefix](Client.default.md#prefix)
- [response](Client.default.md#response)
- [sessionId](Client.default.md#sessionid)
- [status](Client.default.md#status)
- [ws](Client.default.md#ws)

### Methods

- [command](Client.default.md#command)
- [connect](Client.default.md#connect)
- [createDM](Client.default.md#createdm)
- [deleteMessages](Client.default.md#deletemessages)
- [event](Client.default.md#event)
- [getGlobalSlashCommands](Client.default.md#getglobalslashcommands)
- [getGuild](Client.default.md#getguild)
- [getGuildIds](Client.default.md#getguildids)
- [getGuildSlashCommand](Client.default.md#getguildslashcommand)
- [getUser](Client.default.md#getuser)
- [initEvents](Client.default.md#initevents)
- [initOp](Client.default.md#initop)
- [login](Client.default.md#login)
- [logout](Client.default.md#logout)
- [modifyBot](Client.default.md#modifybot)
- [on](Client.default.md#on)
- [op](Client.default.md#op)
- [runCommand](Client.default.md#runcommand)
- [set](Client.default.md#set)
- [setStatus](Client.default.md#setstatus)
- [use](Client.default.md#use)

## Constructors

### constructor

• **new default**(`prefix`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` \| `string`[] \| (`req`: [`default`](Request.default.md)) => `string` \| `Promise`<`string`\> | The prefix for your bot |
| `options?` | [`clientOptions`](../interfaces/Client.clientOptions.md) | - |

#### Overrides

[default](Emitter.default.md).[constructor](Emitter.default.md#constructor)

#### Defined in

[src/lib/Client.ts:202](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L202)

## Properties

### applicationId

• `Protected` **applicationId**: `string` = `''`

#### Defined in

[src/lib/Client.ts:182](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L182)

___

### bot

• **bot**: [`User`](discord_User.User.md)

#### Defined in

[src/lib/Client.ts:177](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L177)

___

### cache

• **cache**: [`default`](_Cache.default.md)

#### Defined in

[src/lib/Client.ts:180](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L180)

___

### commands

• **commands**: `Map`<`string`, { `cb`: [`CommandCallback`](../modules/Command.md#commandcallback) ; `options`: [`commandOptions`](../interfaces/Command.commandOptions.md)  }[]\>

#### Defined in

[src/lib/Client.ts:194](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L194)

___

### debug

• `Protected` **debug**: [`default`](_Debug.default.md)

#### Defined in

[src/lib/Client.ts:178](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L178)

___

### events

• **events**: `Map`<keyof [`Events`](../interfaces/Client.Events.md), `Function`\>

#### Defined in

[src/lib/Client.ts:186](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L186)

___

### loop

• `Protected` `Optional` **loop**: `Timeout`

#### Defined in

[src/lib/Client.ts:193](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L193)

___

### middleware

• `Protected` **middleware**: [`CommandCallback`](../modules/Command.md#commandcallback)[] = `[]`

#### Defined in

[src/lib/Client.ts:198](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L198)

___

### options

• `Protected` **options**: [`clientOptions`](../interfaces/Client.clientOptions.md)

#### Defined in

[src/lib/Client.ts:191](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L191)

___

### parser

• `Protected` **parser**: (`prefix`: `string`, `msg`: [`Message`](../interfaces/_DiscordAPI.Message.md), `options`: [`clientOptions`](../interfaces/Client.clientOptions.md)) => ``false`` \| [{ `cb`: [`CommandCallback`](../modules/Command.md#commandcallback) ; `options`: [`commandOptions`](../interfaces/Command.commandOptions.md)  }[], `string`[]]

#### Type declaration

▸ (`prefix`, `msg`, `options`): ``false`` \| [{ `cb`: [`CommandCallback`](../modules/Command.md#commandcallback) ; `options`: [`commandOptions`](../interfaces/Command.commandOptions.md)  }[], `string`[]]

The

##### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `msg` | [`Message`](../interfaces/_DiscordAPI.Message.md) |
| `options` | [`clientOptions`](../interfaces/Client.clientOptions.md) |

##### Returns

``false`` \| [{ `cb`: [`CommandCallback`](../modules/Command.md#commandcallback) ; `options`: [`commandOptions`](../interfaces/Command.commandOptions.md)  }[], `string`[]]

#### Defined in

[src/lib/Client.ts:183](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L183)

___

### prefix

• **prefix**: `string` \| `string`[] \| (`req`: [`default`](Request.default.md)) => `string` \| `Promise`<`string`\>

#### Defined in

[src/lib/Client.ts:187](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L187)

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

#### Inherited from

[default](Emitter.default.md).[response](Emitter.default.md#response)

#### Defined in

[src/lib/Emitter.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L30)

___

### sessionId

• `Private` **sessionId**: `string` = `''`

#### Defined in

[src/lib/Client.ts:179](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L179)

___

### status

• `Protected` **status**: `any` = `[]`

#### Defined in

[src/lib/Client.ts:181](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L181)

___

### ws

• `Protected` `Optional` **ws**: `any`

#### Inherited from

[default](Emitter.default.md).[ws](Emitter.default.md#ws)

#### Defined in

[src/lib/Emitter.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L25)

## Methods

### command

▸ **command**(`name`, `cb`, `options?`): `Object`

Command function

**`example`**
```ts
cli.command(['ping', 'latency'], (req, res) => {
     res.send('Pong!');
});
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` \| `string`[] | Command name(s). |
| `cb` | [`CommandCallback`](../modules/Command.md#commandcallback) | The function that is called when the command is ran. |
| `options?` | [`commandOptions`](../interfaces/Command.commandOptions.md) | Options for your command. |

#### Returns

`Object`

Command Options

| Name | Type |
| :------ | :------ |
| `addAlias` | (...`aliases`: `string`[]) => { addAlias: (...aliases: string[]) =\> ...; addArgument: <T\>(props: { name: string; desc?: string; parser?: (val: string) =\> T; default?: T; required?: boolean; }) =\> void; createSlashCommand: (gid?: string) =\> Promise<...\>; } |
| `addArgument` | <T\>(`props`: { `default?`: `T` ; `desc?`: `string` ; `name`: `string` ; `required?`: `boolean` ; `parser?`: (`val`: `string`) => `T`  }) => `void` |
| `createSlashCommand` | (`gid?`: `string`) => `Promise`<`any`\> |

#### Defined in

[src/lib/Client.ts:391](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L391)

___

### connect

▸ `Protected` **connect**(`url`, `query?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `query?` | [`QueryOptions`](../interfaces/Emitter.QueryOptions.md) |

#### Returns

`void`

#### Inherited from

[default](Emitter.default.md).[connect](Emitter.default.md#connect)

#### Defined in

[src/lib/Emitter.ts:50](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L50)

___

### createDM

▸ **createDM**(`uid`): `Promise`<[`default`](discord_Channel.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`<[`default`](discord_Channel.default.md)\>

#### Defined in

[src/lib/Client.ts:606](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L606)

___

### deleteMessages

▸ **deleteMessages**(`amt`, `channelID`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `amt` | `number` |
| `channelID` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/Client.ts:645](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L645)

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

#### Inherited from

[default](Emitter.default.md).[event](Emitter.default.md#event)

#### Defined in

[src/lib/Emitter.ts:87](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L87)

___

### getGlobalSlashCommands

▸ **getGlobalSlashCommands**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/Client.ts:555](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L555)

___

### getGuild

▸ **getGuild**(`gid`): `Promise`<[`default`](discord_Guild.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gid` | `string` |

#### Returns

`Promise`<[`default`](discord_Guild.default.md)\>

#### Defined in

[src/lib/Client.ts:603](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L603)

___

### getGuildIds

▸ **getGuildIds**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

List of guilds

#### Defined in

[src/lib/Client.ts:600](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L600)

___

### getGuildSlashCommand

▸ **getGuildSlashCommand**(`gid`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gid` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/Client.ts:560](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L560)

___

### getUser

▸ **getUser**(`uid`): `Promise`<[`User`](discord_User.User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`<[`User`](discord_User.User.md)\>

#### Defined in

[src/lib/Client.ts:661](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L661)

___

### initEvents

▸ `Protected` **initEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/lib/Client.ts:517](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L517)

___

### initOp

▸ `Protected` **initOp**(): `void`

#### Returns

`void`

#### Defined in

[src/lib/Client.ts:485](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L485)

___

### login

▸ **login**(`token?`): `Promise`<[`default`](Client.default.md)\>

**`description`** Log your bot into discord

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token?` | `string` \| `Buffer` | Your bot token |

#### Returns

`Promise`<[`default`](Client.default.md)\>

#### Defined in

[src/lib/Client.ts:575](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L575)

___

### logout

▸ **logout**(`end?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `end` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/lib/Client.ts:590](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L590)

___

### modifyBot

▸ **modifyBot**(`username`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `username` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/Client.ts:614](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L614)

___

### on

▸ **on**<`T`\>(`event`, `cb`): [`default`](Client.default.md)

#### Type parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `T` | extends keyof [`Events`](../interfaces/Client.Events.md) | The event name |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `T` | - |
| `cb` | [`Events`](../interfaces/Client.Events.md)[`T`] | The callback function ```typescript cli.on('ready', () => console.log ('Up and ready to go!')); ``` |

#### Returns

[`default`](Client.default.md)

#### Defined in

[src/lib/Client.ts:465](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L465)

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

#### Inherited from

[default](Emitter.default.md).[op](Emitter.default.md#op)

#### Defined in

[src/lib/Emitter.ts:81](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Emitter.ts#L81)

___

### runCommand

▸ `Protected` **runCommand**(`msg`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`Message`](../interfaces/_DiscordAPI.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/lib/Client.ts:328](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L328)

___

### set

▸ **set**<`T`\>(`key`, `val`): [`default`](Client.default.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`clientOptions`](../interfaces/Client.clientOptions.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `T` |
| `val` | [`clientOptions`](../interfaces/Client.clientOptions.md)[`T`] |

#### Returns

[`default`](Client.default.md)

#### Defined in

[src/lib/Client.ts:617](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L617)

___

### setStatus

▸ **setStatus**(`status`): [`default`](Client.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusOptions`](../interfaces/Client.StatusOptions.md) |

#### Returns

[`default`](Client.default.md)

#### Defined in

[src/lib/Client.ts:621](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L621)

___

### use

▸ **use**(`cb`): [`default`](Client.default.md)

**`description`** A function that is ran before every command

**`example`**
```typescript
cli.use((req, res, next) => {
     req.send(`${req.command} has been used!`);
     next(); // call the next middlware/command
})
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`CommandCallback`](../modules/Command.md#commandcallback) | Your middleware function |

#### Returns

[`default`](Client.default.md)

A **client** so you can *chain* methods.

#### Defined in

[src/lib/Client.ts:481](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Client.ts#L481)
