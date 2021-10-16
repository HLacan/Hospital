'use strict'

const mongoose = require('mongoose');
const app = require('./app');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Hospital2018').then(() => {
    console.log('Running Database');

    app.set('port', process.env.PORT || 3000);
    app.listen(app.get('port'), () => {
        console.log(`Running Server at port: '${app.get('port')}'`);
    });
}).catch(err => console.log(err));