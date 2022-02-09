[Fuwa.js](../README.md) / [Exports](../modules.md) / File

# Class: File

## Table of contents

### Constructors

- [constructor](File.md#constructor)

### Properties

- [contentType](File.md#contenttype)
- [data](File.md#data)
- [name](File.md#name)

### Methods

- [blobToBuffer](File.md#blobtobuffer)
- [bufferToBlob](File.md#buffertoblob)

## Constructors

### constructor

• **new File**(`name`, `data`, `contentType?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `data` | `Blob` |
| `contentType?` | `string` |

#### Defined in

[lib/structures/handlers/FileHandler.ts:5](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/FileHandler.ts#L5)

## Properties

### contentType

• **contentType**: `string`

#### Defined in

[lib/structures/handlers/FileHandler.ts:4](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/FileHandler.ts#L4)

___

### data

• **data**: `Blob`

___

### name

• **name**: `string`

## Methods

### blobToBuffer

▸ `Static` **blobToBuffer**(`blob`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blob` | `Blob` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[lib/structures/handlers/FileHandler.ts:16](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/FileHandler.ts#L16)

___

### bufferToBlob

▸ `Static` **bufferToBlob**(`buf`, `contentType?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buf` | `Buffer` |
| `contentType?` | `string` |

#### Returns

`Blob`

#### Defined in

[lib/structures/handlers/FileHandler.ts:12](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/FileHandler.ts#L12)
