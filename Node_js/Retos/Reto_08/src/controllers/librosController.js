import Libro from "../models/Libro.js";
import Autor from "../models/Autor.js";
import Reseña from "../models/Reseña.js";
import mongoose from "mongoose";

// Obtener todos los libros con autor
const obtenerLibros = async (req, res) => {
  try {
    const libros = await Libro.find()
      .populate('autorId', 'nombre nacionalidad')
      .select('titulo año genero autorId');
    
    // Transformar respuesta para que coincida con el formato esperado
    const librosFormateados = libros.map(libro => ({
      _id: libro._id,
      titulo: libro.titulo,
      año: libro.año,
      genero: libro.genero,
      autor: {
        _id: libro.autorId._id,
        nombre: libro.autorId.nombre,
        nacionalidad: libro.autorId.nacionalidad
      }
    }));

    res.status(200).json(librosFormateados);
  } catch (error) {
    console.error('Error al obtener libros:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      mensaje: error.message 
    });
  }
};

// Obtener libro por ID con autor y reseñas
const obtenerLibroPorId = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID de libro inválido" });
    }

    // Buscar libro con autor
    const libro = await Libro.findById(id)
      .populate('autorId', 'nombre nacionalidad');

    if (!libro) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    // Buscar reseñas del libro
    const reseñas = await Reseña.find({ libroId: id })
      .select('comentario puntuacion fecha');

    // Formatear respuesta
    const respuesta = {
      _id: libro._id,
      titulo: libro.titulo,
      año: libro.año,
      genero: libro.genero,
      autor: {
        _id: libro.autorId._id,
        nombre: libro.autorId.nombre,
        nacionalidad: libro.autorId.nacionalidad
      },
      reseñas: reseñas.map(reseña => ({
        _id: reseña._id,
        comentario: reseña.comentario,
        puntuacion: reseña.puntuacion,
        fecha: reseña.fecha
      }))
    };

    res.status(200).json(respuesta);
  } catch (error) {
    console.error('Error al obtener libro:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      mensaje: error.message 
    });
  }
};

// Crear nuevo libro
const crearLibro = async (req, res) => {
  try {
    const { titulo, año, genero, autorId } = req.body;

    // Validar que todos los campos requeridos estén presentes
    if (!titulo || !año || !genero || !autorId) {
      return res.status(400).json({ 
        error: "Faltan campos requeridos",
        campos: "titulo, año, genero, autorId son obligatorios"
      });
    }

    // Validar ObjectId del autor
    if (!mongoose.Types.ObjectId.isValid(autorId)) {
      return res.status(400).json({ error: "ID de autor inválido" });
    }

    // Verificar que el autor exista
    const autorExiste = await Autor.findById(autorId);
    if (!autorExiste) {
      return res.status(404).json({ error: "Autor no encontrado" });
    }

    // Crear el libro
    const nuevoLibro = new Libro({
      titulo,
      año,
      genero,
      autorId
    });

    const libroGuardado = await nuevoLibro.save();
    
    // Populate autor para la respuesta
    await libroGuardado.populate('autorId', 'nombre nacionalidad');

    res.status(201).json({
      mensaje: "Libro creado exitosamente",
      libro: {
        _id: libroGuardado._id,
        titulo: libroGuardado.titulo,
        año: libroGuardado.año,
        genero: libroGuardado.genero,
        autor: {
          _id: libroGuardado.autorId._id,
          nombre: libroGuardado.autorId.nombre,
          nacionalidad: libroGuardado.autorId.nacionalidad
        }
      }
    });
  } catch (error) {
    // Manejar error de duplicado (título único)
    if (error.code === 11000) {
      return res.status(400).json({ 
        error: "Ya existe un libro con ese título" 
      });
    }
    
    console.error('Error al crear libro:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      mensaje: error.message 
    });
  }
};

// Actualizar libro
const actualizarLibro = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, año, genero, autorId } = req.body;

    // Validar ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID de libro inválido" });
    }

    // Si se proporciona autorId, validarlo
    if (autorId) {
      if (!mongoose.Types.ObjectId.isValid(autorId)) {
        return res.status(400).json({ error: "ID de autor inválido" });
      }
      
      const autorExiste = await Autor.findById(autorId);
      if (!autorExiste) {
        return res.status(404).json({ error: "Autor no encontrado" });
      }
    }

    const libroActualizado = await Libro.findByIdAndUpdate(
      id,
      { titulo, año, genero, autorId },
      { new: true, runValidators: true }
    ).populate('autorId', 'nombre nacionalidad');

    if (!libroActualizado) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    res.status(200).json({
      mensaje: "Libro actualizado exitosamente",
      libro: {
        _id: libroActualizado._id,
        titulo: libroActualizado.titulo,
        año: libroActualizado.año,
        genero: libroActualizado.genero,
        autor: {
          _id: libroActualizado.autorId._id,
          nombre: libroActualizado.autorId.nombre,
          nacionalidad: libroActualizado.autorId.nacionalidad
        }
      }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ 
        error: "Ya existe un libro con ese título" 
      });
    }

    console.error('Error al actualizar libro:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      mensaje: error.message 
    });
  }
};

// Eliminar libro
const eliminarLibro = async (req, res) => {
  try {
    const { id } = req.params;

    // Validar ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "ID de libro inválido" });
    }

    const libroEliminado = await Libro.findByIdAndDelete(id);

    if (!libroEliminado) {
      return res.status(404).json({ error: "Libro no encontrado" });
    }

    // También eliminar las reseñas asociadas
    await Reseña.deleteMany({ libroId: id });

    res.status(200).json({
      mensaje: "Libro y sus reseñas eliminados exitosamente",
      libro: {
        _id: libroEliminado._id,
        titulo: libroEliminado.titulo
      }
    });
  } catch (error) {
    console.error('Error al eliminar libro:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      mensaje: error.message 
    });
  }
};

export {
  obtenerLibros,
  obtenerLibroPorId,
  crearLibro,
  actualizarLibro,
  eliminarLibro
};