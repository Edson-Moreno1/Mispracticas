import express from "express";
import registroRoutes from "./routes/registro.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware para logs basicos
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Conectar las rutas
app.use("/api", registroRoutes);

// Ruta de prueba basica
app.get("/", (req, res) => {
  res.json({
    success: true,
    mensaje: "Servidor del Reto 10 funcionando correctamente",
    proyecto: "Sistema de registro con validaciones",
    endpoints: {
      registro: "POST /api/registro"
    }
  });
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).json({
    success: false,
    error: "Error interno del servidor"
  });
});

// Middleware para rutas no encontradas
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint no encontrado"
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`Endpoint de registro: http://localhost:${PORT}/api/registro`);
  console.log(`Reto 10: Sistema de registro con validaciones listo`);
});