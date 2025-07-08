const mongoose = require ('mongoose');

const UsuarioSchema= new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    edad:{
        type:Number,

    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

const Usuario = mongoose.Model('Usuario',UsuarioSchema);

module.exports = Usuario;