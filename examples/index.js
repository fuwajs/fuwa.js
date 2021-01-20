const fuwa = require('../dist/index'); // Import fuwa.js here!
const path = require('path');
const fs = require('fs')
const fetch = require('node-fetch');

const client = new fuwa.Client(['!', '?', '$'], { debug: true });

// Log the bot into discord
client.login(fs.readFileSync(path.join(__dirname, 'token.secret')));

// Users can do '@<bot name>' instead of the prefix '?'
client.set('useMentionPrefix', true);
// This function is ran when the bot is connected to discord
client.on('ready', () => {
    console.log(`Hello, my name is ${client.bot.username}!`);
});

// client.on('message', (req, res) => {
//     req.
// });
// This function will be ran before every other command
client.use((req, res, next) => {
    // For example, you could notify the user you have recieved their command
    // by reacting with a green checkmark.
    res.react('✅');
    next();
});

// A basic 'ping' command. Responds with 'pong' along with the latency (in
// milliseconds) within an embed.
client.command(['ping', 'latency'], (req, res) => {
    const timestamp = Date.parse(new Date(req.rawData.timestamp));
    res.send(new fuwa.Embed()
        .setTitle('Pong')
        .setAuthor(req.author.username, { icon: req.author.avatar })
        .addField({
            name: 'Latency',
            value: `${Date.now() - timestamp}ms`
        })
        .setDescription()
        .setColor(fuwa.Colors.rgb(13, 186, 120))
    ).then(console.log);
});

client.command(['delete', 'rm', 'purge'], (req, res) => {
    // The user probably wants to delete the command along with previous 
    // messages.
    const amt = parseInt(req.args[0]) + 1;
    // Handle errors
    // 1 - Invalid number (NaN)
    // 2 - Greater than 100 (Discord can only delete 100 messages at a time)
    if (isNaN(amt) || amt > 100) {
        res.send(new fuwa.Embed()
            .setTitle('Invalid argument(s).')
            .setAuthor(req.author.username, { icon: req.author.avatar })
            .setDescription('Expected a number for the 1st argument.')
            .addField({ name: 'Usage', value: 'rm <amt>' })
            .setColor(fuwa.Colors.red)
        );
        return;
    }
    client.deleteMessages(amt, req.rawData.channel_id);
}, { desc: 'Remove messages.' })
    .addArgument('amount', 'The amount of messages to remove', 0);

// More complex example command using the GitHub API
client.command(['github', 'gh'], async (req, res) => {
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
    res.reply(new fuwa.Embed()
        // Set your embed title!
        .setTitle(`${user.name} @ GitHub`)
        // Set the author of the message
        .setAuthor(req.author.username, { icon: req.author.avatar })
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

// In reailty you would **not** want a command like this
// This is for demonstration purposes only
client.command('logout', (req, res) => {
    // wait until we have sent the logout message
    res.send(new fuwa.Embed()
        .setTitle('Logging Out')
        .setAuthor(req.author.username, { icon: req.author.avatar })
        .setColor(fuwa.Colors.red)
        .setTimestamp()
    ).then(client.logout);
}, { desc: 'Log the bot out of discord.' });

client.command('reply', (req, res) => {
    res.reply('get replied to');
    req.author.dm('get dmed');
});

client.command('react', (req, res) => {
    res.react('🧢', '😂', '👌', '😃', '🤡');
});