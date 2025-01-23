// ** exp.

let base = 2;
let exponente = 4;
console.log(base ** exponente);

// Math.pow(base, exponente)
console.log(Math.pow(base, exponente));

// Includes -> BOOL
let lista = [2, 6, 2, 87, "pepe"];

const result = lista.includes("Pepe");
console.log(result);

if (lista.includes("pepe")) {
  console.log("entra en la condicion");
} else {
  console.log("no entra");
}

function myInclude(valor, lista) {
  let res = false;
  lista.forEach((element) => {
    if (valor === element) res = true;
  });
  return res;
}

//----- startsWith()
const saludo = "Hola, ¿cómo estás?";
console.log(saludo.startsWith("Hola"))
//----- endsWith()
const despedida = "¡Nos vemos pronto!";
console.log(despedida.endsWith("nto!"));
