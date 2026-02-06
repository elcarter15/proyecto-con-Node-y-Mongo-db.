const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    usuario_id: { type: String, required: true, unique: true },
    dni: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: String,
    direccion: String,
    fecha_registro: { type: Date, default: Date.now },
    tipo_usuario: {
        type: String,
        enum: ['estudiante', 'profesor', 'investigador', 'general'],
        default: 'general'
    },
    estado: {
        type: String,
        enum: ['activo', 'suspendido', 'inactivo'],
        default: 'activo'
    },
    max_libros_prestados: { type: Number, default: 3 },
    libros_prestados_actual: { type: Number, default: 0 },
    multa_acumulada: { type: Number, default: 0 },
    fecha_nacimiento: Date
}, {
    timestamps: true
});

module.exports = mongoose.model('Usuario', usuarioSchema);