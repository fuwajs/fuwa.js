const { Client } = require('../');

const TOKEN = process.env.TOKEN;

const client = new Client('?');

client.login(TOKEN);
