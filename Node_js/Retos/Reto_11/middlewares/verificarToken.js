import jwt from "jsonwebtoken";

export const verificarToken = (req, res, next) => {
  try {
    // Obtener token del header Authorization
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        exito: false,
        error: "Token no proporcionado",
      });
    }

    // Verificar formato: "Bearer <token>"
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        exito: false,
        error: "Formato de token invalido",
      });
    }

    // Verificar y decodificar token
    const decodificado = jwt.verify(token, process.env.JWT_SECRET);

    // Agregar informacion del usuario al request
    req.usuario = decodificado;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        exito: false,
        error: "Token expirado",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({
        exito: false,
        error: "Token invalido",
      });
    }

    return res.status(500).json({
      exito: false,
      error: "Error verificando token",
    });
  }
};