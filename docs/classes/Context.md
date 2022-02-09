[Fuwa.js](../README.md) / [Exports](../modules.md) / Context

# Class: Context

## Table of contents

### Constructors

- [constructor](Context.md#constructor)

### Properties

- [author](Context.md#author)
- [member](Context.md#member)

### Methods

- [button](Context.md#button)
- [delete](Context.md#delete)
- [edit](Context.md#edit)
- [getChannel](Context.md#getchannel)
- [getGuild](Context.md#getguild)
- [loading](Context.md#loading)
- [resolve](Context.md#resolve)
- [send](Context.md#send)

## Constructors

### constructor

• **new Context**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `BigInteraction` |

#### Defined in

[lib/discord/Context.ts:21](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L21)

## Properties

### author

• **author**: [`User`](User.md)

#### Defined in

[lib/discord/Context.ts:23](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L23)

___

### member

• **member**: [`Member`](Member.md)

#### Defined in

[lib/discord/Context.ts:24](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L24)

## Methods

### button

▸ **button**(`data?`): [`Button`](Button.md)

The Context#button function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | [`ButtonParams`](../interfaces/ButtonParams.md) | ingest ButtonParams or null |

#### Returns

[`Button`](Button.md)

#### Defined in

[lib/discord/Context.ts:30](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L30)

___

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Context.ts:127](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L127)

___

### edit

▸ **edit**(`message`): `Promise`<[`Message`](Message.md)\>

Edit some message data

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `InteractionForm` |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[lib/discord/Context.ts:132](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L132)

___

### getChannel

▸ **getChannel**(`force?`): `Promise`<[`Channel`](Channel.md)\>

Fetches raw channel data

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `force` | `boolean` | `false` | If it should force and get the most recent data (slower) or use the cached version |

#### Returns

`Promise`<[`Channel`](Channel.md)\>

#### Defined in

[lib/discord/Context.ts:80](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L80)

___

### getGuild

▸ **getGuild**(`force?`): `Promise`<[`Guild`](Guild.md)\>

Fetches raw guild data

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`Promise`<[`Guild`](Guild.md)\>

#### Defined in

[lib/discord/Context.ts:92](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L92)

___

### loading

▸ **loading**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Context.ts:126](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L126)

___

### resolve

▸ **resolve**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `members` | [`Member`](Member.md)[] |
| `messages` | [`Message`](Message.md)[] |
| `users` | [`User`](User.md)[] |

#### Defined in

[lib/discord/Context.ts:57](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L57)

___

### send

▸ **send**(`message`): `Promise`<`void`\>

Sends a POST

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `InteractionForm` & { `files?`: [`File`](File.md)[]  } |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Context.ts:104](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Context.ts#L104)
