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
    const username = req.content.split(' ')[1] || 'Artrix9095';
    const user = await (await fetch(`https://api.github.com/users/${username}`)).json();
    console.log(user);
    const fields = [
        {
            name: 'Repositories',
            value: user.public_repos
        },
        {
            name: 'Followers',
            value: user.followers,
            inline: true
        },
        {
            name: 'Following',
            value: user.following,
            inline: true
        },
    ]
    res.send(new fuwa.Embed()
        .setTitle(`${user.name} | GitHub`)
        .setUrl(user.html_url)
        .setDescription(user.bio)
        .setThumbnail(user.avatar_url)
        .addFields(fields)
        .setColor(fuwa.Colors.rgb(255, 145, 81))
        .setFooter(`Joined github at ${new Date(user.created_at)
            .toLocaleTimeString([], // Fancy date stuff C:
                {
                    year: 'numeric', 
                    month: 'numeric', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit'
                }
            )}
        `)
        .setTimestamp(Date.now())
    );
});

// Log the bot into discord
client.login(fs.readFileSync(path.join(__dirname, 'token.secret')));