const express = require('express');
const base = express.Router();
const kind = require('./kind');
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

base.get('/', async (req, res) => {
    res.render('home', { kind: kind });
});

base.post('/', encoder, async (req, res) => {
    const result = req.body.function2;
    const result1 = req.body.function1;

    console.log(result);
    console.log(result1);
})

module.exports = base;