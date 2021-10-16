'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Healt_Industries';

exports.createToken = function (secretary) {
    var payload = {
        sub: secretary._id,
        firstName: secretary.firstName,
        lastName: secretary.lastName,
        dpi: secretary.dpi,
        phoneNumber: secretary.phoneNumber,
        email: secretary.email,
        role: secretary.role,
        image: secretary.image,
        clinic: secretary.clinic,
        iat: moment().unix(),
        exp: moment().add(30, 'minutes').unix()
    }
    return jwt.encode(payload, secret);
}