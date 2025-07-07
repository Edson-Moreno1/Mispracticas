export function saludoMiddleware(req,res,next){
    const hora = new Date().getHours();
    if(hora >=6 && hora <12){
        req.saludo = '¡Buenos días!';
    } else if (hora >=12 && hora <18){
        req.saludo = '¡Buenas tardes!';
    }else  {
        req.saludo = '¡Buenas noches!';
    }
    next ();
}