// Ejemplo de Hoisting y Scope

// Hoisting con var
console.log("--- Hoisting con var ---");
console.log(a); // undefined (hoisted, pero no inicializado)
var a = 10;
console.log(a); // 10

// Hoisting con let y const
console.log("--- Hoisting con let y const ---");
try {
  console.log(b); // Error: Cannot access 'b' before initialization
} catch (error) {
  console.log(error.message);
}
let b = 20;

try {
  console.log(c); // Error: Cannot access 'c' before initialization
} catch (error) {
  console.log(error.message);
}
const c = 30;

// Scope de var, let y const

// var tiene scope global o de función
console.log("--- Scope de var ---");
function testVarScope() {
  var x = 50; // Variable local a la función
  if (true) {
    var y = 60; // 'y' es accesible fuera del bloque if debido al scope de var
  }
  console.log(x); // 50 (accesible en todo el cuerpo de la función)
  console.log(y); // 60 (accesible fuera del bloque if)
}

testVarScope();
// console.log(x); // Error: x is not defined (no es accesible fuera de la función)
// console.log(y); // Error: y is not defined (no es accesible fuera de la función)

// let y const tienen scope de bloque
console.log("--- Scope de let y const ---");
function testLetConstScope() {
  console.log("why");
  let z = 70; // Variable local a la función
  const w = 80; // También tiene scope de bloque
  if (true) {
    let z = 90; // Esta 'z' es diferente a la anterior, tiene scope solo dentro de este bloque
    const w = 100; // Esta 'w' es diferente a la anterior, tiene scope solo dentro de este bloque
    console.log(z); // 90 (dentro del bloque if)
    console.log(w); // 100 (dentro del bloque if)
  }
  console.log(z); // 70 (accesible solo dentro de la función, fuera del bloque if)
  console.log(w); // 80 (accesible solo dentro de la función, fuera del bloque if)
}

testLetConstScope();

// Uso de var en el scope global
var globalVar = "Global var";
console.log(globalVar); // 'Global var'

// Uso de let y const en el scope global
let globalLet = "Global let";
const globalConst = "Global const";
console.log(globalLet); // 'Global let'
console.log(globalConst); // 'Global const'