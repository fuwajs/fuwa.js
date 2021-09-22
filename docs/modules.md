[fuwa.js](README.md) / Exports

# fuwa.js

## Table of contents

### Interfaces

- [commandOptions](interfaces/commandOptions.md)

### Type aliases

- [commandCallback](modules.md#commandcallback)

### Variables

- [Client](modules.md#client)
- [Colors](modules.md#colors)
- [Colours](modules.md#colours)
- [Embed](modules.md#embed)
- [Enums](modules.md#enums)
- [Request](modules.md#request)
- [Response](modules.md#response)

## Type aliases

### commandCallback

Ƭ **commandCallback**: (`req`: `Request`, `res`: `Response`, `next`: () => `void`, `prefix`: `string`) => `any`

#### Type declaration

▸ (`req`, `res`, `next`, `prefix`): `any`

Callback for commands

##### Parameters

| Name | Type |
| :------ | :------ |
| `req` | `Request` |
| `res` | `Response` |
| `next` | () => `void` |
| `prefix` | `string` |

##### Returns

`any`

#### Defined in

[lib/Command.ts:56](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/lib/Command.ts#L56)

## Variables

### Client

• **Client**: typeof `Client`

#### Defined in

[index.ts:42](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/index.ts#L42)

___

### Colors

• **Colors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aliceBlue` | `number` |
| `antiqueWhite` | `number` |
| `aqua` | `number` |
| `aquaMarine` | `number` |
| `azure` | `number` |
| `beige` | `number` |
| `bisque` | `number` |
| `black` | `number` |
| `blanchedAlmond` | `number` |
| `blue` | `number` |
| `blueViolet` | `number` |
| `brown` | `number` |
| `lightGreen` | `number` |
| `mind` | `number` |
| `orange` | `number` |
| `pink` | `number` |
| `red` | `number` |
| `snow` | `number` |
| `white` | `number` |
| `yellow` | `number` |
| `rgb` | (`r`: `number`, `g`: `number`, `b`: `number`) => `number` |

#### Defined in

[index.ts:40](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/index.ts#L40)

___

### Colours

• **Colours**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aliceBlue` | `number` |
| `antiqueWhite` | `number` |
| `aqua` | `number` |
| `aquaMarine` | `number` |
| `azure` | `number` |
| `beige` | `number` |
| `bisque` | `number` |
| `black` | `number` |
| `blanchedAlmond` | `number` |
| `blue` | `number` |
| `blueViolet` | `number` |
| `brown` | `number` |
| `lightGreen` | `number` |
| `mind` | `number` |
| `orange` | `number` |
| `pink` | `number` |
| `red` | `number` |
| `snow` | `number` |
| `white` | `number` |
| `yellow` | `number` |
| `rgb` | (`r`: `number`, `g`: `number`, `b`: `number`) => `number` |

#### Defined in

[index.ts:41](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/index.ts#L41)

___

### Embed

• **Embed**: typeof `Embed`

#### Defined in

[index.ts:43](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/index.ts#L43)

___

### Enums

• **Enums**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ActivityType` | typeof `ActivityType` |
| `ChannelTypes` | typeof `ChannelTypes` |
| `GatewayIntents` | typeof `GatewayIntents` |
| `InviteTargets` | typeof `InviteTargets` |
| `MessageType` | typeof `MessageType` |
| `PermissionFlags` | typeof `PermissionFlags` |
| `PremiumTypes` | typeof `PremiumTypes` |
| `SlashCommandOptions` | typeof `ApplicationCommandOptionType` |
| `SlashCommandTypes` | typeof `ApplicationCommandType` |
| `UserFlags` | typeof `UserFlags` |

#### Defined in

[index.ts:27](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/index.ts#L27)

___

### Request

• **Request**: typeof `_Request`

#### Defined in

[index.ts:46](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/index.ts#L46)

___

### Response

• **Response**: typeof `_Response`

#### Defined in

[index.ts:47](https://github.com/Fuwajs/Fuwa.js/blob/7272137/src/index.ts#L47)
