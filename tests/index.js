const { readFileSync } = require('fs');
const path = require('path');
const { Client } = require('../');

const client = new Client({ intents: ['Guilds', 'GuildMessages', 'DirectMessages'] });

client.on('ready', () => console.log('hello world'));

client.login(readFileSync(path.join(__dirname, 'token.secret')));
