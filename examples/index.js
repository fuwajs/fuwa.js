/******************************************************************************
 * Example usage of FuwaJS
 * @file examples/index.js
 *****************************************************************************/

const { Embed, Client, Colors } = require('../dist/index'); // Import js here!
const { join } = require('path');
const { readFileSync } = require('fs');
const fetch = require('node-fetch');

// Set the bot prefixes. Prefixes can be any length.
const client = new Client(['!', 'a!'], {
    builtinCommands: {
        help: {
            embedColor: Colors.rgb(13, 186, 120),
        },
    },
});
// Log the bot into discord
client.login(readFileSync(join(__dirname, 'token.secret')));

// Users can do '@<bot name>' instead of the prefix '?'
client.set('useMentionPrefix', true);
// This function is ran when the bot is connected to discord
client.on('ready', function ready() {
    console.log(`Hello, my name is ${client.bot.username}!`);
});

client.on('reaction', async (reaction) => {
    const res = await reaction.getResponse();

    res.reply(`You reacted with ${reaction.emoji.name}`);
});

// This function will be ran before every command
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
    res.send('Loading...').then((msg) => {
        msg.edit(
            new Embed()
                .setTitle('Pong')
                .setAuthor(req.author.username, { icon: req.author.avatar })
                .addField({
                    name: 'Latency',
                    value: `${Date.now() - msg.timestamp}ms`,
                })
                .setDescription()
                .setColor(Colors.rgb(13, 186, 120))
        );
    });
});

client.command('react', async (req, res) => {
    await req.getGuild();
    // prettier-ignore
    const emojis = Array
        .from((await req.guild.getEmojis())
        .entries())
        .map(([, e]) => e);
    let emoji;

    if (emojis === []) {
        const emojiIMG = readFileSync(
            join(__dirname, 'images/sweat-emoji.png')
        );
        emoji = await req.guild.createEmoji({
            image: { data: emojiIMG, mimetype: 'png' },
            name: 'Sweat emoji',
            roles: [req.guild.roles.get('883857820078989363')],
        });
    } else {
        emoji = emojis[Math.floor(Math.random() * emojis.length)];
    }

    res.react(emoji).then(() => res.send('reacted'));
});
// More complex example command using the GitHub API
client.command(
    ['github', 'gh'],
    async function github(req, res) {
        const username = req.args[0] || 'octocat';
        const user = await (
            await fetch(`https://api.github.com/users/${username}`)
        ) // Fetch the github user's JSON code (as a string)
            .json(); // Turn this string into a object we can use

        const date = new Date(user.created_at).toLocaleString();
        // Send an embed!
        res.reply(
            new Embed()
                .setTitle(`${user.name} @ GitHub`)
                .setAuthor(req.author.username, { icon: req.author.avatar })
                .setUrl(user.html_url)
                .setDescription(user.bio)
                .setThumbnail(user.avatar_url)
                // Add the embed's sections
                .addFields([
                    { name: 'Repositories', value: user.public_repos },
                    { name: 'Followers', value: user.followers, inline: true },
                    { name: 'Following', value: user.following, inline: true },
                ])
                // Set your favorite color!
                .setColor(Colors.rgb(255, 145, 81))
                // Add a footer!
                .setFooter(`Joined github at ${date}`)
                // Set the timestamp of the embed
                .setTimestamp()
        );
    },
    { desc: 'Get GitHub user statistics.' }
); // Set the help message

client.command(
    ['echo', 'say'],
    function (req, res) {
        req.message.delete();
        res.send(req.args.toString() || 'You didnt say anything!');
    },
    { desc: 'Makes the bot repeat what you say!' }
);

client.command('guildinfo', async function (req, res) {
    await req.getGuild();

    const owner = await client.getUser(req.guild.owner_id);
    const embed = new Embed()
        .setTitle(req.guild.name)
        .setAuthor(owner.username, { icon: owner.avatar, url: '' })
        .setDescription(
            req.guild.description || "`This Guild doesn't have a description`"
        )
        .setImage(req.guild.icon)
        .setTimestamp(req.guild.created_at);
    req.guild.roles.forEach(([id, role]) => {
        embed.addField({
            name: role.name,
            value: id,
        });
    });
    res.send(embed);
});

client.command('modify-this-channel', async function (req, res) {
    await req.getGuild();
    req.guild.channels
        .get(req.channel_id)
        .modify({ nsfw: true })
        .then(console.log);
});
