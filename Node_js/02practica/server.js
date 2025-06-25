import express from 'express';
//const express =require('express');
import {logger} from './src/middlewares/logger.js';
import {parseQuery} from './src/middlewares/parseQuery.js';
import {loadData} from './src/storage.js';
import {userRouter} from './src/routers/usersRouter.js';


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

    res.end('Hola mundo de new');
});


app.listen(port,()=>{
    console.log(`Servidor escuchando en http://localhost:${port}`);
});