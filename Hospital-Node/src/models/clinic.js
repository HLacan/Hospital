'use strict'

const moongose = require('mongoose');
var Schema = moongose.Schema;

var clinicSchema = Schema({
    name: String,
    ubication: String,
    address: String,
    phoneNumber: String,
    email: String
});

module.exports = moongose.model('Clinic', clinicSchema);