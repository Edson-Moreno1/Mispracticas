const db = require('../database/conexion.js');

class CursosControllers{
    constructor(){}
    consultar(req,res){
        res.json({msg:'Consulta de cursos desde la clase'})
    }
    ingresar(req,res){
        res.json({msg:'Ingreso de cursos desde la clase'})
    }
    actualizar(req,res){
        res.json({msg:'Actualizacion de cursos desde la clase'})
    }
    borrar(req,res){
        res.json({msg:'Borrado de cursos desde la clase'})
    }
    consultarid(req,res){
        res.json({msg:'Consulta de UN curso desde la clase'})
    }
    actualizarid(req,res){
        res.json({msg:'Actualizacion de UN curso desde la clase'})
    }
    borrarid(req,res){
        res.json({msg:'Borrado de UN curso desde la clase'})
    }

}

module.exports = new CursosControllers();