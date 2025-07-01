export function Saludo (req,res,next){
    const hora = new Date().getHours();
    if(hora >=6 && hora <12){
        req.saludo= '¡Buenos dias';
    }else if(hora >=12 && hora <18){
        req.saludo='¡Buenas Tardes';
    }else{
        req.saludo='¡Buenas Noches!';
    }
    next();
}