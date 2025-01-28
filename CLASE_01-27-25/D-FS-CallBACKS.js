// 1. writeFile
// Para escribir contenido en un archivo, creándolo o sobreescribiéndolo si ya existe:


const fs = require('fs');

const content = 'Hola, mundo!';

fs.writeFile('archivo.txt', content, (err) => {
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log('Archivo guardado correctamente.');
    }
});

fs.writeFile("nameArchivo.txt", "blablaaa", (err)=>{
    if (err) {
        console.error('Error al escribir el archivo:', err);
    } else {
        console.log('Archivo guardado correctamente.');
    }
})

// 2. readFile
// Para obtener el contenido de un archivo usando un callback que recibe el error y el contenido del archivo:

fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo:', err);
    } else {
        console.log('Contenido del archivo:');
        console.log(data);
    }
});

// 3. appendFile
// Para añadir contenido a un archivo sin sobreescribirlo:

const additionalContent = '\nEste es un texto adicional.';

fs.appendFile('archivo.txt', additionalContent, (err) => {
    if (err) {
        console.error('Error al añadir contenido al archivo:', err);
    } else {
        console.log('Contenido añadido al archivo correctamente.');
    }
});

// 4. unlink
// Para eliminar un archivo usando un callback que maneja errores:

fs.unlink('archivo.txt', (err) => {
    if (err) {
        console.error('Error al eliminar el archivo:', err);
    } else {
        console.log('Archivo eliminado correctamente.');
    }
});