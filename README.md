<div align="center">
    <img src="https://github.com/Fuwajs/Fuwa.js/raw/main/misc/Logo.svg" width="512" height="512">
    <p>The <b>new</b>, simple, and easy way to create <em>progressive</em> Discord bots.</p>
    <p>
        <a href="https://discord.gg/FGn4T9eUp5">
            <img src="https://img.shields.io/discord/788135963528134656?color=7289da&logo=discord&logoColor=white"/>
        </a>
        <img src="https://github.com/Fuwajs/Fuwa.js/workflows/CI/badge.svg" />
        <img src="https://img.shields.io/github/license/FuwaJS/Fuwa.JS" />
        <img src="https://img.shields.io/github/package-json/v/FuwaJS/Fuwa.JS" />
    </p>
</div>

# Features

- ☕️ | Express-like syntax
- 📦 | Lightweight (only **two** dependencies)
- 🔨 | Built-In Command Handler & Parser
- 🌎 | Safe (complete runtime safety for your bot.)
- ⚡️ | Blazing Fast
- 🗂 | Customizable Cache

# Quickstart

This assumes you have already setup a discord bot application in Discord. See

- [Creating a Bot Application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
- [Adding your bot to a server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)

## 📁 - Create a new NodeJS project

```bash
$ npm init -y
```

## 📦 - Install FuwaJS

The *Lightweight* version
```bash
$ npm i Fuwajs/Fuwa.js --no-optional
```

The **Full** version for increased speed (better for production)
```bash
$ npm i Fuwajs/Fuwa.js
```

## Create a file called index.js

```bash
$ echo > index.js
```

Open index.js in your IDE of choice and copypaste this code

```js
const fuwa = require('fuwa.js');

const client = new fuwa.Client('?'); // Your bot prefix here

client.on('READY', () => console.log('I am alive!'));

client.command(['hi', 'hello'], (req, res) => {
    res.send(`Hello there, my name is ${client.bot.username}!`);
});

// replace with your bot token
client.login('<your bot token>');
```

**Make sure to replace `<your bot token>` with your actual bot token!**

## 🧪 - Test it out
Add your bot to a discord server and type `?hi` or `?hello` in any visible
channel. It should respond with `Hello there, my name is <bot name>!`


Check the [docs](https://Fuwajs.github.io/index.html) for reference.

Follow the [tutorial](https://github.com/fuwajs/fuwa.js/wiki) for a ground up approach.

Join our [discord](https://discord.gg/FGn4T9eUp5) to interact with our community and ask questions!
