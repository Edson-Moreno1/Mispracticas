const express = require('express');
const router = express.Router();

const usuariosRoutes = require('./usuariosRoutes.js');

router.use('/usuarios',usuariosRoutes);

module.exports = router;