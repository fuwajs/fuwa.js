[fuwa.js](../README.md) / [Exports](../modules.md) / [Errors](../modules/Errors.md) / InvalidPrefix

# Class: InvalidPrefix

[Errors](../modules/Errors.md).InvalidPrefix

## Hierarchy

- `Error`

  ↳ **`InvalidPrefix`**

## Table of contents

### Constructors

- [constructor](Errors.InvalidPrefix.md#constructor)

### Properties

- [message](Errors.InvalidPrefix.md#message)
- [name](Errors.InvalidPrefix.md#name)
- [stack](Errors.InvalidPrefix.md#stack)
- [prepareStackTrace](Errors.InvalidPrefix.md#preparestacktrace)
- [stackTraceLimit](Errors.InvalidPrefix.md#stacktracelimit)

### Methods

- [captureStackTrace](Errors.InvalidPrefix.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidPrefix**(`msg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/lib/Errors.ts:13](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Errors.ts#L13)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string` = `'InvalidPrefix'`

#### Overrides

Error.name

#### Defined in

[src/lib/Errors.ts:12](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Errors.ts#L12)

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
