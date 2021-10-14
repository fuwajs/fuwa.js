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
    console.log('ready');
});

client.on('guild loaded', async function (guild) {
    console.log(guild.size);
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
