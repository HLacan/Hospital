'use strict'

var express = require('express');
var SecretaryController = require('../controllers/secretaryController');

var api = express.Router();
api.get('/secretaries', SecretaryController.getSecretaries);
api.get('/secretary/:id', SecretaryController.getSecretary);
api.post('/add-secretary', SecretaryController.addSecretary);
api.put('/update-secretary/:id', SecretaryController.updateSecretary);
api.delete('/delete-secretary/:id', SecretaryController.deleteSecretary);
module.exports = api;