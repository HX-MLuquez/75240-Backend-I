// Object.entries Object.values  Object.keys

const animal = {
  // KEY    VALUE
  nombre: "oso",
  estado: "cariñoso",
  edad: 3,
};

console.log(animal);
console.log(Object.entries(animal));
console.log(Object.keys(animal));

console.log(Object.values(animal).length);

// AL TENER ESTRUCTURAS ANIDADAS  [[][][]]   [[[[[]]]]]   {{{{{}}}}}  [{}{}{}] [{[]}{[]}]

// NULLISH

var nana = false;

let nombre = nana && nana;
console.log(nombre);
let nombre2 = nana || "Nina"; // undefined null vacío o CERO (0) ""
console.log(nombre2);

let nombre3 = nana ?? "nulishshshshhh"
console.log(nombre3);
//*------------------------------------------------------------------
//*------------------------------------------------------------------
//*------------------------------------------------------------------

class Persona {
  #nombre 
  constructor(nombre){
    this.#nombre = nombre
  }
  getName() {
    return this.#nombre;
  }
}

const personita = new Persona("Hulk")
console.log(personita.getName())


