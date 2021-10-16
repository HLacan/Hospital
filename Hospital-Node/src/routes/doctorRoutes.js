'use strict'

var express = require('express');
var DoctorController = require('../controllers/doctorController');

var api = express.Router();
api.get('/doctors', DoctorController.getDoctors);
api.get('/doctor/:id', DoctorController.getDoctor);
api.post('/add-doctor', DoctorController.addDoctor);
api.put('/update-doctor/:id', DoctorController.updateDoctor);
api.delete('/delete-doctor/:id', DoctorController.deleteDoctor);
module.exports = api;