const { fs, path } = { fs: require('fs'), path: require('path') }; // Optional if you use login option 2
const fuwa = require('../dist/index'); // Import fuwa.js here!

const client = new fuwa.Client(req => '?', { debug: true });

client
    // This function is going to be ran when the bot finishes loading and connects to discord
    .on('READY', () => console.log('POG'))
    .use((_, __, next) => {
        console.log('I WAS USED');
        next();
    })
    .command('ping', (req, res, next) => {
        res.send(new fuwa.Embed()
            .setTitle('Pong')
            .setColor(fuwa.Colors.rgb(13, 186, 120))
        );
    })
    // Set your status!
    .setStatus({
        name: 'Some Status',
        type: 'streaming',
        url: 'https://blank.org'
    });


// login Option 1 (suggested):
const TOKEN = fs.readFileSync(path.join(__dirname, 'token.secret')) // Replace this with your token file name
client.login(TOKEN); // log the bot into discord

// Login Option 2
// client.login('PUT_YOUR_TOKEN_HERE');
//
// It is advised not to put your token in your main file, 
// using the method above is recommended and safer.

