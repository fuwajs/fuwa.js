const { readFileSync: readFile } = require('fs');
const path = require('path');

const { Client, Enums } = require('../');

const TOKEN = process.env.TOKEN || readFile(path.join(__dirname, 'token.secret'));

const client = new Client('?', { debug: true });

client.setStatus({
    since: Date.now(),
    status: 'dnd',
    activities: [
        {
            name: 'Cool stuff',
            type: Enums.ActivityType.Listening,
            created_at: Date.now(),
        },
    ],
});
client.on('ready', () => {
    console.log('Hi');
});

client.login(TOKEN);
