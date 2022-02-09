[Fuwa.js](../README.md) / [Exports](../modules.md) / Argument

# Class: Argument<T, K, C\>

The Argument used in the slash command.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends typeof `CommandOptionTypes`[`C`] |
| `K` | extends `CommandOptionTypeConverter`[`T`] |
| `C` | extends keyof typeof `CommandOptionTypes` |

## Table of contents

### Constructors

- [constructor](Argument.md#constructor)

### Properties

- [autocomplete](Argument.md#autocomplete)
- [description](Argument.md#description)
- [max](Argument.md#max)
- [min](Argument.md#min)
- [name](Argument.md#name)
- [required](Argument.md#required)
- [type](Argument.md#type)

### Methods

- [toOption](Argument.md#tooption)

## Constructors

### constructor

• **new Argument**<`T`, `K`, `C`\>(`data`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `CommandOptionTypes` |
| `K` | extends `any` |
| `C` | extends ``"SubCommand"`` \| ``"SubCommandGroup"`` \| ``"String"`` \| ``"Integer"`` \| ``"Boolean"`` \| ``"User"`` \| ``"Channel"`` \| ``"Role"`` \| ``"Mentionable"`` \| ``"Number"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `ArgumentType`<`T`, `K`, `C`\> |

#### Defined in

[lib/structures/handlers/Command.ts:200](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L200)

## Properties

### autocomplete

• `Optional` **autocomplete**: `boolean`

#### Defined in

[lib/structures/handlers/Command.ts:197](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L197)

___

### description

• **description**: `string`

#### Defined in

[lib/structures/handlers/Command.ts:194](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L194)

___

### max

• `Optional` **max**: `K` extends `number` ? `number` : `undefined`

#### Defined in

[lib/structures/handlers/Command.ts:199](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L199)

___

### min

• `Optional` **min**: `K` extends `number` ? `number` : `undefined`

#### Defined in

[lib/structures/handlers/Command.ts:198](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L198)

___

### name

• **name**: `string`

#### Defined in

[lib/structures/handlers/Command.ts:195](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L195)

___

### required

• `Optional` **required**: `boolean`

#### Defined in

[lib/structures/handlers/Command.ts:196](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L196)

___

### type

• **type**: `T`

#### Defined in

[lib/structures/handlers/Command.ts:193](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L193)

## Methods

### toOption

▸ **toOption**(): `ApplicationCommandOption`

#### Returns

`ApplicationCommandOption`

#### Defined in

[lib/structures/handlers/Command.ts:207](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L207)
