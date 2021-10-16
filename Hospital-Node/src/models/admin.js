'use strict'

const moongose = require('mongoose');
var Schema = moongose.Schema;

var AdminSchema = Schema({
    firstName: String,
    lastName: String,
    dpi: String,
    phoneNumber: String,
    email: String,
    password: String,
    image: String,
    role: String
});

module.exports = moongose.model('Admin', AdminSchema);