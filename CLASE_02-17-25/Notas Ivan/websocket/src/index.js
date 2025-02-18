const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

//* Importar socket.io
const { Server } = require("socket.io");

//* Definimos el puerto
const PORT = process.env.PORT || 8080;

//* SETEO handlebars
app.engine("hbs", handlebars.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));


const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//* Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

//* Middleware
app.use(express.json());


//* Rutas
app.get("/", (req, res) => {
  res.render("index");
});

//* Configuracion de socket.io.
const io = new Server(server);

//* Lista de mensajes que se guardan en el servidor (simulando una base de datos)
const messages = [];

//* Evento de conexión y desconexion
io.on("connection", (socket) => {
  console.log(`Un cliente se ha conectado. Usuario ID: ${socket.id}`);

  socket.on("userMessage", (message) => {
    messages.push(message);
    console.log("Mensaje recibido:", messages);
    io.emit("messageReceived", message);
  });

  socket.emit("messageHistory", messages);

  socket.on("disconnect", () => {
    console.log("Un cliente se ha desconectado");
  });

});
