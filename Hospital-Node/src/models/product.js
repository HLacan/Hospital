'use strict'

const moongose = require('mongoose');
var Schema = moongose.Schema;

var productSchema = Schema ({
    name: String,
    quantity: String,
    price: String,
    brand: String
});

module.exports = moongose.model('Product', productSchema);