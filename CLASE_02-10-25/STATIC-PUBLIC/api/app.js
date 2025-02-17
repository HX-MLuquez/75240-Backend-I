const express = require('express');
const path = require('path');
const petsRouter = require('./routes/pets');

const app = express();
const PORT = 3000;

// Configurar Express para manejar datos de formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Usar el router de pets
app.use('/api/pets', petsRouter);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
