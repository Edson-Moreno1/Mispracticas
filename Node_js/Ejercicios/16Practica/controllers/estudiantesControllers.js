class EstudianteController {
    constructor() {


    }

    consultar(req, res){
        res.json({msg:'Consulta de estudiantes desde la clase'})
    }
    consultarDetalle(req, res){
        const {id} =req.params;
        res.json({msg:`Consulta de UN estudiante desde la clase ${id}`});
    }
    ingresar(req,res){
        res.json({msg:'Ingreso de estudiantes desde la clase'});
        }
    actualizar(req,res){
        res.json({msg:'Actualizacion de estudiantes desde la clase'})
    }
    borrar(req,res){
        res.json({msg:'Borrado de estudiantes desde la clase'})
    }
}

module.exports = new EstudianteController();

