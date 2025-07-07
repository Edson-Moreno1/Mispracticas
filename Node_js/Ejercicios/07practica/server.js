import express from 'express';
import userRoutes from './src/routes/usersRoutes.js';

const PORT = 3000;
const app = express();

app.use(express.json());

app.use('/api',userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});