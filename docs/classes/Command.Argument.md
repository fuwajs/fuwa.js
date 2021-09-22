[fuwa.js](../README.md) / [Exports](../modules.md) / [Command](../modules/Command.md) / Argument

# Class: Argument<T\>

[Command](../modules/Command.md).Argument

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `string` \| `unknown` |

## Table of contents

### Constructors

- [constructor](Command.Argument.md#constructor)

### Properties

- [defaultValue](Command.Argument.md#defaultvalue)
- [desc](Command.Argument.md#desc)

## Constructors

### constructor

• **new Argument**<`T`\>(`desc`, `defaultValue`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `desc` | `string` |
| `defaultValue` | `T` |

#### Defined in

[src/lib/Command.ts:21](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Command.ts#L21)

## Properties

### defaultValue

• `Readonly` **defaultValue**: `T`

Default value of the argument

#### Defined in

[src/lib/Command.ts:14](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Command.ts#L14)

___

### desc

• `Readonly` **desc**: `string`

A description of the argument

#### Defined in

[src/lib/Command.ts:19](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Command.ts#L19)
