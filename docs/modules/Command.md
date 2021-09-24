[fuwa.js](../README.md) / [Exports](../modules.md) / Command

# Module: Command

## Table of contents

### Interfaces

- [commandOptions](../interfaces/Command.commandOptions.md)

### Type aliases

- [CommandCallback](Command.md#commandcallback)

## Type aliases

### CommandCallback

Ƭ **CommandCallback**: (`req`: [`Request`](../classes/Request.Request-1.md), `res`: [`Response`](../classes/Response.Response-1.md), `next`: () => `void`, `prefix`: `string`) => `any`

#### Type declaration

▸ (`req`, `res`, `next`, `prefix`): `any`

Callback for commands

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | [`Request`](../classes/Request.Request-1.md) |
| `res` | [`Response`](../classes/Response.Response-1.md) |
| `next` | () => `void` |
| `prefix` | `string` |

##### Returns

`any`

#### Defined in

[src/lib/Command.ts:33](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Command.ts#L33)
