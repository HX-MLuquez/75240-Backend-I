//* DECLARAMOS FUNCIONES

function sumar(a, b) {
  return a + b;
}
console.log("Suma (estructura básica):", sumar(3, 7));

//* Func por params (callback)
function otra(cb, a, b) {
  const result = cb(a, b);
  return result;
}
console.log("-->", otra(sumar, 3, 2));

function aaa() {
  //
  // return function bbb(){
  // }
  const bbb = function (a, b) {
    return a - b;
  };
  return bbb;
}

const guardoAcaLoQueRetoraAaa = aaa();

/*
guardoAcaLoQueRetoraAaa === 
const bbb = function (a, b) {
    return a - b;
  };
*/

//* Function Expresivas

const nombreFuncA = function () {
  return null;
};

//* Arrow Func - ()=>

// En una línea el return es IMPLICITO

const nombreFuncB = () => null;
const nombreFuncSumar = (a, b) => a + b;

// + de una línea el return es si lo debo escribir
const nombreFuncRestar = (a, b) => {
  const resultado = a - b;
  return resultado;
};

/*
¿Cómo lo hacemos? Definiremos la función “mostrarLista”, la cual recibirá un arreglo 
con elementos como parámetro.

- Si la lista está vacía, devolver un mensaje indicando “Lista vacía”.
- Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso 
devolviendo la longitud de la lista (Utilizar template strings)
- Invocar la función con los casos de prueba.

*/

const mostrarLista = (lista)=>{
    if(lista.length === 0) return "Lista vacía"
    else {
        lista.forEach((element, index)=>{
            console.log(`${index + 1} - ${element}`)
        })
        return `La lista tiene ${lista.length} elementos`
    }
}

const listita = []

console.log(mostrarLista(listita))

const listasa = [23,21,44,45]

console.log(mostrarLista(listasa))
