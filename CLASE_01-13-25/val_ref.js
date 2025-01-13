// Tipos de Datos Primitivos
// str num bool null undf
// value
const num1 = 7;
const numCopy = num1;

// Tipos de datos espeiales
// obj arr f() <- objetos
// ref

const obj1 = { a: 1 }; // <- BY555

const copyObj = { ...obj1 }; // <- AS212
copyObj.b = 88;
console.log(obj1); //
console.log(copyObj);

// spread operator s {} d ->{...s}

const arrOrigin = [1, 2, "hi"];
const newARr = [...arrOrigin]; // copiamos, clonamos <- x valor

console.log(global);
