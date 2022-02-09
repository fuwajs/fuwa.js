# Contributing

Any contributions to Fuwa.js are welcome. As long as they fit our [Code of Conduct](./CODE_OF_CONDUCT.md) and our [Style Guide](#style-guide)
Just create a fork, leave a pull request, and we'll check it out.

## Style Guide

### Casing

Use `camelCase` for variables and `PascalCase` for classes and interfaces.

For Type parameters use `T`, `C` e.g.

```ts
function foo<T>(bar: T) { ... }
```

### Files

All files should have a header like this:

```ts
/******************************************************************************
 * @file src/lib/foo.ts
 * @fileoverview Provides interfaces foo, bar, and baz.
 *****************************************************************************/
```

### Rules

All files must have LF line ending and abide by our [Prettier](../.prettierrc) and [Eslint](https://github.com/fuwajs/fuwa.js/blob/%40next/package.json#L64) config.

### Comments

All non self explanatory code must be explained with a simple comment

```js
/**
 * Randomly shuffles an array
 * @param {any[]} array Array you want to shuffle
 * @returns {any[]} Shuffled array
 */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}
```

