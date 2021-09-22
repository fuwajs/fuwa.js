[fuwa.js](../README.md) / [Exports](../modules.md) / commandOptions

# Interface: commandOptions

Options for your command

**`interface`**

## Table of contents

### Properties

- [aliases](commandOptions.md#aliases)
- [args](commandOptions.md#args)
- [desc](commandOptions.md#desc)

## Properties

### aliases

• `Optional` `Private` **aliases**: `string`[]

Aliases for your command

#### Defined in

[lib/Command.ts:40](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/lib/Command.ts#L40)

___

### args

• `Optional` **args**: { `default`: `any` ; `desc`: `string` ; `name`: `string` ; `required`: `boolean` ; `parser`: (`val`: `string`) => `any`  }[]

Command Arguments

#### Defined in

[lib/Command.ts:44](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/lib/Command.ts#L44)

___

### desc

• `Optional` **desc**: `string`

Description for your command.

#### Defined in

[lib/Command.ts:35](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/lib/Command.ts#L35)
