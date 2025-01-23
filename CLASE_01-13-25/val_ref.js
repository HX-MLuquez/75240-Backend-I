// // Tipos de Datos Primitivos
// // str num bool null undf
// // value
// const num1 = 7;
// const numCopy = num1;

// // Tipos de datos espeiales
// // obj arr f() <- objetos
// // ref

// const obj1 = { a: 1 }; // <- BY555

// const copyObj = { ...obj1 }; // <- AS212
// copyObj.b = 88;
// console.log(obj1); //
// console.log(copyObj);

// // spread operator s {} d ->{...s}

// const arrOrigin = [1, 2, "hi"];
// const newARr = [...arrOrigin]; // copiamos, clonamos <- x valor

// console.log(global);




//----------------------------

// Objetos -> { objeto }  [ array ]  function  <- REFERENCIA

const edad = 12 
// edad = 1 //! Assignment to constant variable.
console.log(edad)

const lista_de_frutas = ["w"] //* espacio en memo ASD231
lista_de_frutas.push("otra mas")
console.log(lista_de_frutas)
const copia_lista_de_frutas = lista_de_frutas

lista_de_frutas[6] = 88
console.log(copia_lista_de_frutas)

const objetoPersona = {
    nombre: "Pepe",
    edad: 12
}
objetoPersona.altura = 99


var superSa = 89
superSa = "wewewe"
console.log(superSa)



if(true){
    var susu = "hi"
    console.log(susu)
}
console.log(susu)

//* En bloques - function if while for --> let
//* Para OBJECT { }  [ ]  function  -->  const

function declaroFunction(){

}
const expresivaFunction = function(){

}

//* Para espacios global o de mucho alcance -->  var

console.log(salude)
var salude = "chau"

var sali 
console.log(sali)

saludamos()
function saludamos(){
    console.log("alfo")
    if(true){
        function mimi(){
            console.log(salude)
            var variableInterna = "desde afuera no acceden"
        }
    }
    // console.log(variableInterna) //! variableInterna is not defined
    mimi()
}
// console.log(variableInterna) //! variableInterna is not defined


let textoNombre = "Holis"

console.log(textoNombre)

if(true){
    let textoNombre = "chau"
}
console.log(global)
