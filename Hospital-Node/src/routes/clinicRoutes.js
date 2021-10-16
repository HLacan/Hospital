'use strict'

var express = require('express');
var ClinicController = require('../controllers/clinicController');

var api = express.Router();
api.get('/clinics', ClinicController.getClinics);
api.get('/clinic/:id', ClinicController.getClinic);
api.post('/add-clinic', ClinicController.addClinic);
api.put('/update-clinic/:id', ClinicController.updateClinic);
api.delete('/delete-clinic/:id', ClinicController.deleteClinic);
module.exports = api;