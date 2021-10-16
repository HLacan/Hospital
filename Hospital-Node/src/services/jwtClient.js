'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Healt_Industries';

exports.createToken = function (client) {
    var payload = {
        sub: client._id,
        firstName: client.firstName,
        lastName: client.lastName,
        dpi: client.dpi,
        nit: client.nit,
        phoneNumber: client.phoneNumber,
        email: client.email,
        image: client.image,
        role: client.role,
        iat: moment().unix(),
        exp: moment().add(30, 'minutes').unix()
    }
    return jwt.encode(payload, secret);
}