const express = require('express');
const app = express();

app.use('/', require('./sign'));
app.use('/user', require('./user'));

module.exports = app;