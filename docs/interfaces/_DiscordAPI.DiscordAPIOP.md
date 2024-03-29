[fuwa.js](../README.md) / [Exports](../modules.md) / [\_DiscordAPI](../modules/_DiscordAPI.md) / DiscordAPIOP

# Interface: DiscordAPIOP

[_DiscordAPI](../modules/_DiscordAPI.md).DiscordAPIOP

## Table of contents

### Properties

- [1](_DiscordAPI.DiscordAPIOP.md#1)
- [10](_DiscordAPI.DiscordAPIOP.md#10)
- [2](_DiscordAPI.DiscordAPIOP.md#2)
- [3](_DiscordAPI.DiscordAPIOP.md#3)
- [4](_DiscordAPI.DiscordAPIOP.md#4)
- [6](_DiscordAPI.DiscordAPIOP.md#6)
- [8](_DiscordAPI.DiscordAPIOP.md#8)
- [9](_DiscordAPI.DiscordAPIOP.md#9)

## Properties

### 1

• **1**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `number` |
| `op?` | ``1`` |
| `s` | `number` |
| `t?` | ``null`` |

#### Defined in

[src/lib/_DiscordAPI.ts:321](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L321)

___

### 10

• **10**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Object` |
| `d.heartbeat_interval` | `number` |
| `op?` | ``10`` |
| `t?` | ``null`` |

#### Defined in

[src/lib/_DiscordAPI.ts:389](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L389)

___

### 2

• **2**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Object` |
| `d.intents` | `number` |
| `d.presence?` | `any` |
| `d.properties` | `Object` |
| `d.properties.$browser` | `string` |
| `d.properties.$device` | `string` |
| `d.properties.$os` | `string` |
| `d.shard?` | [`number`, `number`] |
| `d.token` | `string` |
| `op?` | ``2`` |
| `s` | `number` |
| `t?` | ``null`` |

#### Defined in

[src/lib/_DiscordAPI.ts:327](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L327)

___

### 3

• **3**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Object` |
| `d.activities` | { `name`: `string` ; `type`: ``0`` \| ``2`` \| ``1`` \| ``3`` \| ``4`` \| ``5``  }[] |
| `d.afk` | `boolean` |
| `d.since` | `number` |
| `d.status` | [`UserStatus`](../modules/_DiscordAPI.md#userstatus) |
| `op?` | ``3`` |
| `t?` | ``null`` |

#### Defined in

[src/lib/_DiscordAPI.ts:343](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L343)

___

### 4

• **4**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Object` |
| `d.channel_id` | `string` |
| `d.guild_id` | `string` |
| `d.self_deaf` | `boolean` |
| `d.self_mute` | `boolean` |
| `op?` | ``4`` |
| `t?` | ``null`` |

#### Defined in

[src/lib/_DiscordAPI.ts:356](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L356)

___

### 6

• **6**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Object` |
| `d.seq` | ``1337`` |
| `d.session_id` | `string` |
| `d.token` | `string` |
| `op?` | ``6`` |
| `t?` | ``null`` |

#### Defined in

[src/lib/_DiscordAPI.ts:366](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L366)

___

### 8

• **8**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `Object` |
| `d.guild_id` | `number` |
| `d.limit` | `number` |
| `d.query` | `string` |
| `op?` | ``8`` |
| `t?` | ``null`` |

#### Defined in

[src/lib/_DiscordAPI.ts:375](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L375)

___

### 9

• **9**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | ``false`` |
| `op?` | ``9`` |
| `t?` | ``null`` |

#### Defined in

[src/lib/_DiscordAPI.ts:384](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L384)
