[fuwa.js](../README.md) / [Exports](../modules.md) / [Errors](../modules/Errors.md) / CommandParsing

# Class: CommandParsing

[Errors](../modules/Errors.md).CommandParsing

## Hierarchy

- `Error`

  ↳ **`CommandParsing`**

## Table of contents

### Constructors

- [constructor](Errors.CommandParsing.md#constructor)

### Properties

- [message](Errors.CommandParsing.md#message)
- [name](Errors.CommandParsing.md#name)
- [stack](Errors.CommandParsing.md#stack)
- [prepareStackTrace](Errors.CommandParsing.md#preparestacktrace)
- [stackTraceLimit](Errors.CommandParsing.md#stacktracelimit)

### Methods

- [captureStackTrace](Errors.CommandParsing.md#capturestacktrace)

## Constructors

### constructor

• **new CommandParsing**(`msg`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Overrides

Error.constructor

#### Defined in

[src/lib/Errors.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Errors.ts#L19)

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string` = `'CommandParsingError'`

#### Overrides

Error.name

#### Defined in

[src/lib/Errors.ts:18](https://github.com/Fuwajs/Fuwa.js/blob/6865cb6/src/lib/Errors.ts#L18)

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
