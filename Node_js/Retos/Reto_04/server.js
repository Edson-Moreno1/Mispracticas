const http = require('http');
const url = require('url');
const encontrarMayor = require('./utils/encontrarMayor');


const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    

    if (req.method === 'GET' && pathname === '/mayor') {
        try {

            if (!query.numeros) {
                res.statusCode = 400;
                res.end(JSON.stringify({
                    error: 'Falta el parámetro "numeros" en la URL'
                }));
                return;
            }
            

            const numerosString = query.numeros.split(',');
            const numeros = numerosString.map(num => {
                const numero = parseFloat(num.trim());
                if (isNaN(numero)) {
                    throw new Error(`"${num.trim()}" no es un número válido`);
                }
                return numero;
            });
            

            const mayor = encontrarMayor(numeros);
            

            res.statusCode = 200;
            res.end(JSON.stringify({
                numeros: numeros,
                mayor: mayor
            }));
            
        } catch (error) {

            res.statusCode = 400;
            res.end(JSON.stringify({
                error: error.message
            }));
        }
    } else {

        res.statusCode = 404;
        res.end(JSON.stringify({
            error: 'Ruta no encontrada'
        }));
    }
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log(`Prueba: http://localhost:${PORT}/mayor?numeros=5,3,9,1`);
});