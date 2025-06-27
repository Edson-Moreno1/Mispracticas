import express from 'express';
//const express =require('express');
import {logger} from './src/middlewares/logger.js';
import {parseQuery} from './src/middlewares/parseQuery.js';
import {loadData} from './src/storage.js';



const app = express();
await loadData();
const port = 3000; // esto es nuevo para mi



app.get('/:name',logger,(req,res)=>{ //  antes del => se manda a llamar todas las funciones 
   http://localhost:3000/Juan/Monitor?nombre=Rodrigo&isAdmin=true

   if(req.query.isAdmin==='true'){
    res.end(`Welcome Admin ${req.params.name} to your API`);
   }
   else{
    res.end(`Welcome ${req.params.name}`);
   }


});

app.get('/saludo/:name',logger,(req,res)=>{
    const {name} = req.params;
    res.json({mensaje:`Hola ${name}`});



});

app.get('/api/edad',logger,(req,res)=>{
    const anioNacimiento = parseInt(req.query.anioNacimiento);
    const actual = new Date().getFullYear();

    if (!anioNacimiento || anioNacimiento >= actual){
        return res.status(400).json({mensaje:'Año invalido'});
    }
    
    const edad=actual-anioNacimiento;
    res.json({anioNacimiento,edad} );

});

app.get('/suma/:a/:b',logger,(req,res) =>{
    const {a,b} =req.params;
    const suma= Number(a)+Number(b);
    res.json({mensaje:`La suma es ${suma}`});

    if(isNaN(suma)){
        return res.json({mensaje:'Parametros invalidos'});
    }

});

app.get('/perfil/:usuario',logger,(req,res)=>{
    const {usuario} = req.params;
    const {lang} = req.query;

    let mensaje = `Welcome ${usuario}`;
    
    if(lang === 'es'){
        mensaje = `Bienvenido ${usuario}`;
    }
    
    if(lang === 'fr'){
        mensaje = `Bienvenue ${usuario}`;
    }
    if(lang === 'br'){
        mensaje = `Bem vindo ${usuario}`;
    }
    res.json({mensaje,language: lang || 'default'});

});

app.get('/api/buscar',logger,(req,res)=>{
    const {producto,categoria} = req.query;
    if(!producto || !categoria){
        return res.status(400).json({
            mensaje:'Faltan parámetros en la ruta'
        })
       
    }
     res.json({
            busqueda:producto,
            categoria,
            mensaje:`Buscando ${producto} en la categoria ${categoria}...`

        });
});

app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

