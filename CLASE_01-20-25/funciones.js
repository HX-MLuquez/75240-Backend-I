// ejemplos de funciones usando arrow functions

// Función suma
var miPromesaSuma = new Promise(function (resolve, reject) {});

const suma = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject("Operación innecesaria");
    } else if (a + b < 0) {
      reject("La calculadora sólo debe devolver valores positivos");
    } else {
      resolve(a + b);
    }
  });
};
console.log(miPromesaSuma);
const resSuma = suma(2, 4);
console.log(resSuma);
