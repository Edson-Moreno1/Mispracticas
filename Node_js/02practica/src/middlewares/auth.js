export function authMiddleware (req,res, next){
    const token = req.headers['authorization'];
    if (token === 'erp-super-secreto'){
        next ();
    } else {
        res.status(401).json({mensaje:'No autorizado . Debes proporcionar un token válido.'});
    }
}