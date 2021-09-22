[fuwa.js](../README.md) / [Exports](../modules.md) / [Client](../modules/Client.md) / Client

# Class: Client

[Client](../modules/Client.md).Client

## Hierarchy

- [`Emitter`](Emitter.Emitter-1.md)

  ↳ **`Client`**

## Table of contents

### Constructors

- [constructor](Client.Client-1.md#constructor)

### Properties

- [applicationId](Client.Client-1.md#applicationid)
- [bot](Client.Client-1.md#bot)
- [cache](Client.Client-1.md#cache)
- [commands](Client.Client-1.md#commands)
- [debug](Client.Client-1.md#debug)
- [events](Client.Client-1.md#events)
- [loop](Client.Client-1.md#loop)
- [middleware](Client.Client-1.md#middleware)
- [options](Client.Client-1.md#options)
- [parser](Client.Client-1.md#parser)
- [prefix](Client.Client-1.md#prefix)
- [response](Client.Client-1.md#response)
- [sessionId](Client.Client-1.md#sessionid)
- [status](Client.Client-1.md#status)
- [ws](Client.Client-1.md#ws)

### Methods

- [command](Client.Client-1.md#command)
- [connect](Client.Client-1.md#connect)
- [createDM](Client.Client-1.md#createdm)
- [deleteMessages](Client.Client-1.md#deletemessages)
- [event](Client.Client-1.md#event)
- [getGlobalSlashCommands](Client.Client-1.md#getglobalslashcommands)
- [getGuild](Client.Client-1.md#getguild)
- [getGuildIds](Client.Client-1.md#getguildids)
- [getGuildSlashCommand](Client.Client-1.md#getguildslashcommand)
- [getUser](Client.Client-1.md#getuser)
- [initEvents](Client.Client-1.md#initevents)
- [initOp](Client.Client-1.md#initop)
- [login](Client.Client-1.md#login)
- [logout](Client.Client-1.md#logout)
- [modifyBot](Client.Client-1.md#modifybot)
- [on](Client.Client-1.md#on)
- [op](Client.Client-1.md#op)
- [runCommand](Client.Client-1.md#runcommand)
- [set](Client.Client-1.md#set)
- [setStatus](Client.Client-1.md#setstatus)
- [use](Client.Client-1.md#use)

## Constructors

### constructor

• **new Client**(`prefix`, `options?`)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` \| `string`[] \| (`req`: [`Request`](Request.Request-1.md)) => `string` \| `Promise`<`string`\> | The prefix for your bot |
| `options?` | [`clientOptions`](../interfaces/Client.clientOptions.md) | - |

#### Overrides

[Emitter](Emitter.Emitter-1.md).[constructor](Emitter.Emitter-1.md#constructor)

#### Defined in

[src/lib/Client.ts:202](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L202)

## Properties

### applicationId

• `Protected` **applicationId**: `string` = `''`

#### Defined in

[src/lib/Client.ts:182](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L182)

___

### bot

• **bot**: [`User`](discord_User.User.md)

#### Defined in

[src/lib/Client.ts:177](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L177)

___

### cache

• **cache**: [`Cache`](_Cache.Cache.md)

#### Defined in

[src/lib/Client.ts:180](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L180)

___

### commands

• **commands**: `Map`<`string`, { `cb`: [`CommandCallback`](../modules/Command.md#commandcallback) ; `options`: [`commandOptions`](../interfaces/Command.commandOptions.md)  }[]\>

#### Defined in

[src/lib/Client.ts:194](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L194)

___

### debug

• `Protected` **debug**: [`Debug`](_Debug.Debug.md)

#### Defined in

[src/lib/Client.ts:178](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L178)

___

### events

• **events**: `Map`<keyof [`Events`](../interfaces/Client.Events.md), `Function`\>

#### Defined in

[src/lib/Client.ts:186](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L186)

___

### loop

• `Protected` `Optional` **loop**: `Timeout`

#### Defined in

[src/lib/Client.ts:193](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L193)

___

### middleware

• `Protected` **middleware**: [`CommandCallback`](../modules/Command.md#commandcallback)[] = `[]`

#### Defined in

[src/lib/Client.ts:198](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L198)

___

### options

• `Protected` **options**: [`clientOptions`](../interfaces/Client.clientOptions.md)

#### Defined in

[src/lib/Client.ts:191](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L191)

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

[src/lib/Client.ts:183](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L183)

___

### prefix

• **prefix**: `string` \| `string`[] \| (`req`: [`Request`](Request.Request-1.md)) => `string` \| `Promise`<`string`\>

#### Defined in

[src/lib/Client.ts:187](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L187)

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

[Emitter](Emitter.Emitter-1.md).[response](Emitter.Emitter-1.md#response)

#### Defined in

[src/lib/Emitter.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Emitter.ts#L30)

___

### sessionId

• `Private` **sessionId**: `string` = `''`

#### Defined in

[src/lib/Client.ts:179](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L179)

___

### status

• `Protected` **status**: `any` = `[]`

#### Defined in

[src/lib/Client.ts:181](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L181)

___

### ws

• `Protected` `Optional` **ws**: `any`

#### Inherited from

[Emitter](Emitter.Emitter-1.md).[ws](Emitter.Emitter-1.md#ws)

#### Defined in

[src/lib/Emitter.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Emitter.ts#L25)

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

[src/lib/Client.ts:391](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L391)

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

[Emitter](Emitter.Emitter-1.md).[connect](Emitter.Emitter-1.md#connect)

#### Defined in

[src/lib/Emitter.ts:50](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Emitter.ts#L50)

___

### createDM

▸ **createDM**(`uid`): `Promise`<[`Channel`](discord_Channel.Channel.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`<[`Channel`](discord_Channel.Channel.md)\>

#### Defined in

[src/lib/Client.ts:606](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L606)

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

[src/lib/Client.ts:645](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L645)

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

[Emitter](Emitter.Emitter-1.md).[event](Emitter.Emitter-1.md#event)

#### Defined in

[src/lib/Emitter.ts:87](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Emitter.ts#L87)

___

### getGlobalSlashCommands

▸ **getGlobalSlashCommands**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/Client.ts:555](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L555)

___

### getGuild

▸ **getGuild**(`gid`): `Promise`<[`Guild`](discord_Guild.Guild.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `gid` | `string` |

#### Returns

`Promise`<[`Guild`](discord_Guild.Guild.md)\>

#### Defined in

[src/lib/Client.ts:603](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L603)

___

### getGuildIds

▸ **getGuildIds**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

List of guilds

#### Defined in

[src/lib/Client.ts:600](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L600)

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

[src/lib/Client.ts:560](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L560)

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

[src/lib/Client.ts:661](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L661)

___

### initEvents

▸ `Protected` **initEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/lib/Client.ts:517](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L517)

___

### initOp

▸ `Protected` **initOp**(): `void`

#### Returns

`void`

#### Defined in

[src/lib/Client.ts:485](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L485)

___

### login

▸ **login**(`token?`): `Promise`<[`Client`](Client.Client-1.md)\>

**`description`** Log your bot into discord

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token?` | `string` \| `Buffer` | Your bot token |

#### Returns

`Promise`<[`Client`](Client.Client-1.md)\>

#### Defined in

[src/lib/Client.ts:575](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L575)

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

[src/lib/Client.ts:590](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L590)

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

[src/lib/Client.ts:614](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L614)

___

### on

▸ **on**<`T`\>(`event`, `cb`): [`Client`](Client.Client-1.md)

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

[`Client`](Client.Client-1.md)

#### Defined in

[src/lib/Client.ts:465](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L465)

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

[Emitter](Emitter.Emitter-1.md).[op](Emitter.Emitter-1.md#op)

#### Defined in

[src/lib/Emitter.ts:81](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Emitter.ts#L81)

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

[src/lib/Client.ts:328](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L328)

___

### set

▸ **set**<`T`\>(`key`, `val`): [`Client`](Client.Client-1.md)

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

[`Client`](Client.Client-1.md)

#### Defined in

[src/lib/Client.ts:617](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L617)

___

### setStatus

▸ **setStatus**(`status`): [`Client`](Client.Client-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusOptions`](../interfaces/Client.StatusOptions.md) |

#### Returns

[`Client`](Client.Client-1.md)

#### Defined in

[src/lib/Client.ts:621](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L621)

___

### use

▸ **use**(`cb`): [`Client`](Client.Client-1.md)

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

[`Client`](Client.Client-1.md)

A **client** so you can *chain* methods.

#### Defined in

[src/lib/Client.ts:481](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L481)
