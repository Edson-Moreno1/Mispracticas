import mongoose from "mongoose";

const esquemaLibro = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es requerido'],
    unique: true,
    trim: true
  },
  año: {
    type: Number,
    required: [true, 'El año es requerido'],
    min: [1000, 'El año debe ser mayor a 1000'],
    max: [new Date().getFullYear(), 'El año no puede ser futuro']
  },
  genero: {
    type: String,
    required: [true, 'El género es requerido'],
    trim: true
  },
  autorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Autor",
    required: [true, 'El autor es requerido']
  }
}, {
  timestamps: true
});

const Libro = mongoose.model("Libro", esquemaLibro);

export default Libro;