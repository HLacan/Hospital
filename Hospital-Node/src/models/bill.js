'use strict'

const moongose = require('mongoose');
var Schema = moongose.Schema;

var billSchema = Schema({
    client: {type: Schema.ObjectId, ref: 'Client'},
    payment: String,
    date: String,
    total: String,
    status: String,
});

module.exports = moongose.model('Bill', billSchema);