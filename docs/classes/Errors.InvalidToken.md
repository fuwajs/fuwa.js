[fuwa.js](../README.md) / [Exports](../modules.md) / [Errors](../modules/Errors.md) / InvalidToken

# Class: InvalidToken

[Errors](../modules/Errors.md).InvalidToken

**`file`** src/lib/Errors.ts

**`fileoverview`** Error classes

## Hierarchy

- `Error`

  ↳ **`InvalidToken`**

## Table of contents

### Constructors

- [constructor](Errors.InvalidToken.md#constructor)

### Properties

- [message](Errors.InvalidToken.md#message)
- [name](Errors.InvalidToken.md#name)
- [stack](Errors.InvalidToken.md#stack)
- [prepareStackTrace](Errors.InvalidToken.md#preparestacktrace)
- [stackTraceLimit](Errors.InvalidToken.md#stacktracelimit)

### Methods

- [captureStackTrace](Errors.InvalidToken.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidToken**(`msg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/lib/Errors.ts:7](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Errors.ts#L7)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string` = `'InvalidTokenError'`

#### Overrides

Error.name

#### Defined in

[src/lib/Errors.ts:6](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Errors.ts#L6)

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
