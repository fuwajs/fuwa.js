[fuwa.js](../README.md) / [Exports](../modules.md) / [\_Debug](../modules/_Debug.md) / Debug

# Class: Debug

[_Debug](../modules/_Debug.md).Debug

**`description`** This class acts as a namespace for pretty-printed debugging
messages.

## Table of contents

### Constructors

- [constructor](_Debug.Debug.md#constructor)

### Properties

- [enabled](_Debug.Debug.md#enabled)

### Methods

- [error](_Debug.Debug.md#error)
- [log](_Debug.Debug.md#log)
- [object](_Debug.Debug.md#object)
- [success](_Debug.Debug.md#success)

## Constructors

### constructor

• **new Debug**(`enabled?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `enabled` | `boolean` | `false` |

#### Defined in

[src/lib/_Debug.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Debug.ts#L26)

## Properties

### enabled

• `Protected` **enabled**: `boolean`

#### Defined in

[src/lib/_Debug.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Debug.ts#L25)

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

[src/lib/_Debug.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Debug.ts#L42)

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

[src/lib/_Debug.ts:34](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Debug.ts#L34)

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

[src/lib/_Debug.ts:65](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Debug.ts#L65)

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

[src/lib/_Debug.ts:50](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_Debug.ts#L50)
