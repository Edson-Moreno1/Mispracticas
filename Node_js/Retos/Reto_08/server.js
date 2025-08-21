import express from "express";
import dotenv from "dotenv";
import conectarBD from "./src/config/database.js";
import routes from "./src/routes/index.js";

// Configurar variables de entorno
dotenv.config();

const app = express();
const PUERTO = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para logging de requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
  next();
});

// Conectar a MongoDB
conectarBD();

// Rutas
app.use("/", routes);

// Middleware para rutas no encontradas (SIN asterisco)
app.use((req, res) => {
  res.status(404).json({
    error: "Ruta no encontrada",
    mensaje: `La ruta ${req.method} ${req.originalUrl} no existe`,
    rutasDisponibles: [
      "GET /",
      "GET /libros",
      "GET /libros/:id",
      "POST /libros",
      "PUT /libros/:id",
      "DELETE /libros/:id"
    ]
  });
});

// Middleware para manejo global de errores
app.use((error, req, res, next) => {
  console.error("Error no manejado:", error);
  res.status(500).json({
    error: "Error interno del servidor",
    mensaje: "Algo salió mal en el servidor"
  });
});

// Iniciar servidor
app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en puerto ${PUERTO}`);
  console.log(`URL: http://localhost:${PUERTO}`);
  console.log("Presiona Ctrl+C para detener el servidor");
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err, promise) => {
  console.log('Error no manejado:', err.message);
  process.exit(1);
});