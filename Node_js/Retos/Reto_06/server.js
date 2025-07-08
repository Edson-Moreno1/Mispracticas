import express from 'express';
import { contarPropiedades } from './controllers/contarController.js';

import bodyParser from 'body-parser';
const PORT = 3000;

const app = express();

app.use(express.json());

app.post('/contar',contarPropiedades);

app.get('/',(req,res)=>{
    res.send('Servidor activo');
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});