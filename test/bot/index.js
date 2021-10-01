const { Client } = require('../types');
const { token } = require('./config.json');

const client = new Client({ intents: ['Guilds', 'GuildMessages', 'DirectMessages'], defaultPrefix: '?' });

client.on('ready', () => console.log('Online!'));

client.login(token);

async () => {
    console.log(`prefix fetch check: ${client.fetchPrefix()}`);
};

client.commands.set('ping', 'pong');

console.log(client.commands.get('ping!'));