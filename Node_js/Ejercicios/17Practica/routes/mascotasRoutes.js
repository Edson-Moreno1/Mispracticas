import express from 'express';
const route = express.Router();
import mascotasController from '../controllers/mascotasController.js';

route.post('/',mascotasController.create);
route.get('/',mascotasController.getAll);

route.route('/:id')
    .get(mascotasController.getById)
    .put(mascotasController.update)
    .delete(mascotasController.delete);

    export default route;

