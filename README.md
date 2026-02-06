 Sistema de Gestión de Biblioteca Digital
 Descripción del Proyecto
Sistema completo de gestión bibliotecaria desarrollado con Node.js y MongoDB. Esta aplicación permite administrar todos los aspectos de una biblioteca moderna: catálogo de libros, usuarios, préstamos, empleados y categorías.

 Características Principales
 5 Tablas/Colectores completas en MongoDB

 API RESTful con endpoints documentados

 CRUD completo para todas las entidades

 Validación de datos con Mongoose

 Manejo de errores robusto

 CORS habilitado para integración frontend

 Variables de entorno para configuración flexible

 Estructura de la Base de Datos
Tablas Implementadas:
 Libros (14 campos)

Catálogo completo de materiales bibliográficos

Control de inventario y disponibilidad

 Usuarios (12 campos)

Registro de miembros de la biblioteca

Control de préstamos activos y multas

 Préstamos (10 campos)

Sistema de circulación de materiales

Control de fechas y devoluciones

 Empleados (12 campos)

Gestión del personal bibliotecario

Control de permisos y horarios

 Categorías (8 campos)

Organización temática del catálogo

Sistema de clasificación jerárquica

 Requisitos del Sistema
Software Requerido:
 Node.js v16 o superior

 MongoDB v4.4 o superior

 npm v8 o superior

 PowerShell (Windows) o Terminal (Linux/Mac)

Dependencias Node.js:
{
  "express": "^4.18.2",
  "mongoose": "^7.5.0",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1"
}

Instalación y Configuración

Paso 1: Clonar o Descargar el Proyecto
# Clonar repositorio
git clone <repositorio-url>
cd BibliotecaDigital

# O descargar y descomprimir
# Navegar a la carpeta del proyecto

Paso 2: Instalar Dependencias
npm install

# Iniciar MongoDB (en ventana separada)
mongod --dbpath C:\data\db

# Crear base de datos (en otra ventana)
mongosh
use biblioteca_digital

Paso 3: Iniciar el Servidor
# Modo desarrollo (con reinicio automático)
npm run dev

# Modo producción
npm start

Estructura del Proyecto

BibliotecaDigital/
├── src/
│   ├── models/           # Modelos Mongoose
│   │   ├── Libro.js
│   │   ├── Usuario.js
│   │   ├── Prestamo.js
│   │   ├── Empleado.js
│   │   └── Categoria.js
│   ├── controllers/      # Lógica de negocio
│   └── routes/          # Rutas API
│       └── libroRoutes.js
├── server.js            # Punto de entrada
├── package.json         # Dependencias y scripts
├── .env                # Variables de entorno
└── README.md           # Documentación

Endpoints de la API
Rutas Principales:
Método	Endpoint	Descripción
GET	/	Página principal de la API
GET	/api/libros	Listar todos los libros
GET	/api/usuarios	Listar todos los usuarios
GET	/api/prestamos	Listar todos los préstamos
GET	/api/empleados	Listar todos los empleados
GET	/api/categorias	Listar todas las categorías
GET	/api/tablas	Ver estructura completa de tablas

Ejemplo de Uso:
# Obtener información de tablas
curl http://localhost:3000/api/tablas

# Listar libros disponibles
curl http://localhost:3000/api/libros/todos

Comandos Disponibles
# Desarrollador
npm run dev              # Inicia servidor con nodemon

# Producción
npm start               # Inicia servidor en producción

# MongoDB
npm run mongo-start     # Inicia MongoDB (Windows)
npm run mongo-shell     # Abre shell de MongoDB

# Pruebas
curl http://localhost:3000  # Verifica servidor

Datos de Ejemplo
Libros Predefinidos:
[
  {
    "libro_id": "LIB-001",
    "titulo": "Cien Años de Soledad",
    "autor": "Gabriel García Márquez",
    "genero": "Realismo Mágico",
    "estado": "disponible"
  },
  {
    "libro_id": "LIB-002",
    "titulo": "1984",
    "autor": "George Orwell",
    "genero": "Distopía",
    "estado": "prestado"
  }
]

Pruebas y Verificación
Script de Verificación:

# Verificar que todo funciona
.\verificar-sistema.ps1

# O manualmente:
# 1. Verificar servidor
curl http://localhost:3000

# 2. Verificar 5 tablas
curl http://localhost:3000/api/tablas

# 3. Probar cada endpoint
curl http://localhost:3000/api/libros
curl http://localhost:3000/api/usuarios



Licencia
Este proyecto está bajo la Licencia MIT. Ver archivo LICENSE para más detalles.

Autor
Yimi José Cardozo Roa
Estudiante de Desarrollo de Software UNETI
 yimicardozo15@gmail.com

 Agradecimientos
Equipo de Node.js por el excelente entorno de ejecución

Comunidad de MongoDB por la documentación completa

Express.js por el framework minimalista y poderoso

Instructores y compañeros por el apoyo durante el desarrollo


