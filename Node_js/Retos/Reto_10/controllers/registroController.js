export const registrarUsuario = (req, res) => {
  try {
    const { nombre, correo, edad, contraseña } = req.body;

    // Aqui iria la logica para guardar en base de datos
    // Por ahora solo simulamos el exito
    console.log("Datos recibidos para registro:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Edad:", edad);
    console.log("Contraseña: [OCULTA]");

    // Respuesta exitosa según el formato requerido
    res.status(201).json({
      success: true,
      mensaje: "Usuario registrado con exito",
      data: {
        nombre,
        correo,
        edad
        // No devolvemos la contraseña por seguridad
      }
    });

  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({
      success: false,
      error: "Error al registrar usuario"
    });
  }
};