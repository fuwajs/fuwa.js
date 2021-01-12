const fuwa = require('../dist/index'); // Import fuwa.js here!
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');

const client = new fuwa.Client('?', { debug: false });
// Log the bot into discord
client.login(fs.readFileSync(path.join(__dirname, 'token.secret')));

// Users can do '@<bot name>' instead of the prefix '?'
client.set('useMentionPrefix', true);

// bot.set('prefix', '?');

// This function is ran when the bot is connected to discord
client.on('READY', () => {
    console.log(`Hello, my name is ${client.bot.username}!`)
});

client.use((req, res, next) => {
    if (!req.author.bot) {
        res.send('Your not a bot! :sunglasses:')
    }
    next();
});

// A basic 'ping' command. Responds with 'pong' and
// the latency (in milliseconds) within an embed.
client.command('ping', (req, res) => {
    console.log(Date.now());
    res.send(new fuwa.Embed()
        .setTitle('Pong')
        .addField({ name: 'Latency', value: `${Date.now() - Date.parse(req.rawData.timestamp)}ms`})
        .setDescription()
        .setColor(fuwa.Colors.rgb(13, 186, 120))
    );
});

client.command(['rm', 'delete'], (req, res) => {
    // The user probably wants to delete the command AND the message before.
    const amt = parseInt(req.args[0]) + 1;
    // Handle errors
    if (isNaN(amt) || amt > 100) {
        res.send(new fuwa.Embed()
            .setTitle('Invalid argument(s).')
            .setDescription('Expected a number for the 1st argument.')
            .addField({ name: 'Usage', value: 'rm <amt>' })
            .setColor(fuwa.Colors.red)
        );
        return;
    }
    client.deleteMessages(amt, req.rawData.channel_id);
}, { desc: 'Remove messages.' });

// More complex example command using the GitHub API
client.command(['gh', 'github'], async (req, res) => {
    const username = req.args[0] || 'octocat';
    const user = await (await
        // Fetch the github user's JSON code (as a string)
        fetch(`https://api.github.com/users/${username}`))
        // Turn this string into a object we can use
        .json();

    const date = new Date(user.created_at)
        .toLocaleTimeString([], { // Fancy date stuff C:
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    // Send an embed!
    res.send(new fuwa.Embed()
        // Set your embed title!
        .setTitle(`${user.name} @ GitHub`)
        // Url to the title,
        .setUrl(user.html_url)
        // User's bio
        .setDescription(user.bio)
        // Thumbnail for the embed
        .setThumbnail(user.avatar_url)
        // Add the embed's fields
        .addFields([
            { name: 'Repositories', value: user.public_repos },
            { name: 'Followers', value: user.followers, inline: true },
            { name: 'Following', value: user.following, inline: true },
        ])
        // Set your favorite color!
        .setColor(fuwa.Colors.rgb(255, 145, 81))
        // Add a footer!
        .setFooter(`Joined github at ${date}`)
        // Set the timestamp of the embed
        .setTimestamp()
    );
}, { desc: 'Get GitHub user statistics.' }); // Set the help message

