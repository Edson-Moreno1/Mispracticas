//Importaciones
import express from 'express';
import { logger} from '../03practica/middlewares/logger.js'
import { saludo } from '../03practica/middlewares/saludo.js';
import { auth } from '../03practica/middlewares/auth.js';

const app = express();
const PORT = 3000;

// Correcciones

const productos = ["tornillo","tuerca","arandela","valvula"];

//Ruta 1
app.get('/inventario',auth,logger,(req,res)=>{
    res.json({productos});

});

app.get('/inventario/saludo/:empleado',auth,logger,saludo,(req,res)=>{
    const {empleado}=req.params;
    res.json({mensaje:`${req.saludo},${empleado}. Bienvenid al inventario industrial`});
});

app.get('/inventario/buscar',auth,logger,(req,res)=>{
    const {producto} = req.query;85
    if(producto){
        res.json({mensaje:`Buscando informacion de : ${producto}`});
    }else{
        res.status(400).json({mensaje:`Parametro ${producto} no valido`});
    }
});

app.get('/auditoria',logger,(req,res)=>{
    res.json({mensaje: "Auditoria: registro de accesos a la API"});
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});