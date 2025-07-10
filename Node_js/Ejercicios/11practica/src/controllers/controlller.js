const Usuario = require("../models/usuario");

async function obtenerUsuario(req,res){
    const user = await Usuario.findById(req.params.id);
    if(!user){
        res.status(404).json({error:'Usuario no encontrado'});
    }
    res.json(user);
}

async function obtenerUsuarios (req,res) {
    try{
    const users = await Usuario.find().sort({nombreCompleto});
    res.json(users);
    }catch(error){
        res.status(500).json({error:'Internal Server Error'});
    }
}

async function crearUsuario (req,res) {
try {
    const {nombreCompleto,email,municipioId} = req.body;  // esto viene de usuario.js
    if(!nombreCompleto || !email || municipioId){
        return res.status(400).json({error:'Faltan campos requeridos'});
    }
    const newUser = await Usuario.create({
        nombreCompleto,
        email,
        municipioId
    });
    res.status(201).json(newUser);

}catch (error) {
    res.status(500).json({error:'Internal Server Error'});    

}
}
async function actualizarUsuario (req,res) {
    try{
        const {nombreCompleto,email,municipioId} = req.body;  
        if(!nombreCompleto || !email || municipioId){
           return res.status(400).json({error:'Faltan campos requeridos'});
        }
        const updateUser = await Usuario.findByIdAndUpdate(req.params.id,req.body);
        
        if(!updaterUser){
          return  res.status(404).json({error:'Usuario no encontrado'});
        }
        res.json(updateUser);
    }catch(error){
        res.status(500).json({error:'Internal Server Error'});
    }
}

async function eliminarUsuario (req,res) {
    try{
        const deletedUser = await Usuario.findByIdAndDelete(req.params.id);
        if(!deletedUser){
            return res.status(404).json({error:'Usuario no encontrado'});
        }
        res.sendStatus(204);
    }catch(error){
        res.status(500).json({error:'Internal Server Error'});
    }
}


module.exports = {
    obtenerUsuario,
    obtenerUsuarios,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario
}