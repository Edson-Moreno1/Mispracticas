const express = require('express');
const cors = require('cors');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js');
const profesoresRoutes = require('./routes/profesoresRoutes.js');
const cursosRoutes = require('./routes/cursosRoutes.js');

app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);
app.use("/cursos", cursosRoutes);

PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});

