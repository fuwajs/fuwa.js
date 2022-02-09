[Fuwa.js](../README.md) / [Exports](../modules.md) / Message

# Class: Message

## Table of contents

### Constructors

- [constructor](Message.md#constructor)

### Properties

- [embeds](Message.md#embeds)
- [type](Message.md#type)

### Accessors

- [attachments](Message.md#attachments)
- [author](Message.md#author)
- [channelId](Message.md#channelid)
- [content](Message.md#content)
- [createdAt](Message.md#createdat)
- [editedAt](Message.md#editedat)
- [guildId](Message.md#guildid)
- [id](Message.md#id)
- [isPinned](Message.md#ispinned)
- [isTTS](Message.md#istts)
- [member](Message.md#member)
- [mentions](Message.md#mentions)
- [messageReference](Message.md#messagereference)
- [reactions](Message.md#reactions)

### Methods

- [delete](Message.md#delete)
- [toString](Message.md#tostring)

## Constructors

### constructor

• **new Message**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Message` |

#### Defined in

[lib/discord/Message.ts:10](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L10)

## Properties

### embeds

• **embeds**: [`Embed`](Embed.md)[]

#### Defined in

[lib/discord/Message.ts:61](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L61)

___

### type

• **type**: ``"Default"`` \| ``"RecipientAdd"`` \| ``"RecipientRemove"`` \| ``"Call"`` \| ``"ChannelNameChange"`` \| ``"ChannelIconChange"`` \| ``"ChannelPinnedMessage"`` \| ``"GuildMemberJoin"`` \| ``"UserPremiumGuildSubscription"`` \| ``"UserPremiumGuildSubscriptionTier1"`` \| ``"UserPremiumGuildSubscriptionTier2"`` \| ``"UserPremiumGuildSubscriptionTier3"`` \| ``"ChannelFollowAdd"`` \| ``"GuildFollowAdd"`` \| ``"GuildDiscoveryDisqualified"`` \| ``"GuildDiscoveryRequalified"`` \| ``"Reply"`` \| ``"ApplicationCommand"``

#### Defined in

[lib/discord/Message.ts:62](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L62)

## Accessors

### attachments

• `get` **attachments**(): [`Attachment`](Attachment.md)[]

#### Returns

[`Attachment`](Attachment.md)[]

#### Defined in

[lib/discord/Message.ts:21](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L21)

___

### author

• `get` **author**(): [`User`](User.md)

the author id of the message

#### Returns

[`User`](User.md)

#### Defined in

[lib/discord/Message.ts:44](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L44)

___

### channelId

• `get` **channelId**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Message.ts:51](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L51)

___

### content

• `get` **content**(): `string`

the actual content of the message

#### Returns

`string`

#### Defined in

[lib/discord/Message.ts:26](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L26)

___

### createdAt

• `get` **createdAt**(): `Date`

Time of message creation.

#### Returns

`Date`

#### Defined in

[lib/discord/Message.ts:18](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L18)

___

### editedAt

• `get` **editedAt**(): `Date`

#### Returns

`Date`

#### Defined in

[lib/discord/Message.ts:36](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L36)

___

### guildId

• `get` **guildId**(): `string`

The guild id of where the message was sent.

#### Returns

`string`

#### Defined in

[lib/discord/Message.ts:48](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L48)

___

### id

• `get` **id**(): `string`

Id of the message

#### Returns

`string`

#### Defined in

[lib/discord/Message.ts:13](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L13)

___

### isPinned

• `get` **isPinned**(): `boolean`

If the message is pinned in a channel.

#### Returns

`boolean`

#### Defined in

[lib/discord/Message.ts:40](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L40)

___

### isTTS

• `get` **isTTS**(): `boolean`

#### Returns

`boolean`

#### Defined in

[lib/discord/Message.ts:58](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L58)

___

### member

• `get` **member**(): [`Member`](Member.md)

#### Returns

[`Member`](Member.md)

#### Defined in

[lib/discord/Message.ts:67](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L67)

___

### mentions

• `get` **mentions**(): [`Member`](Member.md)[]

#### Returns

[`Member`](Member.md)[]

#### Defined in

[lib/discord/Message.ts:70](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L70)

___

### messageReference

• `get` **messageReference**(): [`Message`](Message.md)

If the message is replying to another message.

#### Returns

[`Message`](Message.md)

#### Defined in

[lib/discord/Message.ts:33](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L33)

___

### reactions

• `get` **reactions**(): `Reaction`[]

#### Returns

`Reaction`[]

#### Defined in

[lib/discord/Message.ts:64](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L64)

## Methods

### delete

▸ **delete**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[lib/discord/Message.ts:54](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L54)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[lib/discord/Message.ts:29](https://github.com/fuwajs/fuwa.js/blob/b906434/src/lib/discord/Message.ts#L29)
