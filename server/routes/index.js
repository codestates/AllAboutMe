const express = require('express');
const app = express();

app.use('/', require('./sign'));
app.use('/user', require('./user'));
app.use('/test', require('./test'));

module.exports = app;