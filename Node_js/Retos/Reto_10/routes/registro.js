import express from "express";
import { body } from "express-validator";
import { registrarUsuario } from "../controllers/registroController.js";
import { validarCampos } from "../middlewares/validarCampos.js";

const router = express.Router();

// Validaciones para el registro
const validacionesRegistro = [
  body("nombre")
    .trim()
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres"),

  body("correo")
    .isEmail()
    .withMessage("Debe ser un correo valido")
    .normalizeEmail(),

  body("edad")
    .isInt({ min: 18, max: 99 })
    .withMessage("La edad debe ser un numero entre 18 y 99"),

  body("contraseña")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
];

// Ruta POST /registro
router.post("/registro", validacionesRegistro, validarCampos, registrarUsuario);

export default router;