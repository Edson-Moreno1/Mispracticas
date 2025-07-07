import express from 'express';
import {obtenerTareas,crearTarea,actualizarTarea,deleteTarea} from '../controllers/taskController.js';

const router = express.Router();

//Obtener todas las tareas?
//http://localhost:3000/task
router.get('/task',obtenerTareas);
//Crear una nueva tarea
router.post('/task',crearTarea);
//Actualizar una tarea existente
router.put('/task/:id',actualizarTarea);
//Eliminar una tarea
router.delete('/task/:id',deleteTarea);

export default router;