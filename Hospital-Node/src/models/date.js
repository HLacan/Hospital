'use strict'

const moongose = require('mongoose');
var Schema = moongose.Schema;

var dateSchema = Schema ({
    date: String,
    status: String,
    client: {type: Schema.ObjectId, ref: 'Client'},
    doctor: {type: Schema.ObjectId, ref: 'Doctor'},
});

module.exports = moongose.model('Date', dateSchema);