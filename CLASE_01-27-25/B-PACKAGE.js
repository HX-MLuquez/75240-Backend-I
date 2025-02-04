// npm init -y

// npm install axios

const axios = require("axios");

// URL de ejemplo para hacer una solicitud GET
const url = "https://jsonplaceholder.typicode.com/todos/1";

axios
  .get(url)
  .then((response) => {
    console.log("Datos:", response.data);
  })
  .catch((error) => {
    console.error("Error al hacer la solicitud:", error);
  });
