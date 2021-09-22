[fuwa.js](../README.md) / [Exports](../modules.md) / [Client](../modules/Client.md) / StatusOptions

# Interface: StatusOptions

[Client](../modules/Client.md).StatusOptions

status options for bot

## Table of contents

### Properties

- [afk](Client.StatusOptions.md#afk)
- [name](Client.StatusOptions.md#name)
- [status](Client.StatusOptions.md#status)
- [type](Client.StatusOptions.md#type)
- [url](Client.StatusOptions.md#url)

## Properties

### afk

• `Optional` **afk**: `boolean`

Whether or not the bot is afk.

#### Defined in

[src/lib/Client.ts:61](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L61)

___

### name

• **name**: `string`

The status message to be displayed

#### Defined in

[src/lib/Client.ts:41](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L41)

___

### status

• `Optional` **status**: [`UserStatus`](../modules/_DiscordAPI.md#userstatus)

The status of your bot. Online by default

#### Defined in

[src/lib/Client.ts:57](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L57)

___

### type

• `Optional` **type**: [`ActivityType`](../enums/_DiscordAPI.ActivityType.md)

The available status types are playing, listening, streaming, and
competing.

#### Defined in

[src/lib/Client.ts:47](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L47)

___

### url

• `Optional` **url**: `string`

The URL of a stream

#### Defined in

[src/lib/Client.ts:52](https://github.com/Fuwajs/Fuwa.js/blob/5bd8aa0/src/lib/Client.ts#L52)
