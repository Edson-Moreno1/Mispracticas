import { estudiantes } from '../data/estudiantes.js';
import { cursos } from '../data/cursos.js';
import { calificaciones } from '../data/calificaciones.js';

/**
 * Obtiene todas las calificaciones con información completa de estudiantes y cursos
 * @param {Object} req - Request de Express
 * @param {Object} res - Response de Express
 */
export function obtenerCalificaciones(req, res) {
    try {
        // Transformar calificaciones combinando con estudiantes y cursos
        const calificacionesCompletas = calificaciones.map(calificacion => {
            // Encuentra el estudiante de cada calificación
            const estudiante = estudiantes.find(e => e.id === calificacion.estudianteId);
            
            // Encuentra el curso de cada calificación
            const curso = cursos.find(c => c.id === calificacion.cursoId);
            
            // Validar que existan las relaciones
            if (!estudiante || !curso) {
                throw new Error(`Relación no encontrada para calificación ID ${calificacion.id}`);
            }
            
            // Crear el objeto con la estructura deseada
            return {
                nombre: estudiante.nombre,
                curso: curso.nombre,
                calificacion: calificacion.calificacion
            };
        });
        
        // Respuesta exitosa
        res.status(200).json(calificacionesCompletas);
        
    } catch (error) {
        // Manejo de errores en relaciones
        res.status(500).json({
            error: "Error al procesar las calificaciones",
            detalle: error.message
        });
    }
}