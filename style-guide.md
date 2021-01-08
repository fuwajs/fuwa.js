# Style Guide
This is a style guide for contributors of fuwaJS

## Casing

### Types
All types...
- Interfaces
- Classes
- Types
- etc.

Should use **PascalCase**

### Others
Everything else...
- functions
- variable names
- object members
- enum members
- etc...

Should use **camelCase**

### No All Uppercase
Do **not** use **ALL_UPPERCASE** ever. *Not even for constants*. **ALL_UPPERCASE**
gives the effect of screaming. Which is **not** good.

## Imports
In TypeScript use:
```ts
import foo from 'libfoo'
```

And in JavaScript use:
```js
const foo = require('libfoo')
```

Notice how the import 'foo' is **lowercase**

## Ternary Operators
Ternary operators should be completly avoided. Use **if-else satements**
instead for *readability* and *maintability*.

Ternary operators are only allowed in the following places:
**Function return statements**
```ts
function foo(a, b) {
    return a ? a : b;
}
```

**Function arguments**
```ts
playerNum = Math.random() * 10;
console.log(playerNum != 1 ? `${playerNum} players.` : '1 player.');
```

**DONT'S**

**Do NOT assign a variable to the result of a ternary operator**
```ts
const color: any = ...;
let colorType = color[0] === '#' ? 'hex'; 
```

**Do NOT *nest* ternary operators**
```ts
```




