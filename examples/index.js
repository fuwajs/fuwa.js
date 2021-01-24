/******************************************************************************
 * Example usage of FuwaJS
 * @file examples/index.js
 *****************************************************************************/

const fuwa = require('../dist/index'); // Import fuwa.js here!
const { join } = require('path');
const { readFileSync } = require('fs');
const fetch = require('node-fetch');

// Set the prefixes. Prefixes can be any length.
const client = new fuwa.Client(['!', 'a!'], { 
    intents: 1 + (1 << 9) // + (1 << 10)
});

// Log the bot into discord
client.login(readFileSync(join(__dirname, 'token.secret')));

// Users can do '@<bot name>' instead of the prefix '?'
client.set('useMentionPrefix', true);
// This function is ran when the bot is connected to discord
client.on('ready', function ready() {
    console.log(`Hello, my name is ${client.bot.username}!`);
});

client.on('reaction', async reaction => {
    const res = await reaction.getResponse();

    res.reply(`You reacted with ${reaction.emoji.name}`);
});

// This function will be ran before every other command
client.use(function reactMiddleware(req, res, next) {
    // For example, you could notify the user you have recieved their command
    // by reacting with a green checkmark.
    res.react('✅');
    next(); // When calling the 'next' function, your calling the command that the message
    // was meant for, dont forget to put this at the end of your function!
});

// A basic 'ping' command. Responds with 'pong' along with the latency (in
// milliseconds) within an embed.
client.command(['ping', 'latency'], function ping(req, res) {
    const timestamp = Date.parse(new Date(req.message.timestamp));
    res.send(
        new fuwa.Embed()
            .setTitle('Pong')
            .setAuthor(req.author.username, { icon: req.author.avatar })
            .addField({
                name: 'Latency',
                value: `${Date.now() - timestamp}ms`,
            })
            .setDescription()
            .setColor(fuwa.Colors.rgb(13, 186, 120))
    );
});
// More complex example command using the GitHub API
client.command(['github', 'gh'], async function github(req, res) {
    const username = req.args[0] || 'octocat';
    const user = await (
        await fetch(`https://api.github.com/users/${username}`) // Fetch the github user's JSON code (as a string)
    ).json(); // Turn this string into a object we can use

    const date = new Date(user.created_at).toLocaleString();
    // Send an embed!
    res.reply(
        new fuwa.Embed()
            // Set your embed title!
            .setTitle(`${user.name} @ GitHub`)
            // Set the author of the message
            .setAuthor(req.author.username, { icon: req.author.avatar })
            // Url to the title,
            .setUrl(user.html_url)
            // User's bio
            .setDescription(user.bio)
            .setThumbnail(user.avatar_url)
            // Add the embed's sections
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
    res.react(['😃', '☺️', '😇', '😜'], true);
}, { desc: 'Get GitHub user statistics.' }); // Set the help message

client.command(['echo', 'say'], function (req, res) {
    req.message.delete();
    res.send(req.args.toString() || 'You didnt say anything!');
}, { desc: 'Makes the bot repeat what you say!' });
