'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'Healt_Industries';

exports.createToken = function (doctor) {
    var payload = {
        sub: doctor._id,
        firstName: doctor.firstName,
        lastName: doctor.lastName,
        dpi: doctor.dpi,
        phoneNumber: doctor.phoneNumber,
        email: doctor.email,
        role: doctor.role,
        image: doctor.image,
        specialty: doctor.specialty,
        clinic: doctor.clinic,
        iat: moment().unix(),
        exp: moment().add(30, 'minutes').unix()
    };
    return jwt.encode(payload, secret);
}