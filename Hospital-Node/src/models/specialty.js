'use strict'

const moongose = require('mongoose');
var Schema = moongose.Schema;

var specialtySchema = Schema ({
    type: String
});

module.exports = moongose.model('Specialty', specialtySchema);