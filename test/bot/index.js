const { readFileSync } = require('fs');
const { join } = require('path');
const { Client, Command, Plugin } = require('../../');
const Logger = class _ extends Plugin {
    constructor() {
        super({ name: '' });
    }
};

const client = new Client({
    plugin: [],
    intents: ['Guilds', 'GuildMessages', 'DirectMessages'],
});

client.on('ready', async () => {
    await client.mountCommand(
        new Command({
            name: 'oof',
            description: 'ez',
            guild: '788135963528134656',
            run(ctx) {
                console.log(ctx);
            },
        })
    );
    console.log(client.commands);
    console.log('ready');
    console.log(await client.getMountedCommands('788135963528134656'));
});

client.on('guild loaded', async function (guild) {
    console.table([{ guild_name: guild.name, guild_id: guild.id }]);
});
    
// client.on('new channel', console.table);

client.login(readFileSync(join(__dirname, 'token.secret')));

client.on('new message', async function (message) {
    console.table([{ context: message }]);
});

client.on('message update', async function (ctx, _ctx) {
    console.table([{ new_message: ctx, old_message: _ctx }]);
});

client.on('add reaction', function (data, ctx) {
    console.table([{ reaction: data, message: ctx }]);
});
