'use strict'

var express = require('express');
var LoginController = require('../controllers/loginController');

var api = express.Router();
api.post('/login', LoginController.login);
module.exports = api;