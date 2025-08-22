import jwt from "jsonwebtoken";
import fs from "fs/promises";
import path from "path";

// Funcion para leer usuarios del archivo JSON
const leerUsuarios = async () => {
  try {
    const rutaUsuarios = path.join(process.cwd(), "datos", "usuarios.json");
    const datos = await fs.readFile(rutaUsuarios, "utf-8");
    return JSON.parse(datos);
  } catch (error) {
    console.error("Error leyendo usuarios:", error);
    return [];
  }
};

export const login = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    // Validar que se enviaron los campos requeridos
    if (!correo || !contrasena) {
      return res.status(400).json({
        exito: false,
        error: "Correo y contrasena son requeridos",
      });
    }

    // Leer usuarios del archivo
    const usuarios = await leerUsuarios();

    // Buscar usuario por correo y contrasena
    const usuario = usuarios.find(
      (u) => u.correo === correo && u.contrasena === contrasena
    );

    if (!usuario) {
      return res.status(401).json({
        exito: false,
        error: "Credenciales invalidas",
      });
    }

    // Generar token JWT
    const payload = {
      id: usuario.id,
      correo: usuario.correo,
      nombre: usuario.nombre,
      rol: usuario.rol,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "24h",
    });

    // Respuesta exitosa
    res.json({
      exito: true,
      mensaje: "Login exitoso",
      token,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error("Error en login:", error);
    res.status(500).json({
      exito: false,
      error: "Error interno del servidor",
    });
  }
};