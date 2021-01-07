const fs = require('fs');
const path = require('path');

module.exports = {
    "entryPoints": fs.readdirSync(path.join(__dirname, 'src', 'lib')),
    "out": "docs",
    "readme": "README.md"
}