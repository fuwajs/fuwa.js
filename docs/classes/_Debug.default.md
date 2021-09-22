[fuwa.js](../README.md) / [Exports](../modules.md) / [_Debug](../modules/_Debug.md) / default

# Class: default

[_Debug](../modules/_Debug.md).default

**`description`** This class acts as a namespace for pretty-printed debugging
messages.

## Table of contents

### Constructors

- [constructor](_Debug.default.md#constructor)

### Properties

- [enabled](_Debug.default.md#enabled)

### Methods

- [error](_Debug.default.md#error)
- [log](_Debug.default.md#log)
- [object](_Debug.default.md#object)
- [success](_Debug.default.md#success)

## Constructors

### constructor

• **new default**(`enabled?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enabled` | `boolean` | `false` |

#### Defined in

[src/lib/_Debug.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_Debug.ts#L26)

## Properties

### enabled

• `Protected` **enabled**: `boolean`

#### Defined in

[src/lib/_Debug.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_Debug.ts#L25)

## Methods

### error

▸ **error**(`event`, `str`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `str` | `any` |

#### Returns

`void`

#### Defined in

[src/lib/_Debug.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_Debug.ts#L42)

___

### log

▸ **log**(`event`, `str`): `void`

Log a string paired with an event to stdout

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` | The event to log |
| `str` | `any` | The message to log (must be a string) |

#### Returns

`void`

#### Defined in

[src/lib/_Debug.ts:34](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_Debug.ts#L34)

___

### object

▸ **object**(`obj`, `tabWidth?`): `string`

Print an object or primitive to stdout
! This function can be recursive

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `obj` | `any` | `undefined` | The object or primitive to print out. |
| `tabWidth` | `number` | `0` | The indentation size in tabs (4 spaces) |

#### Returns

`string`

#### Defined in

[src/lib/_Debug.ts:69](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_Debug.ts#L69)

___

### success

▸ **success**(`event`, `str`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `str` | `any` |

#### Returns

`void`

#### Defined in

[src/lib/_Debug.ts:52](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_Debug.ts#L52)
