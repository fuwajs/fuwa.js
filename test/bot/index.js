const { readFileSync } = require('fs');
const { join } = require('path');
const { Client, Command, Plugin } = require('../../');

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'GuildMessageReactions'],
});

client.on('ready', async () => {
    console.log('ready');
    const channel = await client.getChannel('889654344637620224');

    await channel.send({ content: 'hii' })[0];
});

// client.on('new channel', console.table);

client.login(readFileSync(join(__dirname, 'token.secret')));

client.on('new message', ({ content }) => console.log(content));

client.on('message update', async function (ctx, _ctx) {
    console.table([{ new_message: ctx, old_message: _ctx }]);
});

client.on('new message reaction', function (data, ctx) {
    console.log(data);
});
