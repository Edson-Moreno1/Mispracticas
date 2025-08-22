import { validationResult } from "express-validator";

export const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    // Formatear los errores según el formato requerido
    const erroresFormateados = errors.array().map((error) => ({
      field: error.path,
      message: error.msg
    }));

    return res.status(400).json({
      success: false,
      errors: erroresFormateados
    });
  }

  // Si no hay errores, continuar con el siguiente middleware
  next();
};