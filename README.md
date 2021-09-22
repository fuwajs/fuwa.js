<div align="center">
    <img src="misc/Logo.svg" width="256" height="256">
    <p>The <b>new</b>, simple, and easy way to create <em>progressive</em> Discord bots.</p>
    <p>
        <a href="https://discord.gg/FGn4T9eUp5">
            <img src="https://img.shields.io/discord/788135963528134656?color=7289da&logo=discord&logoColor=white"/>
        </a>
        <a href="https://www.npmjs.com/package/fuwa.js">
            <img src="https://img.shields.io/npm/v/fuwa.js.svg" />
        </a>
        <img src="https://github.com/fuwajs/fuwa.js/workflows/CI/badge.svg" />
        <img src="https://img.shields.io/github/license/fuwajs/fuwa.js" />
        <a href="https://www.codacy.com/gh/fuwajs/fuwa.js/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=fuwajs/fuwa.js&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/f0bce02a48ad4ae4b3d5daa4a9156646"/></a>
    </p>
</div>

# Table of Contents

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Quickstart](#quickstart)
  - [📁 - Create a new Nodejs project](#---create-a-new-nodejs-project)
  - [📦 - Installing Fuwa.js](#---installing-fuwajs)
  - [Coding your bot](#coding-your-bot)
  - [🧪 - Test it out](#---test-it-out)
- [Useful links](#useful-links)

# Features

-   ☕️ | Express-like syntax
-   📦 | Lightweight (only **two** dependencies)<sup>\*</sup>
-   🔨 | Built-In Command Handler & Parser
-   🌎 | Safe (complete runtime safety for your bot.)
-   ⚡️ | Blazing Fast
-   📂 | Customizable Cache

<sup>\* Excluding Peer (and of course) development dependencies</sup>

# Quickstart

This assumes you have already setup a discord bot application in Discord. See

-   [Creating a Bot Application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
-   [Adding your bot to a server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)

## 📁 - Create a new Nodejs project

Run this in your Powershell, command prompt, terminal, console or whatever you
call it:

```bash
$ npm init -y
```

## 📦 - Installing Fuwa.js

```bash
$ npm i fuwa.js
```

The **Full** version for increased speed (better for production)

```bash
$ npm i fuwa.js erlpack utf-8-validate bufferutil
```

<sup>\*</sup>
Note: you need python installed & a C++ compiler on your computer, server, or VM before you can use
erlpack. To learn more, please visit [node-gyp](https://github.com/nodejs/node-gyp)

## Coding your bot

Create a file called `index.js` using the method bellow, or your method of choice for creating files

```bash
$ echo > index.js
```

Open index.js in your IDE or text editor of choice and copypaste this code

```js
const { Client } = require('fuwa.js');

const client = new Client('?'); // Your bot prefix here

// Runs when the bot turns on
client.on('ready', () => console.log('I am alive!'));

client.command(['hi', 'hello'], (req, res) => {
    res.reply(`Hello there, my name is ${client.bot.username}!`);
});

// replace with your bot token
client.login('<your bot token>');
```

**Make sure to replace `<your bot token>` with your actual bot token!**

## 🧪 - Test it out

Run your bot using

```bash
$ node index.js
```

and add your bot to a discord server and type `?hi` or `?hello` in any visible
channel. It should respond with `Hello there, my name is <bot name>!`

# Useful links

Check the [docs](docs/modules.md) for reference. For more in depth docs go to our [website](https://fuwajs.github.io)!

Follow the [tutorial](https://github.com/fuwajs/fuwa.js/wiki) for a ground up approach.

Join our [discord](https://discord.gg/FGn4T9eUp5) to interact with our community and ask questions!

If you find any bugs please post them to our [issues](https://github.com/Fuwajs/Fuwa.js/issues) and we'll respond ASAP.
