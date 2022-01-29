const { readFileSync } = require('fs');
const { join } = require('path');
const { Blob } = require('buffer');
const {
    Client,
    Command,
    Plugin,
    Embed,
    Guild,
    Attachment,
    Argument,
    User,
    Channel,
    File,
} = require('../../');
require('../../out/dist/lib/structures/internet/FormData');
class Logger extends Plugin {
    constructor() {
        super({ name: 'Logger' });
    }
    event(client, data) {
        // console.log(data);
    }
}
const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'GuildMessageReactions'],
    plugins: [new Logger()],
});

const FUWA_GUILD_ID = '936748309098397708';
// const FUWA_TEST_CHANNEL_ID = '789395850874322944';

client.on('ready', async function () {
    // console.clear();
    console.log(`Connected to discord!`);
    const guild = await Guild.get(FUWA_GUILD_ID);
    // console.log(guild);
    // const commands = await client.getMountedCommands(FUWA_GUILD_ID);
    
    // .then(console.log);
});

client.on('message removed', console.log);

client.on('presence update', async function (presence, oldPresence) {
    console.table([
        {
            old_presence: oldPresence.status,
            new_presence: presence.status,
        },
    ]);
});

client.on('message update', async function (data) {
    console.table([
        {
            channel: data.channel_id,
            guild: data.guild_id,
            message: data.id,
        },
    ]);
});

try {
    client.login(readFileSync(join(__dirname, 'token.secret')));
} catch (err) {
    console.error('error', err);
}
