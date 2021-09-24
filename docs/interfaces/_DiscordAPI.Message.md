[fuwa.js](../README.md) / [Exports](../modules.md) / [\_DiscordAPI](../modules/_DiscordAPI.md) / Message

# Interface: Message

[_DiscordAPI](../modules/_DiscordAPI.md).Message

## Table of contents

### Properties

- [activity](_DiscordAPI.Message.md#activity)
- [application](_DiscordAPI.Message.md#application)
- [attachments](_DiscordAPI.Message.md#attachments)
- [author](_DiscordAPI.Message.md#author)
- [channel\_id](_DiscordAPI.Message.md#channel_id)
- [content](_DiscordAPI.Message.md#content)
- [edited\_timestamp](_DiscordAPI.Message.md#edited_timestamp)
- [embeds](_DiscordAPI.Message.md#embeds)
- [flags](_DiscordAPI.Message.md#flags)
- [guild\_id](_DiscordAPI.Message.md#guild_id)
- [id](_DiscordAPI.Message.md#id)
- [member](_DiscordAPI.Message.md#member)
- [mention\_channels](_DiscordAPI.Message.md#mention_channels)
- [mention\_everyone](_DiscordAPI.Message.md#mention_everyone)
- [mention\_roles](_DiscordAPI.Message.md#mention_roles)
- [mentions](_DiscordAPI.Message.md#mentions)
- [message\_reference](_DiscordAPI.Message.md#message_reference)
- [nonce](_DiscordAPI.Message.md#nonce)
- [pinned](_DiscordAPI.Message.md#pinned)
- [reactions](_DiscordAPI.Message.md#reactions)
- [referenced\_message](_DiscordAPI.Message.md#referenced_message)
- [stickers](_DiscordAPI.Message.md#stickers)
- [timestamp](_DiscordAPI.Message.md#timestamp)
- [tts](_DiscordAPI.Message.md#tts)
- [type](_DiscordAPI.Message.md#type)
- [webhook\_id](_DiscordAPI.Message.md#webhook_id)

## Properties

### activity

• `Optional` **activity**: `MessageActivity`

#### Defined in

[src/lib/_DiscordAPI.ts:119](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L119)

___

### application

• `Optional` **application**: `MessageApplication`

#### Defined in

[src/lib/_DiscordAPI.ts:120](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L120)

___

### attachments

• **attachments**: [`Attachment`](_DiscordAPI.Attachment.md)[]

#### Defined in

[src/lib/_DiscordAPI.ts:112](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L112)

___

### author

• **author**: [`Author`](_DiscordAPI.Author.md)

#### Defined in

[src/lib/_DiscordAPI.ts:101](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L101)

___

### channel\_id

• **channel\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:99](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L99)

___

### content

• **content**: `string`

The actual contents of the message

#### Defined in

[src/lib/_DiscordAPI.ts:104](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L104)

___

### edited\_timestamp

• **edited\_timestamp**: `Date`

#### Defined in

[src/lib/_DiscordAPI.ts:106](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L106)

___

### embeds

• **embeds**: [`Embed`](_DiscordAPI.Embed.md)[]

#### Defined in

[src/lib/_DiscordAPI.ts:113](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L113)

___

### flags

• `Optional` **flags**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:122](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L122)

___

### guild\_id

• `Optional` **guild\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:100](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L100)

___

### id

• **id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:98](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L98)

___

### member

• `Optional` **member**: [`Member`](_DiscordAPI.Member.md)

#### Defined in

[src/lib/_DiscordAPI.ts:102](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L102)

___

### mention\_channels

• `Optional` **mention\_channels**: [`ChannelMention`](_DiscordAPI.ChannelMention.md)[]

#### Defined in

[src/lib/_DiscordAPI.ts:111](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L111)

___

### mention\_everyone

• **mention\_everyone**: `boolean`

#### Defined in

[src/lib/_DiscordAPI.ts:108](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L108)

___

### mention\_roles

• **mention\_roles**: `string`[]

#### Defined in

[src/lib/_DiscordAPI.ts:110](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L110)

___

### mentions

• **mentions**: [`User`](_DiscordAPI.User.md)[]

#### Defined in

[src/lib/_DiscordAPI.ts:109](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L109)

___

### message\_reference

• `Optional` **message\_reference**: `MessageReference`

#### Defined in

[src/lib/_DiscordAPI.ts:121](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L121)

___

### nonce

• **nonce**: `string` \| `number`

#### Defined in

[src/lib/_DiscordAPI.ts:115](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L115)

___

### pinned

• **pinned**: `boolean`

#### Defined in

[src/lib/_DiscordAPI.ts:116](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L116)

___

### reactions

• **reactions**: [`Reaction`](_DiscordAPI.Reaction.md)[]

#### Defined in

[src/lib/_DiscordAPI.ts:114](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L114)

___

### referenced\_message

• `Optional` **referenced\_message**: [`Message`](_DiscordAPI.Message.md)

#### Defined in

[src/lib/_DiscordAPI.ts:124](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L124)

___

### stickers

• **stickers**: `Sticker`[]

#### Defined in

[src/lib/_DiscordAPI.ts:123](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L123)

___

### timestamp

• **timestamp**: `Date`

#### Defined in

[src/lib/_DiscordAPI.ts:105](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L105)

___

### tts

• **tts**: `boolean`

#### Defined in

[src/lib/_DiscordAPI.ts:107](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L107)

___

### type

• **type**: [`MessageType`](../enums/_DiscordAPI.MessageType.md)

#### Defined in

[src/lib/_DiscordAPI.ts:118](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L118)

___

### webhook\_id

• `Optional` **webhook\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:117](https://github.com/Fuwajs/Fuwa.js/blob/d4e1de5/src/lib/_DiscordAPI.ts#L117)
