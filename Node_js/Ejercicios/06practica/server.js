import express from 'express';
import taskRoutes from './src/routes/taskRoutes.js';

const PORT = 3000;
const app = express();

app.use(express.json());

app.use(taskRoutes);


app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});