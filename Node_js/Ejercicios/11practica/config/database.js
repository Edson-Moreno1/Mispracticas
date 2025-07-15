const mongoose = require('mongoose');

const connectDB = async(app)=>{
    const strConnection = 'mongodb://localhost:27017/11practica';
    try{
        await mongoose.connect(strConnection,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('MongoDB is connected');
    }catch(error){
        console.error(error);
        process.exit(1);
    }
}

module.exports= connectDB;