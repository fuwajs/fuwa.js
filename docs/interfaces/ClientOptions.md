[Fuwa.js](../README.md) / [Exports](../modules.md) / ClientOptions

# Interface: ClientOptions

## Table of contents

### Properties

- [applicationId](ClientOptions.md#applicationid)
- [cache](ClientOptions.md#cache)
- [intents](ClientOptions.md#intents)
- [mountingCommands](ClientOptions.md#mountingcommands)
- [owners](ClientOptions.md#owners)
- [plugins](ClientOptions.md#plugins)
- [shards](ClientOptions.md#shards)
- [token](ClientOptions.md#token)

## Properties

### applicationId

• `Optional` **applicationId**: `string`

Your Discord bot ID. This is required for using some of fuwa.js built in slash command functions

**`see`** https://discord.com/developers/applications

**`returns`** string of your ID

#### Defined in

[lib/structures/handlers/Client.ts:98](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Client.ts#L98)

___

### cache

• `Optional` **cache**: ``false`` \| [`Cache`](Cache.md)

A simple and easy way to access your R.A.M through our API.
Your cache can story any type of value set into it. Keep in mind when your bot resets or shuts down all data in the cache will be deleted.
This should not be used as a form of storage for information but to simply make common task such as fetching channels quicker.

**`example`**
```typescript
const client = new Client({
// other client options here...
})
client.cache.set("id", "value")
```

#### Defined in

[lib/structures/handlers/Client.ts:82](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Client.ts#L82)

___

### intents

• `Optional` **intents**: (`GatewayIntents` \| ``"Guilds"`` \| ``"GuildMembers"`` \| ``"GuildBans"`` \| ``"GuildEmojis"`` \| ``"GuildIntegrations"`` \| ``"GuildWebhooks"`` \| ``"GuildInvites"`` \| ``"GuildVoiceStates"`` \| ``"GuildPresences"`` \| ``"GuildMessages"`` \| ``"GuildMessageReactions"`` \| ``"GuildMessageTyping"`` \| ``"DirectMessages"`` \| ``"DirectMessageReactions"`` \| ``"DirectMessageTyping"``)[]

Discord Intends, enabling bot functions with our api.

**`see`** https://discord.com/developers/docs/topics/gateway#gateway-intents

**`example`**

#### Defined in

[lib/structures/handlers/Client.ts:63](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Client.ts#L63)

___

### mountingCommands

• `Optional` **mountingCommands**: `CommandCallback`<`any`\>[]

#### Defined in

[lib/structures/handlers/Client.ts:69](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Client.ts#L69)

___

### owners

• `Optional` **owners**: `string` \| `string`[]

The owner(s) discord ID. These users can bypass default bot permissions.

**`default`** undefined

#### Defined in

[lib/structures/handlers/Client.ts:68](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Client.ts#L68)

___

### plugins

• `Optional` **plugins**: [`Plugin`](../classes/Plugin.md)[]

An array of all fuwa.js#plugins assigned to the client class.

**`since`** 1.0.0
```typescript
 class Logger extends Plugin {
 constructor() {
      super({ name: 'Logger' });
}
event(client, data) {
     console.log(data)
}
```

**`default`** undefined

#### Defined in

[lib/structures/handlers/Client.ts:57](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Client.ts#L57)

___

### shards

• `Optional` **shards**: `number`

Shards are a way to extends your node or deno process for your bot.
They allow for multiple instances of your bot split between different servers to
improve performance and bot stability.

**`see`** https://discord.com/developers/docs/topics/gateway#sharding

**`since`** 1.0.0

**`default`** 1

**`returns`** A

#### Defined in

[lib/structures/handlers/Client.ts:92](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Client.ts#L92)

___

### token

• `Optional` **token**: `string` \| `Buffer`

The discord token to connect to the [Discord api](https://discord.com/developers/docs/intro).
This is required to start your client.

**`since`** 1.0.0

**`default`** undefined

**`returns`** string

#### Defined in

[lib/structures/handlers/Client.ts:42](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/structures/handlers/Client.ts#L42)
