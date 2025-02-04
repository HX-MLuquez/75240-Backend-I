/*
Crear un proyecto basado en express js, el cual cuente con un servidor que escuche en el puerto 8080. 
Además de configurar los siguientes endpoints:

El endpoint del método GET a la ruta  ‘/bienvenida’ deberá devolver un html con letras en color azul, 
en una string, dando la bienvenida.
El endpoint del método GET a la ruta ‘/usuario’ deberá devolver un objeto con los datos de 
un usuario falso: {nombre, apellido,edad, correo}

Dado un arreglo de objetos de tipo usuario, realizar un servidor en express que permita 
obtener dichos usuarios.
La ruta raíz ‘/’ debe devolver todos los usuarios
la ruta /:userId debe devolver sólo al usuario con dicho Id.


REQ.QUERY
Dado un arreglo de objetos de tipo usuario, vamos a hacer un filtro por género

La ruta raíz ‘/’ debe devolver todos los usuarios, pero ahora colocaremos un query param con ?, 
indicando que queremos un género específico. En caso de enviarlo sin query, debe devolver a todos 
los usuarios.

*/
const express = require("express");
const app = express();

// MIDELLWARES
app.use(express.json()); //* BODY {vacío} - si implemento express.json() -> {data}
app.use(express.urlencoded({ extended: true })); //* FORMULARIOS - {vacío}

// app.get("/", (req, res) => {
//   res.send("<h1>Pausa hasta las 21:45 y volvemos con más EXPRESS</h1>");
// });

// Datos de prueba

const users = [
  {
    id: 1,
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    genero: "M",
  },
  {
    id: 2,
    nombre: "Maria",
    apellido: "Lopez",
    edad: 30,
    genero: "F",
  },
  {
    id: 3,
    nombre: "Pedro",
    apellido: "Gomez",
    edad: 35,
    genero: "M",
  },
];

// Rutas

// http://localhost:8080/bienvenida
app.get("/bienvenida", (req, res) => {
  res
    .status(200)
    .send("<h1 style='color: blue;'>Bienvenido a mi servidor</h1>");
});

// http://localhost:8080/usuarios
app.get("/usuarios", (req, res) => {
  res.status(200).json(users);
});

// http://localhost:8080/usuarios/2 - x PARAMS ->
// //* todo lo que llega por PARAMS o QUERY es de tipo string
app.get("/usuarios/:userId", (req, res) => {
  const { userId } = req.params;
  console.log("------> ", userId);
  const user = users.find((u) => u.id === Number(userId));
  if (user) {
    console.log(" in conditional ", user);
    res.status(200).json({ success: true, user });
  } else {
    res.status(400).send("Usuario no encontrado");
  }
});

// http://localhost:8080?genero=M
app.get("/", (req, res) => {
  const { genero } = req.query;
  console.log("------> ", req);
  const resultUsers = users.filter((u) => u.genero === genero);
  if (resultUsers && resultUsers.length > 0) {
    console.log(" in conditional ", resultUsers);
    res.status(200).json({ success: true, users: resultUsers });
  } else {
    res.status(400).send("Usuarios no encontrados");
  }
});

/*
Servidor con GET, POST, PUT, DELETE
Se agregará al código de explicación un método GET al mismo endpoint, con el fin de completar 
los 4 métodos principales.

Se realizará un flujo completo con POSTMAN donde podremos ver trabajando a todos los endpoints 
en conjunto, revisando, 

Dada la frase: “Frase inicial”, realizar una aplicación que contenga un servidor en express, 
el cual cuente con los siguientes métodos: 

GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada 
en la frase en la posición dada (considerar que la primera palabra es la #1).

POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al final de 
la frase. Devuelve un objeto que como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ 
la posición en que se agregó dicha palabra.

PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en 
la frase aquella hallada en la posición dada. Devuelve un objeto que como campo ‘actualizada’ contenga 
la nueva palabra, y en el campo ‘anterior’ la anterior.

DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada (considerar que 
la primera palabra tiene posición #1).
Utilizar POSTMAN para probar funcionalidad

*/

let frase = "Frase inicial";

app.get("/api/frase", (req, res) => {});

app.get("/api/palabras/:pos", (req, res) => {});

app.post("/api/palabras", (req, res) => {});

app.put("/api/palabras/:pos", (req, res) => {});

app.delete("/api/palabras/:pos", (req, res) => {});

module.exports = app;
