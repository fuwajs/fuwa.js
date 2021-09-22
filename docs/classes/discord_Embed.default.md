[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Embed](../modules/discord_Embed.md) / default

# Class: default

[discord/Embed](../modules/discord_Embed.md).default

## Table of contents

### Constructors

- [constructor](discord_Embed.default.md#constructor)

### Properties

- [author](discord_Embed.default.md#author)
- [color](discord_Embed.default.md#color)
- [description](discord_Embed.default.md#description)
- [fields](discord_Embed.default.md#fields)
- [footer](discord_Embed.default.md#footer)
- [image](discord_Embed.default.md#image)
- [provider](discord_Embed.default.md#provider)
- [thumbnail](discord_Embed.default.md#thumbnail)
- [timestamp](discord_Embed.default.md#timestamp)
- [title](discord_Embed.default.md#title)
- [type](discord_Embed.default.md#type)
- [url](discord_Embed.default.md#url)
- [video](discord_Embed.default.md#video)

### Methods

- [addField](discord_Embed.default.md#addfield)
- [addFields](discord_Embed.default.md#addfields)
- [return](discord_Embed.default.md#return)
- [setAuthor](discord_Embed.default.md#setauthor)
- [setColor](discord_Embed.default.md#setcolor)
- [setDescription](discord_Embed.default.md#setdescription)
- [setFooter](discord_Embed.default.md#setfooter)
- [setImage](discord_Embed.default.md#setimage)
- [setProvider](discord_Embed.default.md#setprovider)
- [setThumbnail](discord_Embed.default.md#setthumbnail)
- [setTimestamp](discord_Embed.default.md#settimestamp)
- [setTitle](discord_Embed.default.md#settitle)
- [setType](discord_Embed.default.md#settype)
- [setUrl](discord_Embed.default.md#seturl)
- [setVideo](discord_Embed.default.md#setvideo)

## Constructors

### constructor

• **new default**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`Embed`](../interfaces/_DiscordAPI.Embed.md) |

#### Defined in

[src/lib/discord/Embed.ts:43](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L43)

## Properties

### author

• `Protected` `Optional` **author**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `icon_url` | `string` |
| `name` | `string` |
| `proxy_icon_url` | `string` |
| `url` | `string` |

#### Defined in

[src/lib/discord/Embed.ts:36](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L36)

___

### color

• `Protected` `Optional` **color**: `number`

#### Defined in

[src/lib/discord/Embed.ts:23](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L23)

___

### description

• `Protected` `Optional` **description**: `string`

#### Defined in

[src/lib/discord/Embed.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L20)

___

### fields

• `Protected` `Optional` **fields**: { `inline?`: `boolean` ; `name`: `string` ; `value`: `string`  }[] = `[]`

#### Defined in

[src/lib/discord/Embed.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L42)

___

### footer

• `Protected` `Optional` **footer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `icon_url` | `string` |
| `proxy_icon_url` | `string` |
| `text` | `string` |

#### Defined in

[src/lib/discord/Embed.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L24)

___

### image

• `Protected` `Optional` **image**: `Media`

#### Defined in

[src/lib/discord/Embed.ts:29](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L29)

___

### provider

• `Protected` `Optional` **provider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `url` | `string` |

#### Defined in

[src/lib/discord/Embed.ts:32](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L32)

___

### thumbnail

• `Protected` `Optional` **thumbnail**: `Media`

#### Defined in

[src/lib/discord/Embed.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L30)

___

### timestamp

• `Protected` `Optional` **timestamp**: `Date`

#### Defined in

[src/lib/discord/Embed.ts:22](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L22)

___

### title

• `Protected` `Optional` **title**: `string`

#### Defined in

[src/lib/discord/Embed.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L19)

___

### type

• `Protected` **type**: `EmbedType`

#### Defined in

[src/lib/discord/Embed.ts:18](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L18)

___

### url

• `Protected` `Optional` **url**: `string`

#### Defined in

[src/lib/discord/Embed.ts:21](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L21)

___

### video

• `Protected` `Optional` **video**: `Media`

#### Defined in

[src/lib/discord/Embed.ts:31](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L31)

## Methods

### addField

▸ **addField**(`field`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `Object` | A field for embed |
| `field.inline?` | `boolean` | - |
| `field.name` | `string` | - |
| `field.value` | `string` | - |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:257](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L257)

___

### addFields

▸ **addFields**(`fields`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | { `inline?`: `boolean` ; `name`: `string` ; `value`: `string`  }[] | fields For embed ```ts embed.addFields([{ name: 'some name', value: 'some value' }]) ``` |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:248](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L248)

___

### return

▸ **return**(): [`default`](discord_Embed.default.md)

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:294](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L294)

___

### setAuthor

▸ **setAuthor**(`name`, `opts?`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | author name that should be displayed in embed |
| `opts?` | `Object` | Extra options for author ```js // without options embed.setAuthor('Some Name')  // with options embed.setAuthor('Some Name', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' }) ``` |
| `opts.icon` | `string` | - |
| `opts.proxyIconUrl?` | `string` | - |
| `opts.url?` | `string` | - |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:141](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L141)

___

### setColor

▸ **setColor**(`color`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` \| `number` | The hex color code for the embed ```ts embed.setColor('#6f00ff') embed.setColor(0x6f00f) ``` |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:185](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L185)

___

### setDescription

▸ **setDescription**(`description`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | Description For Embed |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:59](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L59)

___

### setFooter

▸ **setFooter**(`footerText`, `opts?`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `footerText` | `string` |
| `opts?` | `Object` |
| `opts.icon?` | `string` |
| `opts.proxyIconUrl?` | `string` |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:118](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L118)

___

### setImage

▸ **setImage**(`imageUrl`, `opts?`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageUrl` | `string` | Url of the image, this can also be a file name |
| `opts?` | `Object` | - |
| `opts.height?` | `number` | - |
| `opts.proxyUrl?` | `string` | - |
| `opts.width?` | `number` | - |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:77](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L77)

___

### setProvider

▸ **setProvider**(`name`, `opts?`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of provider if exists |
| `opts?` | `Object` | - |
| `opts.url?` | `string` | - |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:269](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L269)

___

### setThumbnail

▸ **setThumbnail**(`url`, `opts?`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Url for thumbnail in embed |
| `opts?` | `Object` | Extra options for thumbnail. ```js //without options embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg')  //with options embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg', { height: 100, width:100 }) ``` |
| `opts.height?` | `number` | - |
| `opts.proxyUrl?` | `string` | - |
| `opts.width?` | `number` | - |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:165](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L165)

___

### setTimestamp

▸ **setTimestamp**(`time?`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `string` \| `number` \| `Date` | The timestamp of the embed. ```js embed.setTimestamp() ``` |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:208](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L208)

___

### setTitle

▸ **setTitle**(`title`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | title for image embed ```js embed.setTitle('some title'); ``` |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:102](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L102)

___

### setType

▸ **setType**(`type`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `EmbedType` | The type of embed: - rich: The default - image - video - gif - article - link ```ts embed.setType('rich') ``` |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:237](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L237)

___

### setUrl

▸ **setUrl**(`url`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url of embed ```ts  embed.setUrl('https://discord.com') ```` |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:220](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L220)

___

### setVideo

▸ **setVideo**(`url`, `opts?`): [`default`](discord_Embed.default.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url for video in embed |
| `opts?` | `Object` | extra options ```js  embed.setVideo('https://tinyurl.com/icehacks') ``` |
| `opts.height?` | `number` | - |
| `opts.proxyUrl?` | `string` | - |
| `opts.width?` | `number` | - |

#### Returns

[`default`](discord_Embed.default.md)

#### Defined in

[src/lib/discord/Embed.ts:282](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/discord/Embed.ts#L282)
