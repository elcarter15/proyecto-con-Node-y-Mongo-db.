const express = require('express');
const router = express.Router();

// Ruta de prueba
router.get('/', (req, res) => {
    res.json({ 
        mensaje: 'API de Libros funcionando',
        endpoints: [
            'GET / - Listar todos los libros',
            'GET /:id - Obtener libro por ID',
            'POST / - Crear nuevo libro'
        ]
    });
});

// Ruta para obtener todos los libros
router.get('/todos', async (req, res) => {
    try {
        // Simulamos datos por ahora
        const libros = [
            { id: 1, titulo: "Cien Años de Soledad", autor: "García Márquez" },
            { id: 2, titulo: "1984", autor: "George Orwell" }
        ];
        res.json(libros);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;