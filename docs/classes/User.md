[Fuwa.js](../README.md) / [Exports](../modules.md) / User

# Class: User

## Hierarchy

- **`User`**

  ↳ [`BotUser`](BotUser.md)

## Table of contents

### Constructors

- [constructor](User.md#constructor)

### Accessors

- [accentColor](User.md#accentcolor)
- [avatar](User.md#avatar)
- [banner](User.md#banner)
- [discriminator](User.md#discriminator)
- [id](User.md#id)
- [isBot](User.md#isbot)
- [isSystem](User.md#issystem)
- [name](User.md#name)

### Methods

- [toString](User.md#tostring)
- [get](User.md#get)

## Constructors

### constructor

• **new User**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `User` |

#### Defined in

[lib/discord/User.ts:7](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L7)

## Accessors

### accentColor

• `get` **accentColor**(): `number`

#### Returns

`number`

#### Defined in

[lib/discord/User.ts:31](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L31)

___

### avatar

• `get` **avatar**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/User.ts:23](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L23)

___

### banner

• `get` **banner**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/User.ts:26](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L26)

___

### discriminator

• `get` **discriminator**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/User.ts:14](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L14)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/User.ts:8](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L8)

___

### isBot

• `get` **isBot**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/discord/User.ts:17](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L17)

___

### isSystem

• `get` **isSystem**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/discord/User.ts:20](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L20)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/User.ts:11](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L11)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/User.ts:34](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L34)

___

### get

▸ `Static` **get**(`uid`): `Promise`<[`User`](User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`<[`User`](User.md)\>

#### Defined in

[lib/discord/User.ts:37](https://github.com/fuwajs/fuwa.js/blob/e4bacda/src/lib/discord/User.ts#L37)
