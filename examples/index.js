const fuwa = require('../dist/index'); // Import fuwa.js here!
const path = require('path');
const fs = require('fs');
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
    next();
});

// A basic 'ping' command. Responds with 'pong' in an embed.
client.command('ping', (req, res, next) => {
    res.send(new fuwa.Embed()
        .setTitle('Pong')
        .setColor(fuwa.Colors.rgb(13, 186, 120))
    );
});

// More complex example command using the GitHub API
client.command(['gh', 'github'], async (req, res) => {
    console.log('');
    const username = req.content.split(' ')[1] || 'torvalds';

    const user = await (await fetch(`https://api.github.com/users/${username}`)).json();
    const fields = [
        {
            name: 'Repositories',
            value: user['public_repos']
        },
        {
            name: 'Followers',
            value: user['followers'],
            inline: true
        },
        {
            name: 'Following',
            value: user['following'],
            inline: true
        },
        {
            name: 'Bio',
            value: user['bio']
        }
    ]
    res.send(new fuwa.Embed()
        .setTitle(`${username} | GitHub`)
        .setThumbnail(
            'https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg', {
            height: 50,
            width: 50
        })
        .addFields(fields)
        .setColor(fuwa.Colors.rgb(255, 145, 81))
        .setFooter('GitHub')
    );
});

// Log the bot into discord
client.login(fs.readFileSync(path.join(__dirname, 'token.secret')));