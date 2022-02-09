[Fuwa.js](../README.md) / [Exports](../modules.md) / Channel

# Class: Channel

The base Channel class to interact with discord's api.

**`since`** 1.0.0

## Table of contents

### Constructors

- [constructor](Channel.md#constructor)

### Properties

- [type](Channel.md#type)

### Accessors

- [id](Channel.md#id)
- [isDM](Channel.md#isdm)
- [isNSFW](Channel.md#isnsfw)
- [name](Channel.md#name)
- [parentId](Channel.md#parentid)
- [perms](Channel.md#perms)
- [position](Channel.md#position)
- [subject](Channel.md#subject)
- [userLimit](Channel.md#userlimit)

### Methods

- [getMessages](Channel.md#getmessages)
- [getPins](Channel.md#getpins)
- [send](Channel.md#send)
- [startTyping](Channel.md#starttyping)
- [toString](Channel.md#tostring)
- [get](Channel.md#get)

## Constructors

### constructor

• **new Channel**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Channel` |

#### Defined in

[lib/discord/Channel.ts:62](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L62)

## Properties

### type

• **type**: ``"Text"`` \| ``"Dm"`` \| ``"Voice"`` \| ``"GroupDM"`` \| ``"Category"`` \| ``"News"`` \| ``"Store"`` \| ``"NewsThread"`` \| ``"PublicThread"`` \| ``"PrivateThread"`` \| ``"StageVoice"``

#### Defined in

[lib/discord/Channel.ts:68](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L68)

## Accessors

### id

• `get` **id**(): `string`

Returns the id of a channel.

#### Returns

`string`

#### Defined in

[lib/discord/Channel.ts:85](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L85)

___

### isDM

• `get` **isDM**(): `boolean`

Checks if the channel is a of type 'DM'

#### Returns

`boolean`

boolean

#### Defined in

[lib/discord/Channel.ts:117](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L117)

___

### isNSFW

• `get` **isNSFW**(): `boolean`

Checks if the channel is nsfw or not.

#### Returns

`boolean`

boolean

#### Defined in

[lib/discord/Channel.ts:106](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L106)

___

### name

• `get` **name**(): `string`

Returns the name of the channel

#### Returns

`string`

#### Defined in

[lib/discord/Channel.ts:98](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L98)

___

### parentId

• `get` **parentId**(): `string`

If a channel is in a category, it will have a parent id. This function will return that id

#### Returns

`string`

#### Defined in

[lib/discord/Channel.ts:140](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L140)

___

### perms

• `get` **perms**(): `string`

Returns the channel permissions

#### Returns

`string`

#### Defined in

[lib/discord/Channel.ts:136](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L136)

___

### position

• `get` **position**(): `number`

The position of the channel in the guild.

#### Returns

`number`

#### Defined in

[lib/discord/Channel.ts:110](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L110)

___

### subject

• `get` **subject**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Channel.ts:101](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L101)

___

### userLimit

• `get` **userLimit**(): `number`

This property is only for **voice channels**

#### Returns

`number`

#### Defined in

[lib/discord/Channel.ts:94](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L94)

## Methods

### getMessages

▸ **getMessages**(`amount?`, `data?`): `Promise`<[`Message`](Message.md)[]\>

Fetch Messages from a channel.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `amount` | `number` | `50` | the amount of messages to fetch. defaults to 50. |
| `data?` | [`MessageSearchTerms`](../modules.md#messagesearchterms) | `undefined` |  |

#### Returns

`Promise`<[`Message`](Message.md)[]\>

a map of messages from the channel.

#### Defined in

[lib/discord/Channel.ts:75](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L75)

___

### getPins

▸ **getPins**(): `Promise`<[`Message`](Message.md)[]\>

Returns the id of a pined message

#### Returns

`Promise`<[`Message`](Message.md)[]\>

#### Defined in

[lib/discord/Channel.ts:144](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L144)

___

### send

▸ **send**(`message`): `Promise`<[`Message`](Message.md)\>

A function to send data to a channel.
Works with embeds and normal text messages.

**`example`**
```typescript
channel.send({content: "Leave a star on Fuwa.js!"})
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MessageForm`](../interfaces/MessageForm.md) |

#### Returns

`Promise`<[`Message`](Message.md)\>

#### Defined in

[lib/discord/Channel.ts:128](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L128)

___

### startTyping

▸ **startTyping**(): `Promise`<`void`\>

! WARNING: This method is not recommend to be used

**`see`** https://discord.com/developers/docs/resources/channel#trigger-typing-indicator
This makes the bot appear to be typing

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Channel.ts:152](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L152)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Channel.ts:88](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L88)

___

### get

▸ `Static` **get**(`id`, `force?`): `Promise`<[`Channel`](Channel.md)\>

Allows the API to fetch all base channel information.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `id` | `string` | `undefined` | the ID of the channel. |
| `force` | `boolean` | `false` | by default we search the bot cache only, but if forced = true it will search the discord api if no channel is in the cache. |

#### Returns

`Promise`<[`Channel`](Channel.md)\>

fuwa.js#Channel

#### Defined in

[lib/discord/Channel.ts:162](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/discord/Channel.ts#L162)
