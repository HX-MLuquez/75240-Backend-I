
const {sumar} = require("./utils")

const axios = require("axios")

var pepe = "Pepe"
async function fetchData() {
  try {
    const {data} = await axios(`https://akabab.github.io/starwars-api/api/all.json`);
    // const data = await response.json(); //! Ejemplo para el uso del fetch
    console.log(data[0]);
    pepe = 101
    return []
  } catch (error) {
    console.error(error);
  }
}

var queee = fetchData();
console.log("--queee->",queee)

console.log("--->",fetchData)

console.log("--->",pepe)


async function myFuncion(){
  try {
    await axios(`https://a`);
    const resultB = await axios(`https://b`);
  } catch (error) {
    console.log("-error-->",error)
  }
} 