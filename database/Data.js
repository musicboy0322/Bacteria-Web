const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bacteriaDataSchema = new Schema({
    name: String,
    purpose: String,
    specise: String,
    function: String,
    resource: String,
    target: String,
    reference: String,
    ps: String
});

module.exports = mongoose.model('BacteriaData', bacteriaDataSchema);