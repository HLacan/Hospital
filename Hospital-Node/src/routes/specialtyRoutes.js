'use strict'

var express = require('express')
var SpecialtyController = require('../controllers/specialtyController');

var api = express.Router();
api.get('/specialties', SpecialtyController.getSpecialties);
api.get('/specialty/:id', SpecialtyController.getSpecialty);
api.post('/add-specialty', SpecialtyController.addSpecialty);
api.put('/update-specialty/:id', SpecialtyController.updateSpecialty);
api.delete('/delete-specialty/:id', SpecialtyController.deleteSpecialty);
module.exports = api;