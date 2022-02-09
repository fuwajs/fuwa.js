const { readFileSync, writeFileSync } = require('fs');
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

class Logger extends Plugin {
    constructor() {
        super({ name: 'Logger' });
    }
    event(client, data) {
        console.log(data);
    }
    http(client, data) {
        console.log(data.data);
    }
}
const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'GuildMessageReactions'],
    plugins: [new Logger()],
});

const FUWA_GUILD_ID = '936748309098397708';
// const FUWA_TEST_CHANNEL_ID = '789395850874322944';
client.setStatus({
    since: new Date(),
    status: 'dnd',
    afk: false,
    activities: [
        {
            name: 'Bot',
            type: 'Listening',
        },
    ],
});
client.on('ready', async function () {
    // console.clear();
    console.log(`Connected to discord!`);
    const guild = await Guild.get(FUWA_GUILD_ID);

    // client.ws.close()
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

client.command('test1', { desc: '', type: 'User', guild: FUWA_GUILD_ID }, ctx => {
    const [member] = ctx.resolve().members;
    ctx.send({ content: `This member has ${member.roleIds.length} roles` });
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
