const express = require('express');
const base = express.Router();

base.get('/', async (req, res) => {
    res.send('Hi!');
});

module.exports = base;