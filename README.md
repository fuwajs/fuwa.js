# Fuwa.js

## Quickstart

```bash
$ npm init -y
$ npm i Artrix9095/Fuwa.js
$ echo > index.js
```
A file called index.js should be in your directory, open that in your IDE of choice and type
```js
const Fuwa = require('fuwa.js');

const client = new Fuwa.Client(
    /* Your prefix here */
    '?'
);

client
    .on('READY', () => console.log('I am alive!'));
    .command(['hi', 'hello'], (req, res) => res.send(`Hello there my name is ${client.bot.username}!`));

client.login('YOUR_TOKEN_HERE');
```
Check the [docs](https://artrix9095.github.io/Fuwa.js) for more in depth examples.

join our [discord](https://discord.gg/FGn4T9eUp5) to interact with our community and ask questions!