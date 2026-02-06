const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
    prestamo_id: { type: String, required: true, unique: true },
    libro_id: { type: String, required: true, ref: 'Libro' },
    usuario_id: { type: String, required: true, ref: 'Usuario' },
    fecha_prestamo: { type: Date, default: Date.now },
    fecha_devolucion_prevista: { type: Date, required: true },
    fecha_devolucion_real: Date,
    estado: {
        type: String,
        enum: ['activo', 'devuelto', 'vencido', 'perdido'],
        default: 'activo'
    },
    dias_retraso: { type: Number, default: 0 },
    multa_generada: { type: Number, default: 0 },
    empleado_entrega: String,
    empleado_devolucion: String,
    notas: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Prestamo', prestamoSchema);