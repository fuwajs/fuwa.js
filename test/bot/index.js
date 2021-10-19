const { readFileSync } = require('fs');
const { join } = require('path');
const { Client, Command, Plugin, Embed } = require('../../');

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'GuildMessageReactions'],
});

client.on('ready', async () => {
    console.log("Ready!")
});

client.on('guild loaded', async function (guild) {
    console.table([{ guild_name: guild.name, guild_id: guild.id }]);
    console.log('ready');
    const channel = await client.getChannel('788135963528134659');
    await channel.send({ content: 'im online and ready to work!' });
});

client.login(readFileSync(join(__dirname, 'token.secret')));

client.on('new message', async msg => {
    let prefix = '!';

    const channel = await client.getChannel(msg.channel_id);
    if (msg.content.startsWith(`${prefix}ping`)) {
        channel.send({ content: 'Pong!' }, { content: 'Fuwa.js > discord.js all day every day' });
    } else if (msg.content.startsWith(`${prefix}userinfo`)) {
        const user = await client.getUser(msg.author.id);
        channel.send(
            { content: `ok! ${user.name}` },
            { embeds: [new Embed().addField({ name: 'title', value: 'embed content' })] }
        );
    }
});

client.on('message update', async (ctx, _ctx) => {
    console.table([{ new_message: ctx, old_message: _ctx }]);
});

client.on('new message reaction', function (data) {
    console.log(data);
});
