const { readFileSync } = require('fs');
const { join } = require('path');
const { Client, Command, Plugin, Embed } = require('../../');

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

client.on('ready', async function () {
    console.log('ready');

    const cmd = new Command({
        name: 'gay-mom-detector',
        description: 'is ur mom gae?',
        guild: '788135963528134656',
        async run(ctx) {
            const channel = await ctx.getChannel();
            // prettier-ignore
            ctx
                .button({})
                    .setContent('ur mum gae')
                    .setStyle('Danger')
                    .onClick(() =>
                        channel.send({ content: 'you clicked the button, you admit ur mom is gay, sus' })
                    )
                .exit()
                    .button({})
                    .setContent('ur mom not gae')
                    .setStyle('Success')
                    .onClick(() =>
                        channel.send({ content: 'ur mom is not gay at all, pog' })
                    )
                .exit()
                    .send({ content: 'urmom' });
        },
    });
    client.mountCommand(cmd);
});

client.login(readFileSync(join(__dirname, 'token.secret')));

client.on('new message', async msg => {
    let prefix = '!';
    const channel = await client.getChannel(msg.channel_id);
    if (!msg.content.startsWith(prefix) || msg.author.isBot) return;

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const msgCommand = args.shift().toLowerCase();

    if (msgCommand === `ping`) {
        channel.send({ content: 'Pong!' }, { content: 'Fuwa.js > discord.js all day every day' });
    } else if (msgCommand === 'userinfo') {
        const user = await client.getUser(msg.author.id);
        channel.send(
            { content: `ok! ${user.name}#${user.discriminator}` },
            {
                embeds: [
                    new Embed().addField({ name: 'message content', value: msg.content }).setColor('#99bdee'),
                ],
            }
        );
    }
});

client.on('message removed', async function (ctx, msg) {
    console.table([
        {
            channel: ctx.id,
            message: msg.content,
        },
    ]);
});

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
