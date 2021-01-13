<div align="center">
    <img src="https://github.com/Fuwajs/Fuwa.js/raw/main/misc/Logo.svg" width="512" height="512">
    <p>The <b>new</b> simple and easy way to create <em>progressive</em> Discord bots.</p>
    <p>
        <a href="https://discord.gg/FGn4T9eUp5">
            <img src="https://img.shields.io/discord/788135963528134656?color=7289da&logo=discord&logoColor=white"/>
        </a>
    </p>
</div>

# Highlights
- Express-like syntax
- Lightweight (only **two** dependencies)
- Blazing Fast
- Built-In Command Handler & Parser


# Quickstart
This assumes you have already setup a discord bot application in Discord. See
- [Creating a Bot Application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
- [Adding your bot to a server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)

```bash
$ npm init -y
$ npm i Fuwajs/Fuwa.js
$ echo > index.js
```
A file called index.js should be in your directory, open that in your IDE of choice and type
```js
const fuwa = require('fuwa.js');

const client = new fuwa.Client('?'); // Your bot prefix here



client.on('READY', () => {
    console.log('I am alive!');
});

client.command(['hi', 'hello'], (req, res) => { 
    res.send(`Hello there, my name is ${client.bot.username}!`); 
});

// replace with your bot token
client.login('<your bot token>');

```
Check the [docs](https://Fuwajs.github.io/index.html) for more in depth examples.

join our [discord](https://discord.gg/FGn4T9eUp5) to interact with our community and ask questions!
