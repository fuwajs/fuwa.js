# Fuwa.js

## Quickstart
This assumes you have already setup a discord bot application in Discord. See
- [Creating a Bot Application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
- [Adding your bot to a server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
- Source: (https://discordjs.guide/)

```bash
$ npm init -y
$ npm i Artrix9095/Fuwa.js
$ echo > index.js
```
A file called index.js should be in your directory, open that in your IDE of choice and type
```js
const Fuwa = require('fuwa.js');

// replace with your bot token
client.login('<your bot token>');

const client = new Fuwa.Client(
    /* Your prefix here */
    '?'
);

client.on('READY', () => {
    console.log('I am alive!')
);

client.command(['hi', 'hello'], (req, res) => { 
    res.send(`Hello there my name is ${client.bot.username}!`); 
});

```
Check the [docs](https://artrix9095.github.io/Fuwa.js) for more in depth examples.

join our [discord](https://discord.gg/FGn4T9eUp5) to interact with our community and ask questions!