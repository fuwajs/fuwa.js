# Contributing

Any contributions to Fuwa.js are welcome. As long as they fit our [Code of Conduct](./CODE_OF_CONDUCT.md) and our [Style Guide](#)
Just create a fork, leave a pull request, and we'll check it out.

## Style Guide

### Casing

Use `camelCase` for variables and `PascalCase` for classes.
Prefix an uppercase `I` to interfaces e.g. `IFooInterface`

For Type parameters use `T` e.g.

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

If a file is not meant to be exposed in the public API, prefix the file name
with an underscore `_`.
