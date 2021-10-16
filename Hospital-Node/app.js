'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var adminRoutes = require('./src/routes/adminRoutes');
var billDetailRoutes = require('./src/routes/billDetailRoutes');
var billRoutes = require('./src/routes/billRoutes');
var clinicRoutes = require('./src/routes/clinicRoutes');
var clientRoutes = require('./src/routes/clientRoutes');
var dateRoutes = require('./src/routes/dateRoutes');
var doctorRoutes = require('./src/routes/doctorRoutes');
var loginRoutes = require('./src/routes/loginRoutes');
var producRoutes = require('./src/routes/productRoutes');
var secretaryRoutes = require('./src/routes/secretaryRoutes');
var specialtyRoutes = require('./src/routes/specialtyRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/api', adminRoutes);
app.use('/api', billDetailRoutes);
app.use('/api', billRoutes);
app.use('/api', clientRoutes);
app.use('/api', clinicRoutes);
app.use('/api', dateRoutes);
app.use('/api', doctorRoutes);
app.use('/api', loginRoutes);
app.use('/api', producRoutes);
app.use('/api', secretaryRoutes);
app.use('/api', specialtyRoutes);

module.exports = app;