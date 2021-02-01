const { join } = require('path');
const { createWriteStream: write } = require('fs');
require('browserify')({
    noParse: [require.resolve('undici'), require.resolve('ws')],
})
    .add(join(__dirname, 'script.js'))
    .ignore('ws')
    .ignore('undici')
    .bundle()
    .pipe(write(join(__dirname, 'bundle.js')));