'use strict'

var Secretary = require('../models/secretary');
var bcrypt = require('bcrypt-nodejs');
var path = require('path');
var fs = require('fs');

//Seleccionar todas las secretarias
function getSecretaries(req, res){
    Secretary.find((err, secretaries) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(secretaries)
    });
}

//Seleccionar una Secretaria
function getSecretary(req, res){
    let secretaryID = req.params.id;
    Secretary.findById(secretaryID, (err, secretary) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(secretary);
    });
}

//Agregar una secretaria
function addSecretary(req, res){
    var secretary = new Secretary();
    var params = req.body;
    if (params.firstName && params.lastName && params.dpi && params.phoneNumber && params.password && params.clinic){
        secretary.firstName = params.firstName,
        secretary.lastName = params.lastName,
        secretary.dpi = params.dpi,
        secretary.phoneNumber = params.phoneNumber,
        secretary.email = (params.firstName.toLowerCase()) + '-' + (params.lastName.toLowerCase()) + '@hindustries.org.gt',
        secretary.role = 'Secretary',
        secretary.image = null,
        secretary.clinic = params.clinic

        Secretary.find({$or: [{email: secretary.email.toLowerCase()}]}).exec((err, secretaries) => {
            if (err) return res.status(500).send({message: 'Petition Error'});
            if (secretaries && secretaries.length >= 1){
                return res.status(500).send({message: 'this secretary already exist'});
            } else {
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    secretary.password = hash;
                    secretary.save((err, secretaryStored) => {
                        if (err) return res.status(500).send({message: 'Saving Error'});
                        if (secretaryStored){
                            res.status(200).send({secretary: secretaryStored});
                        } else {
                            res.status(404).send({message: 'Not Found'});
                        }
                    });
                });
            }
        });
    } else {
        res.status(500).send({message: 'Empty Fields'});
    }
}

//Actualizar Secretaria
function updateSecretary(req, res){
    var secretaryID = req.params.id;
    var update = req.body;
    update.email = (update.firstName.toLowerCase()) + '-' + (update.lastName.toLowerCase()) + '@hindustries.org.gt';
    Secretary.findByIdAndUpdate(secretaryID, update, {new: true}, (err, secretaryUpdated) => {
        if (err) return res.status(200).send({message: 'Petition Error'});
        return res.status(200).send({secretary: secretaryUpdated});
    });
}

//Eliminar Secretaria
function deleteSecretary(req, res){
    var secretaryID = req.params.id;
    Secretary.findByIdAndRemove(secretaryID, (err, secretaryDeleted) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({secretary: secretaryDeleted});
    });
}

module.exports = {
    getSecretaries,
    getSecretary,
    addSecretary,
    updateSecretary,
    deleteSecretary
}
