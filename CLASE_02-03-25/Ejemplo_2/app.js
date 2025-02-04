/*
Estructurar un servidor basado en express, el cual escuche peticiones en el puerto 8080
Realizar una función para el método GET en la ruta ‘/saludo’, el cual responderá con “¡Hola a todos, pero ahora desde express!”
Ejecutar con nodemon y probar en el navegador el endpoint generado
*/

// Paso 1: Inicializar un proyecto de Node.js con npm init -y
// Paso 2: Instalar nodemon de forma global con npm install -g nodemon
// Paso 3: Crear un archivo app.js y escribir el siguiente código
// Paso 4: editar el package.json y agregar el script "start": "nodemon app.js"
// Paso 5: Correr el servidor con npm start
const express = require("express");

const app = express();

// MIDELLWARE
// app.use   -    next()

// CORS

// Metodo  Ruta   cb
app.get("/", (req, res) => {
  res.send("Hola mundo!!!!");
});


module.exports = app
