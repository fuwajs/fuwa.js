[Fuwa.js](../README.md) / [Exports](../modules.md) / BotUser

# Class: BotUser

## Hierarchy

- [`User`](User.md)

  ↳ **`BotUser`**

## Table of contents

### Constructors

- [constructor](BotUser.md#constructor)

### Accessors

- [accentColor](BotUser.md#accentcolor)
- [avatar](BotUser.md#avatar)
- [banner](BotUser.md#banner)
- [discriminator](BotUser.md#discriminator)
- [id](BotUser.md#id)
- [isBot](BotUser.md#isbot)
- [isSystem](BotUser.md#issystem)
- [name](BotUser.md#name)

### Methods

- [toString](BotUser.md#tostring)
- [get](BotUser.md#get)

## Constructors

### constructor

• **new BotUser**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `User` |

#### Overrides

[User](User.md).[constructor](User.md#constructor)

#### Defined in

[lib/discord/User.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L42)

## Accessors

### accentColor

• `get` **accentColor**(): `number`

#### Returns

`number`

#### Inherited from

User.accentColor

#### Defined in

[lib/discord/User.ts:31](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L31)

___

### avatar

• `get` **avatar**(): `string`

#### Returns

`string`

#### Inherited from

User.avatar

#### Defined in

[lib/discord/User.ts:23](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L23)

___

### banner

• `get` **banner**(): `string`

#### Returns

`string`

#### Inherited from

User.banner

#### Defined in

[lib/discord/User.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L26)

___

### discriminator

• `get` **discriminator**(): `string`

#### Returns

`string`

#### Inherited from

User.discriminator

#### Defined in

[lib/discord/User.ts:14](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L14)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Inherited from

User.id

#### Defined in

[lib/discord/User.ts:8](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L8)

___

### isBot

• `get` **isBot**(): `boolean`

#### Returns

`boolean`

#### Inherited from

User.isBot

#### Defined in

[lib/discord/User.ts:17](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L17)

___

### isSystem

• `get` **isSystem**(): `boolean`

#### Returns

`boolean`

#### Inherited from

User.isSystem

#### Defined in

[lib/discord/User.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L20)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Inherited from

User.name

#### Defined in

[lib/discord/User.ts:11](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L11)

## Methods

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[User](User.md).[toString](User.md#tostring)

#### Defined in

[lib/discord/User.ts:34](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L34)

___

### get

▸ `Static` **get**(`uid`): `Promise`<[`User`](User.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `string` |

#### Returns

`Promise`<[`User`](User.md)\>

#### Inherited from

[User](User.md).[get](User.md#get)

#### Defined in

[lib/discord/User.ts:37](https://github.com/Fuwajs/Fuwa.js/blob/8345c96/src/lib/discord/User.ts#L37)
