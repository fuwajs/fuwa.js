const { readFileSync } = require('fs');
const { join } = require('path');
const { Client, Command, Plugin, Embed } = require('../../');

const client = new Client({
    intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'GuildMessageReactions'],
});

client.on('ready', async function () {
    console.log('ready');
    const channel = await client.getChannel('788135963528134659');
    await channel.send({ content: 'im online and ready to work!' });
});

client.login(readFileSync(join(__dirname, 'token.secret')));

client.on('new message', async msg => {
    let prefix = '!';
    const channel = await client.getChannel(msg.channel_id);
    if(!msg.content.startsWith(prefix) || msg.author.isBot) return

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const msgCommand = args.shift().toLowerCase();

    if (msgCommand === (`ping`)) {
        channel.send({ content: 'Pong!' }, { content: 'Fuwa.js > discord.js all day every day' });
    } else if (msgCommand === "userinfo") {
        const user = await client.getUser(msg.author.id);
        channel.send(
            { content: `ok! ${user.name}#${user.discriminator}` },
            { embeds: [new Embed().addField({ name: 'message content', value: msg.content }).setColor("#99bdee")] }
        );
    }
});

client.on("message removed", async function(ctx, msg) {
    console.table([{
        channel: ctx.id, message: msg.content
    }])
})

client.on("presence update", async function(presence, oldPresence) {
    console.table([{
        old_presence: oldPresence.status, new_presence: presence.status
    }])
})