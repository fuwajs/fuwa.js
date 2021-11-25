import * as Fuwa from '../../deno/mod.ts';
import { join } from "https://deno.land/std@0.116.0/path/mod.ts";
import { readFileSync } from 'https://deno.land/std@0.116.0/fs/mod.ts'

const client = new Fuwa.Client({
    intents: ['Guilds', 'GuildMessages', 'DirectMessages', 'GuildMessageReactions'],
});
const FUWA_GUILD_ID = '788135963528134656';

client.on('ready', async function () {
    // console.clear();
    console.log(`Connected to discord!`);
    const guild = await Fuwa.Guild.get(FUWA_GUILD_ID);
    // @ts-ignore
    const file = new Fuwa.Attachment({
        url: guild.icon,
    });
    file.download(join(Deno.cwd(), 'kk.png'));
    const commands = await client.getMountedCommands(FUWA_GUILD_ID);
});
try {
    client.login(readFileSync(join(Deno.cwd(), 'token.secret')));
} catch (err) {
    console.error('error', err);
}
