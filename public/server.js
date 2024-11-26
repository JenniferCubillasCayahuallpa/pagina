const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'queries.cmqu42qewrdw.us-east-1.rds.amazonaws.com',
    user: 'jenni',
    password: 'cubillas31',
    database: 'formulario'
});

// Verificar conexión a MySQL
db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        process.exit(1);
    }
    console.log('Conectado a MySQL');
});

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para manejar datos del formulario
app.post('/submit', (req, res) => {
    const { name, email, message, nacido, phone } = req.body;

    // Validar campos obligatorios
    if (!name || !email || !message || !nacido || !phone) {
        return res.status(400).send('Por favor, completa todos los campos.');
    }

    // Consulta SQL para insertar datos
    const query = `
        INSERT INTO datos (nombre, correo, mensaje, nacimiento, telefono)
        VALUES (?, ?, ?, ?, ?)
    `;

    // Insertar datos en la base de datos
    db.query(query, [name, email, message, nacido, phone], (err, result) => {
        if (err) {
            console.error('Error al insertar datos:', err);
            return res.status(500).send('Error en el servidor al procesar los datos.');
        }
        console.log('Datos insertados:', result);
        res.status(200).send('Formulario enviado con éxito');
    });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
