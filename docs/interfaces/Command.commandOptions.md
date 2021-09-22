[fuwa.js](../README.md) / [Exports](../modules.md) / [Command](../modules/Command.md) / commandOptions

# Interface: commandOptions

[Command](../modules/Command.md).commandOptions

Options for your command

**`interface`**

## Table of contents

### Properties

- [aliases](Command.commandOptions.md#aliases)
- [args](Command.commandOptions.md#args)
- [desc](Command.commandOptions.md#desc)

## Properties

### aliases

• `Optional` `Private` **aliases**: `string`[]

Aliases for your command

#### Defined in

[src/lib/Command.ts:40](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Command.ts#L40)

___

### args

• `Optional` **args**: { `default`: `any` ; `desc`: `string` ; `name`: `string` ; `required`: `boolean` ; `parser`: (`val`: `string`) => `any`  }[]

Command Arguments

#### Defined in

[src/lib/Command.ts:44](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Command.ts#L44)

___

### desc

• `Optional` **desc**: `string`

Description for your command.

#### Defined in

[src/lib/Command.ts:35](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Command.ts#L35)
