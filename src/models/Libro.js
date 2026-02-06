const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
    libro_id: { type: String, required: true, unique: true },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    genero: { type: String, required: true },
    isbn: { type: String, unique: true },
    anio_publicacion: { type: Number },
    editorial: String,
    paginas: Number,
    idioma: { type: String, default: 'Español' },
    estado: { 
        type: String, 
        enum: ['disponible', 'prestado', 'reservado', 'mantenimiento'],
        default: 'disponible'
    },
    ubicacion: String,
    fecha_ingreso: { type: Date, default: Date.now },
    copias_disponibles: { type: Number, default: 1 },
    copias_totales: { type: Number, default: 1 },
    categoria_id: { type: String, ref: 'Categoria' }
}, {
    timestamps: true
});

module.exports = mongoose.model('Libro', libroSchema);