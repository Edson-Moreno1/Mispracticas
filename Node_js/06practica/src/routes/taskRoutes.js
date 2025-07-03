import express from 'express';

import {
    obtenerTareas,
    crearTarea,
    actualizarTarea,
    deleteTarea
} from '../middleware/taskController.js';

const router = express.Router ();

router.get('/tareas',obtenerTareas);
router.post('/tareas',crearTarea);
router.put('/tareas/:id',actualizarTarea);
router.delete('/tareas/:id',deleteTarea);

export default router;