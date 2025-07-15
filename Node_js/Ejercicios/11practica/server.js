const express = require('express');
const connectDB = require('./src/config/database');
const TaskRoutes = require('./src/routes/TaskRoutes');
const port = 3000;ls
const app = express ();

connectDB(app);

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Wlcome to Tasks API');
});

app.use('/api',TaskRoutes);

app.listen(port,()=>{
    console.log('Server is running')
});