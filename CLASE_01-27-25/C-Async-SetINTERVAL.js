//* SetInterval
// Variables globales para el contador y el intervalo

let count = 1;
let ejecutaFunc = setInterval(() => {
  console.log("hola mundo", count);
  count++;
  if (count === 4) {
    clearInterval(ejecutaFunc);
  }
}, 1000);

setTimeout(() => {
  console.log("bye bye");
}, 6000);

function sarasa() {
  return new Promise((resolve, reject) => {
    if (resolve) {
      setTimeout(() => {
        console.log("bye bye");
        resolve("----------------------------------------------")
      }, 3000);
      
    }
  });
}

let result = sarasa() // una Promesa
result.then((data)=> console.log(data))
