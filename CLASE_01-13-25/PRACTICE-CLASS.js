// class Persona

var nombre = "no aco apuntes";

class Persona {
  // Propiedades - Valores - Data
  constructor(nombre) {
    this.nombre = nombre;
    this.edad = null;
  }

  // Métodos - Funciones para manipular la data
  getNombre() {
    return this.nombre;
  }
  getEdad() {
    return this.edad;
  }
  addEdad(num) {
    this.edad = num;
    return "La edad se agregó exitosamente";
  }
}

//--- Func constructor

function PersonaNueva(nombre) {
  this.nombre = nombre;
  this.edad = null;

  this.getNombre = function () {
    return this.nombre;
  };
}

PersonaNueva.prototype.getEdad = function () {
  return this.edad;
};

//----------------------------------------------------------

class ListaPorActividad {
  constructor(nombre) {
    this.nombre = nombre;
    this.integrantes = [];
  }
  addIntegrante(nuevo) {
    this.integrantes.push(nuevo);
    return "nuevo integrante agregado";
  }
  getLista() {
    return this.integrantes;
  }
  getActividad() {
    return this.nombre;
  }
}

console.log(ListaPorActividad);

const basquet = new ListaPorActividad("Basquet");
const voley = new ListaPorActividad("Voley");

console.log(basquet.getActividad);
console.log(basquet);

basquet.addIntegrante("Pepe");
basquet.addIntegrante("Juan");
console.log(basquet.getLista());
console.log(basquet.getActividad());

console.log(voley);

/*
¿Cómo lo hacemos? Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.

Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.

*/

class Contador {

  //* Props - Datos - atributos
  static contadorGlobal = 0;

  constructor(nombre) {
    this.nombre = nombre; // Nombre del responsable
    this.contadorIndividual = 0; // Contador individual inicializado en 0
    Contador.contadorGlobal++; // Incrementa el total de instancias creadas
  }

  // Método para incrementar el contador individual
  contar() {
    this.contadorIndividual++;
    Contador.contadorGlobal++; // en caso de querer aquí Incrementa el contador global
    return "ok"
  }
  getResponsable() {
    return `El responsable es ${this.nombre}`;
  }

  getCuentaIndividual() {
    return this.contadorIndividual;
  }

  static getCuentaGlobal() {
    return Contador.contadorGlobal;
  }
}
console.log(Contador.contadorGlobal);


//* STATIC es el nombre de la clase punto la prop static 

//* Lo del Constructor siempre con el THIS

const contadorUno = new Contador("Pedro") 
/*
Contador { nombre: 'Pedro', contadorIndividual: 0  // Métodos contar -  getCuentaIndividual - etc}
*/
console.log(contadorUno)
console.log(Contador.contadorGlobal);
console.log(contadorUno.contar())
console.log(contadorUno.contar())
console.log(contadorUno.getCuentaIndividual())
console.log(Contador.contadorGlobal);
console.log(contadorUno)

const contadorDos = new Contador("Jose") 
console.log(contadorDos)
console.log(Contador.contadorGlobal);
