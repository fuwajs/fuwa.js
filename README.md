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

client.on('READY', () => console.log('I am alive!'));

client.command(['hi', 'hello'], (req, res) => res.send('Hello there :)'));

client.login('YOUR_TOKEN_HERE');
```