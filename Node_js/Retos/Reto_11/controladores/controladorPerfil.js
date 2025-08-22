export const obtenerPerfil = (req, res) => {
  try {
    // El middleware verificarToken ya nos dio req.usuario
    const usuario = req.usuario;

    res.json({
      exito: true,
      mensaje: "Perfil obtenido exitosamente",
      datos: {
        id: usuario.id,
        nombre: usuario.nombre,
        correo: usuario.correo,
        rol: usuario.rol,
        ultimoAcceso: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Error obteniendo perfil:", error);
    res.status(500).json({
      exito: false,
      error: "Error interno del servidor",
    });
  }
};