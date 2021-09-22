[fuwa.js](../README.md) / [Exports](../modules.md) / [_DiscordAPI](../modules/_DiscordAPI.md) / Guild

# Interface: Guild

[_DiscordAPI](../modules/_DiscordAPI.md).Guild

**`see`** https://discord.com/developers/docs/resources/guild#guild-object-guild-structure

## Table of contents

### Properties

- [afk_channel_id](_DiscordAPI.Guild.md#afk_channel_id)
- [afk_timeout](_DiscordAPI.Guild.md#afk_timeout)
- [application_id](_DiscordAPI.Guild.md#application_id)
- [approximate_member_count](_DiscordAPI.Guild.md#approximate_member_count)
- [aproximate_presence_count](_DiscordAPI.Guild.md#aproximate_presence_count)
- [banner](_DiscordAPI.Guild.md#banner)
- [channels](_DiscordAPI.Guild.md#channels)
- [default_message_notifications](_DiscordAPI.Guild.md#default_message_notifications)
- [description](_DiscordAPI.Guild.md#description)
- [discovery_splash](_DiscordAPI.Guild.md#discovery_splash)
- [emojis](_DiscordAPI.Guild.md#emojis)
- [explicit_content_filter](_DiscordAPI.Guild.md#explicit_content_filter)
- [features](_DiscordAPI.Guild.md#features)
- [icon](_DiscordAPI.Guild.md#icon)
- [icon_hash](_DiscordAPI.Guild.md#icon_hash)
- [id](_DiscordAPI.Guild.md#id)
- [joined_at](_DiscordAPI.Guild.md#joined_at)
- [large](_DiscordAPI.Guild.md#large)
- [max_members](_DiscordAPI.Guild.md#max_members)
- [max_presences](_DiscordAPI.Guild.md#max_presences)
- [max_video_channel_users](_DiscordAPI.Guild.md#max_video_channel_users)
- [member_count](_DiscordAPI.Guild.md#member_count)
- [members](_DiscordAPI.Guild.md#members)
- [mfa_level](_DiscordAPI.Guild.md#mfa_level)
- [name](_DiscordAPI.Guild.md#name)
- [owner](_DiscordAPI.Guild.md#owner)
- [owner_id](_DiscordAPI.Guild.md#owner_id)
- [permissions](_DiscordAPI.Guild.md#permissions)
- [preferred_locale](_DiscordAPI.Guild.md#preferred_locale)
- [premium_subscription_count](_DiscordAPI.Guild.md#premium_subscription_count)
- [premium_tier](_DiscordAPI.Guild.md#premium_tier)
- [presences](_DiscordAPI.Guild.md#presences)
- [public_updates_channel_id](_DiscordAPI.Guild.md#public_updates_channel_id)
- [region](_DiscordAPI.Guild.md#region)
- [roles](_DiscordAPI.Guild.md#roles)
- [rules_channel_id](_DiscordAPI.Guild.md#rules_channel_id)
- [splash](_DiscordAPI.Guild.md#splash)
- [system_channel_flags](_DiscordAPI.Guild.md#system_channel_flags)
- [system_channel_id](_DiscordAPI.Guild.md#system_channel_id)
- [unavailable](_DiscordAPI.Guild.md#unavailable)
- [vanity_url_code](_DiscordAPI.Guild.md#vanity_url_code)
- [verification_level](_DiscordAPI.Guild.md#verification_level)
- [voice_states](_DiscordAPI.Guild.md#voice_states)
- [widget_channel_id](_DiscordAPI.Guild.md#widget_channel_id)
- [widget_enabled](_DiscordAPI.Guild.md#widget_enabled)

## Properties

### afk\_channel\_id

• **afk\_channel\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:581](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L581)

___

### afk\_timeout

• **afk\_timeout**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:582](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L582)

___

### application\_id

• **application\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:593](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L593)

___

### approximate\_member\_count

• `Optional` **approximate\_member\_count**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:615](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L615)

___

### aproximate\_presence\_count

• `Optional` **aproximate\_presence\_count**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:616](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L616)

___

### banner

• **banner**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:609](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L609)

___

### channels

• **channels**: [`Channel`](_DiscordAPI.Channel.md)[]

#### Defined in

[src/lib/_DiscordAPI.ts:603](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L603)

___

### default\_message\_notifications

• **default\_message\_notifications**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:586](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L586)

___

### description

• **description**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:608](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L608)

___

### discovery\_splash

• **discovery\_splash**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:576](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L576)

___

### emojis

• **emojis**: [`Emoji`](_DiscordAPI.Emoji.md)[]

Custom guild emojis

#### Defined in

[src/lib/_DiscordAPI.ts:590](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L590)

___

### explicit\_content\_filter

• **explicit\_content\_filter**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:587](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L587)

___

### features

• **features**: `GuildFeatures`[]

#### Defined in

[src/lib/_DiscordAPI.ts:591](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L591)

___

### icon

• **icon**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:573](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L573)

___

### icon\_hash

• `Optional` **icon\_hash**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:574](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L574)

___

### id

• **id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:571](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L571)

___

### joined\_at

• `Optional` **joined\_at**: `Date`

#### Defined in

[src/lib/_DiscordAPI.ts:597](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L597)

___

### large

• `Optional` **large**: `boolean`

#### Defined in

[src/lib/_DiscordAPI.ts:598](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L598)

___

### max\_members

• `Optional` **max\_members**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:606](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L606)

___

### max\_presences

• `Optional` **max\_presences**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:605](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L605)

___

### max\_video\_channel\_users

• `Optional` **max\_video\_channel\_users**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:614](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L614)

___

### member\_count

• `Optional` **member\_count**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:600](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L600)

___

### members

• `Optional` **members**: [`Member`](_DiscordAPI.Member.md)[]

#### Defined in

[src/lib/_DiscordAPI.ts:602](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L602)

___

### mfa\_level

• **mfa\_level**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:592](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L592)

___

### name

• **name**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:572](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L572)

___

### owner

• `Optional` **owner**: `boolean`

#### Defined in

[src/lib/_DiscordAPI.ts:577](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L577)

___

### owner\_id

• **owner\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:578](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L578)

___

### permissions

• `Optional` **permissions**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:579](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L579)

___

### preferred\_locale

• **preferred\_locale**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:612](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L612)

___

### premium\_subscription\_count

• `Optional` **premium\_subscription\_count**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:611](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L611)

___

### premium\_tier

• **premium\_tier**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:610](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L610)

___

### presences

• `Optional` **presences**: `PresenceUpdate`[]

#### Defined in

[src/lib/_DiscordAPI.ts:604](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L604)

___

### public\_updates\_channel\_id

• `Optional` **public\_updates\_channel\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:613](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L613)

___

### region

• **region**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:580](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L580)

___

### roles

• **roles**: [`Role`](_DiscordAPI.Role.md)[]

#### Defined in

[src/lib/_DiscordAPI.ts:588](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L588)

___

### rules\_channel\_id

• **rules\_channel\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:596](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L596)

___

### splash

• **splash**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:575](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L575)

___

### system\_channel\_flags

• **system\_channel\_flags**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:595](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L595)

___

### system\_channel\_id

• **system\_channel\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:594](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L594)

___

### unavailable

• `Optional` **unavailable**: `boolean`

#### Defined in

[src/lib/_DiscordAPI.ts:599](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L599)

___

### vanity\_url\_code

• **vanity\_url\_code**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:607](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L607)

___

### verification\_level

• **verification\_level**: `number`

#### Defined in

[src/lib/_DiscordAPI.ts:585](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L585)

___

### voice\_states

• **voice\_states**: `VoiceState`[]

#### Defined in

[src/lib/_DiscordAPI.ts:601](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L601)

___

### widget\_channel\_id

• `Optional` **widget\_channel\_id**: `string`

#### Defined in

[src/lib/_DiscordAPI.ts:584](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L584)

___

### widget\_enabled

• `Optional` **widget\_enabled**: `boolean`

#### Defined in

[src/lib/_DiscordAPI.ts:583](https://github.com/Fuwajs/Fuwa.js/blob/60995b2/src/lib/_DiscordAPI.ts#L583)
