// Simulación de una operación asíncrona (como una llamada a API)
function fetchData() {
    return new Promise((resolve) => {
        console.log("Iniciando la operación asíncrona...");
        setTimeout(() => {
            resolve("Datos obtenidos después de 5 segundos");
        }, 5000); // Simula 3 segundos de retraso
    });
}

// Otra función síncrona
function printMessage() {
    console.log("Estoy ejecutándome mientras espero la operación asíncrona.");
}

// Función principal con async/await
async function main() {
    console.log("Inicio del programa");

    // Llama a la operación asíncrona
    const dataPromise = fetchData(); // Esto devuelve una promesa

    // Llama a una función mientras espera
    printMessage();

    // Aquí esperamos la resolución de la promesa
    const data = await dataPromise;
    console.log("Operación asíncrona terminada:", data);

    console.log("Fin del programa");
}

main();
