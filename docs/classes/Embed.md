[Fuwa.js](../README.md) / [Exports](../modules.md) / Embed

# Class: Embed

The Fuwa#Embed class is a built in way to create beautiful Discord embeds with our API.
This class extends the basic discord api with more functions.

## Table of contents

### Constructors

- [constructor](Embed.md#constructor)

### Properties

- [data](Embed.md#data)

### Methods

- [addField](Embed.md#addfield)
- [addFields](Embed.md#addfields)
- [setAuthor](Embed.md#setauthor)
- [setColor](Embed.md#setcolor)
- [setDescription](Embed.md#setdescription)
- [setFooter](Embed.md#setfooter)
- [setImage](Embed.md#setimage)
- [setProvider](Embed.md#setprovider)
- [setThumbnail](Embed.md#setthumbnail)
- [setTimestamp](Embed.md#settimestamp)
- [setTitle](Embed.md#settitle)
- [setUrl](Embed.md#seturl)
- [setVideo](Embed.md#setvideo)
- [toJSON](Embed.md#tojson)

## Constructors

### constructor

• **new Embed**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Embed` |

#### Defined in

[lib/discord/Embed.ts:26](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L26)

## Properties

### data

• **data**: `Embed` = `{}`

The type of embed for discord's api

#### Defined in

[lib/discord/Embed.ts:25](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L25)

## Methods

### addField

▸ **addField**(`field`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `field` | `Object` | A field for embed |
| `field.inline?` | `boolean` | - |
| `field.name` | `string` | - |
| `field.value` | `string` | - |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:204](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L204)

___

### addFields

▸ **addFields**(`fields`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | { `inline?`: `boolean` ; `name`: `string` ; `value`: `string`  }[] | fields For embed ```ts embed.addFields([{ name: 'some name', value: 'some value' }]) ``` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:197](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L197)

___

### setAuthor

▸ **setAuthor**(`__namedParameters`): [`Embed`](Embed.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | [`AuthorOpts`](../interfaces/AuthorOpts.md) |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:116](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L116)

___

### setColor

▸ **setColor**(`color`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` \| `number` | The hex color code for the embed ```ts embed.setColor('#6f00ff') embed.setColor(0x6f00f) ``` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:154](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L154)

___

### setDescription

▸ **setDescription**(`description`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `description` | `string` | Description For Embed. |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:40](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L40)

___

### setFooter

▸ **setFooter**(`footerText`, `opts?`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `footerText` | `string` | text to be displayed in footer of embed |
| `opts?` | `Object` | - |
| `opts.icon?` | `string` | - |
| `opts.proxyIconUrl?` | `string` | - |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:96](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L96)

___

### setImage

▸ **setImage**(`imageUrl`, `opts?`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `imageUrl` | `string` | Url of the image, this can also be a file name |
| `opts?` | `Object` | - |
| `opts.height?` | `number` | - |
| `opts.proxyUrl?` | `string` | - |
| `opts.width?` | `number` | - |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:58](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L58)

___

### setProvider

▸ **setProvider**(`name`, `url?`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of provider if exists |
| `url?` | `string` | - |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:216](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L216)

___

### setThumbnail

▸ **setThumbnail**(`url`, `opts?`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | Url for thumbnail in embed |
| `opts?` | `Object` | Extra options for thumbnail. ```js //without options embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg')  //with options embed.setThumbnail('https://cdn.discordapp.com/attachments/792884815631351869/.jpg', { height: 100, width:100 }) ``` |
| `opts.height?` | `number` | - |
| `opts.proxyUrl?` | `string` | - |
| `opts.width?` | `number` | - |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:137](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L137)

___

### setTimestamp

▸ **setTimestamp**(`time?`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `time?` | `string` \| `number` \| `Date` | The timestamp of the embed. ```js embed.setTimestamp() ``` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:175](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L175)

___

### setTitle

▸ **setTitle**(`title`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | title for image embed ```js embed.setTitle('some title'); ``` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:80](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L80)

___

### setUrl

▸ **setUrl**(`url`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url of embed ```ts  embed.setUrl('https://discord.com') ```` |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:187](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L187)

___

### setVideo

▸ **setVideo**(`url`, `opts?`): [`Embed`](Embed.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url for video in embed |
| `opts?` | `Object` | extra options ```js  embed.setVideo('https://tinyurl.com/icehacks') ``` |
| `opts.height?` | `number` | - |
| `opts.width?` | `number` | - |

#### Returns

[`Embed`](Embed.md)

#### Defined in

[lib/discord/Embed.ts:229](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L229)

___

### toJSON

▸ **toJSON**(): `Embed`

#### Returns

`Embed`

#### Defined in

[lib/discord/Embed.ts:238](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Embed.ts#L238)
