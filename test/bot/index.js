const { readFileSync } = require('fs');
const { join } = require('path');
const { Client } = require('../../');

const client = new Client({ intents: ['Guilds', 'GuildMessages', 'DirectMessages'], defaultPrefix: '?' });

client.on('ready', () => console.log('Online!'));

client.on('guild loaded', console.table);

client.on('new channel', console.table);

client.on('')
client.login(readFileSync(join(__dirname, 'token.secret')));

client.on('message', function (message) {
    console.log(message.content);
});
