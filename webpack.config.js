const path = require('path');

module.exports = {
    "mode": "production",
    "entry": "./lib/browser.js",
    "output": {
        "path": __dirname+'/docs',
        "filename": "main.js"
    },
    "devtool": "source-map"
}