// const { fs, path } = { fs: require('fs'), path: require('path') }; // Optional if you use login option 2
const Fuwa = require('../index.js'); // Import fuwa.js here instead of ../index.js!

const cli = new Fuwa.Client('_');


// This function is going to be ran when the bot finishes loading and connects to discord
cli.on('READY', () => {
    console.log('Hey im online!');
});

// Set your status!
cli.setStatus({
    name: 'Some Status', 
    type: 'streaming',
    url: 'https://blank.org',
    status: 'idle' 
});
const embed = new Fuwa.Embed()
.setTitle("some title")
.setColor("#6f00ff")

cli.command("ping", async(req, res) => {
    // console.log(channela);
    // console.log(channel);
    // finds first channel that fulfils given condition
    let cn =  await req.channel.findFirst(c => c.nsfw === true );
    //creates a  channel
    // let nn = await req.channel.createChannel("thorisop" , "voice" , {nsfw :  true  , categoryId :"738185770182901804" , position : 4 });
    //sends embed and returns that message
    let rep = res.send(embed);
})
// login Option 1 (suggested):

cli.login("token")