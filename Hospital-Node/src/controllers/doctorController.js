'use strict'

var bcrypt = require('bcrypt-nodejs');
var Doctor = require('../models/doctor');
var path = require('path');
var fs = require('fs');

//Seleccionar todos los doctores
function getDoctors(req, res) {
    Doctor.find((err, doctors) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(doctors);
    });
}

//Seleccionar un doctor
function getDoctor(req, res) {
    let idDoctor = req.params.id;
    Doctor.findById(idDoctor, (err, doctor) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(doctor);
    });
}

//Agregar un Doctor
function addDoctor(req, res){
    var doctor = new Doctor();
    var params = req.body;
    if (params.firstName && params.lastName && params.dpi && params.phoneNumber && params.password && params.specialty && params.clinic){
        doctor.firstName = params.firstName,
        doctor.lastName = params.lastName,
        doctor.dpi = params.dpi,
        doctor.phoneNumber = params.phoneNumber,
        doctor.email = (params.firstName.toLowerCase()) + '-' + (params.lastName.toLowerCase()) + '@hindustries.org.gt',
        doctor.specialty = params.specialty,
        doctor.clinic = params.clinic,
        doctor.image = null,
        doctor.role = 'Doctor'

        Doctor.find({$or: [{email: doctor.email.toLowerCase()}]}).exec((err, doctors) =>{
            if (err) return res.status(500).send({message: 'Petition Error'});
            if (doctors && doctors.length >=1){
                return res.status(500).send({message: 'this doctor already exist'});
            } else {
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    doctor.password = hash;
                    doctor.save((err, doctorStored) =>{
                        if(err) return res.status(500).send({message: 'Saving Error'});
                        if (doctorStored){
                            res.status(200).send({doctor: doctorStored});
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

//Actualizar Doctor
function updateDoctor(req, res){
    var doctorID = req.params.id;
    var update = req.body;
    update.email = (update.firstName.toLowerCase()) + '-' + (update.lastName.toLowerCase()) + '@hindustries.org.gt';
    Doctor.findByIdAndUpdate(doctorID, update, {new: true}, (err, doctorUpdated) =>{
        if (err) return res.status(200).send({message: 'Petition Error'});
        return res.status(200).send({doctor: doctorUpdated});
    });
}

//Eliminar Doctor
function deleteDoctor(req, res){
    var doctorID = req.params.id;
    Doctor.findByIdAndRemove(doctorID, (err, doctorDeleted) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({doctor: doctorDeleted});
    });
}

module.exports = {
    getDoctors,
    getDoctor,
    addDoctor,
    updateDoctor,
    deleteDoctor
}