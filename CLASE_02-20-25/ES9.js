// ... SPREAD  REST



// REST - RESTO

const listita = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [a,b, ...resto] = listita

console.log(resto)/*  */

const [...resttito] = listita
// ===
const resttitoB = [...listita]

const copiarAsiNoma = listita
listita.push("EEEEEE")
console.log(resttito)
console.log(resttitoB)
console.log(copiarAsiNoma)
// Destructuring


const persona = {
  nombre: "Dilma",
  edad: 87,
  id: 21,
};

const { id, ...restoPersona } = persona;
console.log(id);
console.log(restoPersona);

const clonarPersona = {...persona}
