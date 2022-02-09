[Fuwa.js](../README.md) / [Exports](../modules.md) / Attachment

# Class: Attachment

## Table of contents

### Constructors

- [constructor](Attachment.md#constructor)

### Accessors

- [contentType](Attachment.md#contenttype)
- [filename](Attachment.md#filename)
- [height](Attachment.md#height)
- [id](Attachment.md#id)
- [proxyUrl](Attachment.md#proxyurl)
- [size](Attachment.md#size)
- [url](Attachment.md#url)
- [width](Attachment.md#width)

### Methods

- [download](Attachment.md#download)
- [get](Attachment.md#get)

## Constructors

### constructor

• **new Attachment**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Attachment` |

#### Defined in

[lib/discord/Attachment.ts:17](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L17)

## Accessors

### contentType

• `get` **contentType**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Attachment.ts:39](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L39)

___

### filename

• `get` **filename**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Attachment.ts:21](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L21)

___

### height

• `get` **height**(): `number`

#### Returns

`number`

#### Defined in

[lib/discord/Attachment.ts:30](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L30)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Attachment.ts:18](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L18)

___

### proxyUrl

• `get` **proxyUrl**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Attachment.ts:36](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L36)

___

### size

• `get` **size**(): `number`

#### Returns

`number`

#### Defined in

[lib/discord/Attachment.ts:24](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L24)

___

### url

• `get` **url**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Attachment.ts:33](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L33)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[lib/discord/Attachment.ts:27](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L27)

## Methods

### download

▸ **download**(`path?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Attachment.ts:50](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L50)

___

### get

▸ **get**(): `Promise`<`Blob`\>

Attachment#Get
Fetch a discord attachment and get its url from a discord channel.

#### Returns

`Promise`<`Blob`\>

url of the file

#### Defined in

[lib/discord/Attachment.ts:47](https://github.com/fuwajs/fuwa.js/blob/ca6b509/src/lib/discord/Attachment.ts#L47)
