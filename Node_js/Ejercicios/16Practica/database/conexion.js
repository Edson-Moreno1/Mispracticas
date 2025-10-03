const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'Cursos'
});

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Conectado a la base de datos');
})


module.exports = db;