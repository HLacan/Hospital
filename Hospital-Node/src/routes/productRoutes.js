'use strict'

var express = require('express');
var ProductController = require('../controllers/productController');

var api = express.Router();
api.get('/products', ProductController.getProducts);
api.get('/product/:id', ProductController.getProduct);
api.post('/add-product', ProductController.addProduct);
api.put('/update-product/:id', ProductController.updateProduct);
api.delete('/delete-product/:id', ProductController.deleteProduct);
module.exports = api;