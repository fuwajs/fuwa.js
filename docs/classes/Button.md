[Fuwa.js](../README.md) / [Exports](../modules.md) / Button

# Class: Button

## Table of contents

### Constructors

- [constructor](Button.md#constructor)

### Properties

- [id](Button.md#id)

### Methods

- [disable](Button.md#disable)
- [exit](Button.md#exit)
- [onClick](Button.md#onclick)
- [setContent](Button.md#setcontent)
- [setStyle](Button.md#setstyle)
- [setUrl](Button.md#seturl)

## Constructors

### constructor

• **new Button**(`ctx`, `self`, `id`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | [`Context`](Context.md) |
| `self` | `ButtonComponent` |
| `id` | `string` |

#### Defined in

[lib/discord/Button.ts:7](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/discord/Button.ts#L7)

## Properties

### id

• **id**: `string`

## Methods

### disable

▸ **disable**(`disabled?`): [`Button`](Button.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `disabled` | `boolean` | `true` |

#### Returns

[`Button`](Button.md)

#### Defined in

[lib/discord/Button.ts:21](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/discord/Button.ts#L21)

___

### exit

▸ **exit**(): [`Context`](Context.md)

#### Returns

[`Context`](Context.md)

#### Defined in

[lib/discord/Button.ts:30](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/discord/Button.ts#L30)

___

### onClick

▸ **onClick**(`cb`): [`Button`](Button.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`ctx`: [`Context`](Context.md)) => `any` |

#### Returns

[`Button`](Button.md)

#### Defined in

[lib/discord/Button.ts:25](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/discord/Button.ts#L25)

___

### setContent

▸ **setContent**(`content`): [`Button`](Button.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`Button`](Button.md)

#### Defined in

[lib/discord/Button.ts:9](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/discord/Button.ts#L9)

___

### setStyle

▸ **setStyle**(`style`): [`Button`](Button.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | ``"Primary"`` \| ``"Secondary"`` \| ``"Success"`` \| ``"Danger"`` \| ``"Link"`` |

#### Returns

[`Button`](Button.md)

#### Defined in

[lib/discord/Button.ts:17](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/discord/Button.ts#L17)

___

### setUrl

▸ **setUrl**(`url`): [`Button`](Button.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

[`Button`](Button.md)

#### Defined in

[lib/discord/Button.ts:13](https://github.com/fuwajs/fuwa.js/blob/b00913c/src/lib/discord/Button.ts#L13)
