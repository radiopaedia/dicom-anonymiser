'use strict';
const PORT = 8080;
const HOST = '0.0.0.0'; // This is the docker host

const express = require('express');
const app = express();
// This allows us to serve static files without having to define
// paths for everything.
app.use(express.static('public'));
app.use('/dist', express.static('dist'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
