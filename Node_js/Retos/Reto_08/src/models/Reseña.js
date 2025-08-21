import mongoose from "mongoose";

const esquemaReseña = new mongoose.Schema({
  comentario: {
    type: String,
    required: [true, 'El comentario es requerido'],
    trim: true,
    minlength: [10, 'El comentario debe tener al menos 10 caracteres']
  },
  puntuacion: {
    type: Number,
    required: [true, 'La puntuación es requerida'],
    min: [1, 'La puntuación mínima es 1'],
    max: [5, 'La puntuación máxima es 5']
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  libroId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Libro",
    required: [true, 'El libro es requerido']
  }
}, {
  timestamps: true
});

const Reseña = mongoose.model("Reseña", esquemaReseña);

export default Reseña;