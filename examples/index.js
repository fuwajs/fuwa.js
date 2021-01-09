const fuwa = require('../dist/index'); // Import fuwa.js here!
const path = require('path');
const fs = require('fs');
const http = require('http');
const fetch = require('node-fetch')

const client = new fuwa.Client('?', { debug: false });

// Users can do '@<bot name>' instead of the prefix '?'
client.set('useMentionPrefix', true);

// bot.set('prefix', '?');

// This function is ran when the bot is connected to discord
client.on('READY', () => {
    console.log(`Hello, my name is ${client.bot.username}!`)
});

client.use((req, res, next) => {
    console.log('Someone used me.');
    // next();
});

// A basic 'ping' command. Responds with 'pong' in an embed.
client.command('ping', (req, res, next) => {
    res.send(new fuwa.Embed()
        .setTitle('Pong')
        .setColor(fuwa.Colors.rgb(13, 186, 120))
    );
});

// More complex example command using the GitHub API
client.command('repo-count', async (req, res) => {
    const user = req.content.split(' ')[1] || 'torvalds';

    const response = await (await fetch(`https://api.github.com/users/${user}`)).json();

    res.send(new fuwa.Embed()
        .setTitle(`${user} | Repos`)
        .setDescription(`${user} has ${response['public_repos']} repo(s)`)
        .setColor(fuwa.Colors.rgb(255, 145, 81))
    )
});

// Log the bot into discord
client.login(fs.readFileSync(path.join(__dirname, 'token.secret')));