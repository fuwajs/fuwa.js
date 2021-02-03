const { Client } = require('../dist/index');

const client = new Client('?');
client.on('ready', () => console.log('I am alive!'));

client.command('browser', (req, res) => {
    res.send(`Running on ${navigator.appCodeName}`).then(() => console.log('sent!'))
});

document.querySelector('#login').onclick = () => {
    const token = document.querySelector('#token').value;
    client.login(token);
}