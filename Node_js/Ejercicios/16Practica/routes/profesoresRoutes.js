const express = require('express');
const router = express.Router();
const profesoresControllers = require('../controllers/profesoresControllers.js');

router.get('/',profesoresControllers.consultar);

router.post('/',profesoresControllers.ingresar);

router.route("/:id")
    .get(profesoresControllers.consultarid)
    .put(profesoresControllers.actualizarid)
    .delete(profesoresControllers.borrarid);



    module.exports = router;
