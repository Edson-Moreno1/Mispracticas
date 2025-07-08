export function contarPropiedades (req,res){

    const objeto = req.body;
    const detallado = req.query.detallado === 'true';

    if(!objeto || typeof objeto !== 'object' || Array.isArray(objeto)){
        return res.status(400).json({error:'La entrada debe ser un objeto valido'});
    }
    const claves = Object.keys(objeto);
    const resultado = {
        propiedades:claves.length
    };

    if(detallado){
        resultado.detalles = claves;
    }
    return res.status(200).json(resultado);
}