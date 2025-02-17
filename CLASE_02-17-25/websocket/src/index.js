const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

//* Importar socket.io


//* Definimos el puerto
const PORT = 8080;

//* SETEO handlebars



//* Configuración de archivos estáticos


//* Middleware


//* Rutas
app.get("/", (req, res) => {
  res.render("index");
});

//* Levantar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//* Configuracion de socket.io.


//* Lista de mensajes que se guardan en el servidor (simulando una base de datos)
const messages = [];

//* Evento de conexión


//* Evento de desconexion
