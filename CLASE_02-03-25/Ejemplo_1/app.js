/*
Crear un servidor con el módulo nativo de nodejs “http”. Setear una respuesta que contenga el mensaje 
“¡Mi primer hola mundo desde backend!” 
El servidor debe escuchar en el puerto 8080.  (Correr con nodemon)
Probar el servidor desde el navegador.
Hacer algún cambio en código y corroborar que se reinicie automáticamente.

*/

// Paso 1: Inicializar un proyecto de Node.js con npm init -y
// Paso 2: Instalar nodemon de forma global con npm install -g nodemon
// Paso 3: Crear un archivo app.js y escribir el siguiente código
// Paso 4: editar el package.json y agregar el script "start": "nodemon app.js"
// Paso 5: Correr el servidor con npm start

const http = require('http')
const PORT = 8080 

const server = http.createServer((req, res)=>{
    res.end('Mi primer server!!!!! mi poni --------')
    // res.send   res.end   res.json   -  tipos de respuestas (de datos)
})

server.listen(PORT, ()=>{
    console.log(`Server listening on port http://localhost:${PORT}`);
})
