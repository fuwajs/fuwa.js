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

const FUWA_GUILD_ID = '788135963528134656';
const FUWA_TEST_CHANNEL_ID = '789395850874322944';

client.on('ready', async function () {
    // console.clear();
    console.log(`Connected to discord!`);
    const guild = await Guild.get(FUWA_GUILD_ID);
    const file = new Attachment({
        url: guild.icon,
    });
    // const icon = await file.get();
    const channel = await Channel.get(FUWA_TEST_CHANNEL_ID);
    channel.send({
        content: 'ayo',
        attachments: [{ name: 'index.js', description: 'sheesh' }],
        files: [new File('index.js', new Blob(['var a = 100']), 'text/javascript')],
    });
    // .then(console.log);
    const commands = await client.getMountedCommands(FUWA_GUILD_ID);
});

client.command('gay-mom-detector', { desc: 'is ur mom gae?', guild: FUWA_GUILD_ID }, async ctx => {
    const channel = await ctx.getChannel();
    await channel.startTyping();
    // prettier-ignore
    ctx
        .button()
            .setContent('ur mum gae')
            .setStyle('Danger')
            .onClick((btn) => btn.send({ content: 'so u admit ur mom gae? sus' }))
        .exit()
        .button()
            .setContent('ur mom not gae')
            .setStyle('Success')
            .onClick((btn) => btn.edit({ content: 'ur mom is not gay at all, pog' }))
        .exit()
        .send({
            embeds: [
                new Embed()
                    .setColor(0x6f00f)
                    .setDescription('urmommy')
                    .setTitle('sheeesh')
                    .setAuthor('urmom')
                    .addField({ name: 'mommy gayness', value: 'u have been wondering if ur mom is gay? well its time to find out now' })
            ]
        });
});

client.command(
    'echo',
    {
        desc: 'echo something you said',
        guild: FUWA_GUILD_ID,
        args: [
            new Argument({ name: 'text', description: 'text u wna echo', required: true, type: 'String' }),
        ],
    },
    (ctx, { text }) => {
        ctx.send({ content: `${text}` });
    }
);

client.command(
    'user-info',
    {
        desc: 'echo something you said',
        guild: FUWA_GUILD_ID,
        args: [
            new Argument({
                name: 'user',
                description: 'the user you want info on',
                required: true,
                type: 'User',
            }),
        ],
    },
    async (ctx, { user }) => {
        console.log(user);
        ctx.send({ content: `<@${user.id}>` });
    }
);

client.on('new message', async function (msg) {
    let prefix = '!';
    const channel = await client.getChannel(msg.channel_id);

    if (!msg.content.startsWith(prefix) || msg.author.isBot) console.log(msg.data.attachments);

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const msgCommand = args.shift().toLowerCase();

    if (msgCommand === `ping`) {
        channel.send({ content: 'Pong!' }, { content: 'Fuwa.js > discord.js all day every day' });
    } else if (msgCommand === 'userinfo') {
        const user = await client.getUser(msg.author.id);
        channel
            .send(
                { content: `ok! ${user.name}#${user.discriminator}` },
                {
                    embeds: [
                        new Embed()
                            .addField({ name: 'message content', value: msg.content })
                            .setColor('#99bdee'),
                    ],
                }
            )
            .then(([msg]) => msg.delete());
    }
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
