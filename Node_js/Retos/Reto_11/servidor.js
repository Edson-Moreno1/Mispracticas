import express from "express";
import dotenv from "dotenv";
import rutasAutenticacion from "./rutas/autenticacion.js";
import rutasPerfil from "./rutas/perfil.js";

// Configurar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/auth", rutasAutenticacion);
app.use("/api", rutasPerfil);

// Ruta de prueba
app.get("/", (req, res) => {
  res.json({
    mensaje: "Servidor de autenticacion JWT funcionando",
    endpoints: {
      login: "POST /api/auth/login",
      perfil: "GET /api/perfil",
    },
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    exito: false,
    error: "Error interno del servidor",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});