const mongoose = require('mongoose');

const Schema = mongoose.Schema();

const bacteriaDataSchema = new Schema({
    Name: String,
    Purpose: String,
    Specise: String,
    Function: String,
    Resource: String,
    Target: String,
    Reference: String,
    PS: String
});

const BacteriaDataModel = mongoose.model('BacteriaDataModel', bacteriaDataSchema);

module.exports = BacteriaDataModel;