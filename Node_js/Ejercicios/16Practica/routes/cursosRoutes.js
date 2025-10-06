const express = require('express');
const router = express.Router();
const cursosController = require('../controllers/cursosController.js');

router.get('/',cursosController.consultar);
router.post('/',cursosController.ingresar);
router.post('/registraEstudiante',cursosController.asociarEstudiante);


router.route("/:id")
    .get(cursosController.consultarid)
    .put(cursosController.actualizarid)
    .delete(cursosController.borrarid);

module.exports = router;