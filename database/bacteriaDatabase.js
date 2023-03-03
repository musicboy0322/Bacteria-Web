const mongoose = require('mongoose');
require('dotenv').config();

let db = mongoose.connect(process.env.DBCONNECTION).then(() => {
    console.log('succesful');
}).catch(() => {
    console.log('fail');
});

module.exports = db;