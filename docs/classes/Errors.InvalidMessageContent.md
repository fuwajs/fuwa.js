[fuwa.js](../README.md) / [Exports](../modules.md) / [Errors](../modules/Errors.md) / InvalidMessageContent

# Class: InvalidMessageContent

[Errors](../modules/Errors.md).InvalidMessageContent

## Hierarchy

- `Error`

  ↳ **`InvalidMessageContent`**

## Table of contents

### Constructors

- [constructor](Errors.InvalidMessageContent.md#constructor)

### Properties

- [message](Errors.InvalidMessageContent.md#message)
- [name](Errors.InvalidMessageContent.md#name)
- [stack](Errors.InvalidMessageContent.md#stack)
- [prepareStackTrace](Errors.InvalidMessageContent.md#preparestacktrace)
- [stackTraceLimit](Errors.InvalidMessageContent.md#stacktracelimit)

### Methods

- [captureStackTrace](Errors.InvalidMessageContent.md#capturestacktrace)

## Constructors

### constructor

• **new InvalidMessageContent**(`msg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/lib/Errors.ts:26](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Errors.ts#L26)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string` = `'InvalidMessageContent'`

#### Overrides

Error.name

#### Defined in

[src/lib/Errors.ts:25](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Errors.ts#L25)

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
