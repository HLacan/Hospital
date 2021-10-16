'use strict'

var Specialty = require('../models/specialty');

//Seleccionar todas las especialidades
function getSpecialties(req, res){
    Specialty.find((err, specialty) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(specialty);
    });
}


//Seleccionar una especialidad
function getSpecialty(req, res){
    let idSpecialty = req.params.id;
    Specialty.findById(idSpecialty,(err, specialty) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(specialty);
    });
}

//Agregar una especialidad
function addSpecialty(req, res){
    var specialty = new Specialty();
    var params = req.body;
    if(params.type){
        specialty.type = params.type;

        Specialty.find({$or: [{type: specialty.type}]}).exec((err, specialties) =>{
            if (err) return res.status(500).send({message: 'Petition Error'});
            if (specialties && specialties.length >= 1){
                return res.status(500).send({message: 'This specialty already exist'});
            } else {
                specialty.save((err, specialtyStored) => {
                    if (err) return res.status(500).send({message: 'Saving error'});
                    if (specialtyStored){
                        res.status(200).send({specialty: specialtyStored});
                    } else {
                        res.status(404).send({message: 'Not Found'});
                    }
                });
            }
        });
    } else {
        return res.status(500).send({message: 'Empty Fields'});
    }
}

//Actualizar Especialidad
function updateSpecialty(req, res){
    var idSpecialty = req.params.id;
    var update = req.body;
    Specialty.findByIdAndUpdate(idSpecialty, update, {new: true}, (err, specialtyUpdated) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({specialty: specialtyUpdated});
    });
}

//Eliminar Especialidad
function deleteSpecialty(req, res){
    var idSpecialty = req.params.id;
    Specialty.findByIdAndRemove(idSpecialty,(err, specialtyDeleted) =>{
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({specialty: specialtyDeleted});
    })
}

module.exports = {
    getSpecialties,
    getSpecialty,
    addSpecialty,
    updateSpecialty,
    deleteSpecialty
}