const { join } = require('path');
const { createWriteStream: write } = require('fs');
require('browserify')({
    // undici and ws are not required in the browser
    // the browser API already provides fetch() and WebSocket
    noParse: [require.resolve('undici'), require.resolve('ws')],
})
    .add(join(__dirname, 'script.js'))
    .ignore('ws')
    .ignore('undici')
    .bundle()
    .pipe(write(join(__dirname, 'bundle.js')));