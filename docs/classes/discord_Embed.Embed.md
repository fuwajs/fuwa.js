[fuwa.js](../README.md) / [Exports](../modules.md) / [discord/Embed](../modules/discord_Embed.md) / Embed

# Class: Embed

[discord/Embed](../modules/discord_Embed.md).Embed

## Table of contents

### Constructors

- [constructor](discord_Embed.Embed.md#constructor)

### Properties

- [author](discord_Embed.Embed.md#author)
- [color](discord_Embed.Embed.md#color)
- [description](discord_Embed.Embed.md#description)
- [fields](discord_Embed.Embed.md#fields)
- [footer](discord_Embed.Embed.md#footer)
- [image](discord_Embed.Embed.md#image)
- [provider](discord_Embed.Embed.md#provider)
- [thumbnail](discord_Embed.Embed.md#thumbnail)
- [timestamp](discord_Embed.Embed.md#timestamp)
- [title](discord_Embed.Embed.md#title)
- [type](discord_Embed.Embed.md#type)
- [url](discord_Embed.Embed.md#url)
- [video](discord_Embed.Embed.md#video)

### Methods

- [addField](discord_Embed.Embed.md#addfield)
- [addFields](discord_Embed.Embed.md#addfields)
- [return](discord_Embed.Embed.md#return)
- [setAuthor](discord_Embed.Embed.md#setauthor)
- [setColor](discord_Embed.Embed.md#setcolor)
- [setDescription](discord_Embed.Embed.md#setdescription)
- [setFooter](discord_Embed.Embed.md#setfooter)
- [setImage](discord_Embed.Embed.md#setimage)
- [setProvider](discord_Embed.Embed.md#setprovider)
- [setThumbnail](discord_Embed.Embed.md#setthumbnail)
- [setTimestamp](discord_Embed.Embed.md#settimestamp)
- [setTitle](discord_Embed.Embed.md#settitle)
- [setType](discord_Embed.Embed.md#settype)
- [setUrl](discord_Embed.Embed.md#seturl)
- [setVideo](discord_Embed.Embed.md#setvideo)

## Constructors

### constructor

• **new Embed**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`Embed`](../interfaces/_DiscordAPI.Embed.md) |

#### Defined in

[src/lib/discord/Embed.ts:43](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L43)

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

[src/lib/discord/Embed.ts:36](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L36)

___

### color

• `Protected` `Optional` **color**: `number`

#### Defined in

[src/lib/discord/Embed.ts:23](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L23)

___

### description

• `Protected` `Optional` **description**: `string`

#### Defined in

[src/lib/discord/Embed.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L20)

___

### fields

• `Protected` `Optional` **fields**: { `inline?`: `boolean` ; `name`: `string` ; `value`: `string`  }[] = `[]`

#### Defined in

[src/lib/discord/Embed.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L42)

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

[src/lib/discord/Embed.ts:24](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L24)

___

### image

• `Protected` `Optional` **image**: `Media`

#### Defined in

[src/lib/discord/Embed.ts:29](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L29)

___

### provider

• `Protected` `Optional` **provider**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `url` | `string` |

#### Defined in

[src/lib/discord/Embed.ts:32](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L32)

___

### thumbnail

• `Protected` `Optional` **thumbnail**: `Media`

#### Defined in

[src/lib/discord/Embed.ts:30](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L30)

___

### timestamp

• `Protected` `Optional` **timestamp**: `Date`

#### Defined in

[src/lib/discord/Embed.ts:22](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L22)

___

### title

• `Protected` `Optional` **title**: `string`

#### Defined in

[src/lib/discord/Embed.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L19)

___

### type

• `Protected` **type**: `EmbedType`

#### Defined in

[src/lib/discord/Embed.ts:18](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L18)

___

### url

• `Protected` `Optional` **url**: `string`

#### Defined in

[src/lib/discord/Embed.ts:21](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L21)

___

### video

• `Protected` `Optional` **video**: `Media`

#### Defined in

[src/lib/discord/Embed.ts:31](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L31)

## Methods

### addField

▸ **addField**(`field`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `Object` | A field for embed |
| `field.inline?` | `boolean` | - |
| `field.name` | `string` | - |
| `field.value` | `string` | - |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:241](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L241)

___

### addFields

▸ **addFields**(`fields`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | { `inline?`: `boolean` ; `name`: `string` ; `value`: `string`  }[] | fields For embed ```ts embed.addFields([{ name: 'some name', value: 'some value' }]) ``` |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:234](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L234)

___

### return

▸ **return**(): [`Embed`](discord_Embed.Embed.md)

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:275](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L275)

___

### setAuthor

▸ **setAuthor**(`name`, `opts?`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | author name that should be displayed in embed |
| `opts?` | `Object` | Extra options for author ```js // without options embed.setAuthor('Some Name')  // with options embed.setAuthor('Some Name', { url: 'https://cdn.discordapp.com/attachments/792884815631351869/.jpg' }) ``` |
| `opts.icon` | `string` | - |
| `opts.proxyIconUrl?` | `string` | - |
| `opts.url?` | `string` | - |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:135](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L135)

___

### setColor

▸ **setColor**(`color`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` \| `number` | The hex color code for the embed ```ts embed.setColor('#6f00ff') embed.setColor(0x6f00f) ``` |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:173](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L173)

___

### setDescription

▸ **setDescription**(`description`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | Description For Embed |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:59](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L59)

___

### setFooter

▸ **setFooter**(`footerText`, `opts?`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `footerText` | `string` |
| `opts?` | `Object` |
| `opts.icon?` | `string` |
| `opts.proxyIconUrl?` | `string` |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:115](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L115)

___

### setImage

▸ **setImage**(`imageUrl`, `opts?`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageUrl` | `string` | Url of the image, this can also be a file name |
| `opts?` | `Object` | - |
| `opts.height?` | `number` | - |
| `opts.proxyUrl?` | `string` | - |
| `opts.width?` | `number` | - |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:77](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L77)

___

### setProvider

▸ **setProvider**(`name`, `opts?`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of provider if exists |
| `opts?` | `Object` | - |
| `opts.url?` | `string` | - |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:253](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L253)

___

### setThumbnail

▸ **setThumbnail**(`url`, `opts?`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Url for thumbnail in embed |
| `opts?` | `Object` | Extra options for thumbnail. ```js //without options embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg')  //with options embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg', { height: 100, width:100 }) ``` |
| `opts.height?` | `number` | - |
| `opts.proxyUrl?` | `string` | - |
| `opts.width?` | `number` | - |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:156](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L156)

___

### setTimestamp

▸ **setTimestamp**(`time?`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `string` \| `number` \| `Date` | The timestamp of the embed. ```js embed.setTimestamp() ``` |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:194](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L194)

___

### setTitle

▸ **setTitle**(`title`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | title for image embed ```js embed.setTitle('some title'); ``` |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:99](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L99)

___

### setType

▸ **setType**(`type`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `EmbedType` | The type of embed: - rich: The default - image - video - gif - article - link ```ts embed.setType('rich') ``` |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:223](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L223)

___

### setUrl

▸ **setUrl**(`url`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url of embed ```ts  embed.setUrl('https://discord.com') ```` |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:206](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L206)

___

### setVideo

▸ **setVideo**(`url`, `opts?`): [`Embed`](discord_Embed.Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url for video in embed |
| `opts?` | `Object` | extra options ```js  embed.setVideo('https://tinyurl.com/icehacks') ``` |
| `opts.height?` | `number` | - |
| `opts.proxyUrl?` | `string` | - |
| `opts.width?` | `number` | - |

#### Returns

[`Embed`](discord_Embed.Embed.md)

#### Defined in

[src/lib/discord/Embed.ts:266](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/discord/Embed.ts#L266)
