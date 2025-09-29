const express = require('express');
const app = express();
const estudiantesRoutes = require('./routes/estudiantesRoutes.js')
const profesoresRoutes = require('./routes/profesoresRoutes.js')

app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.use("/estudiantes", estudiantesRoutes);
app.use("/profesores", profesoresRoutes);

PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});

