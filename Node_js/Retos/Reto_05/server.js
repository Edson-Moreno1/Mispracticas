import express from "express";
import { separarParesImpares, validarNumeros } from "./utils/separarParesImpares.js";

const app = express();
const PORT = 3000;

// Middleware para parsear JSON (opcional pero buena práctica)
app.use(express.json());

// Ruta principal para filtrar números
app.get("/filtrar", (req, res) => {
    try {
        // Validar que el parámetro existe
        if (!req.query.numeros) {
            return res.status(400).json({
                error: "El parámetro 'numeros' es requerido",
                ejemplo: "?numeros=1,2,3,4,5"
            });
        }
        
        // Convertir string a array
        const numerosString = req.query.numeros.split(',');
        
        // Validar que todos sean números y convertir a números
        const numeros = validarNumeros(numerosString);
        
        // Separar pares e impares
        const resultado = separarParesImpares(numeros);
        
        // Respuesta exitosa
        res.status(200).json({
            original: numeros,
            pares: resultado.pares,
            impares: resultado.impares
        });
        
    } catch (error) {
        // Manejo de errores
        res.status(400).json({
            error: error.message,
            ejemplo: "?numeros=1,2,3,4,5"
        });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`📋 Prueba: http://localhost:${PORT}/filtrar?numeros=1,2,3,4,5,6`);
}