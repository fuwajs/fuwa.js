const { readFileSync: readFile } = require('fs');
const path = require('path');
const { Client, Embed, Enums, Colors } = require('../../');

const client = new Client('?');
const TOKEN = process.env.TOKEN || readFile(path.join(__dirname, 'token.secret'));

// Middlware Functions
//! Make sure to run the next function in your middleware otherwise the command won't run!

// This Middleware reacts to every command that is triggered
function ReactMiddleware(_, res, next) {
    res.react('✅');
    next();
}
// This Middleware logs every time a command is triggered
function LoggerMiddleware(req, _, next) {
    console.log(`${req.author.username} said ${req.message.content} at ${new Date().toDateString()}`);
    next();
}

client
    // Listeners
    .on('ready', () => console.log('Ready to gather information'))
    // Middleware
    .use(ReactMiddleware)
    .use(LoggerMiddleware)
    // Log your bot in!
    .login(TOKEN);

// Commands

// This command should respond to any command with
client.command('ping', (req, res) => {
    const ping = new Date() - req.message.timestamp;
    let color;

    if (ping >= 200) {
        color = Colors.lightGreen;
    } else if (ping >= 500 && 999 >= ping) {
        color = Colors.orange;
    } else {
        color = Colors.red;
    }

    const embed = new Embed()
        .setTitle('Ping')
        .setColor(color)
        .addField({ name: 'Pong', value: 'My Latency is ' + ping + 'ms!' });

    res.send(embed);
});

client.command('guild', async (req, res) => {
    const channel = await req.getChannel();
    if (channel.type === Enums.ChannelType.Dm) {
        res.reply('This command does not work in dms!');
        return;
    }
    const guild = await req.getGuild();
    const guildCreatedAt = guild.created_at.toDateString();

    const channelAmount = guild.channels.size.toString();
    const memberAmount = guild.members.size.toString();
    const roleAmount = guild.roles.size.toString();

    const emojis = await guild.getEmojis();
    const emojiString = '';
    emojis.forEach(emoji => emoji.available && (emojiString += `<:${emoji.name}:${emoji.id}> `));
    const embed = new Embed()
        .setTitle(`Info on ${guild.name}`)
        .setAuthor(req.author.username, { icon: req.author.avatar })
        .setDescription(guild.description || 'This guild has no description')
        .setImage(guild.banner)
        .setThumbnail(guild.icon)
        .setColor(Colors.lightGreen)
        // Fields
        .addField({ name: 'Owner', value: `<@${guild.owner_id}>` })
        .addFields([
            { name: 'Channels', value: channelAmount, inline: true },
            { name: 'Members', value: memberAmount, inline: true },
            { name: 'Roles', value: roleAmount, inline: true },
            { name: 'Emojis', value: emojiString || 'This guild has no emojis', inline: true },
        ])

        .setFooter('Guild created at ' + guildCreatedAt, { icon: guild.icon })
        .setTimestamp();
    res.send(embed);
});
