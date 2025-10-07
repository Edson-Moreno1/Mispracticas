import 'dotenv/config';
import express from 'express';
import routeMascotas from './routes/mascotasRoutes.js';

const app = express();

app.use('/mascotas',routeMascotas);

try{
    const PORT = process.env.PORT || 3000;
    app.listen(PORT,()=>{
        console.log(`Servidor escuchando en http://localhost:${PORT}`);
    })
}
catch(error){
    console.log(error);
}
