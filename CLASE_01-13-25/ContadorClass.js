// class Contador

var saludo = "holaaaaa";
//todo__ Crear una función para saludar
function saludar(text) {
  return text;
}
//! Cuidado con el nombre de la variable

console.log(saludar(saludo));

/*
Definir variables que almacenen datos (nombre, edad, precio, nombres de series y películas), 
mostrar esos valores por consola, incrementar la edad en 1, una serie a la lista y volver a mostrarlas. 
* Compartir la definición en el Visual Studio Code.
*/

var nombre = "Pepe";
var edad = 101;
var precio = 10.5;
var pelis_and_series = {
  pelis: ["Superman", "Matrix", "Et", "Note"],
  series: ["Sarasa", "Dark", "Lost"],
};

console.log(pelis_and_series.pelis[2])

edad = edad + 1 
console.log(edad)

edad += 1 
console.log(edad)

pelis_and_series.series.push("Breaking bad")
console.log(pelis_and_series.series)
