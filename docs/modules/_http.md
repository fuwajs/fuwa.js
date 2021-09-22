[fuwa.js](../README.md) / [Exports](../modules.md) / _http

# Module: \_http

## Table of contents

### Properties

- [default](_http.md#default)

## Properties

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `DELETE` | (`path`: `string`, `headers?`: `any`) => `Promise`<`any`\> |
| `GET` | (`path`: `string`, `headers?`: `any`) => `Promise`<`any`\> |
| `PATCH` | (`path`: `string`, `data?`: `string` \| `Buffer`, `headers?`: `any`) => `Promise`<`any`\> |
| `POST` | (`path`: `string`, `data?`: `string` \| `Buffer`, `headers?`: `any`) => `Promise`<`any`\> |
| `PUT` | (`path`: `string`, `data?`: `string` \| `Buffer`, `headers?`: `any`) => `Promise`<`any`\> |
| `REQUEST` | (`method`: ``"GET"`` \| ``"POST"`` \| ``"PUT"`` \| ``"DELETE"`` \| ``"PATCH"``, `path`: `string`, `data?`: `string` \| `Buffer`, `headers?`: `any`, `version?`: ``6`` \| ``8`` \| ``9``) => `Promise`<`any`\> |
