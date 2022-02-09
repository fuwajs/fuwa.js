[Fuwa.js](README.md) / Exports

# Fuwa.js

Main project point for all the typescript files.

**`internal`**

## Table of contents

### Classes

- [Argument](classes/Argument.md)
- [Attachment](classes/Attachment.md)
- [BotUser](classes/BotUser.md)
- [Button](classes/Button.md)
- [Channel](classes/Channel.md)
- [Client](classes/Client.md)
- [Command](classes/Command.md)
- [Context](classes/Context.md)
- [Embed](classes/Embed.md)
- [File](classes/File.md)
- [Guild](classes/Guild.md)
- [Member](classes/Member.md)
- [MemoryCache](classes/MemoryCache.md)
- [Message](classes/Message.md)
- [Plugin](classes/Plugin.md)
- [Role](classes/Role.md)
- [User](classes/User.md)

### Interfaces

- [AuthorOpts](interfaces/AuthorOpts.md)
- [ButtonParams](interfaces/ButtonParams.md)
- [Cache](interfaces/Cache.md)
- [CacheOverwrites](interfaces/CacheOverwrites.md)
- [ClientOptions](interfaces/ClientOptions.md)
- [MemoryCacheOptions](interfaces/MemoryCacheOptions.md)
- [MessageForm](interfaces/MessageForm.md)
- [PluginOptions](interfaces/PluginOptions.md)

### Type aliases

- [EmbedType](modules.md#embedtype)
- [Media](modules.md#media)
- [MessageSearchTerms](modules.md#messagesearchterms)
- [RoleCreateUpdate](modules.md#rolecreateupdate)

### Functions

- [makeMessagePayload](modules.md#makemessagepayload)
- [messageToForm](modules.md#messagetoform)

## Type aliases

### EmbedType

Ƭ **EmbedType**: ``"rich"`` \| ``"image"`` \| ``"video"`` \| ``"gifv"`` \| ``"article"`` \| ``"link"``

#### Defined in

[lib/discord/Embed.ts:10](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Embed.ts#L10)

___

### Media

Ƭ **Media**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `proxy_url` | `string` |
| `url` | `string` |
| `width` | `number` |

#### Defined in

[lib/discord/Embed.ts:3](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Embed.ts#L3)

___

### MessageSearchTerms

Ƭ **MessageSearchTerms**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `after?` | `string` |
| `amount?` | `number` |
| `around?` | `string` |
| `before?` | `string` |

#### Defined in

[lib/discord/Channel.ts:39](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Channel.ts#L39)

___

### RoleCreateUpdate

Ƭ **RoleCreateUpdate**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color?` | `number` \| `string` |
| `icon?` | `string` |
| `mentionable?` | `boolean` |
| `name?` | `string` |
| `permissions?` | keyof typeof `PermissionFlags`[] |
| `unicodeEmoji?` | `string` |

#### Defined in

[lib/discord/Guild.ts:177](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Guild.ts#L177)

## Functions

### makeMessagePayload

▸ **makeMessagePayload**(`message`): `Promise`<`Form`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`MessageForm`](interfaces/MessageForm.md) |

#### Returns

`Promise`<`Form`\>

#### Defined in

[lib/discord/Channel.ts:31](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Channel.ts#L31)

___

### messageToForm

▸ **messageToForm**(`msg`): `Promise`<`Form`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | [`MessageForm`](interfaces/MessageForm.md) |

#### Returns

`Promise`<`Form`\>

#### Defined in

[lib/discord/Channel.ts:11](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Channel.ts#L11)
