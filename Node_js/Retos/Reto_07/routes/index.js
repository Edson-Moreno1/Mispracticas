import express from 'express';
import calificacionesRoutes from './calificacionesRoutes.js';

const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({
        mensaje: "API",
        version: "1.0.0",
        endpoints: {
            calificaciones: "GET /api/calificaciones - Obtiene todas las calificaciones con información completa"
        },
        ejemplo: {
            url: "GET http://localhost:3000/api/calificaciones"
        }
    });
});


router.use('/calificaciones', calificacionesRoutes);

export default router;