const { readFileSync } = require('fs');
const { join } = require('path');
const { Client, Command } = require('../../');

const client = new Client({ intents: ['Guilds', 'GuildMessages', 'DirectMessages'], defaultPrefix: '?' });

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
});

client.on('guild loaded', console.table);

client.on('new channel', console.table);

client.login(readFileSync(join(__dirname, 'token.secret')));

client.on('message', function (message) {
    console.log(message.content);
});
