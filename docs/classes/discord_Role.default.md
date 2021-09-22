[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Role](../modules/discord_Role.md) / default

# Class: default

[discord/Role](../modules/discord_Role.md).default

## Table of contents

### Constructors

- [constructor](discord_Role.default.md#constructor)

### Properties

- [color](discord_Role.default.md#color)
- [gid](discord_Role.default.md#gid)
- [hoist](discord_Role.default.md#hoist)
- [id](discord_Role.default.md#id)
- [managed](discord_Role.default.md#managed)
- [mentionable](discord_Role.default.md#mentionable)
- [name](discord_Role.default.md#name)
- [permissions](discord_Role.default.md#permissions)
- [permissions_new](discord_Role.default.md#permissions_new)
- [position](discord_Role.default.md#position)

### Methods

- [delete](discord_Role.default.md#delete)
- [modify](discord_Role.default.md#modify)
- [setPosition](discord_Role.default.md#setposition)

## Constructors

### constructor

• **new default**(`data`, `gid`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Role`](../interfaces/_DiscordAPI.Role.md) |
| `gid` | `string` |

#### Defined in

[src/lib/discord/Role.ts:14](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L14)

## Properties

### color

• **color**: `number`

#### Defined in

[src/lib/discord/Role.ts:12](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L12)

___

### gid

• `Protected` **gid**: `string`

___

### hoist

• **hoist**: `boolean`

#### Defined in

[src/lib/discord/Role.ts:11](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L11)

___

### id

• **id**: `string`

#### Defined in

[src/lib/discord/Role.ts:10](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L10)

___

### managed

• **managed**: `boolean`

#### Defined in

[src/lib/discord/Role.ts:9](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L9)

___

### mentionable

• **mentionable**: `boolean`

#### Defined in

[src/lib/discord/Role.ts:8](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L8)

___

### name

• **name**: `string`

#### Defined in

[src/lib/discord/Role.ts:7](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L7)

___

### permissions

• **permissions**: `number`

#### Defined in

[src/lib/discord/Role.ts:6](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L6)

___

### permissions\_new

• `Optional` **permissions\_new**: `string`

#### Defined in

[src/lib/discord/Role.ts:5](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L5)

___

### position

• **position**: `number`

#### Defined in

[src/lib/discord/Role.ts:4](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L4)

## Methods

### delete

▸ **delete**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Role.ts:44](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L44)

___

### modify

▸ **modify**(`data`): `Promise`<[`default`](discord_Role.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RoleProps`](../modules/_DiscordAPI.md#roleprops) |

#### Returns

`Promise`<[`default`](discord_Role.default.md)\>

#### Defined in

[src/lib/discord/Role.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L26)

___

### setPosition

▸ **setPosition**(`position`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Role.ts:38](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Role.ts#L38)
