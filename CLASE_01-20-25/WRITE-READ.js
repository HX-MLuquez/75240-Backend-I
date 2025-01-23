//* Callbacks: algunas convenciones

const fs = require("fs");

//todo_ WRITE (writeFile)
//! run -> node write-file.js
function escribirArchivo(contenido, callback) {
  //todo_ Busca - Crea - Escribe
  fs.writeFile("zar-archivo.txt", contenido, (err, response) => {
    if (err) {
      callback(err);
    } else {
      callback(null, `Escritura exitosa -> ${response}`);
    }
  });
}


console.log("Inicio del programa");

escribirArchivo("Hola mundo", (err, resultado) => {
  if (err) {
    console.error(err);
  } else {
    console.log(resultado);
  }
});
console.log("Fin del programa");
  