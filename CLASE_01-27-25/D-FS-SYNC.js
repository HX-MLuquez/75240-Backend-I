//* 1. readFileSync
// Para obtener el contenido de un archivo de manera síncrona:

const fs = require("fs");

try {
  const data = fs.readFileSync("texto.txt", "utf8");
  console.log("--->", data);
} catch (err) {
  console.error("Error al leer el archivo:", err);
}

//* 2. appendFileSync
// Para añadir contenido a un archivo sin sobreescribirlo:

try {
  fs.appendFileSync("texto.txt", "nanananannannananannan \n")
} catch (err) {
  console.error("Error al añadir contenido:", err);
}

//* 3. unlinkSync
// Para eliminar un archivo de manera síncrona:
// try {
//   fs.unlinkSync("name-text.txt");
//   console.log("Archivo eliminado exitosamente.");
// } catch (err) {
//   console.error("Error al eliminar el archivo:", err);
// }

//* 4. existsSync
// Para verificar si un archivo existe de manera síncrona:
// const filePath = "";

// if (fs.existsSync(filePath)) {
//   console.log(`El archivo ${filePath} existe.`);
// } else {
//   console.log(`El archivo ${filePath} no existe.`);
// }

//* 5. writeFileSync
// Para añadir crear y agregar contenido a un archivo:

// try {
//   fs.writeFileSync("texto.txt", "Hola como ta \n");
//   console.log("Archivo creado y Contenido añadido al archivo.");
// } catch (err) {
//   console.error("Error al añadir contenido:", err);
// }
