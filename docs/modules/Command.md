[fuwa.js](../README.md) / [Exports](../modules.md) / Command

# Module: Command

## Table of contents

### Classes

- [Argument](../classes/Command.Argument.md)

### Interfaces

- [commandOptions](../interfaces/Command.commandOptions.md)

### Type aliases

- [CommandCallback](Command.md#commandcallback)

## Type aliases

### CommandCallback

Ƭ **CommandCallback**: (`req`: [`default`](../classes/Request.default.md), `res`: [`default`](../classes/Response.default.md), `next`: () => `void`, `prefix`: `string`) => `any`

#### Type declaration

▸ (`req`, `res`, `next`, `prefix`): `any`

Callback for commands

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`default`](../classes/Request.default.md) |
| `res` | [`default`](../classes/Response.default.md) |
| `next` | () => `void` |
| `prefix` | `string` |

##### Returns

`any`

#### Defined in

[src/lib/Command.ts:56](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/Command.ts#L56)
