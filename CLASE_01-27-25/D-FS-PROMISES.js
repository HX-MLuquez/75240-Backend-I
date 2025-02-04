//* fs.promises

const fs = require("fs");
// o const fs = require("fs").promises
// 1. readFile
// Para obtener el contenido de un archivo de manera asíncrona:

async function leerArchivo() {
  try {
    const data = await fs.promises.readFile("textito.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.error("Error al leer el archivo:", err);
  }
}

// 2. appendFile
// Para añadir contenido a un archivo sin sobreescribirlo:

async function agregarContenido() {}

// 3. unlink
// Para eliminar un archivo de manera asíncrona:

async function eliminarArchivo() {}

// 4. exists
// Para verificar si un archivo existe de manera asíncrona:

async function verificarExistencia() {
  const filePath = "";
}

// 5. writeFile
// Para crear y escribir contenido en un archivo de manera asíncrona:

async function escribirArchivo() {
  try {
    const fecha = Date()
    await fs.promises.writeFile("textito.txt", `Hola como ta \n${fecha}`);

    console.log("Archivo creado y contenido añadido.");
  } catch (error) {
    console.error("Error al escribir el archivo:", err);
  }
}

// Función principal para ejecutar las operaciones
async function main() {
  await escribirArchivo();
  await leerArchivo();
  // await agregarContenido();
  // await verificarExistencia();
  // await eliminarArchivo();
}

// Llamar a la función principal
main();

//! escribirArchivo();
//! leerArchivo();
//! agregarContenido();
//! verificarExistencia();
//! eliminarArchivo();
