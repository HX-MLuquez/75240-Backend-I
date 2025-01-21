
function sumar(a,b){
  return a+b 
}

function nuevita(lista, cb){
  const result = cb(lista[0], lista[1])
  return result
}


// function nuevita(lista, cb){
//   function sumar(a,b){
//     function sumar(a,b){
//       return a+b 
//     }
//     return a+b 
//   }
//   const result = cb(lista[0], lista[1])
//   return result
// }


function myMap(lista){
  const newList = []
  for (let index = 0; index < lista.length; index++) {
    newList.push()
  }
}

const numeros = [1,2,3,4,5]

const resultMap = numeros.map((e)=> {
  if(e>3){
    return e
  } else {
    return "nanana"
  }
})
console.log(resultMap)