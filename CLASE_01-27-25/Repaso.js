// destructoring - spread ...

// template literals `Hola ${var}`

// object literals

function dada(id, name, age) {
  const person = {
    id,
    name,
    age,
  };
}
const objeto = {
  a: 1,
  b: 2,
};
let res = Object.values(objeto); // [1,2]


//---

// Clases 
class Persona {
    #dataPrivada = true 
    static estaEsDeLaClase = true
    constructor(valA,valB){
        this.valA = valA
        this.valB = valB 
        this.unaLista = []
        this.count = 0
    }
    metodoAccedeDataPrivada(){
        return this.#dataPrivada
    }
}
const primerPersona = new Persona(1,2)
primerPersona.unaLista 
Persona.estaEsDeLaClase 


primerPersona.count = 123


// Promesas - Programas async
