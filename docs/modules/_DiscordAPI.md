[fuwa.js](../README.md) / [Exports](../modules.md) / _DiscordAPI

# Module: \_DiscordAPI

TODO: make a web scraper that does this work

**`file`** src/lib/_DiscordAPI.ts

**`fileoverview`** Exports (most of) the Discord API interfaces.
[https://discord.com/developers/docs](https://discord.com/developers/docs)

## Table of contents

### Enumerations

- [ActivityType](../enums/_DiscordAPI.ActivityType.md)
- [ApplicationCommandOptionType](../enums/_DiscordAPI.ApplicationCommandOptionType.md)
- [ApplicationCommandType](../enums/_DiscordAPI.ApplicationCommandType.md)
- [AuditLogEvents](../enums/_DiscordAPI.AuditLogEvents.md)
- [ChannelTypes](../enums/_DiscordAPI.ChannelTypes.md)
- [GatewayCodes](../enums/_DiscordAPI.GatewayCodes.md)
- [GatewayIntents](../enums/_DiscordAPI.GatewayIntents.md)
- [InteractionType](../enums/_DiscordAPI.InteractionType.md)
- [InviteTargets](../enums/_DiscordAPI.InviteTargets.md)
- [MessageType](../enums/_DiscordAPI.MessageType.md)
- [PermissionFlags](../enums/_DiscordAPI.PermissionFlags.md)
- [PremiumTypes](../enums/_DiscordAPI.PremiumTypes.md)
- [UserFlags](../enums/_DiscordAPI.UserFlags.md)

### Interfaces

- [Application](../interfaces/_DiscordAPI.Application.md)
- [ApplicationCommandInteractionDataOption](../interfaces/_DiscordAPI.ApplicationCommandInteractionDataOption.md)
- [Attachment](../interfaces/_DiscordAPI.Attachment.md)
- [Author](../interfaces/_DiscordAPI.Author.md)
- [Ban](../interfaces/_DiscordAPI.Ban.md)
- [Channel](../interfaces/_DiscordAPI.Channel.md)
- [ChannelMention](../interfaces/_DiscordAPI.ChannelMention.md)
- [Channels](../interfaces/_DiscordAPI.Channels.md)
- [DiscordAPIOP](../interfaces/_DiscordAPI.DiscordAPIOP.md)
- [Embed](../interfaces/_DiscordAPI.Embed.md)
- [Emoji](../interfaces/_DiscordAPI.Emoji.md)
- [GatewayEventResponse](../interfaces/_DiscordAPI.GatewayEventResponse.md)
- [GatewayEvents](../interfaces/_DiscordAPI.GatewayEvents.md)
- [Guild](../interfaces/_DiscordAPI.Guild.md)
- [GuildHashes](../interfaces/_DiscordAPI.GuildHashes.md)
- [InteractionData](../interfaces/_DiscordAPI.InteractionData.md)
- [Invite](../interfaces/_DiscordAPI.Invite.md)
- [InviteStage](../interfaces/_DiscordAPI.InviteStage.md)
- [Member](../interfaces/_DiscordAPI.Member.md)
- [Message](../interfaces/_DiscordAPI.Message.md)
- [MessageForm](../interfaces/_DiscordAPI.MessageForm.md)
- [Overwrite](../interfaces/_DiscordAPI.Overwrite.md)
- [Reaction](../interfaces/_DiscordAPI.Reaction.md)
- [Ready](../interfaces/_DiscordAPI.Ready.md)
- [ResolvedData](../interfaces/_DiscordAPI.ResolvedData.md)
- [Role](../interfaces/_DiscordAPI.Role.md)
- [RoleTags](../interfaces/_DiscordAPI.RoleTags.md)
- [SelectOption](../interfaces/_DiscordAPI.SelectOption.md)
- [User](../interfaces/_DiscordAPI.User.md)
- [UserSettings](../interfaces/_DiscordAPI.UserSettings.md)

### Type aliases

- [ChannelProps](_DiscordAPI.md#channelprops)
- [GuildMember](_DiscordAPI.md#guildmember)
- [RoleProps](_DiscordAPI.md#roleprops)
- [UserStatus](_DiscordAPI.md#userstatus)

### Variables

- [discordAPI](_DiscordAPI.md#discordapi)
- [discordCDN](_DiscordAPI.md#discordcdn)

## Type aliases

### ChannelProps

Ƭ **ChannelProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `bitrate?` | `number` | Only works for voice channels |
| `default_auto_archive_duration?` | `number` | - |
| `name` | `string` | - |
| `nsfw?` | `boolean` | - |
| `parent_id?` | `string` | This is for channel categories |
| `permission_overwrites?` | [`Overwrite`](../interfaces/_DiscordAPI.Overwrite.md)[] | - |
| `position?` | `number` | - |
| `rate_limit_per_user?` | `number` | - |
| `rtc_region?` | `string` | - |
| `topic?` | `string` | - |
| `type` | [`ChannelTypes`](../enums/_DiscordAPI.ChannelTypes.md) | - |
| `user_limit?` | `number` | Only works for voice channels |
| `video_quality_mode?` | `number` | Video quality of a voice channel |

#### Defined in

[src/lib/_DiscordAPI.ts:841](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/_DiscordAPI.ts#L841)

___

### GuildMember

Ƭ **GuildMember**: [`Member`](../interfaces/_DiscordAPI.Member.md)

#### Defined in

[src/lib/_DiscordAPI.ts:318](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/_DiscordAPI.ts#L318)

___

### RoleProps

Ƭ **RoleProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` \| `number` |
| `hoist` | `boolean` |
| `mentionable` | `boolean` |
| `name` | `string` |
| `permissions` | [`PermissionFlags`](../enums/_DiscordAPI.PermissionFlags.md) |

#### Defined in

[src/lib/_DiscordAPI.ts:834](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/_DiscordAPI.ts#L834)

___

### UserStatus

Ƭ **UserStatus**: ``"idle"`` \| ``"dnd"`` \| ``"online"`` \| ``"offline"``

#### Defined in

[src/lib/_DiscordAPI.ts:658](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/_DiscordAPI.ts#L658)

## Variables

### discordAPI

• **discordAPI**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `api` | `string` |
| `discord` | `string` |
| `gateway` | `string` |

#### Defined in

[src/lib/_DiscordAPI.ts:48](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/_DiscordAPI.ts#L48)

___

### discordCDN

• **discordCDN**: ``"https://cdn.discordapp.com"``

#### Defined in

[src/lib/_DiscordAPI.ts:54](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/_DiscordAPI.ts#L54)
