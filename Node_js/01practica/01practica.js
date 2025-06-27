const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.end('Bienvenidos a Express practica del Edson');
});

//Primer ruta: mostrar un libro del autor
app.get('/autor/:nombreAutor/libro/:idLibro', (req, res) => {
  const Idlibro = req.params.idLibro;
  const NombreAutor = req.params.nombreAutor;
  res.send(`El autor es ${NombreAutor} y el libro es el numero ${Idlibro}`);
});

// Segunda ruta: mostrar todo los libros
app.get('/autor/:nombreAutor/libros', (req, res) => {
  const Nombreautor = req.params.nombreAutor;
  res.send(`Aqui tienes todos los libros de ${Nombreautor}`);
});

// 3er ruta que registre en consola cuando alguien entre
app.get('/contacto', (req, res) => {
  const hora = new Date().toLocaleDateString();
  console.log(`${hora} alguien entro a ${req.url} `);
  res.json({
    mensaje: 'Bienvenido a la pagina de contacto',
  });
});
app.listen(3000, () => {
  console.log('Servidor funcionando al 1000%');
});

