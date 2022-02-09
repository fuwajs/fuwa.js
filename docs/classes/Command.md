[Fuwa.js](../README.md) / [Exports](../modules.md) / Command

# Class: Command<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Constructors

- [constructor](Command.md#constructor)

### Properties

- [args](Command.md#args)
- [description](Command.md#description)
- [guild](Command.md#guild)
- [id](Command.md#id)
- [name](Command.md#name)
- [run](Command.md#run)
- [subCommands](Command.md#subcommands)
- [type](Command.md#type)

### Methods

- [addArg](Command.md#addarg)
- [addSubCommand](Command.md#addsubcommand)
- [mount](Command.md#mount)
- [toJSON](Command.md#tojson)
- [toString](Command.md#tostring)
- [from](Command.md#from)

## Constructors

### constructor

• **new Command**<`T`\>(`data`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `CommandType`<`T`\> |

#### Defined in

[lib/structures/handlers/Command.ts:102](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L102)

## Properties

### args

• **args**: [`Argument`](Argument.md)<`any`, `any`, `any`\>[]

An array of options for the command.
type of class Argument[]

#### Defined in

[lib/structures/handlers/Command.ts:99](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L99)

___

### description

• **description**: `string` = `'This command has no description'`

#### Defined in

[lib/structures/handlers/Command.ts:91](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L91)

___

### guild

• `Optional` **guild**: `string`

The guild for the command to be registered in. If left blank, the command will be registered as a global command.

#### Defined in

[lib/structures/handlers/Command.ts:95](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L95)

___

### id

• **id**: `string`

The id of the application command

#### Defined in

[lib/structures/handlers/Command.ts:86](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L86)

___

### name

• **name**: `string`

The display name of the slash interaction.
Must be all lowercase.

#### Defined in

[lib/structures/handlers/Command.ts:90](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L90)

___

### run

• **run**: `CommandCallback`<`T`\>

#### Defined in

[lib/structures/handlers/Command.ts:101](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L101)

___

### subCommands

• **subCommands**: `SubCommand`<`any`\>[]

#### Defined in

[lib/structures/handlers/Command.ts:100](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L100)

___

### type

• **type**: `number` = `1`

#### Defined in

[lib/structures/handlers/Command.ts:84](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L84)

## Methods

### addArg

▸ **addArg**<`T`, `K`, `C`\>(...`args`): [`Command`](Command.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `CommandOptionTypes` |
| `K` | extends `any` |
| `C` | extends ``"SubCommand"`` \| ``"SubCommandGroup"`` \| ``"String"`` \| ``"Integer"`` \| ``"Boolean"`` \| ``"User"`` \| ``"Channel"`` \| ``"Role"`` \| ``"Mentionable"`` \| ``"Number"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | ([`Argument`](Argument.md)<`T`, `K`, `C`\> \| `ArgumentType`<`T`, `K`, `C`\>)[] |

#### Returns

[`Command`](Command.md)<`T`\>

#### Defined in

[lib/structures/handlers/Command.ts:108](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L108)

___

### addSubCommand

▸ **addSubCommand**(...`args`): [`Command`](Command.md)<`T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `SubCommand`<`any`\>[] |

#### Returns

[`Command`](Command.md)<`T`\>

#### Defined in

[lib/structures/handlers/Command.ts:116](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L116)

___

### mount

▸ **mount**(): `any`

#### Returns

`any`

#### Defined in

[lib/structures/handlers/Command.ts:105](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L105)

___

### toJSON

▸ **toJSON**(): `ApplicationCommandCreate`

#### Returns

`ApplicationCommandCreate`

#### Defined in

[lib/structures/handlers/Command.ts:123](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L123)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/structures/handlers/Command.ts:120](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L120)

___

### from

▸ `Static` **from**<`T`\>(`cmd`, `run`, `mount?`): [`Command`](Command.md)<`any`\>

Convert a slash command into a actual command

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmd` | `ApplicationCommandCreateUpdateDelete` | The command you want to convert |
| `run` | `T` extends ``true`` ? `CommandCallback`<`any`\> : `undefined` | The callback for the command. This is required if mount is true |
| `mount?` | `T` | if the command should mount or not, the callback is required if so. defaults to false |

#### Returns

[`Command`](Command.md)<`any`\>

a new Command

#### Defined in

[lib/structures/handlers/Command.ts:141](https://github.com/fuwajs/fuwa.js/blob/2dc8ebd/src/lib/structures/handlers/Command.ts#L141)
