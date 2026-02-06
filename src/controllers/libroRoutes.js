const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Obtener todos los libros
router.get('/', libroController.obtenerLibros);

// Obtener un libro por ID
router.get('/:id', libroController.obtenerLibroPorId);

// Crear nuevo libro
router.post('/', libroController.crearLibro);

module.exports = router;