'use strict'

var Bill = require('../models/bill');

//Seleccionar todas las facturas
function getBills(req, res) {
    Bill.find((err, bill) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(bill);
    });
}

//Seleccionar una Factura
function getBill(req, res){
    let billID = req.params.id;
    Bill.findById(billID, (err, bill) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(bill);
    });
}

//Agregar una Factura
function addBill(req, res){
    var bill = new Bill();
    var params = req.body;
    if (params.client && params.payment && params.date && params.total && params.status){
        bill.client = params.client,
        bill.payment = params.payment,
        bill.date = params.date,
        bill.total = params.total,
        bill.status = params.status

        bill.save((err, billStored) => {
            if(err) return res.status(500).send({message: 'Saving Error'});
            if(billStored){
                res.status(200).send({bill: billStored});
            } else {
                res.status(404).send({message: 'Not Found'});
            }
        });
    } else {
        res.status(200).send({message: 'Empty Fields'});
    }
}

//Actualizar Factura
function updateBill(req, res){
    var billID = req.params.id;
    var update = req.body;
    Bill.findByIdAndUpdate(billID, update, {new: true}, (err, billUpdated) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({bill: billUpdated});
    });
}

//Eliminar Factura
function deleteBill(req, res){
    var billID = req.params.id;
    Bill.findByIdAndRemove(billID,(err, billDeleted) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({bill: billDeleted});
    });
}

module.exports = {
    getBills,
    getBill,
    addBill,
    updateBill,
    deleteBill
}