'use strict'

var bcrypt = require('bcrypt-nodejs');
var Admin = require('../models/admin');
var Doctor = require('../models/doctor');
var Secretary = require('../models/secretary');
var Client = require('../models/client');
var jwtAdmin = require('../services/jwtAdmin');
var jwtDoctor = require('../services/jwtDoctor');
var jwtSecretary = require('../services/jwtSecretary');
var jwtClient = require('../services/jwtClient');

function login(req, res){
    var params = req.body;
    var email = params.email;
    var password = params.password;
    console.log(params)

    //loguear al tipo admin
    Admin.findOne({email: email}, (err, admin) => {
        if (err) return res.status(500).send({message: 'Petition errror'});
        console.log(admin);
        if(admin){
            bcrypt.compare(password, admin.password, (err, check) =>{
                if(check){
                    console.log('hola k ase')
                    if(params.getToken){
                        console.log('hola k ase')
                        return res.status(200).send({token: jwtAdmin.createToken(admin)});
                        
                    } else {
                        admin.password = undefined;
                        return res.status(200).send({admin});
                    }
                } else {
                    return res.status(404).send({message: 'admin not identified'})
                }
            });
        } else {
            
            //loguear el tipo doctor
            Doctor.findOne({email: email}, (err, doctor) => {
                if (err) return res.status(500).send({message: 'Petition Error'});
                if (doctor){
                    bcrypt.compare(password, doctor.password, (err, check) => {
                        if(check){
                            if (params.getToken){
                                return res.status(200).send({token: jwtDoctor.createToken(doctor)});
                            } else {
                                doctor.password = undefined;
                                return res.status(200).send({doctor})
                            }
                        } else {
                            return res.status(404).send({message: 'doctor not identified'});
                        }
                    });
                } else {

                    //loguear al tipo secretaria
                    Secretary.findOne({email: email}, (err, secretary) => {
                        if (err) return res.status(500).send({message: 'Petition error'});
                        if(secretary){
                            bcrypt.compare(password, secretary.password, (err, check) => {
                                if (check){
                                    if (params.getToken){
                                        return res.status(200).send({token: jwtSecretary.createToken(secretary)});
                                    } else {
                                        secretary.password = undefined;
                                        return res.status(200).send({secretary});
                                    }
                                } else {
                                    return res.status(404).send({message: 'secretary not identified'});
                                }
                            });
                        } else {

                            //loguear al tipo cliente
                            Client.findOne({email: email}, (err, client) => {
                                if (err) return res.status(500).send({message:'Petition Error'});
                                if (client){
                                    bcrypt.compare(password, client.password, (err, check) => {
                                        if (check){
                                            if (params.getToken){
                                                
                                                return res.status(200).send({token: jwtClient.createToken(client)});                                               
                                            } else {
                                                client.password = undefined;
                                                return res.status(200).send({client});
                                            }
                                        } else {
                                            return res.status(404).send({message: 'client not identified'});
                                        }
                                    })
                                } else {
                                    return res.status(404).send({message: 'user not found'});
                                }
                            });
                        }
                    });
                }
            });
        }
    });
}

module.exports = {
    login
}