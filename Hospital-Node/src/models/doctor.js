'use strict'

const moongose = require('mongoose');
var Schema = moongose.Schema;

var doctorSchema = Schema({
    firstName: String,
    lastName: String,
    dpi: String,
    phoneNumber: String,
    email: String,
    password: String,
    role: String,
    image: String,
    specialty: { type: Schema.ObjectId, ref: 'Specialty' },
    clinic: { type: Schema.ObjectId, ref: 'Clinic' }
});

module.exports = moongose.model('Doctor', doctorSchema);