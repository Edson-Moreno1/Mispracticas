//Importaciones
import express from 'express';
import { Logger } from '../03practica/middlewares/logger.js'
import { Saludo } from '../03practica/middlewares/saludo.js';
import { Auth } from '../03practica/middlewares/auth.js';

const app = express();
const PORT = 3000;
//Ruta 1
app.get('/inventario',Auth,Logger,(req,res)=>{
    const {producto} =req.query
    res.json({mensaje:'Bienvenido al inventario'})

});

app.get('/inventario/saludo/:empleado',Auth,Logger,Saludo,(req,res)=>{
    const {name}=req.params;
    res.json({mensaje:`Saludos ${name},${req.saludo}`});
});

app.get('/inventario/buscar',Auth,Logger,(req,res)=>{
    const {producto} = req.query;
    if(producto){
        res.json({mensaje:`Buscando informacion de : ${producto}`});
    }else{
        res.status(400).json({mensaje:`Parametro ${producto} no valido`});
    }
});

app.get('/auditoria',Logger,(req,res)=>{
    res.json({mensaje: "Auditoria: registro de accesos a la API"});
});

app.listen(PORT,()=>{
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});