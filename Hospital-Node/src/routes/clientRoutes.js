'use strict'

var express = require('express');
var ClientController = require('../controllers/clientController');
var md_auth = require("../middlewares/authenticatedClient");
var multipart = require('connect-multiparty');
var md_uplad = multipart({uploadDir: './src/uploads/clients'});

var api = express.Router();
api.get('/clients', ClientController.getClients);
api.get('/client/:id', ClientController.getClient);
api.post('/add-client', ClientController.addClient);
api.put('/update-client/:id', ClientController.updateClient);
api.delete('/delete-client/:id', ClientController.deleteClient);
api.post('/upload/:id', [md_auth.ensureAuth, md_uplad], ClientController.uploadImage);
api.get('/get-image/:imageFile', ClientController.getImageFile)
api.post('/sendmail', ClientController.send);
module.exports = api;