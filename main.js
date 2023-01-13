const express = require('express');
const app = express();
const baseRouter = require('./baseRouter');

app.set('views', './views')
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));
app.use('/', baseRouter);

app.listen(3000);
