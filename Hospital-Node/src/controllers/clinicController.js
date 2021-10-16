'use strict'

var Clinic = require('../models/clinic');

//Seleccionar todos los centros
function getClinics(req, res) {
    Clinic.find((err, clinic) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(clinic);
    });
}

//Seleccionar una Clinica
function getClinic(req, res){
    let idClinic = req.params.id;
    Clinic.findById(idClinic, (err, clinic) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(clinic);
    });
}

//Agregar una Clinica
function addClinic(req, res){
    var clinic = new Clinic();
    var params = req.body;
    if(params.name && params.ubication && params.address && params.phoneNumber && params.email){
        clinic.name = params.name,
        clinic.ubication = params.ubication,
        clinic.address = params.address,
        clinic.phoneNumber = params.phoneNumber,
        clinic.email = params.email + '@hindustries.org.gt'

        Clinic.find({$or: [{name: clinic.name}]}).exec((err, clinics) => {
            if (err) return res.status(500).send({message: 'Petition Error'});
            if (clinics && clinics.length >= 1){
                return res.status(500).send({message: 'This clinic already exist'});
            } else {
                clinic.save((err, clinicStored) => {
                    if(err) return res.status(500).send({message: 'Saving Error'});
                    if(clinicStored){
                        res.status(200).send({clinic: clinicStored});
                    } else {
                        res.status(404).send({message: 'Not Found'});
                    }
                });
            }
        });
    } else {
        res.status(200).send({message: 'Empty Fields'});
    }
}

//Actualizar Clinica
function updateClinic(req, res){
    var clinicId = req.params.id;
    var update = req.body;
    update.email = (update.email.toLowerCase()) + '@hindustries.org.gt';
    Clinic.findByIdAndUpdate(clinicId, update, {new: true}, (err, clinicUpdated) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({clinic: clinicUpdated});
    });
}

//Eliminar Clinica
function deleteClinic(req, res){
    var clinicId = req.params.id;
    Clinic.findByIdAndRemove(clinicId,(err, clinicDeleted) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({clinic: clinicDeleted});
    });
}

module.exports = {
    getClinics,
    getClinic,
    addClinic,
    updateClinic,
    deleteClinic
}