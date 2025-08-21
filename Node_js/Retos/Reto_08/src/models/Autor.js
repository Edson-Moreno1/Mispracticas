import mongoose from "mongoose";

const esquemaAutor = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del autor es requerido'],
    trim: true
  },
  nacionalidad: {
    type: String,
    required: [true, 'La nacionalidad es requerida'],
    trim: true
  },
  fechaNacimiento: {
    type: Date,
    required: false
  }
}, {
  timestamps: true
});

const Autor = mongoose.model("Autor", esquemaAutor);

export default Autor;