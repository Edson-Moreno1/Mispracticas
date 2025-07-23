/**
 * Valida que el input sea un objeto válido (no null, no array)
 * @param {any} objeto - El objeto a validar
 * @returns {boolean} - True si es un objeto válido
 */
function esObjetoValido(objeto) {
    // Verificar que no sea null, que sea objeto y no array
    return objeto !== null && 
           typeof objeto === "object" && 
           !Array.isArray(objeto);
}

/**
 * Cuenta las propiedades de un objeto
 * @param {Object} req - Request de Express
 * @param {Object} res - Response de Express
 */
export function contarPropiedades(req, res) {
    try {
        
        const objeto = req.body;
        
        
        if (!esObjetoValido(objeto)) {
            return res.status(400).json({
                error: "El cuerpo de la petición debe ser un objeto válido (no array, no null)"
            });
        }
        
    
        const cantidad = Object.keys(objeto).length;
        
       
        res.status(200).json({
            propiedades: cantidad
        });
        
    } catch (error) {
        
        res.status(500).json({
            error: "Error interno del servidor",
            detalle: error.message
        });
    }
}