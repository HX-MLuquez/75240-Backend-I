// Ejemplo simple del uso de async await consumiendo data de la api json placerholder
// usando fetch (sin axios)

const fetch = require("node-fetch");

async function fetchData() {
  try {
    // axios.post(`https://jsonplaceholder.typicode.com/posts`, {body})
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();
    console.log("in .async await ->", data.slice(0, 5));
    return data;
    }
    catch (error) {
    console.error(error);
    }
}

let resultFech = fetchData();
console.log(resultFech) // <promises>
// Y usando .then 
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((response) => response.json())
  .then((data) => console.log("in .then() ->",data.slice(0, 5)))
  .catch((error) => console.error(error));
    
