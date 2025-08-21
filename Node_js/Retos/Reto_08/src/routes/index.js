import express from "express";
import librosRoutes from "./librosRoutes.js";

const router = express.Router();

// Rutas principales
router.use("/libros", librosRoutes);

// Ruta de bienvenida
router.get("/", (req, res) => {
  res.json({
    mensaje: "API de Biblioteca - Reto 08",
    version: "1.0.0",
    endpoints: {
      libros: {
        "GET /libros": "Listar todos los libros con autor",
        "GET /libros/:id": "Obtener libro específico con reseñas",
        "POST /libros": "Crear nuevo libro",
        "PUT /libros/:id": "Actualizar libro",
        "DELETE /libros/:id": "Eliminar libro"
      }
    },
    ejemploUso: {
      crearLibro: {
        url: "POST /libros",
        body: {
          titulo: "Ejemplo Libro",
          año: 2024,
          genero: "Ficción",
          autorId: "ID_DEL_AUTOR"
        }
      }
    }
  });
});

export default router;