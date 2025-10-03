const db = require('../database/conexion.js');
class ProfesoresControllers{
    constructor(){}
    consultar(req,res){
        res.json({msg:'Consulta de profesores desde la clase'})
    }
    ingresar(req,res){
        res.json({msg:'Ingreso de profesores desde la clase'})
    }
    actualizar(req,res){
        res.json({msg:'Actualizacion de profesores desde la clase'})
    }
    borrar(req,res){
        res.json({msg:'Borrado de profesores desde la clase'})
    }
    consultarid(req,res){
        res.json({msg:'Consulta de UN profesor desde la clase'})
    }
    actualizarid(req,res){
        res.json({msg:'Actualizacion de UN profesor desde la clase'})
    }
    borrarid(req,res){
        res.json({msg:'Borrado de UN profesor desde la clase'})
    }

}

module.exports = new ProfesoresControllers();