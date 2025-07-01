export function Auth (req,res,next){
    const token =req.headers['Authorization'];
    if(token === 'erp-super-secreto'){
        next ();
    }else{
        res.status(401).json({mensaje:'No autorizado. Debes prorcionar token valido.'});
    }
}