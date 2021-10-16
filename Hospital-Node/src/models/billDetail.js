'use strict'

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var billDetailSchema = Schema({
    quantity: String,
    price: String,
    subtotal: String,
    bill: {type: Schema.ObjectId, ref: 'Bill'},
    product: {type: Schema.ObjectId, ref: 'Product'}
});

module.exports = mongoose.model('BillDetail', billDetailSchema);
