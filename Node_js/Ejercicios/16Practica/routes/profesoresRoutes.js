const express = require('express');
const router = express.Router();
const profesoresControllers = require('../controllers/profesoresControllers.js');

router.get('/',profesoresControllers.consultar);
router.put('/',profesoresControllers.actualizar);

router.route("/:id")
    .get(profesoresControllers.consultarid)
    .put(profesoresControllers.actualizarid)
    .delete(profesoresControllers.borrarid);

router.route("/")
    .post(profesoresControllers.ingresar)
    .delete(profesoresControllers.borrar);

    module.exports = router;
