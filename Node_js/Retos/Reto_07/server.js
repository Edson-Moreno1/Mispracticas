import express from 'express';
import routes from './routes/index.js';

const app = express();
const PORT = 3000;

app.use(express.json());


app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

app.use('/api', routes);


app.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "Servidor API Relaciones funcionando",
        documentacion: "GET /api para ver endpoints disponibles"
    });
});


// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).json({
        error: "Endpoint no encontrado",
        endpoints_disponibles: [
            "GET /",
            "GET /api",
            "GET /api/calificaciones"
        ]
    });
});

app.use((error, req, res, next) => {
    console.error('Error no manejado:', error);
    res.status(500).json({
        error: "Error interno del servidor",
        timestamp: new Date().toISOString()
    });
});


app.listen(PORT, () => {
    console.log(` Servidor API ejecutándose en http://localhost:${PORT}`);

});