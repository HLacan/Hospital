'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Healt_Industries';

exports.createToken = function (admin) {
    var payload = {
        sub: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        dpi: admin.dpi,
        phoneNumber: admin.phoneNumber,
        email: admin.email,
        image: admin.image,
        role: admin.role,
        iat: moment().unix(),
        exp: moment().add(30, 'minutes').unix
    };
    return jwt.encode(payload, secret);
}