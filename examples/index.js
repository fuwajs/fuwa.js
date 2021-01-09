const fuwa = require('../dist/index'); // Import fuwa.js here!
const path = require('path');
const fs = require('fs');

const client = new fuwa.Client('?', { debug: false });
// bot.set('prefix', '?');

// Log the bot into discord
client.login(fs.readFileSync(path.join(__dirname, 'token.secret')));

// This function is ran when the bot is connected to discord
client.on('READY', () => {
    console.log(`Hello, my name is ${client.bot.username}!`)
});

client.use((req, res, next) => {
    console.log('Someone used me.');
    next();
});

client.command('rules', (req, res, next) => {
    res.send(new fuwa.Embed()
        .setTitle('Pong')
        .setColor(fuwa.Colors.rgb(13, 186, 120))
    );
});

client.command('ping', (req, res, next) => {
    res.send(new fuwa.Embed()
        .setTitle('Pong')
        .setColor(fuwa.Colors.rgb(13, 186, 120))
    );
});