const { Client, Embed, Enums } = require('../../');

const client = new Client('?');
const TOKEN = process.env.TOKEN || readFileSync(path.join(__dirname, 'token.secret'));

// Middlware Functions
//! Make sure to run the next function in your middleware otherwise the command won't run!

// This Middleware reacts to every command that is triggered
function ReactMiddleware(req, res, next) {
    res.react('✅');
    next();
}
// This Middleware logs every time a command is triggered
function LoggerMiddleware(req, _, next) {
    console.log(`${req.author.username} said ${req.message.content} at ${new Date().toDateString()}`);
    next();
}

client
    // Listeners
    .on('ready', () => console.log('I am ready to play some pong!'))
    // Middleware
    .use(ReactMiddleware)
    .use(LoggerMiddleware)
    // Log your bot in!
    .login(TOKEN);

// Commands

// This command should respond to any command with
client.command('ping', (req, res) => {
    const ping = new Date() - req.message.timestamp;

    const embed = new Embed()
        .setTitle('Ping')
        .addField({ name: 'Pong', value: 'My Latency is ' + ping + 'ms!' });

    res.send(embed);
});
