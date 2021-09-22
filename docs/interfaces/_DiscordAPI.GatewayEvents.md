[fuwa.js](../README.md) / [Exports](../modules.md) / [_DiscordAPI](../modules/_DiscordAPI.md) / GatewayEvents

# Interface: GatewayEvents

[_DiscordAPI](../modules/_DiscordAPI.md).GatewayEvents

**`see`** https://discord.com/developers/docs/topics/gateway#commands-and-events-gateway-events
TODO: Add more events

## Table of contents

### Properties

- [CHANNEL_CREATE](_DiscordAPI.GatewayEvents.md#channel_create)
- [GUILD_CREATE](_DiscordAPI.GatewayEvents.md#guild_create)
- [INVALID_SESSION](_DiscordAPI.GatewayEvents.md#invalid_session)
- [MESSAGE_CREATE](_DiscordAPI.GatewayEvents.md#message_create)
- [MESSAGE_REACTION_ADD](_DiscordAPI.GatewayEvents.md#message_reaction_add)
- [READY](_DiscordAPI.GatewayEvents.md#ready)
- [RESUMED](_DiscordAPI.GatewayEvents.md#resumed)

## Properties

### CHANNEL\_CREATE

• **CHANNEL\_CREATE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | [`Channel`](_DiscordAPI.Channel.md) |
| `op` | ``0`` |
| `t` | ``"CHANNEL_CREATE"`` |

#### Defined in

[src/lib/_DiscordAPI.ts:80](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_DiscordAPI.ts#L80)

___

### GUILD\_CREATE

• **GUILD\_CREATE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | [`Guild`](_DiscordAPI.Guild.md) |
| `op` | ``0`` |
| `t` | ``"GUILD_CREATE"`` |

#### Defined in

[src/lib/_DiscordAPI.ts:61](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_DiscordAPI.ts#L61)

___

### INVALID\_SESSION

• **INVALID\_SESSION**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | ``false`` |
| `op` | ``9`` |

#### Defined in

[src/lib/_DiscordAPI.ts:71](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_DiscordAPI.ts#L71)

___

### MESSAGE\_CREATE

• **MESSAGE\_CREATE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | [`Message`](_DiscordAPI.Message.md) |
| `op` | ``0`` |
| `t` | ``"MESSAGE_CREATE"`` |

#### Defined in

[src/lib/_DiscordAPI.ts:85](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_DiscordAPI.ts#L85)

___

### MESSAGE\_REACTION\_ADD

• **MESSAGE\_REACTION\_ADD**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | [`Reaction`](_DiscordAPI.Reaction.md) |
| `op` | ``0`` |
| `t` | ``"MESSAGE_REACTION_ADD"`` |

#### Defined in

[src/lib/_DiscordAPI.ts:90](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_DiscordAPI.ts#L90)

___

### READY

• **READY**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | [`Ready`](_DiscordAPI.Ready.md) |
| `op` | ``0`` |
| `t` | ``"READY"`` |

#### Defined in

[src/lib/_DiscordAPI.ts:75](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_DiscordAPI.ts#L75)

___

### RESUMED

• **RESUMED**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `d` | `any` |
| `op` | ``0`` |
| `t` | ``"RESUMED"`` |

#### Defined in

[src/lib/_DiscordAPI.ts:66](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_DiscordAPI.ts#L66)
