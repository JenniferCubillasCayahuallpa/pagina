const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static('public'));

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: 'proyecto.c4rw4cdg8ftc.us-east-1.rds.amazonaws.com',
    user: 'jenni',  // Cambia esto si usas otro usuario
    password: 'cubillas31',  // Coloca la contraseña correcta aquí
    database: 'Record'
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión exitosa a la base de datos');
});

// Para el registro del formulario 
app.post('/registro', (req, res) => {
    const { nombre, correo, telefono, mensaje } = req.body;

    // Validación de campos
    if (!nombre || !correo || !telefono) {
        return res.status(400).json({ message: 'El nombre, correo y teléfono son obligatorios.' });
    }

    if (telefono.length !== 9 || isNaN(telefono)) {
        return res.status(400).json({ message: 'El teléfono debe tener exactamente 9 dígitos.' });
    }

    const query = `
        INSERT INTO Queries (name, email, cellphone, message)
        VALUES (?, ?, ?, ?)
    `;

    connection.query(query, [nombre, correo, telefono, mensaje || null], (err, result) => {
        if (err) {
            console.error('Error al insertar los datos:', err);
            return res.status(500).json({ message: 'Error en el servidor al guardar los datos.' });
        }
        res.status(200).json({ message: 'Formulario enviado con éxito.', result });
    });
});
// Fin

// Calendario consulta
app.get("/api/dates/:current", (req, res) => {
    const request = req.params.current;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(request)) {
        return res.status(400).json({ message: "El formato de la fecha es inválido. Debe ser YYYY-MM-DD." });
    }

    connection.query(
        "SELECT nombre, DATE_FORMAT(dia, '%d/%m/%Y') AS dia FROM calendar WHERE dia = ?",
        [request],
        function (err, row) {
            if (err) {
                console.error("Error en la consulta:", err);
                return res.status(500).json({ message: "Error en el servidor" });
            }
            if (row && row.length > 0) {
                res.json(row[0]);
            } else {
                res.json(null);
            }
        }
    );
});
// Fin

// Rutas para navegar por los html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.get("/contacto", (req, res) => {
    res.sendFile(path.join(__dirname, 'contáctenos.html'));
});
app.get("/explora", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/explora.html'));
});
app.get("/producto", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html/producto.html'));
});
// Fin

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
