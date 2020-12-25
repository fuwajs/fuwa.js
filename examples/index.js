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
//find a channel by id and returns channel 
let channel1 = req.channel.get("id"); 
//finds a channel by name or any other condition and returns channel
let channel2 = req.channel.find(c => c.name === "name"); 
//finds first channel by name or any other condition and returns channel
let channel3 = req.channel.findFirst(c => c.name === "name"); 
//edits a channel default type is text and returns the new channel
let newChannel = channel1.edit("name" , "type" , {nsfw : false , position : 5  , categoryId : "parentId"});
//deletes a channel and returns the deleted channel 
let deletedChannel = channel1.delete(); 
//sends a message  or embed or both and returns that message 
let message = res.send("some text" ,  embed); 
//sends a message or embed or both with mention  and returns that message 
let message = res.reply("some text" ,  embed);
})
// login Option 1 (suggested):

cli.login("your token")