[fuwa.js](../README.md) / [Exports](../modules.md) / _erlpack

# Module: \_erlpack

## Table of contents

### Variables

- [erlpack](_erlpack.md#erlpack)

### Functions

- [pack](_erlpack.md#pack)
- [unpack](_erlpack.md#unpack)

## Variables

### erlpack

• **erlpack**: `Object`

**`file`** src/lib/_erlpack.ts

**`fileoverview`** Provides alternative functions if erlpack is not installed.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `pack` | (`data`: `any`) => `Buffer` |
| `unpack` | (`data`: `Buffer`) => `any` |

#### Defined in

[src/lib/_erlpack.ts:6](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_erlpack.ts#L6)

## Functions

### pack

▸ `Const` **pack**(`value`, `replacer?`, `space?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `replacer?` | (`key`: `string`, `value`: `any`) => `any` |
| `space?` | `string` \| `number` |

#### Returns

`string` \| `Buffer`

#### Defined in

[src/lib/_erlpack.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_erlpack.ts#L19)

▸ `Const` **pack**(`value`, `replacer?`, `space?`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `replacer?` | (`string` \| `number`)[] |
| `space?` | `string` \| `number` |

#### Returns

`string` \| `Buffer`

#### Defined in

[src/lib/_erlpack.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_erlpack.ts#L19)

▸ `Const` **pack**(`data`): `string` \| `Buffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`string` \| `Buffer`

#### Defined in

[src/lib/_erlpack.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_erlpack.ts#L19)

___

### unpack

▸ **unpack**(`data`, `encoding`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` \| `Buffer` |
| `encoding` | ``"json"`` \| ``"etf"`` |

#### Returns

`any`

#### Defined in

[src/lib/_erlpack.ts:20](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/_erlpack.ts#L20)
