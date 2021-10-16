'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var secretarySchema = Schema ({
    firstName: String,
    lastName: String,
    dpi: String,
    phoneNumber: String,
    email: String,
    password: String,
    role: String,
    image: String,
    clinic: {type: Schema.ObjectId, ref: 'Clinic'}
});

module.exports = mongoose.model('Secretary', secretarySchema);