const mongoose = require('mongoose');

const uri = 'mongodb+srv://edsonmorenoortega:Recuerdame01@cluster0.80tvxfm.mongodb.net/tu_base?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Conectado a MongoDB Atlas!'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));
