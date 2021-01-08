const fs = require('fs');
const path = require('path'); 

module.exports = {
    entryPoints: [...fs.readdirSync(path.join(__dirname, 'src', 'lib'))
        .map(v => !v.startsWith('_') ? path.join(__dirname, 'src', 'lib', v) : null), 
        path.join(__dirname, 'src', 'index.ts')],
    out: path.join(__dirname, 'docs'),
    readme: 'README.md'
}
