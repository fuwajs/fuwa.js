[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Role](../modules/discord_Role.md) / Role

# Class: Role

[discord/Role](../modules/discord_Role.md).Role

## Table of contents

### Constructors

- [constructor](discord_Role.Role.md#constructor)

### Properties

- [color](discord_Role.Role.md#color)
- [gid](discord_Role.Role.md#gid)
- [hoist](discord_Role.Role.md#hoist)
- [id](discord_Role.Role.md#id)
- [managed](discord_Role.Role.md#managed)
- [mentionable](discord_Role.Role.md#mentionable)
- [name](discord_Role.Role.md#name)
- [permissions](discord_Role.Role.md#permissions)
- [permissions_new](discord_Role.Role.md#permissions_new)
- [position](discord_Role.Role.md#position)

### Methods

- [delete](discord_Role.Role.md#delete)
- [modify](discord_Role.Role.md#modify)
- [setPosition](discord_Role.Role.md#setposition)

## Constructors

### constructor

• **new Role**(`data`, `gid`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Role`](../interfaces/_DiscordAPI.Role.md) |
| `gid` | `string` |

#### Defined in

[src/lib/discord/Role.ts:14](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L14)

## Properties

### color

• **color**: `number`

#### Defined in

[src/lib/discord/Role.ts:12](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L12)

___

### gid

• `Protected` **gid**: `string`

___

### hoist

• **hoist**: `boolean`

#### Defined in

[src/lib/discord/Role.ts:11](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L11)

___

### id

• **id**: `string`

#### Defined in

[src/lib/discord/Role.ts:10](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L10)

___

### managed

• **managed**: `boolean`

#### Defined in

[src/lib/discord/Role.ts:9](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L9)

___

### mentionable

• **mentionable**: `boolean`

#### Defined in

[src/lib/discord/Role.ts:8](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L8)

___

### name

• **name**: `string`

#### Defined in

[src/lib/discord/Role.ts:7](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L7)

___

### permissions

• **permissions**: `number`

#### Defined in

[src/lib/discord/Role.ts:6](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L6)

___

### permissions\_new

• `Optional` **permissions\_new**: `string`

#### Defined in

[src/lib/discord/Role.ts:5](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L5)

___

### position

• **position**: `number`

#### Defined in

[src/lib/discord/Role.ts:4](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L4)

## Methods

### delete

▸ **delete**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[src/lib/discord/Role.ts:44](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L44)

___

### modify

▸ **modify**(`data`): `Promise`<[`Role`](discord_Role.Role.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`RoleProps`](../modules/_DiscordAPI.md#roleprops) |

#### Returns

`Promise`<[`Role`](discord_Role.Role.md)\>

#### Defined in

[src/lib/discord/Role.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L26)

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

[src/lib/discord/Role.ts:38](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/discord/Role.ts#L38)
