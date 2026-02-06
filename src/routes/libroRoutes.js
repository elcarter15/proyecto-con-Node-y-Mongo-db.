const express = require('express');
const router = express.Router();

// Ruta principal de libros
router.get('/', (req, res) => {
    res.json({
        mensaje: 'API de Libros funcionando',
        endpoints: [
            'GET / - Esta página',
            'GET /todos - Listar todos los libros',
            'GET /disponibles - Libros disponibles',
            'POST /nuevo - Crear nuevo libro (simulado)'
        ]
    });
});

// Listar todos los libros
router.get('/todos', (req, res) => {
    const libros = [
        {
            libro_id: "LIB-001",
            titulo: "Cien Años de Soledad",
            autor: "Gabriel García Márquez",
            genero: "Realismo Mágico",
            estado: "disponible",
            copias_disponibles: 3
        },
        {
            libro_id: "LIB-002",
            titulo: "1984",
            autor: "George Orwell", 
            genero: "Distopía",
            estado: "prestado",
            copias_disponibles: 0
        },
        {
            libro_id: "LIB-003",
            titulo: "Don Quijote de la Mancha",
            autor: "Miguel de Cervantes",
            genero: "Clásico",
            estado: "disponible",
            copias_disponibles: 5
        }
    ];
    res.json({ total: libros.length, libros });
});

// Libros disponibles
router.get('/disponibles', (req, res) => {
    const libros = [
        {
            libro_id: "LIB-001",
            titulo: "Cien Años de Soledad",
            autor: "Gabriel García Márquez",
            estado: "disponible",
            copias: 3
        },
        {
            libro_id: "LIB-003", 
            titulo: "Don Quijote de la Mancha",
            autor: "Miguel de Cervantes",
            estado: "disponible",
            copias: 5
        }
    ];
    res.json({ total_disponibles: libros.length, libros });
});

// Crear nuevo libro (simulado)
router.post('/nuevo', (req, res) => {
    const nuevoLibro = req.body || {};
    res.json({
        mensaje: 'Libro creado exitosamente (simulado)',
        libro: {
            id: Date.now(),
            ...nuevoLibro,
            fecha_creacion: new Date().toISOString()
        }
    });
});

module.exports = router;