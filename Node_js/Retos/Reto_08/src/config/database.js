import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conectarBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado exitosamente");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error.message);
    process.exit(1);
  }
};

// Eventos de conexión para debugging
mongoose.connection.on('connected', () => {
  console.log('Mongoose conectado a MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log('Error de Mongoose:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose desconectado');
});

export default conectarBD;