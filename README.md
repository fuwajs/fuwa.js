<div align="center">
    <img src="https://github.com/Fuwajs/Fuwa.js/raw/main/misc/Logo.svg" width="512" height="512">
    <p>The <b>new</b>, simple, and easy way to create <em>progressive</em> Discord bots.</p>
    <p>
        <a href="https://discord.gg/FGn4T9eUp5">
            <img src="https://img.shields.io/discord/788135963528134656?color=7289da&logo=discord&logoColor=white"/>
        </a>
        <a href="https://www.npmjs.com/package/fuwa.js">
            <img src="https://img.shields.io/npm/v/fuwa.js.svg" />
        </a>
        <img src="https://github.com/Fuwajs/Fuwa.js/workflows/CI/badge.svg" />
        <img src="https://img.shields.io/github/license/Fuwajs/Fuwa.js" />
    </p>
</div>

# Table of Contents

-   [Table of Contents](#table-of-contents)
-   [Features](#features)
-   [Quickstart](#quickstart)
    -   [📁 - Create a new NodeJS project](#---create-a-new-nodejs-project)
    -   [📦 - Install FuwaJS](#---install-fuwajs)
    -   [Create a file called `index.js`](#create-a-file-called-indexjs)
    -   [🧪 - Test it out](#---test-it-out)
-   [Useful links](#useful-links)

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
$ npm i fuwa.js erlpack
```
<sup>/* Note: you need python installed on your computer, server, or VM before you can use erlpack. To learn more, please visit (Erlpack's github)[https://github.com/discord/github]</sup>

## Create a file called `index.js`

```bash
$ echo > index.js
```

Open index.js in your IDE of choice and copypaste this code

```js
const { Client } = require('fuwa.js');

const client = new Client('?'); // Your bot prefix here

client.on('ready', () => console.log('I am alive!'));

client.command(['hi', 'hello'], (req, res) => {
    res.reply(`Hello there, my name is ${client.bot.username}!`);
});

// replace with your bot token
client.login('<your bot token>');
```

**Make sure to replace `<your bot token>` with your actual bot token!**

## 🧪 - Test it out

Add your bot to a discord server and type `?hi` or `?hello` in any visible
channel. It should respond with `Hello there, my name is <bot name>!`

# Useful links

Check the [docs](https://Fuwajs.github.io/index.html) for reference.

Follow the [tutorial](https://github.com/fuwajs/fuwa.js/wiki) for a ground up approach.

Join our [discord](https://discord.gg/FGn4T9eUp5) to interact with our community and ask questions!

If you find any bugs please post them to our [issues](https://github.com/Fuwajs/Fuwa.js/issues) and we'll respond ASAP.
