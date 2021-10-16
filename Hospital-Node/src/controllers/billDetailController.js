'use strict'

var BillDetail = require('../models/billDetail');

//Seleccionar todos detalles
function getBillDetails(req, res) {
    BillDetail.find((err, billDetail) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(billDetail);
    });
}

//Seleccionar un Detalle
function getBillDetail(req, res){
    let billDetailID = req.params.id;
    BillDetail.findById(billDetailID, (err, billDetail) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(billDetail);
    });
}

//Agregar un Detalle
function addBillDetail(req, res){
    var billDetail = new BillDetail();
    var params = req.body;

    if(params.quantity && params.price && params.subtotal && params.bill && params.product){
        billDetail.quantity = params.quantity,
        billDetail.price = params.price,
        billDetail.subtotal = params.subtotal,
        billDetail.bill = params.bill,
        billDetail.product = params.product

        billDetail.save((err, billDetailStored) => {
            if(err) return res.status(500).send({message: 'Saving Error'});
            if(billDetailStored){
                res.status(200).send({billDetail: billDetailStored});
            } else {
                res.status(404).send({message: 'Not Found'});
            }
        });
    } else {
        res.status(200).send({message: 'Empty Fields'});
    }
}

//Actualizar Detalle
function updateBillDetail(req, res){
    var billDetailID = req.params.id;
    var update = req.body;
    BillDetail.findByIdAndUpdate(billDetailID, update, {new: true}, (err, billDetailUpdated) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({billDetail: billDetailUpdated});
    });
}

//Eliminar Detalle
function deleteBillDetail(req, res){
    var billDetailID = req.params.id;
    BillDetail.findByIdAndRemove(billDetailID,(err, billDetailDeleted) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({billDetail: billDetailDeleted});
    });
}

module.exports = {
    getBillDetails,
    getBillDetail,
    addBillDetail,
    updateBillDetail,
    deleteBillDetail
}