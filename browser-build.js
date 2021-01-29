const { join } = require('path');
const { createWriteStream: write } = require('fs');
require('browserify')(
    {
        noParse: [
            require.resolve('undici'),
            require.resolve('ws')
        ],
        entries: [join(__dirname, 'dist/index.js')]
    }
)
.ignore('ws')
.ignore('undici')
.bundle()
.pipe(write(join(__dirname, 'browser/bundle.js')))