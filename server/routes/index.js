const express = require('express');
const app = express();

app.use('/', require('./sign'));

module.exports = app;