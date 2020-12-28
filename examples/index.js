const { fs, path } = { fs: require('fs'), path: require('path') }; // Optional if you use login option 2
const Fuwa = require('../index.js'); // Import fuwa.js here instead of ../index.js!

const client = new Fuwa.Client(req => {
    return '?'
},  { debug: true });


client
// This function is going to be ran when the bot finishes loading and connects to discord
    .on('READY', () => console.log('POG'))
    .use((_, __, next) => {
        console.log('I WAS USED');
        next();
    })
    .command('ping', (req, res, next) => {
        res.send(
            new Fuwa.Embed()
                .setTimestamp()
                .setTitle('Ping')
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

