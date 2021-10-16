'use strict'

var Dates = require('../models/date');

//Seleccionar todas las citas
function getDates(req, res){
    Dates.find((err, date) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(date);
    });
}

//Seleccionar una cita
function getDate(req, res){
    let dateID = req.params.id;
    Dates.findById(dateID, (err, date) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(date);
    });
}

//Agregar una cita
function addDate(req, res){
    var date_a = new Dates();
    var params = req.body;
    if(params.date && params.status && params.client && params.doctor){
        date_a.date = params.date,
        date_a.status = params.status,
        date_a.client = params.client,
        date_a.doctor = params.doctor

        date_a.save((err, dateStored) => {
            if (err) return res.status(500).send({message: 'Saving Error'});
            if (dateStored){
                res.status(200).send({date_a: dateStored});
            } else {
                res.status(404).send({message: 'Not Found'});
            }
        });
    } else {
        res.status(200).send({message: 'Empty Fields'});
    }
}

//Actualizar Cita
function updateDate(req, res){
    var dateID = req.params.id;
    var update = req.body;
    Dates.findByIdAndUpdate(dateID, update, {new: true}, (err, dateUpdated) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({date: dateUpdated});
    });
}

//Eliminar Cita
function deleteDate(req, res){
    var dateID = req.params.id;
    Dates.findByIdAndRemove(dateID, (err, dateDeleted) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({date: dateDeleted});
    });
}

module.exports = {
    getDates,
    getDate,
    addDate,
    updateDate,
    deleteDate
}