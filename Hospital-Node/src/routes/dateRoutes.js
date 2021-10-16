'use strict'
var express = require('express');
var DateController = require('../controllers/dateController');

var api = express.Router();
api.get('/dates', DateController.getDates);
api.get('/date/:id', DateController.getDate);
api.post('/add-date', DateController.addDate);
api.put('/update-date/:id', DateController.updateDate);
api.delete('/delete-date/:id', DateController.deleteDate);
module.exports = api;