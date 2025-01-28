//* ACTIVIDAD 1
// Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.
// Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

// Nota: Considerar que esta operación debe realizarse de forma asíncrona.

const generateRandomNumbers = () => {
  return new Promise((resolve, reject) => {
    let numbers = [];
    if (resolve) {
      for (let i = 0; i < 10000; i++) {
        numbers.push(Math.floor(Math.random() * 20) + 1);
      }
      resolve(numbers);
    } else {
      console.log(reject);
    }
  });
};
/*
[
  18, 13, 14, 13, 18, 14, 19, 19, 13, 14, 11, 13,
   6,  2, 11, 15, 20,  3,  8,  5, 16,  9,  2, 15,
  13, 11,  8, 17,  8,  4, 19,  2, 18, 17,  9,  7, ....10000]

  counts {
  18: 2, 
  13: 2,
  14: 1,
  19:

  }

*/
console.log(
  generateRandomNumbers().then((numbers) => {
    console.log(numbers);
    let counts = {}
    numbers.forEach(num => {
      counts[num] = (counts[num] || 0) + 1
    });
    console.log(counts)
  })
); // Promise { <pending> }

// const resPromise = generateRandomNumbers();


const persona = {
  edad:23
}

persona.edad = 99
persona.hola = "hhhhhhhh"