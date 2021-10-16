'use strict'

var express = require('express');
var BillController = require('../controllers/billController');

var api = express.Router();
api.get('/bills', BillController.getBills);
api.get('/bill/:id', BillController.getBill);
api.post('/add-bill', BillController.addBill);
api.put('/update-bill/:id', BillController.updateBill);
api.delete('/delete-bill/:id', BillController.deleteBill);
module.exports = api;