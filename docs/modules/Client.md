[fuwa.js](../README.md) / [Exports](../modules.md) / Client

# Module: Client

## Table of contents

### Classes

- [Client](../classes/Client.Client-1.md)

### Interfaces

- [Events](../interfaces/Client.Events.md)
- [StatusOptions](../interfaces/Client.StatusOptions.md)
- [clientOptions](../interfaces/Client.clientOptions.md)

### Type aliases

- [statusType](Client.md#statustype)

### Functions

- [next](Client.md#next)

## Type aliases

### statusType

Ƭ **statusType**: ``"playing"`` \| ``"listening"`` \| ``"streaming"`` \| ``"competing"``

#### Defined in

[src/lib/Client.ts:34](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L34)

## Functions

### next

▸ `Const` **next**(`req`, `res`, `prefix`, `arr`, `i?`, `secondArr?`): () => `void`

The Client Class

**`description`** The client class is the main starting point of your discord bot.
```typescript
const fuwa = require('fuwa.js'); // Import Fuwa library
const client = new fuwa.Client('?'); // Create and initialize a Client
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `req` | [`Request`](../classes/Request.Request-1.md) | `undefined` |
| `res` | [`Response`](../classes/Response.Response-1.md) | `undefined` |
| `prefix` | `string` | `undefined` |
| `arr` | { `cb`: [`CommandCallback`](Command.md#commandcallback)  }[] | `undefined` |
| `i` | `number` | `0` |
| `secondArr?` | { `cb`: [`CommandCallback`](Command.md#commandcallback)  }[] | `undefined` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/lib/Client.ts:161](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/Client.ts#L161)
