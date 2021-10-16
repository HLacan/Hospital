'use strict'

var Product = require('../models/product');

//Seleccionar todos los productos
function getProducts(req, res){
    Product.find((err, product) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(product);
    });
}

//Seleccionar un producto
function getProduct(req, res){
    let productID = req.params.id;
    Product.findById(productID, (err, product) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(product);
    });
}

//Agregar un Producto
function addProduct(req, res){
    var product = new Product();
    var params = req.body;
    if (params.name && params.quantity && params.price && params.brand){
        product.name = params.name,
        product.quantity = params.quantity,
        product.price = params.price,
        product.brand = params.brand

        product.save((err, productStored) => {
            if (err) return res.status(500).send({message: 'Saving Error'});
            if (productStored){
                res.status(200).send({product: productStored});
            } else {
                res.status(404).send({message: 'Not Found'});
            }
        });
    } else {
        res.status(200).send({message: 'Empty Fields'});
    }
}

//Actualizar Producto
function updateProduct(req, res){
    var productID = req.params.id;
    var update = req.body;
    Product.findByIdAndUpdate(productID, update, {new: true}, (err, productUpdated) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({product: productUpdated});
    });
}

//Eliminar Producto
function deleteProduct(req, res){
    var productID = req.params.id;
    Product.findByIdAndRemove(productID,(err, productDeleted) => {
        if (err) return res.status(500).send({message: 'Petition Error'});
        return res.status(200).send({product: productDeleted});
    });
}

module.exports = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}