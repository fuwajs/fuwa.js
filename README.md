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
- 📦 | Lightweight (only **two** dependencies)<sup>*</sup>
- 🔨 | Built-In Command Handler & Parser
- 🌎 | Safe (complete runtime safety for your bot.)
- ⚡️ | Blazing Fast
- 🗂 | Customizable Cache

<sup>* Excluding Peer (and of course) </sup>
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


# Use your bot in the browser (still very beta and may break)

## Clone the project
```bash
git clone Fuwajs/Fuwa.js
```

## Bundle the files
```bash
npm run browser
```
You should have a bundle.js filein the browser folder

## Use the bundled file
Create a new file called index.html and paste this code (make sure your in the browser folder)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My bot</title>
</head>
<body>
    <button 
        onclick="client.login('token')"
    >
        Login!
    </button>
    <script src="./bundle.js"></script>
    <script>
        const client = new Client('?');
        client.on('ready', () => console.log('I am alive!'));
        client.command('browser', (req, res) => {
            res.send(`Running on ${navigator.appCodeName}`) // this is currently brocken, we are working on fixing it
        });
    </script>
</body>
</html>
```
After opening up the html page, your bot should come online after clicking the login button.
**Dont forget to replace `token` with your actual token**

# Useful links
Check the [docs](https://Fuwajs.github.io/index.html) for reference.

Follow the [tutorial](https://github.com/fuwajs/fuwa.js/wiki) for a ground up approach.

Join our [discord](https://discord.gg/FGn4T9eUp5) to interact with our community and ask questions!

If you find any bugs please post them to our [issues](https://github.com/Fuwajs/Fuwa.js/issues) and we will respond ASAP.