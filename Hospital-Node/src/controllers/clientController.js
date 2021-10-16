'use strict'

var bcrypt = require('bcrypt-nodejs');
var Client = require('../models/client');
var path = require('path');
var fs = require('fs');
var nodemailer = require('nodemailer');

//Seleccionar todos los clientes
function getClients(req, res) {
    Client.find((err, client) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(client);
    });
}

//Seleccionar un cliente
function getClient(req, res) {
    let idClient = req.params.id;
    Client.findById(idClient, (err, client) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(client);
    });
}

//Agregar Cliente
function addClient(req, res) {
    var client = new Client();
    var params = req.body;

    if (params.firstName && params.lastName && params.dpi && params.nit && params.phoneNumber && params.email && params.password) {
        client.firstName = params.firstName,
            client.lastName = params.lastName,
            client.dpi = params.dpi,
            client.nit = params.nit,
            client.phoneNumber = params.phoneNumber,
            client.email = params.email,
            client.image = null,
            client.role = 'Client'

        Client.find({ $or: [{ email: client.email }] }).exec((err, clients) => {
            if (err) return res.status(500).send({ message: 'Petition Error' });
            if (clients && clients.length >= 1) {
                return res.status(500).send({ message: 'This Email already exist' });
            } else {
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    client.password = hash;
                    client.save((err, clientStored) => {
                        if (err) return res.status(500).send({ message: 'Saving Error' });
                        if (clientStored) {
                            console.log('Cliente Creado')
                            res.status(200).send({ client: clientStored });
                        } else {
                            res.status(404).send({ message: 'Not Found' });
                        }
                    });
                });
            }
        });
    } else {
        res.status(500).send({ message: 'Empty Fields' });
    }
}

//Actualizar Cliente
function updateClient(req, res) {
    var idClient = req.params.id;
    var update = req.body;
    Client.findByIdAndUpdate(idClient, update, { new: true }, (err, clientUpdated) => {
        if (err) return res.status(500).send({ message: 'Petition Error' });
        return res.status(200).send({ client: clientUpdated });
    });
}

//Eliminar Cliente
function deleteClient(req, res) {
    var idClient = req.params.id;
    Client.findByIdAndRemove(idClient, (err, clientRemoved) => {
        if (err) return res.status(500).send({ message: 'Petition Error' });
        return res.status(200).send({ client: clientRemoved });
    });
}

function send(req, res) {
    nodemailer.createTestAccount((err, account) => {

        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: account.user,
                pass: account.pass
            }
        });

        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>',
            to: 'lacherbert708@gmail.com',
            subject: 'Hello ✔',
            text: 'Hello world?',
            html: '<b>Hello world?</b>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        });
    });
}

function uploadImage(req, res) {
    var clientID = req.params.id;

    if (req.files) {
        var filePath = req.files.image.path;
        var fileSplit = filePath.split('\\');
        var fileName = fileSplit[3];
        var extension = fileName.split('\.');
        var file_ext = extension[1];

        if (clientID != req.client.sub) {
             return removeFilesUpload(res, filePath, 'You dont have Permission')
        }

        if (file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif') {
            Client.findByIdAndUpdate(clientID, {image: fileName}, {new: true}, (err, clientUpdated) => {
                if (err) return res.status(500).send({message: 'Petition Error'});
                if(!clientUpdated) return res.status(404).send({message: 'user not found'});
                return res.status(200).send({client: clientUpdated});
            })
        } else {
             return removeFilesUpload(res, filePath, 'Invalid Extension')
        }
    } else {
        return res.status(200).send({ message: 'No files' })
    }
}

function removeFilesUpload(res, filePath, message) {
    fs.unlink(filePath, (err) => {
        return res.status(200).send({ message: message })
    });
}

function getImageFile(req, res){
    var imageFile = req.params.imageFile;
    var pathFile = './src/uploads/clients/' + imageFile;
    fs.exists(pathFile, (exists) =>{
        if(exists){
            res.sendFile(path.resolve(pathFile));
        } else {
            res.status(200).send({message: 'no exists'})
        }
    })
}



module.exports = {
    getClients,
    getClient,
    addClient,
    updateClient,
    deleteClient,
    uploadImage,
    getImageFile,
    send
}