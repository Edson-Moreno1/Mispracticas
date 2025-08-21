import express from "express";
import {
  obtenerLibros,
  obtenerLibroPorId,
  crearLibro,
  actualizarLibro,
  eliminarLibro
} from "../controllers/librosController.js";

const router = express.Router();

// GET /libros - Listar todos los libros con autor
router.get("/", obtenerLibros);

// GET /libros/:id - Obtener un libro específico con reseñas
router.get("/:id", obtenerLibroPorId);

// POST /libros - Crear un nuevo libro
router.post("/", crearLibro);

// PUT /libros/:id - Actualizar un libro
router.put("/:id", actualizarLibro);

// DELETE /libros/:id - Eliminar un libro
router.delete("/:id", eliminarLibro);

export default router;