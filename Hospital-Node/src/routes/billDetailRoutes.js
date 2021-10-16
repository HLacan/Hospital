'use strict'

var express = require('express');
var BillDetailController = require('../controllers/billDetailController');

var api = express.Router();
api.get('/bill_details', BillDetailController.getBillDetails);
api.get('/bill_detail/:id', BillDetailController.getBillDetail);
api.post('/add-bill_detail', BillDetailController.addBillDetail);
api.put('/update-bill_detail/:id', BillDetailController.updateBillDetail);
api.delete('/delete-bill_detail/:id', BillDetailController.deleteBillDetail);
module.exports = api;