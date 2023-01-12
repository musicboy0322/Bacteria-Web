const express = require('express');
const app = express();
const baseRouter = require('./base');

app.use('/', baseRouter);

app.listen(3000);
