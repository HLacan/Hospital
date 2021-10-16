'use strict'

var bcrypt = require('bcrypt-nodejs');
var Admin = require('../models/admin');
var nodemailer = require('nodemailer');
var path = require('path');
var fs = require('fs');

//Seleccionar todos los administradores
function getAdmins(req, res) {
    Admin.find((err, admin) => {
        if(err) return res.status(500).send(err);
        return res.status(200).send(admin);
    });
}

//Seleccionar un Administrador
function getAdmin(req, res){
    let idAdmin = req.params.id;
    Admin.findById(idAdmin, (err, admin) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(admin)
    })
}

//Agregar un Administrador
function addAdmin(req, res){
    var admin = new Admin();
    var params = req.body;

    if (params.firstName && params.lastName && params.dpi && params.phoneNumber && params.password){
        admin.firstName = params.firstName,
        admin.lastName = params.lastName,
        admin.dpi = params.dpi,
        admin.phoneNumber = params.phoneNumber,
        admin.email = (params.firstName.toLowerCase()) + '-' + (params.lastName.toLowerCase()) + '@hindustries.org.gt',
        admin.image = null,
        admin.role = 'Admin'
        Admin.find({$or: [{email: admin.email.toLowerCase()}]}).exec((err, admins) => {
            if (err) return res.status(500).send({message: 'Petition Error'});
            if(admins && admins.length >= 1){
                return res.status(500).send({message: 'This admin already exist'});
            } else {
                bcrypt.hash(params.password, null, null, (err, hash) => {
                    admin.password = hash;
                    admin.save((err, adminStored) => {
                        if (err) return res.status(500).send({message: 'Saving Error'});
                        if (adminStored){
                            res.status(200).send({admin: adminStored});
                        } else {
                            res.status(404).send({message: 'Not found'});
                        }
                    });
                });
            }
        });
    } else {
        res.status(500).send({message: 'Empty Fields'})
    }
}

//Actualizar Admininstrador
function updateAdmin(req, res){
    var adminId = req.params.id;
    var update = req.body;
    update.email = (update.firstName.toLowerCase()) + '-' + (update.lastName.toLowerCase()) + '@hindustries.org.gt';
    Admin.findByIdAndUpdate(adminId, update, {new: true}, (err, adminUpdated) => {
        if (err) return res.status(500).send({ message : 'Petition Error'});
        return res.status(200).send({admin: adminUpdated});
    });
}

//Eliminar Administrador
function deleteAdmin(req, res){
    var adminId = req.params.id;
    Admin.findByIdAndRemove(adminId,(err, adminDeleted) =>{
        if (err) return res.status(500).send({message: 'Petition not Found'});
        return res.status(200).send({admin: adminDeleted});
    })
}

function uploadImage(req, res){
    var adminID = req.params.id;
    console.log(req.files)

    if(req.files){
        var file_path = req.files.image.path;
        console.log(file_path);

        var file_split  = file_path.split('\\');
        console.log(file_split);

        var file_name = file_split[3];
        console.log(file_name);

        var ext_xplit = file_name.split('\.');
        console.log(ext_xplit);

        var file_ext = ext_xplit[1];
        console.log(file_ext);

        if(file_ext == 'png' || file_ext == 'jpg' || file_ext == 'jpeg' || file_ext == 'gif'){
            Admin.findByIdAndUpdate(adminID, {image: file_name}, {new:true}, (err, adminUpdated)=>{
                if(err) return res.status(500).send({message: 'Error en la peticion'});

                if(!adminUpdated) return res.status(404).send({message: 'No se ha podido actualizar el usario'});

                return res.status(200).send({admin: adminUpdated});
            });
        }else{
            return removeFilerOfUploads(res, file_path, 'Extension no valida');
        }



    }else{
        return res.status(200).send({message: 'no se han subido imagenes'});
    }

}

function removeFilerOfUploads(res, file_path, message){
    fs.unlink(file_path, (err)=>{
        return res.status(200).send({message: message});
    });
}
 function getImageFile(req, res){
     var image_file = req.params.imageFile;
     var path_file = './src/uploads/admins/' + image_file;
    
     fs.exists(path_file, (exists) => {
         if(exists){
             res.sendFile(path.resolve(path_file));
         }else{
             res.status(200).send({message: 'No existe la imagen'});
         }
     });
 }











module.exports = {
    getAdmin,
    getAdmins,
    addAdmin,
    updateAdmin,
    deleteAdmin,
    uploadImage,
    getImageFile
}