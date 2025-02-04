const http = require("http");



// Crear un servidor HTTP básico
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hola mundo desde mi servidor HTTP!\n");
});

// Escuchar en el puerto 3000
server.listen(3000, () => {
  console.log(`Servidor HTTP está escuchando en el puerto http://localhost:3000`);
});