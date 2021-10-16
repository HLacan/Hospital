'use strict'

var express = require('express');
var AdminController = require('../controllers/adminController');
var md_auth = require('../middlewares/authenticatedAdmin');
var multipart = require('connect-multiparty');
var md_upload =  multipart({uploadDir: './src/uploads/admins'});

var api = express.Router();
api.get('/admins', AdminController.getAdmins);
api.get('/admin/:id', AdminController.getAdmin);
api.post('/add-admin', AdminController.addAdmin);
api.put('/update-admin/:id',AdminController.updateAdmin);
api.delete('/delete-admin/:id', AdminController.deleteAdmin);
api.post('/update-image-user/:id', [md_auth.ensureAuth, md_upload] ,AdminController.uploadImage);
api.get('/get-image-user/:imageFile', AdminController.getImageFile);
module.exports = api;