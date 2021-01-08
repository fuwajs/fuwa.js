const Fuwa = require('../dist/index'); // Import fuwa.js here!
const { join } = require('path');
const { readFileSync: readFile } = require('fs')

const client = new Fuwa.Client(req => '?', { debug: true });

client
    // This function is going to be ran when the bot finishes loading and connects to discord
    .on('READY', () => console.log(`Hello, my name is ${client.bot.username}!`))
    .use((_, __, next) => {
        console.log('I WAS USED');
        next();
    })
    .command('rules', (req, res, next) => {
        res.send(new Fuwa.Embed()
            .setTitle('Pong')
            .setColor(Fuwa.Colors.rgb(13, 186, 120))
        );
    })
    // Set your status!
    // .setStatus({
    //     name: 'Some Status',
    //     type: 'streaming',
    //     url: 'https://blank.org'
    // });


// login Option 1 (suggested):
client.login(readFile(join(__dirname, 'token.secret'))); // log the bot into discord

// Login Option 2
// client.login('PUT_YOUR_TOKEN_HERE');
//
// It is advised not to put your token in your main file, 
// using the method above is recommended and safer.

