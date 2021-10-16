'use strict'

const moongose = require('mongoose');
var Schema = moongose.Schema;

var clientSchema = Schema({
    firstName: String,
    lastName: String,
    dpi: String,
    nit: String,
    phoneNumber: String,
    email: String,
    password: String,
    image: String,
    role: String
});

module.exports = moongose.model('Client', clientSchema);