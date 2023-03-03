const express = require('express');
const app = express();
const base = require('./routers/base');

app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

app.use('/', base);

app.listen(3000);
