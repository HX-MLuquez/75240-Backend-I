const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const path = require("path");

//* Importar socket.io
const { Server } = require("socket.io");


//* Definimos el puerto
const PORT = 8080;

//* SETEO handlebars
app.engine('hbs', handlebars.engine({
  extname: '.hbs',
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "views"));



//* Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));


//* Middleware
app.use(express.json())


//* Rutas
app.get("/", (req, res) => {
  res.render("index");
});

//*-------------------------------

const http = require("http");
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

//* Levantar el servidor
// const server = app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });


//TODO___ SERVER ____
//* Configuracion de socket.io.
const io = new Server(server);


//* Lista de mensajes que se guardan en el servidor (simulando una base de datos)
const messages = [];

//* Evento de conexión - Cada que se conecta un client se ejecuta su function CB
io.on("connection", (socket)=>{
  console.log(`Usuario ID: ${socket.id} Conectado!!!`)


  socket.on("userConnect", (data)=>{
    let message = {
      id: socket.id,
      info: "connection",
      name: data.user,
      message: `usuario: ${data.user} - id: ${data.id} - Conectado`,
    }
    messages.push(message)
    io.emit("serverUserMessage", messages)
  })

  socket.on("userMessage", (data)=>{
    console.log("::::data:::::", data)
    const message = {
      id: socket.id,
      info: "message",
      name: data.user,
      message: data.message
    }
    messages.push(message)
    io.emit("serverUserMessage", messages)
  })

  



  socket.on("disconnect", (data)=>{
    console.log("----> ", data) // transport close
    console.log("Cliente desconectado:", socket.id);
  })
})


//* Evento de desconexion
