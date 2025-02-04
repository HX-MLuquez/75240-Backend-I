//* ACTIVIDAD 2

// Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
// Debe contar con una variable que almacene la fecha actual (utilizar moment())
// Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
// Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
// Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
// Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa.
const moment = require("moment");

// console.log(moment);

function calcularEdad(fechaNacimiento) {
  const nacimiento = moment(fechaNacimiento, "YYYY-MM-DD");
  console.log("nacimiento es ", nacimiento); // Moment<1990-05-15T00:00:00-03:00>  - 6546984614654654545415846
  if (nacimiento.isValid()) {
    const ahora = moment(); // Moment<2025-01-27T21:31:16-03:00> - 65469846146546547654
    console.log("ahora es ", ahora);
    const edad = ahora.diff(nacimiento, "years");
    console.log("Tu edad es ", edad);
  }
}
calcularEdad("1990-05-15");

console.log("------>", new Date())
/*
{



}

21:45 VOLVEMOS ... .. .. . . .. . ..

*/
