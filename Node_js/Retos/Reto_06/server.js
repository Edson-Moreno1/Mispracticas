import express from "express";
import { contarPropiedades } from "./controllers/contarController.js";

const app = express();
const PORT = 3000;


app.use(express.json());


app.get("/", (req, res) => {
    res.status(200).json({
        mensaje: "Servidor funcionando correctamente",
        rutas: {
            contar: "POST /contar - Envía un objeto JSON para contar sus propiedades"
        },
        ejemplo: {
            url: "POST http://localhost:3000/contar",
            body: {
                nombre: "Ana",
                edad: 25,
                correo: "ana@example.com"
            }
        }
    });
});

app.post("/contar", contarPropiedades);

app.use((req, res) => {
    res.status(404).json({
        error: "Ruta no encontrada",
        rutasDisponibles: ["GET /", "POST /contar"]
    });
});


app.listen(PORT, () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    console.log(`📋 Ruta principal: POST http://localhost:${PORT}/contar`);
    console.log(`✅ Verificar servidor: GET http://localhost:${PORT}/`);
});