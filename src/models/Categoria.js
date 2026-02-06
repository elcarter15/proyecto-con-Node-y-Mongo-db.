const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema({
    categoria_id: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    descripcion: String,
    subcategorias: [String],
    total_libros: { type: Number, default: 0 },
    ubicacion_fisica: String,
    color_etiqueta: String,
    fecha_creacion: { type: Date, default: Date.now }
}, {
    timestamps: true
});

module.exports = mongoose.model('Categoria', categoriaSchema);