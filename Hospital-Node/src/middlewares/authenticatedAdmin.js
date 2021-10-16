'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Healt_Industries';

exports.ensureAuth = function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(404).send({ message: 'petition without authorization head!' });
    }

    var token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, secret);
        if (payload.exp <= moment().unix()) {
            return res.status(401).send({ message: 'expired token' });
        }
    } catch (ex) {
        return res.status(404).send({ message: 'invalid token' });
    }

    req.admin = payload;
    next();
}