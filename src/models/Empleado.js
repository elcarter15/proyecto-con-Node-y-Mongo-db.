const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    empleado_id: { type: String, required: true, unique: true },
    dni: { type: String, required: true, unique: true },
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    telefono: String,
    direccion: String,
    fecha_contratacion: { type: Date, default: Date.now },
    puesto: {
        type: String,
        enum: ['bibliotecario', 'administrador', 'tecnico', 'director'],
        default: 'bibliotecario'
    },
    salario: Number,
    departamento: String,
    estado: {
        type: String,
        enum: ['activo', 'vacaciones', 'baja', 'inactivo'],
        default: 'activo'
    },
    horario: String,
    permisos: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('Empleado', empleadoSchema);