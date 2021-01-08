const fuwa = require('../dist/index'); // Import fuwa.js here!
const path = require('path');
const fs = require('fs')

const bot = new fuwa.Client('?', { debug: true });
// bot.set('prefix', '?');
// Log the bot into discord
bot.login(fs.readFileSync(path.join(__dirname, 'token.secret')));

// This function is ran when the bot is connected to discord
bot.on('ready', () => {
    console.log(`Hello, my name is ${client.bot.username}!`)
});

bot.use((req, res, next) => {
    console.log('Someone used me.');
    next();
});

bot.command('ping', (req, res, next) => {
    res.send(new fuwa.Embed()
        .setTitle('Pong')
        .setColor(Fuwa.Colors.rgb(13, 186, 120))
    );
});