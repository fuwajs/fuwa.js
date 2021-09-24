[fuwa.js](../README.md) / [Exports](../modules.md) / [\_DiscordAPI](../modules/_DiscordAPI.md) / Invite

# Interface: Invite

[_DiscordAPI](../modules/_DiscordAPI.md).Invite

## Table of contents

### Properties

- [approximate\_member\_count](_DiscordAPI.Invite.md#approximate_member_count)
- [approximate\_presence\_count](_DiscordAPI.Invite.md#approximate_presence_count)
- [channel](_DiscordAPI.Invite.md#channel)
- [code](_DiscordAPI.Invite.md#code)
- [expires\_at](_DiscordAPI.Invite.md#expires_at)
- [guild](_DiscordAPI.Invite.md#guild)
- [inviter](_DiscordAPI.Invite.md#inviter)
- [state\_instance](_DiscordAPI.Invite.md#state_instance)
- [target\_application](_DiscordAPI.Invite.md#target_application)
- [target\_type](_DiscordAPI.Invite.md#target_type)
- [target\_user](_DiscordAPI.Invite.md#target_user)

## Properties

### approximate\_member\_count

• `Optional` **approximate\_member\_count**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:1029](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1029)

___

### approximate\_presence\_count

• `Optional` **approximate\_presence\_count**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:1028](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1028)

___

### channel

• **channel**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |
| `type` | [`ChannelType`](../enums/_DiscordAPI.ChannelType.md) |

#### Defined in

[src/lib/_DiscordAPI.ts:1019](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1019)

___

### code

• **code**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:1007](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1007)

___

### expires\_at

• `Optional` **expires\_at**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:1030](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1030)

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

[src/lib/_DiscordAPI.ts:1008](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1008)

___

### inviter

• `Optional` **inviter**: [`User`](_DiscordAPI.User.md)

#### Defined in

[src/lib/_DiscordAPI.ts:1024](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1024)

___

### state\_instance

• `Optional` **state\_instance**: [`InviteStage`](_DiscordAPI.InviteStage.md)

#### Defined in

[src/lib/_DiscordAPI.ts:1031](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1031)

___

### target\_application

• `Optional` **target\_application**: [`Application`](_DiscordAPI.Application.md)

#### Defined in

[src/lib/_DiscordAPI.ts:1027](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1027)

___

### target\_type

• `Optional` **target\_type**: [`InviteTargets`](../enums/_DiscordAPI.InviteTargets.md)

#### Defined in

[src/lib/_DiscordAPI.ts:1025](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1025)

___

### target\_user

• `Optional` **target\_user**: [`User`](_DiscordAPI.User.md)

#### Defined in

[src/lib/_DiscordAPI.ts:1026](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L1026)
