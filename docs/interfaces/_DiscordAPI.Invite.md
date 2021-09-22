[fuwa.js](../README.md) / [Exports](../modules.md) / [_DiscordAPI](../modules/_DiscordAPI.md) / Invite

# Interface: Invite

[_DiscordAPI](../modules/_DiscordAPI.md).Invite

## Table of contents

### Properties

- [approximate_member_count](_DiscordAPI.Invite.md#approximate_member_count)
- [approximate_presence_count](_DiscordAPI.Invite.md#approximate_presence_count)
- [channel](_DiscordAPI.Invite.md#channel)
- [code](_DiscordAPI.Invite.md#code)
- [expires_at](_DiscordAPI.Invite.md#expires_at)
- [guild](_DiscordAPI.Invite.md#guild)
- [inviter](_DiscordAPI.Invite.md#inviter)
- [state_instance](_DiscordAPI.Invite.md#state_instance)
- [target_application](_DiscordAPI.Invite.md#target_application)
- [target_type](_DiscordAPI.Invite.md#target_type)
- [target_user](_DiscordAPI.Invite.md#target_user)

## Properties

### approximate\_member\_count

• `Optional` **approximate\_member\_count**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:937](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L937)

___

### approximate\_presence\_count

• `Optional` **approximate\_presence\_count**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:936](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L936)

___

### channel

• **channel**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `type` | [`ChannelTypes`](../enums/_DiscordAPI.ChannelTypes.md) |

#### Defined in

[src/lib/_DiscordAPI.ts:927](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L927)

___

### code

• **code**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:915](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L915)

___

### expires\_at

• `Optional` **expires\_at**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:938](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L938)

___

### guild

• `Optional` **guild**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `banner?` | `string` |
| `description` | `string` |
| `features` | `GuildFeatures`[] |
| `icon` | `string` |
| `id` | `string` |
| `name` | `string` |
| `splash?` | `string` |
| `vanity_url_code?` | `number` |
| `verification_level` | `number` |

#### Defined in

[src/lib/_DiscordAPI.ts:916](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L916)

___

### inviter

• `Optional` **inviter**: [`User`](_DiscordAPI.User.md)

#### Defined in

[src/lib/_DiscordAPI.ts:932](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L932)

___

### state\_instance

• `Optional` **state\_instance**: [`InviteStage`](_DiscordAPI.InviteStage.md)

#### Defined in

[src/lib/_DiscordAPI.ts:939](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L939)

___

### target\_application

• `Optional` **target\_application**: [`Application`](_DiscordAPI.Application.md)

#### Defined in

[src/lib/_DiscordAPI.ts:935](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L935)

___

### target\_type

• `Optional` **target\_type**: [`InviteTargets`](../enums/_DiscordAPI.InviteTargets.md)

#### Defined in

[src/lib/_DiscordAPI.ts:933](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L933)

___

### target\_user

• `Optional` **target\_user**: [`User`](_DiscordAPI.User.md)

#### Defined in

[src/lib/_DiscordAPI.ts:934](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L934)
