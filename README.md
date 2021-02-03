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

# Table of Contents
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Quickstart](#quickstart)
  - [📁 - Create a new NodeJS project](#---create-a-new-nodejs-project)
  - [📦 - Install FuwaJS](#---install-fuwajs)
  - [Create a file called `index.js`](#create-a-file-called-indexjs)
  - [🧪 - Test it out](#---test-it-out)
- [Use your bot in the browser (**beta**)](#use-your-bot-in-the-browser-beta)
  - [Clone the project](#clone-the-project)
  - [Bundle the files](#bundle-the-files)
  - [Use the bundled file](#use-the-bundled-file)
- [Useful links](#useful-links)
# Features

- ☕️ | Express-like syntax
- 📦 | Lightweight (only **two** dependencies)<sup>*</sup>
- 🔨 | Built-In Command Handler & Parser
- 🌎 | Safe (complete runtime safety for your bot.)
- ⚡️ | Blazing Fast
- 🗂 | Customizable Cache

<sup>* Excluding Peer (and of course) development dependencies</sup>

# Quickstart

This assumes you have already setup a discord bot application in Discord. See

- [Creating a Bot Application](https://discordjs.guide/preparations/setting-up-a-bot-application.html)
- [Adding your bot to a server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)

## 📁 - Create a new NodeJS project
Run this in your Powershell, command prompt, terminal, console or whatever you
call it:
```bash
$ npm init -y
```

## 📦 - Install FuwaJS

The *Lightweight* version
```bash
$ npm install Fuwajs/Fuwa.js --no-optional
```

The **Full** version for increased speed (better for production)
```bash
$ npm install Fuwajs/Fuwa.js
```

## Create a file called `index.js`

```bash
$ echo > index.js
```

Open index.js in your IDE of choice and copypaste this code

```js
const fuwa = require('fuwa.js');

const client = new fuwa.Client('?'); // Your bot prefix here

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

# Use your bot in the browser (**beta**)
![Browser CI](https://github.com/Fuwajs/Fuwa.js/workflows/Browser%20CI/badge.svg
## Clone the project
```bash
git clone https://github.com/Fuwajs/Fuwa.js
```
## Bundle the files
```bash
npm run browser
```
You should have a bundle.js file in the browser folder

## Use the bundled file
Create a new file called index.html and paste this code (make sure your in the browser folder)
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FuwaJS via the Browser</title>
</head>

<body>
    <label for="token">Token:</label>
    <input id="token" type="text" placeholder="Your Bot Token" />
    <button id="login">Login!</button>
    <script src="./bundle.js"></script>
</body>

</html>
```
After opening up the html page, your bot should come online after clicking the login button.
**Dont forget to replace `token` with your actual token**

# Useful links
Check the [docs](https://Fuwajs.github.io/index.html) for reference.

Follow the [tutorial](https://github.com/fuwajs/fuwa.js/wiki) for a ground up approach.

Join our [discord](https://discord.gg/FGn4T9eUp5) to interact with our community and ask questions!

If you find any bugs please post them to our [issues](https://github.com/Fuwajs/Fuwa.js/issues) and we'll respond ASAP.
