const { readFileSync } = require('fs');
const { join } = require('path');
const { Client, Command, Plugin } = require('../../');
console.log(require('../../'));

const Logger = class _ extends Plugin {
    constructor() {
        super({ name: '' });
    }
};

const client = new Client({
    plugin: [],
    intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'GuildMessageReactions'],
});

client.on('ready', async () => {
    const guild = await client.getGuild('788135963528134656');
    console.log(guild.data.channel);
    const channel = guild.channels.get('789395850874322944');
    channel.send({ content: `Turned on a ${new Date().toDateString()}` });
});

client.on('guild loaded', async function (guild) {
    console.log(`Guild (${guild.name}) | Size (${guild.size})`);
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
